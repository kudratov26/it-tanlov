import React, { useEffect, useState } from 'react'
import Navbar from '../../components/layouts/Navbar/Navbar'
import Footer from '../../components/layouts/Footer/Footer'
import styles from './Videos.module.css'
import background from '/imgs/background.png'

function Videos() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const getPartners = async () => {
            try {
                const response = await fetch("https://grscan.uz/partners?limit=20", {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                const data = await response.json();

                if (data.StatusCode === 200 && data.Data && Array.isArray(data.Data.Partners)) {
                    setPartners(data.Data.Partners);
                } else {
                    console.error("Invalid data format or StatusCode");
                    setPartners([]);
                }
            } catch (error) {
                console.error("Error fetching partners:", error);
            }
        };
        getPartners();
    }, []);

    return (
        <>
            <Navbar container={"container"} />
            <div className={styles.videos}>
                <div className="container">
                    <div className={styles.text_area}>
                        <h2 className="title">Videoroliklar tanlovi</h2>
                        <p className={styles.attention}>Hurmatli foydalanuvchi barcha ishtirokchilar mediamahsulotlari bilan tanishib chiqib, ovoz berish tugmasini bosgan holda o‘zingiz loyiq deb bilgan ishtirokchiga ovoz bering!</p>
                    </div>
                    <div className={styles.grid_box}>
                        {partners.length > 0 ? (
                            partners.map((partner, index) => (
                                <div key={partner.id} className={styles.video}>
                                    <div className={styles.img_side}>
                                        <a href={partner.video_link} target='_blank' rel='noopener noreferrer'>
                                            <img src={background} alt={`${partner.id} -ishtirokchi`} />
                                        </a>
                                        <h3 className={styles.participant}>{index + 1} - ishtirokchi</h3>
                                    </div>
                                    <div className={styles.description}>
                                        <div className={styles.details}>
                                            <h4>{partner.full_name}</h4>
                                            <span>Ovozlar soni: {partner.score}</span>
                                        </div>
                                        <a href={`https://t.me/ittanlovuzbot?start=vote_${partner.id}`} target='_blank' rel='noopener noreferrer'>
                                            <button className='btn btn2'>
                                                Ovoz berish
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No partners available</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Videos;
