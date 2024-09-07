import React from 'react'
import styles from '../Navbar/Navbar.module.css';

function Navbar({ isParticipates, container }) {
    return (
        <nav>
            <div className={container}>
                <div className={styles.navbar}>
                    <span className={styles.logo}><a href="/">IT-Tanlov.uz</a></span>
                    {!isParticipates ? <a href="/submit"><button className="btn btn1">Ishtirok etish</button></a> : <span className='hidden'>hid</span>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar