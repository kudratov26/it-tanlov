import React from 'react'
import styles from '../Navbar/Navbar.module.css';

function Navbar({isParticipates, container}) {
    return (
        <nav>
            <div className={container}>
                <div className={
                    styles.navbar
                }>
                    <span className={
                        styles.logo
                    }>
                        <a href="/">IT-Tanlov.uz</a>
                    </span>
                    <div className={
                        styles.links
                    }>
                        <a href="/">Bosh sahifa</a>
                        <a href="/videos">Ovoz berish</a>
                    </div>
                    {
                    !isParticipates ? <a href="/submit">
                        <button className="btn btn1">Ishtirok etish</button>
                    </a> : <span className='hidden'></span>
                } </div>
            </div>
        </nav>
    )
}

export default Navbar
