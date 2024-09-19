import React, { useState, useEffect } from 'react';
import styles from '../Navbar/Navbar.module.css';
import Hamburger from 'hamburger-react';

function Navbar({ isParticipates, container }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Lock scroll
        } else {
            document.body.style.overflow = ''; // Unlock scroll
        }
    }, [isOpen]);

    const hamHandler = (toggled) => {
        setIsOpen(toggled);
    };

    return (
        <>
            {isOpen && <div className={styles.dimmer}></div>}

            <nav className={`${isOpen ? styles.navDimmed : ''}`}>
                <div className={container}>
                    <div className={styles.navbar}>
                        <span className={styles.logo}>
                            <a href="https://www.it-tanlov.uz/">IT-Tanlov.uz</a>
                        </span>
                        <div className={styles.links}>
                            <a href="/">Bosh sahifa</a>
                            <a href="/videos">Ovoz berish</a>
                        </div>

                        {!isParticipates ? (
                            <a href="/submit">
                                <button className={`${styles.nav_btn} btn btn1`}>Ishtirok etish</button>
                            </a>
                        ) : (
                            <span className="hidden"></span>
                        )}

                        <div className={styles.ham_menu}>
                            <Hamburger
                                toggled={isOpen}
                                toggle={hamHandler}
                                direction="right"
                                color="#000"
                                duration={0.5}
                                size={24}
                            />
                        </div>
                    </div>

                </div>
            </nav>
            {/* Off-screen menu */}
            <div className={`${styles.off_screen} ${isOpen ? styles.show : ''}`}>
                <div className={styles.ham_menu_open}>

                    <Hamburger
                        toggled={isOpen}
                        toggle={hamHandler}
                        direction="right"
                        color="#000"
                        duration={0.5}
                        size={24}
                    />
                </div>
                <div className={styles.ham_links}>
                    <a href="https://www.it-tanlov.uz/">Bosh sahifa</a>
                    <a href="/videos">Ovoz berish</a>
                    <a href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__hxJuahUOVBIRzNHWFlWRUpONFlFNlRSQjRQWjEySy4u&route=shorturl"><button className='btn btn1'>Ishtirok etish</button></a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
