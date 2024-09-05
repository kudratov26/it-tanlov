import React from 'react'
import styles from '../Navbar/Navbar.module.css';

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className={styles.navbar}>
                    <span className={styles.logo}>IT-Tanlov.uz</span>
                    <a href="/submit"><button className="btn btn1">Ishtirok etish</button></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar