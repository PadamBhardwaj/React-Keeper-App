import React from "react";
var thisDate = new Date();
var Year = thisDate.getFullYear();
function Footer() {

    return <footer>
        <p>copyright Padam {Year}</p>
    </footer>
}
export default Footer;