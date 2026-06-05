import { Navbar }    from './components/Navbar'
import { Banner }    from './components/Banner'
import { Skills }    from './components/Skills'
import { Projects }  from './components/Projects'
import { About }     from './components/About'
import { Contacts }  from './components/Contacts'
import { Footer }    from './components/Footer'

export function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Contacts />
      <Footer />
    </>
  )
}