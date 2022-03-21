import React ,{useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import Modulelog from "./Modulelog";

const Moduledetails = ({ module, handleEditClick, handleDeleteClick }) => {
  const red = {background: 'red' };
  const green = { background: 'green' };
 

  return (
    <tr>
      <td>
      <Link to={`/Modulelog/${module.modulestateid}` }>{module.name}</Link>
      {/* <Link        path="/:id" children={<Modulelog />} 
     path="/Modulelog/:id"      element={<Modulelog    data={module.modulestateid} />}
      >{module.name}</Link> */}
      
      </td>


      <td>{module.description}</td>
      <td>{module.type }</td>
      <td  style={module.modstatus ? green : red }>{module.modstatus ? "Active" : "Disabled"}</td>
      <td>{module.schedule_timestart}</td>
      <td>{module.schedule_timeend}</td>
 
           
      <td  style={module.operating_condition ? green : red }>{module.operating_condition ? "Active" : "Disabled"}</td>
      <td>{module.operating_condition}</td>
      <td>{module.modulestateid}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, module)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(module.modulestateid)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Moduledetails;