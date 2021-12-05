import React from 'react'
import { useState } from 'react';
import AddRow from './AddRow';
import EditRow from './EditRow';
import './Home.css'
import TableRow from './Table'

function Home() {
    let [componentState, setcomponentState] = useState(false);
    let [addRowComponentState, setaddRowComponentState] = useState(false);
    const [rowContent, setrowContent] = useState(null);
    function editRow(componentState1, content) {
        setcomponentState((prevState) => componentState = !prevState)
        setrowContent(content)
    }
    function updateRow(componentState1, content) {
        setcomponentState((prevState) => componentState = !prevState)
    }
    function changeRowComponentState(){
        setaddRowComponentState((prevState)=> addRowComponentState=!prevState)
    }
    return (
        <div>
            {
                componentState === false && addRowComponentState === false && (
                    <TableRow heading={"Employee List "} editRow={editRow} componentState={componentState} rowContent={rowContent} changeRowComponentState={changeRowComponentState} />
                )
            }
            {
                componentState === true && addRowComponentState === false && (
                    <EditRow heading={"Edit Employee"} updateRow={updateRow} componentState={componentState} rowContent={rowContent} />
                )
            }
            {
                componentState === false && addRowComponentState === true && (
                    <AddRow heading={"Add Employee"} changeRowComponentState={changeRowComponentState}/>
                )
            }
        </div>
    )
}

export default Home
