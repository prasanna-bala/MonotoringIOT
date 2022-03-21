import React, { useEffect, useState } from "react";
import { Link ,useParams} from "react-router-dom";

import "../../src/App.css";

const Modulelog = () => {
    const red = { background: 'red' };
    const green = { background: 'green' };

    const [modules, setModules] = useState([]);
    const [error, setError] = useState(null);
    const {id} = useParams();
   
    useEffect(() => {
     
        fetch(`http://localhost:5000/modulelog/${id}`)
        
            .then((res) => res.json())
            .then(
                (result) => {
                 
                    setModules(result);
                    console.log('test');
                    console.log({id}); 
                    console.log(result);
                    console.log('test');
                },

                (error) => setError(error),
            );
    }, []);

    return (

        <div className="app-container">
            <form >
                <label>Name</label> <br />
                <label>Description</label><br />
                <label>Type</label><br />
                <label>Module Status</label><br />
                <label>Schedule timestart</label><br />
                <label>Schedule timeend</label><br />
                <label>Operating condition</label><br />
                
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Module Status</th>
                            <th>Schedule timestart</th>
                            <th>Schedule timeend</th>
                            <th>Operating condition</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
            </table>
            </form>
        </div>

    );





}

export default Modulelog