import React from "react";

function Header(){
    let styles = {
        h1: {
            textDecoration: "underline",
            color: "blue",
        }
    }
    return(
        <>
        <h1 style = {styles.h1}>EMPLOYEE DIRECTORY</h1>
        </>
    )
}
export default Header;