import React, { useEffect, useContext } from "react";
import probContext from "./context/probContext";
import { useNavigate } from "react-router-dom";


const QuesList = () => {
  const context = useContext(probContext);
  const { getprobs, probs } = context;
  const navigate = useNavigate();

  const handleClick = (id)=>{
    localStorage.setItem("problem_id",id);
    console.log(localStorage.getItem('problem_id'));
    // navigate('./main');
  }

  useEffect(() => {
    getprobs();
    // eslint-disable-next-line
  }, []);


  return (
    <div className="container-fluid">
      <h1 className="text-center  text-light my-5">Problme List</h1>
      <table className="table table-dark table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">Sno.</th>
            <th scope="col">Title</th>
            <th scope="col">difficulty</th>
            <th scope="col">link</th>
          </tr>
        </thead>
        <tbody>
          {probs.map((note, index) => {
            return (
              <tr>
                <th scope="row">{index+1}</th>
                <td>{note.name}</td>
                <td>{note.difficulty}</td>
                <td>
                  <button onClick={handleClick(note._id)} class="btn btn-success">
                  solve
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
