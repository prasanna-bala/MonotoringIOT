import React, { useReducer, useState } from 'react'
import ReactDOM from 'react-dom';
import '../App.css'
import TestComponent from "../components/Moduledetails";
    const formReducer = (state, event) => {
        if (event.reset) {
          return {
            modulename: '',
            description: 0,
            type: '',
            timestart: 0,
            timeend: '',
            temprature: 0,
            status: false,
          }
        }
        return {
          ...state,
          [event.name]: event.value
        }
    }

function Module() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [module, setmodule] = useState(false);

  const handleSubmit = event => {
      event.preventDefault();
      setSubmitting(true);

      setTimeout(() => { 
        setSubmitting(false); 
        setFormData({reset: true})
      }, 3000);


      fetch(`http://localhost:5000/module`, {
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


    <div className="wrapper">
      <h1>Create Module </h1>
      {/* {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
        </div>
      } */}
      <form >
        <fieldset>
        <TestComponent />;
          <table className="tablemodule">
            <tr>
              <td className="left">  <label>Module Name:</label></td>
              <td className="right"> <input type="text" name="modulename" onChange={handleChange} value={formData.modulename || ''} /> </td>
            </tr>
            <tr>
              <td>  <label>Module Description:</label></td>
              <td> <input type="text" name="description" onChange={handleChange} value={formData.description || ''} /></td>
            </tr>

            <tr>
              <td>  <label>Module Type:</label></td>
              <td> <input type="text" name="type" onChange={handleChange} value={formData.type || ''} /></td>
            </tr>

            {/* <tr>
                <td>  <label>Module Temprature:</label></td>
                <td> <input type="number" name="temprature" onChange={handleChange}  value={formData.temprature || ''}/></td>
            </tr>

            <tr>
                <td>  <label>Module Schedule_timestart:</label></td>
                <td> <input type="time" name="timestart" onChange={handleChange}  value={formData.timestart || ''}/></td>
            </tr>

            <tr>
                <td>  <label>Module Schedule_timeend:</label></td>
                <td> <input type="time"  name="timeend" onChange={handleChange} value={formData.timeend || ''} /></td>
            </tr> */}

            <tr>
              <td>  <label>Module Status:</label></td>
              <td>  <input type="checkbox" name="modstatus" onChange={handleChange} checked={formData.modstatus || ''} />
              </td>
            </tr>

          </table>
        </fieldset>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>


  )

}
export default Module


