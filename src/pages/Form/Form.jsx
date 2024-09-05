import React from 'react'
import style from './Form.module.css'

function Form() {
    return (
        <div>
            <h1>Videoroliklar tanlovida ishtirok eting</h1>
            <span>* Required</span>
            <p>Ma'lumotlaringizni to‘ldiring</p>
            <ul className={style.menu}>
                <li>Ismingiz *</li>
                <input type="text" />
                <li>Telefon raqamingiz *</li>1
                <input type="tel" />
                <li>E-mail *</li>
                <input type="email" />
            </ul>
        </div>
    )
}

export default Form