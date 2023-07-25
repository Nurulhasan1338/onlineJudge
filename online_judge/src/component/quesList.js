import React, { useEffect, useContext } from "react";
import probContext from "./context/probContext";
import { useNavigate} from "react-router-dom";

const QuesList = () => {
  const context = useContext(probContext);
  const { getprobs, probs } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('authtoken')){
      getprobs();
    }
    else{
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  const handleClick = (id) => {
    localStorage.setItem("problem_id", id);
    navigate("/main");
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center text-light my-5">Problem List</h1>
      <table className="table table-dark table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">Sno.</th>
            <th scope="col">Title</th>
            <th scope="col">Difficulty</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {probs.map((note, index) => {
            return (
              <tr> {/* Add a key prop for each row */}
                <th scope="row">{index + 1}</th>
                <td>{note.name}</td>
                <td>{note.difficulty}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleClick(note._id)} 
                  >
                    Solve
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default QuesList;