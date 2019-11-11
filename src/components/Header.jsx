import React from "react" ;

import styles from "./Header.module.css";

import Nav from "./Nav";

class Header extends React.Component {
    render() {
        this.navBar = [
            {
                id:1,
                title: "home"
            },
            {
                id:2,
                title: "product"

            },
            {
                id:3,
                title: "user"

            },
            {
                id:4,
                title: "contact"

            },
        ]
        return(
            <header className = {styles.header}>
                <div>
                    <h1>logo</h1>

                </div>
                <Nav navList={this.navBar}/>
            </header>
            
            

        )
    }
}

export default Header;