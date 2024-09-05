import React from 'react'
import styles from '../Hero/Hero.module.css';
import check_mark from '/icons/check_mark.svg';
import girl from '/imgs/girl.png';
import family from '/imgs/family.png';
import hero_img from '/imgs/hero-img.png';
import person1 from '/imgs/person1.png'
import person2 from '/imgs/person2.png'
import person3 from '/imgs/person3.png'


const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className='container'>
                <div className={styles.hero_section}>
                    <div className={styles.left_side}>
                        <div className={styles.subtitle}>
                            <img src={check_mark} alt="" className={styles.check_mark} />
                            <span>G‘oliblar munosib taqdirlanadi</span>
                        </div>
                        <div className="heading">
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <h1>“Kelajak ITniki”</h1>
                                    <span className={styles.girl}><img src={girl} alt="" /></span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span className={styles.family}><img src={family} alt="" /></span>
                                    <h1>videoroliklar</h1>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <h1>tanlovi</h1>
                                    <div className={styles.winners}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span className={styles.winner}><img src={person1} alt="" /></span>
                                            <span className={styles.winner}><img src={person2} alt="" /></span>
                                            <span className={styles.winner}><img src={person3} alt="" /></span>
                                        </div>
                                        <span>4 ta g'olib</span>
                                    </div>
                                </div>
                            </div>
                            {/* <h1>“Kelajak ITniki” <span className={styles.girl}><img src={girl} alt="" /> </span> <br />
                                <span className={styles.family}><img src={family} alt="" /></span> videoroliklar <br />
                                tanlovi
                                <div className={styles.winners}>
                                    <div className={styles.winner}><img src={person1} alt="" /></div>
                                    <div className={styles.winner}><img src={person2} alt="" /></div>
                                    <div className={styles.winner}><img src={person3} alt="" /></div>
                                    <span className={styles.count}>4 ta g'olib</span>
                                </div>
                            </h1> */}
                            <p className={`${styles.description} details`}>Yoshlar o‘rtasida IT ta’limni keng targ‘ib qilish maqsadida faol kontent mualliflar o‘rtasida "<span>Videoroliklar</span>" tanlovini e’lon qilamiz!</p>
                            <a href="/submit"><button className="btn btn2 btn3">Ishtirok etish</button></a>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <img src={hero_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero