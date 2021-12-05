import React from 'react'
import { AiOutlineForm } from "react-icons/ai"

function EditRowIcon({ editRow, componentState, content }) {
    return (
        <div>
            <AiOutlineForm onClick={() => { editRow(componentState,content) }} />
        </div>
    )
}

export default EditRowIcon
