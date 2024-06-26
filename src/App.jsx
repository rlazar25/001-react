import NavbarComponent from './components/NavbarComponent'
import CardComponent from './components/CardComponent'
import rtanj from './assets/rtanj.jpg'
import trem from './assets/trem.jpg'
import velikiStrbac from './assets/veliki-strbac.jpg'
import babinZub from './assets/babin-zub.jpg'

import './App.css'

function App() {

  return (
    <div >
      <NavbarComponent />
      <div className="wrapper">
        <CardComponent image={rtanj} title="Rtanj" />
        <CardComponent image={trem} title="Trem" />
        <CardComponent image={babinZub} title="Babin zub" />
        <CardComponent image={velikiStrbac} title="Veliki Štrbac" />
      </div>
    </div>
  )
}

export default App
