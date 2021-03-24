import Banner from '../components/banner'
import Header from '../components/header/index'
import WhiteBanner from '../components/whiteBanner'
import Features from '../components/features'
import Footer from '../components/footer'
import About from '../components/about'
import Screen from '../components/screen'
import Video from '../components/video'
import SendMassage from '../components/sendMassage'
import SEO from '../components/seo'
export default function Home() {
  return (
    <div>
      <SEO />
      <Header />
      <Banner />
      <About />
      <WhiteBanner />
      <Features />
      <Screen />
      <Video />
      <SendMassage />
      <Footer />
    </div>
  )
}
;``
