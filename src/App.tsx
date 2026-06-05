import { Banner } from './components/Banner'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { About } from './components/About'

export function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <About />
    </>
  )
}