import React from 'react'
import styles from '../Navbar/Navbar.module.css';

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className={styles.navbar}>
                    <span className={styles.logo}>IT-Tanlov.uz</span>
                    <button className="btn btn1">Ishtirok etish</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar