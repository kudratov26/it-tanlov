import React from 'react'
import styles from '../ForWho/ForWho.module.css'
import testemonial from '/imgs/testemonial.png'
import check from '/icons/check.png'

function ForWho() {
    return (
        <div className='container'>
            <div className={styles.forwho}>
                <div className={styles.left_side}>
                    <h2 className="title">Tanlov kimlar uchun?</h2>
                    <span className='directions details'>Ishtirokchilar IT ta’lim sohasidagi quyidagi yo‘nalishlarda video roliklar bilan tayyorlaydi:</span>
                    <ul className='details'>
                        <li>Maktab o‘quvchilari (12-17 yosh) <span>"IT insonlar hayotini yengillashtiradi"</span></li>
                        <p>O‘quvchilar mazkur yo‘nalishda texnologiya real muammolarni hal qilish yoki kundalik hayotni qanday o'zgartirishini ko'rsatib berishlari talab etiladi.</p>
                        <li>IT universitet talabalari (17-25 yosh) <span>"Hayotimni o‘zgartirgan onlayn platforma"</span></li>
                        <p>IT ta’lim olishga yordam bergan onlayn ta’lim platformalarining sohani o‘rganish, daromad topish va muvaffaqiyatli karyera boshlashdagi ahamiyatini taʼkidlaydi.</p>
                        <li>OAV xodimlari <span>"Jamiyat va texnologiya"</span></li>
                        <p>Aholi oʻrtasida raqamli savodxonlikni oshiruvchi hamda jamiyat muammolarini hal qilish, foydalanish imkoniyatini yaxshilash uchun texnologiyadan foydalanadigan loyihalar yoki gʻoyalarni oʻz ichiga olgan ITdan ijtimoiy manfaatlar uchun qanday foydalanish mumkinligini koʻrsatadigan videolar.</p>
                        <li>Blogerlar o‘rtasida <span>"Raqamli kreativ ijodkorlar"</span></li>
                        <p>IT sohasiga tegishli tushunchalar, sohadagi soʻnggi tendensiya va raqamlashtirish borasida aholiga yaratilayotgan imkoniyatlarni sodda, qiziqarli shu bilan birga kreativ uslubda taqdim etuvchi videolar.</p>
                    </ul>
                    <div className={styles.btns}>
                        <a href="/submit"><button className='btn btn2'>Ishtirok etish</button></a>
                        <a href="https://docs.google.com/document/d/1qECl0IqvfabVh4r-kQywZsYByGVaaI-7JaJIl-plkOM/edit?pli=1"><button className='btn btn_white'>Batafsil</button></a>
                    </div>
                    <div className={styles.pros}>
                        <div className={styles.pro}>
                            <img src={check} alt="" />
                            <span>Ishtirok etish uchun ro‘yxatdan o‘ting</span>
                        </div>
                        <div className={styles.pro}>
                            <img src={check} alt="" />
                            <span>Ochiq baholashda ovoz to‘plang</span>
                        </div>
                    </div>
                </div>
                <div className={styles.right_side}>
                    <img src={testemonial} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ForWho