// components
import NavbarComponent from './components/NavbarComponent'
import CardComponent from './components/CardComponent'
// imgs
import rtanj from './assets/rtanj.jpg'
import trem from './assets/trem.jpg'
import velikiStrbac from './assets/veliki-strbac.jpg'
import babinZub from './assets/babin-zub.jpg'
// css
import './App.css'

function App() {

  return (
    <div>
      <NavbarComponent />
      <div className="wrapper">
        <CardComponent price="3000rsd" image={rtanj} title="Rtanj" />
        <CardComponent price="4000rsd" image={trem} title="Trem" />
        <CardComponent price="4500rsd" image={babinZub} title="Babin zub" />
        <CardComponent price="3000rsd" image={velikiStrbac} title="Veliki Štrbac" />
      </div>
    </div>
  )
}

export default App
