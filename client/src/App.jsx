import React, { useState } from "react";

const App = () => {
  const [numStudents, setNumStudents] = useState(0);
  const [grades, setGrades] = useState([]);

  const handleNumStudentsChange = (e) => {
    const num = parseInt(e.target.value);
    setNumStudents(num);
    setGrades(
      new Array(num).fill().map(() => ({
        aspect1: "",
        aspect2: "",
        aspect3: "",
        aspect4: "",
      }))
    );
  };

  const handleGradeChange = (e, studentIndex, aspect) => {
    const updatedGrades = [...grades];
    updatedGrades[studentIndex][aspect] = e.target.value;
    setGrades(updatedGrades);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = {};

    for (let i = 0; i < numStudents; i++) {
      const student = `mahasiswa_${i + 1}`;
      for (let j = 1; j <= 4; j++) {
        const aspect = `aspek_penilaian_${j}`;
        if (!result[aspect]) {
          result[aspect] = {};
        }
        result[aspect][student] = grades[i][`aspect${j}`];
      }
    }

    console.log(result);
  };

  const renderStudentTable = () => {
    if (numStudents > 0) {
      return (
        <form onSubmit={handleSubmit}>
          <table className="table">
            <thead>
              <tr>
                <th>Mahasiswa</th>
                <th>Aspek penilaian 1</th>
                <th>Aspek penilaian 2</th>
                <th>Aspek penilaian 3</th>
                <th>Aspek penilaian 4</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((studentGrades, studentIndex) => (
                <tr key={studentIndex}>
                  <td>Mahasiswa {studentIndex + 1}</td>
                  <td>
                    <select
                      className="form-control"
                      value={studentGrades.aspect1}
                      onChange={(e) =>
                        handleGradeChange(e, studentIndex, "aspect1")
                      }
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (grade) => (
                          <option key={grade} value={grade}>
                            {grade}
                          </option>
                        )
                      )}
                    </select>
                  </td>
                  <td>
                    <select
                      className="form-control"
                      value={studentGrades.aspect2}
                      onChange={(e) =>
                        handleGradeChange(e, studentIndex, "aspect2")
                      }
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (grade) => (
                          <option key={grade} value={grade}>
                            {grade}
                          </option>
                        )
                      )}
                    </select>
                  </td>
                  <td>
                    <select
                      className="form-control"
                      value={studentGrades.aspect3}
                      onChange={(e) =>
                        handleGradeChange(e, studentIndex, "aspect3")
                      }
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (grade) => (
                          <option key={grade} value={grade}>
                            {grade}
                          </option>
                        )
                      )}
                    </select>
                  </td>
                  <td>
                    <select
                      className="form-control"
                      value={studentGrades.aspect4}
                      onChange={(e) =>
                        handleGradeChange(e, studentIndex, "aspect4")
                      }
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (grade) => (
                          <option key={grade} value={grade}>
                            {grade}
                          </option>
                        )
                      )}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      );
    } else {
      return <p>Mohon input jumlah mahasiswa.</p>;
    }
  };

  return (
    <div className="container">
      <h2>Aplikasi Penilaian Mahasiswa</h2>
      <label>Jumlah Mahasiswa:</label>
      <input
        type="number"
        min="0"
        value={numStudents}
        onChange={handleNumStudentsChange}
        className="form-control"
      />
      {renderStudentTable()}
    </div>
  );
};

export default App;
