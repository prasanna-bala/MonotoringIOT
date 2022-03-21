import React, {  Fragment } from "react";
 
const ModuleLogDetails = ( {moduleslo} ) => {
    const red = {background: 'red' };
    const green = { background: 'green' };
 
  return (
    
    <tr>
   
    <td>{moduleslo.modulestateid}</td>

    <td>{moduleslo.running_timestart}</td>
    <td>{moduleslo.running_timeend }</td>
    <td  style={moduleslo.status ? green : red }>{moduleslo.status ? "Active" : "Disabled"}</td>
    <td>{moduleslo.noofdata }</td>
  </tr>
);
}

export default ModuleLogDetails