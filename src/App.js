import './App.css';
import './styles.css'
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import Conference from './Components/Conference';
import Footer from './Components/Footer';
import JoinFrom from './Components/JoinForm';

function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();
  // const [time,setTime]=useState(0)
  useEffect(()=>{
    // if(isConnected){
    //   let now =new Date()
    //   setTime(now.toLocaleString)
    // }
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  },[isConnected,hmsActions])
  // console.log(time)
  console.log(new Date().getTime())
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

