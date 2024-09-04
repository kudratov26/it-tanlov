import React from 'react'
import styles from '../Footer/Footer.module.css'
import subfooter from '/imgs/subfooter.png'

function Footer() {
    return (
        <footer>
            <div className="container">
                <a className={styles.logo} href="it-tanlov.uz">IT-Tanlov.uz</a>
                <p className={styles.announcement}>Yoshlar o‘rtasida IT ta’limni keng targ‘ib qilishda faol kontent mualliflar o‘rtasida "Videoroliklar" tanlovini e’lon qilamiz!</p>
                <div className={styles.socials}>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div className={styles.rights}>
                    <span>"First MA" 2024.</span>
                    <span> <a href="it-tanlov.uz">Privacy Policy</a> | <a href="it-tanlov.uz">Terms&Conditions</a></span>
                </div>
            </div>
            <div className={styles.subfooter}>
                <div className={styles.right_side}>
                    <img src={subfooter} alt="" />
                </div>
                <div className={styles.left_side}>
                    <h2 className={styles.title}>Tanlov yangiliklaridan xabardor bo‘ling</h2>
                    <p>Elektron pochta manzilingizni kiriting va yangiliklarga obuna bo‘ling.</p>
                    <div className={styles.input_area}>
                        <input type="email" name="" id="" placeholder='example@gmail.com' />
                        <button className='btn btn2'>Obuna bo'lish</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer