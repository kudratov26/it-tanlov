// // import style from './Form.module.css'
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // function Form() {
// //     const notify = () => toast("Yuborildi!");
// //     return (
// //         <div className={style.wrap}>
// //             <div className='container'>
// //                 <div className={style.form}>
// //                     <h2 style={{ fontWeight: 'bold' }}>Videoroliklar tanlovida ishtirok eting</h2>
// //                     <p style={{ fontSize: 14, margin: '15px 0' }}>
// //                         <span style={{ color: 'red', marginRight: 3 }}>*</span>
// //                         Required
// //                     </p>
// //                     <h3 style={{ color: '#BA3B02', fontWeight: 'bold' }}>Ma'lumotlaringizni to‘ldiring</h3>
// //                     <label className={style.label}>
// //                         <p>
// //                             1. Ismingiz
// //                             <span style={{ color: 'red', marginLeft: 3 }}>*</span>
// //                         </p>
// //                         <input className={style.input} type="text" placeholder='Ismingizni kiriting' name="name" required />
// //                     </label>
// //                     <label className={style.label}>
// //                         <p>
// //                             2. Telefon raqamingiz
// //                             <span style={{ color: 'red', marginLeft: 3 }}>*</span>
// //                         </p>
// //                         <input className={style.input} type="tel" placeholder='Telefon raqamingizni kiriting' name="tel" required />
// //                     </label>
// //                     <label className={style.label}>
// //                         <p>
// //                             3. E-mail
// //                             <span style={{ color: 'red', marginLeft: 3 }}>*</span>
// //                         </p>
// //                         <input className={style.input} type="email" placeholder='E-mailingizni kiriting' name="email" required />
// //                     </label>
// //                     <label className={style.label}>
// //                         <p>
// //                             4. Video manzilni kiriting
// //                             <span style={{ color: 'red', marginLeft: 3 }}>*</span>
// //                         </p>
// //                         <input className={style.input} type="text" placeholder='Video linkni kiriting' name="link" required />
// //                     </label>

// //                     <button onClick={notify} className={style.button}>Yuborish</button>
// //                     <ToastContainer />
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Form


// import { useState } from 'react';
// import style from './Form.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Form() {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [email, setEmail] = useState('');
//     const [videoLink, setVideoLink] = useState('');

//     const notifySuccess = () => toast("Yuborildi!");
//     const notifyError = () => toast.error("Xatolik yuz berdi!");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = {
//             name: name,
//             phone: phone,
//             email: email,
//             videoLink: videoLink,
//         };

//         try {
//             const response = await fetch('http://grscan.uz/swagger/index.html/partner/post_partner', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });


//             if (response.ok) {
//                 notifySuccess();
//             } else {
//                 notifyError();
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             notifyError();
//         }
//     };

//     return (
//         <div className={style.wrap}>
//             <div className="container">
//                 <div className={style.form}>
//                     <h2 style={{ fontWeight: 'bold' }}>Videoroliklar tanlovida ishtirok eting</h2>
//                     <p style={{ fontSize: 14, margin: '15px 0' }}>
//                         <span style={{ color: 'red', marginRight: 3 }}>*</span>
//                         Required
//                     </p>
//                     <h3 style={{ color: '#BA3B02', fontWeight: 'bold' }}>Ma'lumotlaringizni to‘ldiring</h3>

