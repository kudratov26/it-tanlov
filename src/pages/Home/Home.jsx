import Hero from '../../components/pages/Home/Hero/Hero'
import ForWho from '../../components/pages/Home/ForWho/ForWho'
import Rate from '../../components/pages/Home/Rate/Rate'
import Carousel from '../../components/pages/Home/Carousel/Carousel'

function Home() {
    return (
        <div>
            <Hero />
            <ForWho />
            <Rate />
            <Carousel />
        </div>
    )
}

export default Home