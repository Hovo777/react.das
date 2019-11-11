import React from "react" ;

import styles from "./Nav.module.css";


class Nav extends React.Component {
    render() {
        return (
            <nav className = {styles.nav}>
                {
                    this.props.navList.map(navItem => {
                        return <div key={navItem.id} className={styles.nav_item}>{navItem.title}</div>
                    })
                }
            </nav>       
             )
    }
}

export default Nav;