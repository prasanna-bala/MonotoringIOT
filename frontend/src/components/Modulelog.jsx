import React, { useEffect, useState ,Fragment} from "react";
import { Link, useParams } from "react-router-dom";
import ModuleLogDetails from "./ModuleLogDetails";
import "../../src/App.css";
 
const Modulelog = () => {
    const red = { background: 'red' };
    const green = { background: 'green' };

    const [modules, setModules] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const [modulename, setModulename] = useState([]);
    const [moddesc,setModdesc] = useState([]);
    const [modstatus,setModstatus] = useState([]);
    const  modulestateid = 0;
    const [type, setType]  = useState([]);
    const [moduleslog,setModuleslog] = useState([]);
    
    useEffect(() => {
        
        fetch(`http://localhost:5000/module/${id}`)

            .then((res) => res.json())
            .then(
                (result) => {

                setModules(result);

                setModulename(result[0].name);
                setModdesc(result[0].description);
                setType(result[0].type);
                setModstatus(result[0].modstatus);
                const modulestateid = (result[0].modulestateid);
 
                },

                (error) => setError(error),
            );

           

            fetch(`http://localhost:5000/modulelog/${id}`,{
            method: "Get"} )

            .then((res) => res.json())
            .then(
            (result) => {

            setModuleslog(result);

            },

            (error) => setError(error),
            );

    }, []);
  
 
const [module, setModule] = useState(false);
const [modulelog, setModulelog] = useState(false);
 
  const handleLogStart = event => {
    const newlog={ modulestateid: +id ,
        noofdata: 1}

        fetch("http://localhost:5000/modulelog", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newlog),
            })
            .then((res) => res.json())
            .then((result) => {

            if (result.hasOwnProperty("code")) return;

            let arr = JSON.parse(JSON.stringify(modulelog));
            arr.unshift(result);
            setModule(arr);
        });

  }
const  handleSubmit = event => {
    const newlog={ modulestateid: +id ,
        noofdata: 1}

        fetch(`http://localhost:5000/modulelog/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newlog),
            })
            .then((res) => res.json())
            .then((result) => {

            if (result.hasOwnProperty("code")) return;

            let arr = JSON.parse(JSON.stringify(modulelog));
            arr.unshift(result);
            setModule(arr);
        });

  }
 
    return (
        <div>
          <form >
        <fieldset>
     
        <table className="tablemodule">
        <tbody>
       
            <tr>
              <td className="left">  <label>Module Name:</label></td>
              <td className="right"> <label>{modulename}</label> </td>
            </tr>
            <tr>
              <td>  <label>Module Description:</label></td>
              <td> {moddesc || ''} </td>
            </tr>

            <tr>
              <td>  <label>Module Type:</label></td>
              <td>  <label>{type} </label> </td>
            </tr>
 
            <tr>
              <td>  <label>Module Status:</label></td>
              <td>   <label>{modstatus} </label> </td>
              
            </tr>
       
        </tbody>
          </table>
          
          <button type="submit" onClick={handleLogStart}>Start</button>
        <button type="submit" onClick={handleSubmit}>Stop</button>  

          </fieldset>
          </form>
        <div className="app-container">
            <form >

            <div>  
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Running_timestart</th>
            <th>Running_timeend</th>
            <th> Status</th>
            <th>No of Data</th>
             
        </tr>
    </thead>
    <tbody>

            {moduleslog.map((moduleslo) => (
            <Fragment>
                 <ModuleLogDetails
                 moduleslo={moduleslo} ></ModuleLogDetails>
         
            </Fragment>
            ))}
    </tbody>
    
        </table>
    </div>
            </form>
        </div>
</div>
    );





}

export default Modulelog