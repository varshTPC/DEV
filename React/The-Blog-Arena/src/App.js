import './App.css';
import Postlist from './components/Postlist';
import MainHeader from './components/MainHeader';
import {useState} from 'react'

function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false)
  const [clickedPost, setclickedPost] = useState(false)

  function showModalHandler() {
    setmodalIsVisible(true)
  }

  function hideModalHandler() {
    setmodalIsVisible(false)
    setclickedPost(false)
  }

  function viewPostHandler(event) {
      console.log(event.target.value)
      setclickedPost(true)
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <Postlist modalIsVisible={modalIsVisible} onStopPosting ={hideModalHandler} onClickedPost={clickedPost} viewPost={viewPostHandler}/>
      </main>
    </>
  );
}

export default App;
