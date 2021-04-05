import React from 'react'
import {Link} from 'gatsby'
import * as styles from './navBar.module.css'

function NavBar() {
    return (
        
        <nav>
            <ul className={styles.navBar}>
                <li><Link to="/" > HOME PAGE</Link></li>
                <li><Link to="/about" > ABOUT</Link></li>
                <li><Link to="/contact"> CONTACT</Link></li>
                <li><Link to="/huffaz"> HUFFAZ KIRAAM SUCCESS STORIES</Link></li>
                <p>
                
                </p>

            </ul>
        </nav>
    )
}

export default NavBar
