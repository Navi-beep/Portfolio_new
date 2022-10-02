//import './App.css';
import Navbar from "./components/Navbar"
import Cats from "./components/Cats"

function App(props) {
    return (
      <>
      <Navbar name='Elise'/>
      <div>
      <h2 className='text-center'>Project Portfolio</h2>
      <h3 className='text-center'>2022</h3>
      </div>

      <div>

      <h2 className='text-center'>Cat-Tastic Fantastic App</h2>
      <Cats/>
      
      
      </div>

      <div>
      <h2 className='text-center'>Gopher Weather API</h2>
      </div>

      <div>
      <h2 className='text-center'>Address Book</h2>
      </div>
      
    
      </>
    )
}

export default App;
