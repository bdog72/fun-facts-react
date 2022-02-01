//
//

import reactLogo from '../images/react-icon-small.png';

import '../css/Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav>
        <div className='navbar-container1 bozo1'>
          <img src={reactLogo} alt='react-logo' />
          <h2>ReactFacts</h2>
        </div>
        <div className='navbar-container2 bozo2'>
          <h3>React Course - Project 1</h3>
        </div>
      </nav>
    </>
  );
}
