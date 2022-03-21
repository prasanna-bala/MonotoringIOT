import React, { useState, Fragment ,useEffect} from "react";
import { nanoid } from "nanoid";
// import "./App.css";
// import data from "./mock-data.json";
import Moduledetails from "./Moduledetails";
import EditModule from "./EditModule";

const Module = () => {
    const [modules, setModules] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/module")
          .then((res) => res.json())
          .then(
            (result) => {
            //  console.log(result);
    
              setModules(result);
    
            },
    
            (error) => setError(error),
          );
      }, []);

      


    // const [addFormData, setAddFormData] = useState({
    //     fullName: "",
    //     address: "",
    //     phoneNumber: "",
    //     email: "",
    // });

    // const [editFormData, setEditFormData] = useState({
    //     fullName: "",
    //     address: "",
    //     phoneNumber: "",
    //     email: "",
    // });

    // const [editContactId, setEditContactId] = useState(null);

    // const handleAddFormChange = (event) => {
    //     event.preventDefault();

    //     const fieldName = event.target.getAttribute("name");
    //     const fieldValue = event.target.value;

    //     const newFormData = { ...addFormData };
    //     newFormData[fieldName] = fieldValue;

    //     setAddFormData(newFormData);
    // };

    // const handleEditFormChange = (event) => {
    //     event.preventDefault();

    //     const fieldName = event.target.getAttribute("name");
    //     const fieldValue = event.target.value;

    //     const newFormData = { ...editFormData };
    //     newFormData[fieldName] = fieldValue;

    //     setEditFormData(newFormData);
    // };

    // const handleAddFormSubmit = (event) => {
    //     event.preventDefault();

    //     const newContact = {
    //         id: nanoid(),
    //         fullName: addFormData.fullName,
    //         address: addFormData.address,
    //         phoneNumber: addFormData.phoneNumber,
    //         email: addFormData.email,
    //     };

    //     const newContacts = [...contacts, newContact];
    //     setContacts(newContacts);
    // };

    // const handleEditFormSubmit = (event) => {
    //     event.preventDefault();

    //     const editedContact = {
    //         id: editContactId,
    //         fullName: editFormData.fullName,
    //         address: editFormData.address,
    //         phoneNumber: editFormData.phoneNumber,
    //         email: editFormData.email,
    //     };

    //     const newContacts = [...contacts];

    //     const index = contacts.findIndex((contact) => contact.id === editContactId);

    //     newContacts[index] = editedContact;

    //     setContacts(newContacts);
    //     setEditContactId(null);
    // };

    // const handleEditClick = (event, contact) => {
    //     event.preventDefault();
    //     setEditContactId(contact.id);

    //     const formValues = {
    //         fullName: contact.fullName,
    //         address: contact.address,
    //         phoneNumber: contact.phoneNumber,
    //         email: contact.email,
    //     };

    //     setEditFormData(formValues);
    // };

    // const handleCancelClick = () => {
    //     setEditContactId(null);
    // };

    // const handleDeleteClick = (contactId) => {
    //     const newContacts = [...contacts];

    //     const index = contacts.findIndex((contact) => contact.id === contactId);

    //     newContacts.splice(index, 1);

    //     setContacts(newContacts);
    // };

    return (
        <div className="app-container">
            <form >
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Module Status</th>
                            <th>Schedule timestart</th>
                            <th>Schedule timeend</th>
                            <td>Operating condition</td>
                        </tr>
                    </thead>
                    <tbody>
                        {modules.map((module) => (
                            <Fragment>
                            <Moduledetails
                                        module={module} ></Moduledetails>
                                {/* {
                                    editContactId === module.modulestateid ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : 
                                (
                                    <Moduledetails
                                        module={module}
                                         handleEditClick={handleEditClick}
                                         handleDeleteClick={handleDeleteClick}
                                    />
                                )} */}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>

            {/* <h2>Add a Contact</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="fullName"
                    required="required"
                    placeholder="Enter a name..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="address"
                    required="required"
                    placeholder="Enter an addres..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phone number..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    onChange={handleAddFormChange}
                />
                <button type="submit">Add</button>
            </form> */}
        </div>
    );
};

export default Module;