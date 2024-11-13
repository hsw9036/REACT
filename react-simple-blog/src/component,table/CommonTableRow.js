import React from "react";

const CommonTableRow = ({children}) =>{
    return (
        <tr classname="common-table-row">
            {
                children
            }
        </tr>
    )
}

export default CommonTableRow;