//                     <form onSubmit={handleSubmit}>
//                         <label className={style.label}>
//                             <p>
//                                 1. Ismingiz
//                                 <span style={{ color: 'red', marginLeft: 3 }}>*</span>
//                             </p>
//                             <input
//                                 className={style.input}
//                                 type="text"
//                                 placeholder="Ismingizni kiriting"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                             />
//                         </label>
//                         <label className={style.label}>
//                             <p>
//                                 2. Telefon raqamingiz
//                                 <span style={{ color: 'red', marginLeft: 3 }}>*</span>
//                             </p>
//                             <input
//                                 className={style.input}
//                                 type="tel"
//                                 placeholder="Telefon raqamingizni kiriting"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 required
//                             />
//                         </label>
//                         <label className={style.label}>
//                             <p>
//                                 3. E-mail
//                                 <span style={{ color: 'red', marginLeft: 3 }}>*</span>
//                             </p>
//                             <input
//                                 className={style.input}
//                                 type="email"
//                                 placeholder="E-mailingizni kiriting"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </label>
//                         <label className={style.label}>
//                             <p>
//                                 4. Video manzilni kiriting
//                                 <span style={{ color: 'red', marginLeft: 3 }}>*</span>
//                             </p>
//                             <input
//                                 className={style.input}
//                                 type="text"
//                                 placeholder="Video linkni kiriting"
//                                 value={videoLink}
//                                 onChange={(e) => setVideoLink(e.target.value)}
//                                 required
//                             />
//                         </label>
//                         <button type="submit" className={style.button}>Yuborish</button>
//                     </form>

//                     <ToastContainer />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Form;



import style from './Form.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios'

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        tel: '',
        email: '',
        link: ''
    });

    const notify = (message, type = 'success') => {
        if (type === 'success') toast.success(message);
        else toast.error(message);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     const response = await fetch('http://195.2.84.169:2005/partner/', {
        //         mode: "no-cors",
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             email: formData.email,
        //             full_name: formData.name,
        //             phone: formData.tel,
        //             video_link: formData.link
        //         }),
        //     }).then(res => res.json())
        //         .then(res => console.log(res))
        //     // if (response.ok) {
        //     //     notify('Yuborildi!');
        //     // } else {
        //     //     console.log('Error Response:', data);
        //     //     notify('Xato yuz berdi!', 'error');
        //     // }
        // } catch (error) {
        //     console.error('Error:', error);
        //     notify('Serverga ulanishda xato!', 'error');
        // }


        try {
            const response = await axios.post('http://195.2.84.169:2005/partner/', JSON.stringify({
                email: formData.email,
                full_name: formData.name,
                phone: formData.tel,
                video_link: formData.link
            }), { headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }, mode: "no-cors" })
            console.log(response)
        } catch (error) { console.log(error) }
    }

    return (
        <div className={style.wrap}>
            <div className='container'>
                <form onSubmit={handleSubmit} className={style.form}>
                    <h2 style={{ fontWeight: 'bold' }}>Videoroliklar tanlovida ishtirok eting</h2>
                    <p style={{ fontSize: 14, margin: '15px 0' }}>
                        <span style={{ color: 'red', marginRight: 3 }}>*</span>
                        Required
                    </p>
                    <h3 style={{ color: '#BA3B02', fontWeight: 'bold' }}>Ma'lumotlaringizni to‘ldiring</h3>
                    <label className={style.label}>
                        <p>
                            1. Ismingiz
                            <span style={{ color: 'red', marginLeft: 3 }}>*</span>
                        </p>
                        <input
                            className={style.input}
                            type="text"
                            placeholder='Ismingizni kiriting'
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label className={style.label}>
                        <p>
                            2. Telefon raqamingiz
                            <span style={{ color: 'red', marginLeft: 3 }}>*</span>
                        </p>
                        <input
                            className={style.input}
                            type="tel"
                            placeholder='Telefon raqamingizni kiriting'
                            name="tel"
                            required
                            value={formData.tel}
                            onChange={handleChange}
                        />
                    </label>
                    <label className={style.label}>
                        <p>
                            3. E-mail
                            <span style={{ color: 'red', marginLeft: 3 }}>*</span>
                        </p>
                        <input
                            className={style.input}
                            type="email"
                            placeholder='E-mailingizni kiriting'
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label className={style.label}>
                        <p>
                            4. Video manzilni kiriting

                            Mangu-Host.uz Support, [9/7/24 6:13 PM]
                            <span style={{ color: 'red', marginLeft: 3 }}>*</span>
                        </p>
                        <input
                            className={style.input}
                            type="text"
                            placeholder='Video linkni kiriting'
                            name="link"
                            required
                            value={formData.link}
                            onChange={handleChange}
                        />
                    </label>

                    <button type="submit" className={style.button}>Yuborish</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
}

export default Form;