import React from 'react'
import { useState } from 'react'

function AddRow({ heading, changeRowComponentState }) {
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [emailId, setemailId] = useState()
    async function addNewRow(event) {
        event.preventDefault();
        const response = await fetch(`http://localhost:3000/api/v1/employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "firstname": firstname,
                "lastname": lastname,
                "emailId": emailId,
            })
        });
        if (response.status === 201) {
            alert("Employee Created Sucessfully")
            changeRowComponentState();
        }
        else {
            alert("Something went wrong")
        }

    }
    function goBack(event) {
        event.preventDefault();
        changeRowComponentState();
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
                            <th>Employee emailId</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="active-row">
                            <td><input id="name" type="text" placeholder="Employee first name" onChange={(e) => { setfirstname(e.target.value) }} ></input></td>
                            <td><input id="reps" type="text" min="1" placeholder="Number last name" onChange={(e) => { setlastname(e.target.value) }}></input></td>
                            <td><input id="weight" type="email" placeholder="example@eample.com" onChange={(e) => { setemailId(e.target.value) }}></input></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={(event) => addNewRow(event)}>Save</button>
            <button onClick={(event) => goBack(event)}>Back</button>
        </div>
    )
}

export default AddRow
