import React from 'react'
import { useEffect, useState } from 'react'
import './Table.css'
import DeleteRowIcon from './DeleteRowIcon'
import EditRowIcon from './EditRowIcon'

function TableRow({ heading ,editRow, componentState, rowContent, changeRowComponentState }) {
    const [tableRowContent, settableRowContent] = useState();
    async function getData() {
        let response = await fetch('http://localhost:3000/api/v1/employees', { mode: 'cors' })
        const res = await response.json()
        if (response.status === 200) {
            settableRowContent(res)
        }

    }
    async function deleteRow(content) {
        const response = await fetch(`http://localhost:3000/api/v1/employee/${content._id}`, {
            method: 'DELETE',
        })
        if (response.status === 204) {
            let newtableRowContent = tableRowContent.filter((Arraycontent) => Arraycontent._id !== content._id)
            settableRowContent(newtableRowContent)
            console.log(newtableRowContent)
        }
    }
    function displayAddExercise(event){
        event.preventDefault();
        changeRowComponentState();
    }
    useEffect(() => {

        getData()

    }, [])
    return (
        <div className="tableDiv">
            <h2>{heading}</h2>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableRowContent && tableRowContent.map((content) => (
                            <tr className="active-row">
                                <td>{content.firstname}</td>
                                <td>{content.lastname}</td>
                                <td>{content.emailId}</td>
                                <td><DeleteRowIcon deleteRow={deleteRow} content={content} /></td>
                                <td><EditRowIcon editRow={editRow} componentState={componentState} content={content} rowContent={rowContent} /></td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
            <a href="./AddRow"><button onClick={(event)=>displayAddExercise(event)}>Add Employee</button></a>
        </div>
    )
}

export default TableRow
