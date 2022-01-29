//
//

import './App.css';

// import List from './List';

import imageReact from './react-logo.png';

function App() {
  return (
    <div className='app-container'>
      <div className='app-container1'>
        <img src={imageReact} alt='' />
        <h1>Fun facts about React</h1>
        {/* <List /> */}
        <ul className='app-list'>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps</li>
          <li>Including mobile apps</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
