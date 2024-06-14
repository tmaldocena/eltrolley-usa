import './App.css'
import Building from './assets/Building.jsx'

function App() {

  return (
    <div className="w-full h-screen flex flex-row justify-evenly items-center text-white">
      <div className='flex flex-col justify-center items-start'>
        <img src='./logo-trolley-usa1.png' alt='Trolley USA logo' className='w-32' />
        <h1 className="text-5xl my-4">
          We are <b className='text-[#C41F25]'>Almost</b> there!
        </h1>
        <p>Stay tuned for something amazing!!!</p>
      </div>
      <div>
        <Building/>
      </div>
    </div>


  )
}

export default App

