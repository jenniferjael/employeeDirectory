import React from "react";

function Container(){
    let styles = {
        h1: {
            textDecoration: "underline",
            color: "blue",
        },
        h2:{
            color: "green"
        }
    }
    return(
        <>
        <h1 style = {styles.h1}>search input goes here</h1>
        <h2 style = {styles.h2}>EMPLOYEE components go here too</h2>
        </>
    )
}
export default Container;