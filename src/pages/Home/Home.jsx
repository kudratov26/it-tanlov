import Hero from '../../components/pages/Home/Hero/Hero'
import ForWho from '../../components/pages/Home/ForWho/ForWho'
import Rate from '../../components/pages/Home/Rate/Rate'
import Carousel from '../../components/pages/Home/Carousel/Carousel'
import Navbar from '../../components/layouts/Navbar/Navbar'
import Footer from '../../components/layouts/Footer/Footer'

function Home() {
    return (
        <>
            <Navbar isParticipates={false} container={"container"} />
            <Hero />
            <ForWho />
            <Rate />
            <Carousel />
            <Footer />
        </>
    )
}

export default Home