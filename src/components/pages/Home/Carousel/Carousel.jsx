import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import styles from './Carousel.module.css'
import { Navigation } from 'swiper/modules'
import arrow_left from '/icons/arrow_left.png'
import arrow_right from '/icons/arrow_right.png'
import rustam from '/imgs/rustam.png'
import shuxrat from '/imgs/shuxrat.png'
import sadullo from '/imgs/sadullo.png'

const Carousel = () => {
  const responsiveHandler = () => {
    const w = window.innerWidth;
    if (w > 1300) {
      return 3
    }
    else if (w > 1000 && w < 1300) {
      return 2
    }
    else {
      return 1
    }
  }
  return (
    <div className={styles.carousel_sec}>
      <div className={styles.text_area}>
        <h2 className='title'>Kimlar baholaydi?</h2>
        <p className='details'>Ovoz berish jarayonlaridan so‘ng, mediamahsulotlarni quyidagi professional <br /> hakamlar jamoasi baholashadi.</p>
      </div>
      <div className={styles.carousel}>
        <div className={styles.carouselWrap}>
          <Swiper
            spaceBetween={40}
            slidesPerView={responsiveHandler()}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
              clickable: true,
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div className={styles.carouselItem}>
                <p className={styles.carouselItemText}>
                  Ushbu tanlov yoshlar o‘rtasida IT‘ga bo‘lgan qiziqishni yanada orttirish va xalqimiz IT savodxonligini oshirishga yordam beradi degan umiddamiz.
                </p>
                <div className={styles.carouselItemUser}>
                  <span>
                    <img src={rustam} alt="" />
                  </span>
                  <h3 className={styles.name}>Rustam Karimjonov</h3>
                  <p className={styles.rank}>Raqamli texnologiyalar vazirining o'rinbosari</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.carouselItem} style={{ background: '#111928' }}>
                <p className={styles.carouselItemText} style={{ color: '#fff' }}>
                  "Kelajak ITniki" tanlovida ishtirok etish ortidan yoshlar o‘zlarida mavjud yaratuvchanlik qobiliyatlarini charxlab borishlari mumkin bo‘ladi
                </p>
                <div className={styles.carouselItemUser}>
                  <span>
                    <img src={shuxrat} alt="" />
                  </span>
                  <h3 className={styles.name} style={{ color: '#fff' }}>Shuxrat Sattorov</h3>
                  <p className={styles.rank} style={{ color: '#999' }}>Raqamli ta'limni rivojlantirish markazi direktori</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.carouselItem}>
                <p className={styles.carouselItemText}>
                  Men o‘quvchilar o‘rtasida bo‘ladigan tanlov jarayonlarida ishtirok etaman va adolatli baholash bo‘lishiga yordam beraman.
                </p>
                <div className={styles.carouselItemUser}>
                  <span>
                    <img src={sadullo} alt="" />
                  </span>
                  <h3 className={styles.name}>Sa'dullo Quronov</h3>
                  <p className={styles.rank}>Bolalar yozuvchisi</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.carouselItem}>
                <p className={styles.carouselItemText}>
                  Ushbu tanlov yoshlar o‘rtasida IT‘ga bo‘lgan qiziqishni yanada orttirish va xalqimiz IT savodxonligini oshirishga yordam beradi degan umiddamiz.
                </p>
                <div className={styles.carouselItemUser}>
                  <span>
                    <img src={rustam} alt="" />
                  </span>
                  <h3 className={styles.name}>Rustam Karimjonov</h3>
                  <p className={styles.rank}>Raqamli texnologiyalar vazirining o'rinbosari</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={styles.slider_controller}>
            <div className="slider-arrow">
              <img className='swiper-button-prev ' src={arrow_left} alt="" />
            </div>
            <div className="slider-arrow">
              <img className='swiper-button-next' src={arrow_right} alt="" />
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Carousel