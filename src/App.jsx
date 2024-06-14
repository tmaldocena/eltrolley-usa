import './App.css'
import Building from './assets/Building.jsx'

function App() {

  return (
    <div className="w-full h-screen flex lg:flex-row md:flex-row flex-col justify-evenly items-center text-white">
      <div className='flex flex-col justify-center lg:items-start md:items-start items-center'>
        <img src='./logo-trolley-usa1.png' alt='Trolley USA logo' className='w-32' />
        <h1 className="text-5xl my-4 lg:text-start md:text-start text-center">
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

