import './App.css';
import Controls from './components/Controls'
import Fan from './components/Fan'
import {useState} from 'react'

function App() {

  const [spinning, setspinning] = useState(false);
  const [enteredSpeed, setenteredSpeed] = useState(20);

  function startFanHandler() {
    setspinning(true)
  }

  function stopFanHandler() {
    setspinning(false);
  }

  function inputSpeedHandler(event) {
    setenteredSpeed(event.target.value);
    setspinning(true);
  }

  return (
    <div className="App">
      <h1 className='appheading'>Spin The Fan</h1>
      <div className='desc'>
        <h2 style={{textAlign: "center", fontWeight: "bolder", marginTop: "15px"}}>Description</h2>
        <p style={{textAlign: "center"}}>The Fan is all yours! Spin it to whichever speed you wish in the range 1 (slowest) to 
          10 (highest) by using the control buttons on the screen and watch the speed of the fan go rollercoster!
        </p>
      </div>
        <Controls onStartFan={startFanHandler} onStopFan={stopFanHandler} onInputSpeed={inputSpeedHandler} />
        <Fan spinning={spinning} enteredSpeed={enteredSpeed} />
    </div>
  );
}

export default App;
