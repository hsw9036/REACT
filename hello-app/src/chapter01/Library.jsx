import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="처음 만난 파이썬" numOfpage={300} />
            <Book name="처음 만난 node.js" numOfpage={400} />
            <Book name="처음 만난 Java" numOfpage={500} />
        </div>
    )
}

export default Library;