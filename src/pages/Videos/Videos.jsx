import React, { useState } from 'react'
import Navbar from '../../components/layouts/Navbar/Navbar'
import Footer from '../../components/layouts/Footer/Footer'
import styles from './Videos.module.css'
import Modal from '../../components/layouts/Modal/Modal'

function Videos() {
    const data = {
        user1: {
            id: 1,
            first_name: "Hello",
            last_name: "World",
            thumnail: "https://avatars.mds.yandex.net/i?id=6e447312edf9b4bdadcc7ee3a7ccc87c73aa412c-4478420-images-thumbs&n=13",
            video_link: "https://www.youtube.com/watch?v=7VLmLOiQ3ck",
            rating: 6,
        },
        user2: {
            id: 2,
            first_name: "Black",
            last_name: "Hat",
            thumnail: "https://avatars.mds.yandex.net/i?id=8983d6cb45a77f606b4eb8e1412b6d22fa1af977-8391913-images-thumbs&n=13",
            video_link: "https://www.youtube.com/watch?v=8uiZC0l4Ajw",
            rating: 2,
        },
        user3: {
            id: 3,
            first_name: "IT",
            last_name: "Master",
            thumnail: "https://avatars.mds.yandex.net/i?id=cc5f40db4e7163cd5961612944c7c5ac401d4fb8-4706965-images-thumbs&n=13",
            video_link: "https://www.youtube.com/watch?v=npzXQSL4oWo&list=PLYEESps429vqQ98y_zjyERFQR1cyvBNzA",
            rating: 9,
        }
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Navbar isParticipates={true} container={"container_2"} />
            <div className={styles.videos}>
                <div className="container_2">
                    <h2 className="title">Videoroliklar tanlovi </h2>
                    <div className={styles.grid_box}>
                        <div className={styles.video}>
                            <div className={styles.img_side}>
                                <a href={data.user1.video_link} target='_blank'>
                                    <img src={data.user1.thumnail} alt="" />
                                </a>
                            </div>
                            <div className={styles.description}>
                                <h3>{data.user1.id} -ishtirokchi</h3>
                                <div className={styles.details}>
                                    <h4>{data.user1.first_name} {data.user1.last_name}</h4>
                                    <span>Ovozlar soni: {data.user1.rating}</span>
                                </div>
                                <button className='btn btn2' onClick={openModal}>Ovoz berish</button>
                            </div>
                        </div>
                        <div className={styles.video}>
                            <div className={styles.img_side}>
                                <a href={data.user2.video_link} target='_blank'>
                                    <img src={data.user2.thumnail} alt="" />
                                </a>
                            </div>
                            <div className={styles.description}>
                                <h3>{data.user2.id} -ishtirokchi</h3>
                                <div className={styles.details}>
                                    <h4>{data.user2.first_name} {data.user2.last_name}</h4>
                                    <span>Ovozlar soni: {data.user2.rating}</span>
                                </div>
                                <button className='btn btn2' onClick={openModal}>Ovoz berish</button>
                            </div>
                        </div>
                        <div className={styles.video}>
                            <div className={styles.img_side}>
                                <a href={data.user1.video_link} target='_blank'>
                                    <img src={data.user1.thumnail} alt="" />
                                </a>
                            </div>
                            <div className={styles.description}>
                                <h3>{data.user1.id} -ishtirokchi</h3>
                                <div className={styles.details}>
                                    <h4>{data.user1.first_name} {data.user1.last_name}</h4>
                                    <span>Ovozlar soni: {data.user1.rating}</span>
                                </div>
                                <button className='btn btn2' onClick={openModal}>Ovoz berish</button>
                            </div>
                        </div>
                        <div className={styles.video}>
                            <div className={styles.img_side}>
                                <a href={data.user2.video_link} target='_blank'>
                                    <img src={data.user2.thumnail} alt="" />
                                </a>
                            </div>
                            <div className={styles.description}>
                                <h3>{data.user2.id} -ishtirokchi</h3>
                                <div className={styles.details}>
                                    <h4>{data.user2.first_name} {data.user2.last_name}</h4>
                                    <span>Ovozlar soni: {data.user2.rating}</span>
                                </div>
                                <button className='btn btn2' onClick={openModal}>Ovoz berish</button>
                            </div>
                        </div>
                        <div className={styles.video}>
                            <div className={styles.img_side}>
                                <a href={data.user3.video_link} target='_blank'>
                                    <img src={data.user3.thumnail} alt="" />
                                </a>
                            </div>
                            <div className={styles.description}>
                                <h3>{data.user3.id} -ishtirokchi</h3>
                                <div className={styles.details}>
                                    <h4>{data.user3.first_name} {data.user3.last_name}</h4>
                                    <span>Ovozlar soni: {data.user3.rating}</span>
                                </div>
                                <button className='btn btn2' onClick={openModal}>Ovoz berish</button>
                            </div>
                        </div>
                        <div className={styles.video}>
                            <div className={styles.img_side}>
                                <a href={data.user1.video_link} target='_blank'>
                                    <img src={data.user1.thumnail} alt="" />
                                </a>
                            </div>
                            <div className={styles.description}>
                                <h3>{data.user1.id} -ishtirokchi</h3>
                                <div className={styles.details}>
                                    <h4>{data.user1.first_name} {data.user1.last_name}</h4>
                                    <span>Ovozlar soni: {data.user1.rating}</span>
                                </div>
                                <button className='btn btn2' onClick={openModal}>Ovoz berish</button>
                            </div>
                        </div>
                        <div className={styles.video}>
                            <div className={styles.img_side}>
                                <a href={data.user2.video_link} target='_blank'>
                                    <img src={data.user2.thumnail} alt="" />
                                </a>
                            </div>
                            <div className={styles.description}>
                                <h3>{data.user2.id} -ishtirokchi</h3>
                                <div className={styles.details}>
                                    <h4>{data.user2.first_name} {data.user2.last_name}</h4>
                                    <span>Ovozlar soni: {data.user2.rating}</span>
                                </div>
                                <button className='btn btn2' onClick={openModal}>Ovoz berish</button>
                            </div>
                        </div>
                        <div className={styles.video}>
                            <div className={styles.img_side}>
                                <a href={data.user3.video_link} target='_blank'>
                                    <img src={data.user3.thumnail} alt="" />
                                </a>
                            </div>
                            <div className={styles.description}>
                                <h3>{data.user3.id} -ishtirokchi</h3>
                                <div className={styles.details}>
                                    <h4>{data.user3.first_name} {data.user3.last_name}</h4>
                                    <span>Ovozlar soni: {data.user3.rating}</span>
                                </div>
                                <button className='btn btn2' onClick={openModal}>Ovoz berish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Modal isOpen={isModalOpen} onClose={closeModal} >
                <div className={styles.modal_items}>
                    <label>Telefon raqamingizni kiriting</label>
                    <input className={styles.inptm} type="tel" placeholder='Raqamizni kiriting' />
                    <button className='btn btn2'>Yuborish</button>
                </div>
            </Modal>
            <Footer />
        </>
    )
}

export default Videos