//import './App.css';
import Navbar from "./components/Navbar"
import Cats from "./components/Cats"
import Gopher from "./components/Gopher"

function App(props) {
    return (
      <>
      <Navbar name='Elise'/>
      <div>
      <h1 className='text-center mt-4'>Project Portfolio</h1>
      <h3 className='text-center'>2022</h3>
      </div>

      <div>
      <Cats/>
      </div>

      <div className="mt-5">
      <Gopher/>
      </div>

      <div className="mt-5">
      <h2 className='text-center'>Address Book</h2>
      </div>
      
    
      </>
    )
}

export default App;
