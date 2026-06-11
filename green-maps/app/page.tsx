import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import Problem from '@/components/Problem/Problem'
import Ewaste from '@/components/Ewaste/Ewaste'
import Quiz from '@/components/Quiz/Quiz'
import Stats from '@/components/Stats/Stats'
import Benefits from '@/components/Benefits/Benefits'
import Cta from '@/components/Cta/Cta'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Ewaste />
      <Quiz />
      <Stats />
      <Benefits />
      <Cta />
      <Footer />
    </main>
  )
}
