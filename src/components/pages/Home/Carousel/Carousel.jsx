import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import styles from './Carousel.module.css'

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrap}>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className={styles.carouselItem}>
              <p className={styles.carouselItemText}>
                Ushbu tanlov yoshlar o‘rtasida IT‘ga bo‘lgan qiziqishni yanada orttirish va xalqimiz IT savodxonligini oshirishga yordam beradi degan umiddamiz.
              </p>
              <div className={styles.carouselItemUser}>
                <span>
                  <img src="https://picsum.photos/100/100" alt="" />
                </span>
                <h3>Rustam Karimjonov</h3>
                <p>Raqamli texnologiyalar vazirining o'rinbosari</p>
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
                  <img src="https://picsum.photos/100/100" alt="" />
                </span>
                <h3>Rustam Karimjonov</h3>
                <p>Raqamli texnologiyalar vazirining o'rinbosari</p>
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
                  <img src="https://picsum.photos/100/100" alt="" />
                </span>
                <h3>Rustam Karimjonov</h3>
                <p>Raqamli texnologiyalar vazirining o'rinbosari</p>
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
                  <img src="https://picsum.photos/100/100" alt="" />
                </span>
                <h3>Rustam Karimjonov</h3>
                <p>Raqamli texnologiyalar vazirining o'rinbosari</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Carousel