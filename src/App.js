import './App.css';
import './styles.css'
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import Header from './Components/Header';
import { useEffect } from 'react';
import Conference from './Components/Conference';
import Footer from './Components/Footer';
import JoinFrom from './Components/JoinForm';

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();
  useEffect(()=>{
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  },[isConnected,hmsActions])
  return (
    <div className="App">
     <Header/>
     {
      isConnected ? (
        <>
        <Conference/>
        <Footer/>
        </>
      ):(
        <>
        <JoinFrom/>
        </>
      )
     }
    </div>
  );
}

export default App;

