import Banner from '../components/banner'
import Header from '../components/header/index'
import WhiteBanner from '../components/whiteBanner'
import Features from '../components/features'
import QualityApp from '../components/qualityApp'
import Review from '../components/review'
import Screen from '../components/screen'
import Plan from '../components/plan'
import Brand from '../components/brand'
import Footer from '../components/footer'
import About from '../components/about'

export default function Home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <WhiteBanner/>
      <Features/>
      {/* <QualityApp/> */}
      {/* <Review/> */}
      {/* <Screen/> */}
      {/* <Plan/> */}
      {/* <Brand/> */}
      <Footer/>
    </div>
  )
}
``