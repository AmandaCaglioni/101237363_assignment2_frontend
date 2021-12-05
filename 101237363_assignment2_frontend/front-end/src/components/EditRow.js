import React from 'react'
import { useState } from 'react'

function EditRow({ heading, updateRow, componentState, rowContent }) {
    const [firstname, setfirstname] = useState(rowContent.firstname)
    const [lastname, setlastname] = useState(rowContent.lastname)
    const [emailId, setemailId] = useState(rowContent.emailId)
    async function saveEditRow(event) {
        event.preventDefault();
        const response = await fetch(`http://localhost:3000/api/v1/employee/${rowContent._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "firstname": firstname,
                "lastname": lastname,
                "emailId": emailId
            })
        });
        if (response.status === 200) {
            console.log(response)
            alert("Employee Updated Sucessfully")
            updateRow(componentState, rowContent)
        }
        else {
            alert("Something went wrong")
        }

    }
    function goBack(event) {
        event.preventDefault();
        updateRow();
    }
    return (
        <div>
            <div className="tableDiv">
                <h2>{heading}</h2>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="active-row">
                            <td><input id="name" type="text" defaultValue={rowContent.firstname} onChange={(e) => { setfirstname(e.target.value) }} ></input></td>
                            <td><input id="reps" type="text" defaultValue={rowContent.lastname} onChange={(e) => { setlastname(e.target.value) }}></input></td>
                            <td><input id="weight" type="email" defaultValue={rowContent.emailId} onChange={(e) => { setemailId(e.target.value) }}></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={(event) => saveEditRow(event)}>Save</button>
            <button onClick={(event) => goBack(event)}>Back</button>
        </div>
    )
}

export default EditRow
