
import Hero from './components/Hero/Hero.tsx';
import Highlight from './components/Highlight/Highlight.tsx';
import Nav from './components/Nav/Nav.tsx';

const App =() => {
  return (
    <main className="bg-black">
      <Nav/>
      <Hero/>
     <Highlight/>
    </main>
  )
}

export default App
