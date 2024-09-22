import style from "./Form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Navbar from "../../components/layouts/Navbar/Navbar";

function Form() {
    const [formData, setFormData] = useState({
        full_name: "",
        phone: "",
        email: "",
        video_link: "",
    });

    const notify = (message, type = "success") => {
        if (type === "success") toast.success(message);
        else toast.error(message);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://grscan.uz/partner', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(formData)

            })
                .then(res => res.json())
            if (response.StatusCode == 201 || response.StatusCode == 200 || response.Description == "OK") {
                notify('Yuborildi!');
            } else {
                toast.error(response.Data);
            }
        } catch (error) {
            notify('Serverga ulanishda xato!', 'error');
        }
    };

    return (
        <>
            <div className="container">
                <Navbar isParticipates={true} />
            </div>
            <div className={style.wrap}>
                <div className="container">
                    <form onSubmit={handleSubmit} className={style.form}>
                        <h2 className={style.title}>
                            Videoroliklar tanlovida ishtirok eting
                        </h2>
                        <p style={{ fontSize: 14, margin: "15px 0" }}>
                            <span style={{ color: "red", marginRight: 3 }}>*</span>
                            Required
                        </p>
                        <h3 className={style.attention}>
                            Ma'lumotlaringizni to‘ldiring
                        </h3>
                        <label className={style.label}>
                            <p>
                                1. Ismingiz
                                <span style={{ color: "red", marginLeft: 3 }}>*</span>
                            </p>
                            <input
                                className={style.input}
                                type="text"
                                placeholder="Ismingizni kiriting"
                                name="full_name"
                                required
                                value={formData.full_name}
                                onChange={handleChange}
                            />
                        </label>
                        <label className={style.label}>
                            <p>
                                2. Telefon raqamingiz
                                <span style={{ color: "red", marginLeft: 3 }}>*</span>
                            </p>
                            <input
                                className={style.input}
                                type="tel"
                                placeholder="Telefon raqamingizni kiriting"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </label>
                        <label className={style.label}>
                            <p>
                                3. E-mail
                                <span style={{ color: "red", marginLeft: 3 }}>*</span>
                            </p>
                            <input
                                className={style.input}
                                type="email"
                                placeholder="E-mailingizni kiriting"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label className={style.label}>
                            <p>
                                4. Video manzilni kiriting
                                <span style={{ color: "red", marginLeft: 3 }}>*</span>
                            </p>
                            <input
                                className={style.input}
                                type="text"
                                placeholder="Video linkni kiriting"
                                name="video_link"
                                required
                                value={formData.video_link}
                                onChange={handleChange}
                            />
                        </label>

                        <button type="submit" className={style.button}>Yuborish</button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </>
    );
}

export default Form;
