
import LOGO from '../images/LOGO.png';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <img src={LOGO} alt='Sharity logo'  width='378' height='378' />
	    <h1 className='welcome'>Welcome to Sharity!</h1>
    </div>
  )
}

export default Home;
