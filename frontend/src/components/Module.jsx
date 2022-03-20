import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ModuleLog from './Modulelog'
export default function Module() {
 
  const red = {background: 'red' };
  const green = { background: 'green' };
  
  const [modules, setModules] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/module")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

          setModules(result);

        },

        (error) => setError(error),
      );
  }, []);


const changecolor = (dat) => e => {
  if( dat === true ) 
    { }
  
}

  return (
    
    
 

    <div className="tablemodule">
      <table className="">
        <thead>
          <tr>
            <th colSpan={100} className="borderBot">Modules </th>
          </tr>
          <tr>
            <th className="borderRight">
              <b>Module Name :</b>
            </th>
            <th className="borderRight">
              <b>Description :</b>
            </th>
            <th className="borderRight">
              <b>Type :</b>
            </th>
            <th className="borderRight">
              <b>Module Status :</b>
            </th>
           
          </tr>

        </thead>

        <tbody>

       

        { modules.map(
          (data,index) =>{ 
            return( 
            <tr key={data.moduleid}>
              <td className="borderRight">
             
              <NavLink to={`/modulelog/${data.moduleid}`} >
                <ModuleLog /> 
              </NavLink>{data.modulename}</td>

              <td className="borderRight">{data.description}</td>
              <td className="borderRight">{data.type}</td>
              <td className="borderRight">
              <button type="button" style={data.modstatus ? green : red }>{data.status} 
              {data.modstatus ? "Active" : "Disabled"}</button> 
             </td>

              <td className="borderRight">{data.moduleid}</td> 
              </tr>)
            })
          }
          
        </tbody>

      </table>

      
    </div>

  );


}