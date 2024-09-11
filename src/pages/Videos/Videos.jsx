import React, { useEffect, useState } from 'react'
import Navbar from '../../components/layouts/Navbar/Navbar'
import Footer from '../../components/layouts/Footer/Footer'
import styles from './Videos.module.css'
import Modal from '../../components/layouts/Modal/Modal'

function Videos() {
    // const data = {
    //     user1: {
    //         id: 1,
    //         first_name: "Hello",
    //         last_name: "World",
    //         thumnail: "https://avatars.mds.yandex.net/i?id=6e447312edf9b4bdadcc7ee3a7ccc87c73aa412c-4478420-images-thumbs&n=13",
    //         video_link: "https://www.youtube.com/watch?v=7VLmLOiQ3ck",
    //         rating: 6
    //     },
    //     user2: {
    //         id: 2,
    //         first_name: "Black",
    //         last_name: "Hat",
    //         thumnail: "https://avatars.mds.yandex.net/i?id=8983d6cb45a77f606b4eb8e1412b6d22fa1af977-8391913-images-thumbs&n=13",
    //         video_link: "https://www.youtube.com/watch?v=8uiZC0l4Ajw",
    //         rating: 2
    //     },
    //     user3: {
    //         id: 3,
    //         first_name: "IT",
    //         last_name: "Master",
    //         thumnail: "https://avatars.mds.yandex.net/i?id=cc5f40db4e7163cd5961612944c7c5ac401d4fb8-4706965-images-thumbs&n=13",
    //         video_link: "https://www.youtube.com/watch?v=npzXQSL4oWo&list=PLYEESps429vqQ98y_zjyERFQR1cyvBNzA",
    //         rating: 9
    //     }
    // }

    const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const getPartners = async () => {
            try {
                const response = await fetch("http://195.2.84.169:2005/partners/", {
                    mode: "no-cors",
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json', },
                }
                )
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        };
        getPartners()
    })

    return (
        <>
            <Navbar isParticipates={true}
                container={"container_2"} />
            <div className={
                styles.videos
            }>
                <div className="container_2">
                    <h2 className="title">Videoroliklar tanlovi</h2>
                    <div className={styles.grid_box}>
                        {data && data.map((video) => (<div className={styles.video}>
                            <div className={styles.img_side}>
                                <a href={video.id.video_link} target='_blank'>
                                    <img src={video.id.thumnail} alt="" />
                                </a>
                            </div>
                            <div className={styles.description}>
                                <h3>{video.user1.id} -ishtirokchi</h3>
                                <div className={styles.details}>
                                    <h4> {video.user1.first_name} {video.user1.last_name}</h4>
                                    <span>Ovozlar soni: {video.user1.rating}</span>
                                </div>
                                <button className='btn btn2' onClick={openModal}>Ovoz berish</button>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen}
                onClose={closeModal}>
                <div className={
                    styles.modal_items
                }>
                    <label>Telefon raqamingizni kiriting</label>
                    <input className={
                        styles.inptm
                    }
                        type="tel"
                        placeholder='Raqamizni kiriting' />
                    <button className='btn btn2'>Yuborish</button>
                </div>
            </Modal>
            <Footer />
        </>
    )
}

export default Videos


// import React, {useState, useEffect} from 'react';
// import Navbar from '../../components/layouts/Navbar/Navbar';
// import Footer from '../../components/layouts/Footer/Footer';
// import styles from './Videos.module.css';
// import Modal from '../../components/layouts/Modal/Modal';

// function Videos() {
//     const [videos, setVideos] = useState([]);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedVideoId, setSelectedVideoId] = useState(null);
//     const [phoneNumber, setPhoneNumber] = useState('');

//     // Fetch videos data from API on component mount
//     useEffect(() => {
//         const fetchVideos = async () => {
//             try {
//                 const response = await fetch('http://195.2.84.169:2005/partner'); // Replace with your API URL
//                 const data = await response.json();
//                 setVideos(data);
//             } catch (error) {
//                 console.error('Error fetching videos:', error);
//             }
//         };

//         fetchVideos();
//     }, []);

//     const openModal = (videoId) => {
//         setSelectedVideoId(videoId);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedVideoId(null);
//     };

//     return (
//         <>
//             <Navbar isParticipates={true}
//                 container={"container_2"}/>
//             <div className={
//                 styles.videos
//             }>
//                 <div className="container_2">
//                     <h2 className="title">Videoroliklar tanlovi</h2>
//                     <div className={
//                         styles.grid_box
//                     }>
//                         {
//                         videos.map((video) => (
//                             <div key={
//                                     video.id
//                                 }
//                                 className={
//                                     styles.video
//                             }>
//                                 <div className={
//                                     styles.img_side
//                                 }>
//                                     <a href={
//                                             video.video_link
//                                         }
//                                         target='_blank'
//                                         rel='noopener noreferrer'>
//                                         <img src={
//                                                 video.thumbnail
//                                             }
//                                             alt={
//                                                 video.first_name
//                                             }/>
//                                     </a>
//                                 </div>
//                                 <div className={
//                                     styles.description
//                                 }>
//                                     <h3>{
//                                         video.id
//                                     }
//                                         - ishtirokchi</h3>
//                                     <div className={
//                                         styles.details
//                                     }>
//                                         <h4>{
//                                             video.first_name
//                                         }
//                                             {
//                                             video.last_name
//                                         }</h4>
//                                         <span>Ovozlar soni: {
//                                             video.rating
//                                         }</span>
//                                     </div>
//                                     <button className='btn btn2'
//                                         onClick={
//                                             () => openModal(video.id)
//                                     }>Ovoz berish</button>
//                                 </div>
//                             </div>
//                         ))
//                     } </div>
//                 </div>
//             </div>
//             <Modal isOpen={isModalOpen}
//                 onClose={closeModal}>
//                 <div className={
//                     styles.modal_items
//                 }>
//                     <label>Telefon raqamingizni kiriting</label>
//                     <input className={
//                             styles.inptm
//                         }
//                         type="tel"
//                         placeholder='Raqamizni kiriting'
//                         value={phoneNumber}
//                         onChange={
//                             (e) => setPhoneNumber(e.target.value)
//                         }/>
//                     <button className='btn btn2'
//                         onClick={handleVoteSubmit}>Yuborish</button>
//                 </div>
//             </Modal>
//             <Footer/>
//         </>
//     );
// }

// export default Videos;
