import style from './Form.module.css'

function Form() {
    return (
        <div className={style.wrap}>
            <div className='container'>
                <form className={style.form}>
                    <h2 style={{fontWeight: 'bold'}}>Videoroliklar tanlovida ishtirok eting</h2>
                    <p style={{fontSize: 14, margin: '15px 0'}}>
                        <span style={{color: 'red', marginRight: 3}}>*</span>
                        Required
                    </p>
                    <h3 style={{color: '#BA3B02', fontWeight: 'bold'}}>Ma'lumotlaringizni to‘ldiring</h3>
                    <label className={style.label}>
                        <p>
                            1. Ismingiz 
                            <span style={{color: 'red', marginLeft: 3}}>*</span>
                        </p>
                        <input className={style.input} type="text" placeholder='Enter your name' name="name"/>
                    </label>
                    <label className={style.label}>
                        <p>
                            2. Telefon raqamingiz
                            <span style={{color: 'red', marginLeft: 3}}>*</span>
                        </p>
                        <input className={style.input} type="text" placeholder='Enter your name' name="name"/>
                    </label>
                    <label className={style.label}>
                        <p>
                            3. E-mail
                            <span style={{color: 'red', marginLeft: 3}}>*</span>
                        </p>
                        <input className={style.input} type="text" placeholder='Enter your name' name="name"/>
                    </label>
                    <button className={style.button}>Next</button>
                    <p style={{fontSize: 12, marginTop: 20}}>
                        Never give out your password.
                        <a href="#" style={{textDecoration: 'underline', marginLeft: 3}}>Report abuse</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Form