
// example 1
/*
import './App.css'

const App = () => (
  <div>
    <p>Dobar dan React!</p>
  </div>
)

export default App
*/


// example 2
/*
import './App.css'

function App() {

  return (
    <div>
      <p>Dobar dan React!</p>
    </div>
  )
}

export default App
*/


// example 3
/*
import './App.css'

const App = () => {
  console.log("Pozdrav iz komponente")
  return (
    <div>
      <p>Dobar dan React!</p>
    </div>
  )
}

export default App
*/


// example 4
/*
import './App.css'

function App() {
  const datum = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Dobar dan React, danas je {datum.toString()}</p>
      <p className='izracun'>
        {a} plus {b} je {a + b}
      </p>
    </div>
  )
}

export default App
*/


// example 5
/*
import './App.css'

const App = () => {
  const datum = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Dobar dan React, danas je {datum.toString()}</p>
      <p>
        {a} plus {b} je {a + b}
      </p>
    </div>
  )
}

export default App
*/


// example 6 (JSX -> JS)
/*
import './App.css'

const App = () => {
  const datum = new Date()
  const a = 10
  const b = 20

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Dobar dan React, danas je ', datum.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' je ', a + b
    )
  )
}

export default App
*/


// example 7
/*
import './App.css'

function Primjer() {
  return(
    <div>
      <h1>Naslov komponente</h1>
      <p>Ovi elementi su na istoj razini</p>
      <p>pa koristimo div kao root element</p>
    </div>
  )
}

export default Primjer
*/


// example 8
/*
import './App.css'

function Primjer() {
  return(
    <>
      <h1>Naslov komponente</h1>
      <p>Ovi elementi su na istoj razini</p>
      <p>pa koristimo praznu oznaku kao root element</p>
    </>
  )
}

export default Primjer
*/


// example 9
/*
import './App.css'
import slika from'./slika.jpg'

function Primjer() {
  return(
    <>
      <img src={slika} alt='primjer-3' />
      <img src='https://t3.ftcdn.net/jpg/02/07/67/02/360_F_207670217_jouJWVeY1hY88G93VHae5cIhF42UNSUx.jpg' alt='primjer-4' />
    </>
  )
}

export default Primjer
*/

/*
// why these ways of inserting image don't work? 

<img src='./slika.jpg' alt='primjer-1' />
<img src={require('./slika.jpg')} alt='primjer-2' />
*/


// example 10
/*
import './App.css'
import Pozdrav1 from './components/Pozdrav1.jsx'

function FunkcijaPozdrav1 () {
  return (
    <>
      <Pozdrav1 />
    </>
  )
}

export default FunkcijaPozdrav1
*/


// example 11
/*
import './App.css'
import Pozdrav2 from './components/Pozdrav2.jsx'

function FunkcijaPozdrav2 () {
  return (
    <>
      <Pozdrav2 />
    </>
  )
}

export default FunkcijaPozdrav2
*/


// example 12
/*
import Pozdrav1 from './components/Pozdrav1.jsx'
import './App.css'

function App(){
  const datum = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Dobar dan React, danas je {datum.toString()}</p>
      <p className='izracun'>
        {a} plus {b} je {a + b}
      </p>
      <Pozdrav1 />
      <Pozdrav1 />
      <Pozdrav1 />
    </div>
  )
}

export default App
*/


// example 13
/*
import Pozdrav3 from './components/Pozdrav3.jsx' 
import './App.css'

function FunkcijaPozdrav3() {
  const osoba = "Ivan"
  return (
    <div>
      <Pozdrav3 ime="Matea" god={27} />
      <Pozdrav3 ime={osoba} god={10+18} />
    </div>
  )
}

export default FunkcijaPozdrav3
*/


// example 14
/*
import './App.css'
import Pozdrav4 from './components/Pozdrav4.jsx'

function App() {
  return (
    <div>
      <Pozdrav4>
        <p>Ovo je child element komponente.</p>
      </Pozdrav4>
    </div>
  )
}

export default App
*/


// example 15
/*
import './App.css'
import Pozdrav5 from './components/Pozdrav5.jsx'

function App(){
  return(
    <div>
      <Pozdrav5 ime="Ana" god={24} />
      <Pozdrav5 ime="Teo" god={30} /> 
    </div>
  )
}

export default App
*/


// example 16
/*
import './App.css'
import Pozdrav6 from './components/Pozdrav6.jsx'

function App() {
  return(
    <div>
      <Pozdrav6 ime="Ana" god={24} />
      <Pozdrav6 ime="Teo" god={30} />
    </div>
  )
}

export default App
*/
















