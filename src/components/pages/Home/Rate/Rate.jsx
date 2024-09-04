import React from 'react'
import styles from '../Rate/Rate.module.css'
function Rate() {
    return (
        <div className={styles.rate}>
            <h2 className='title'>Qanday baholanadi?</h2>
            <div className={`details ${styles.guide}`}>
                <span>Tanlov 2 bosqichda baholanadi.</span>
                <p>1- bosqichda ishtirokchilar tomonidan joylangan media materiallar ochiq ovozga qo’yiladi.</p>
                <p>2-bosqichda eng ko‘p ovoz to‘plangan ishlar hay’at a’zolari tomonidan quyidagi mezonlar asosida baholandi:</p>
                <p>• Video kontent belgilangan mavzuga mos kelishi</p>
                <p>• Ijodkorlik va kreativlik</p>
                <p>• Video kontent orqali mavzuni aniq va tushunarli yoritib berilganligi</p>
                <p>• Texnik talablarga mosligi</p>
            </div>
        </div>
    )
}

export default Rate