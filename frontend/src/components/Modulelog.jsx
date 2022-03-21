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
    const [modulestateid,setModulestateid] = useState([]);
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
                    setModulestateid(result[0].modulestateid);
                 
                    console.log(modulestateid);
                },

                (error) => setError(error),
            );

            fetch(`http://localhost:5000/modulelog/${modulestateid}`)

            .then((res) => res.json())
            .then(
                (result) => {

                    setModuleslog(result);
                     
                    //console.log(modulestateid);
                    // console.log(result);
                },

                (error) => setError(error),
            );

    }, []);
 


const [formData, setFormData] =  useState([modulestateid]);
const [submitting, setSubmitting] = useState(false);
const [module, setmodule] = useState(false);
 

  const handleLogStart = event => {
      event.preventDefault();
      
      setSubmitting(true);

      setTimeout(() => { 
        setSubmitting(false); 
        setFormData({reset: true})
      }, 3000);


      fetch(`http://localhost:5000/modulelog`, {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
      })
      .then((res) => res.json())
      .then((result) => {

      if (result.hasOwnProperty("code")) return;

      let arr = JSON.parse(JSON.stringify(module));
      arr.unshift(result);
      setmodule(arr);
      });

  }

  const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,

      value: isCheckbox ? event.target.checked : event.target.value.toString(),
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
              <td className="right"> <input type="text" name="modulename" onChange={handleChange} value={modulename}/> </td>
            </tr>
            <tr>
              <td>  <label>Module Description:</label></td>
              <td> <input type="text" name="description" onChange={handleChange} value={moddesc || ''} /></td>
            </tr>

            <tr>
              <td>  <label>Module Type:</label></td>
              <td> <input type="text" name="type" onChange={handleChange} value={type || ''} /></td>
            </tr>
 
            <tr>
              <td>  <label>Module Status:</label></td>
              <td>  <input type="checkbox" name="modstatus" onChange={handleChange} checked={modstatus || ''} />
              </td>
            </tr>
       
        </tbody>
          </table>
          
          <button type="submit" onClick={handleLogStart(module.modulestateid)}>Start</button>
          {/* <button type="submit" onClick={handleSubmit}>Stop</button> */}

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