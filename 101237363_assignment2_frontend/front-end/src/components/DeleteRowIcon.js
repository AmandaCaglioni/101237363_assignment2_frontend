import React from 'react'
import { AiFillDelete } from "react-icons/ai";

function DeleteRowIcon({ deleteRow, content }) {
    return (
        <div>
            <AiFillDelete onClick={() => { deleteRow(content) }} />
        </div>
    )
}

export default DeleteRowIcon
