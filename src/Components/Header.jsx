import {
    selectIsConnectedToRoom,
    useHMSActions,
    useHMSStore
  } from "@100mslive/react-sdk";
  import React, { useEffect, useRef, useState } from "react";
  
  function Header() {
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const hmsActions = useHMSActions();
  //   const [count,setCount]=useState(0);
  //   const ref =useRef(null)
  //   useEffect(()=>{
  //     if(isConnected){
  //     ref.current= setInterval(()=>{
  //         setCount((curCount) =>curCount+1)
  //       },1000)
  //     }
  //     },[isConnected])
  // console.log(isConnected);
  // console.log(count);
    return (
      <header>
        {isConnected && (
          <button
            id="leave-btn"
            className="btn-danger"
            onClick={() => hmsActions.leave()}
          >
            Leave Room
          </button>
        )}
        {/* {
          isConnected && (
            <div>
              {count}
            </div>
          )
        } */}
      </header>
    );
  }
  
  export default Header;
  