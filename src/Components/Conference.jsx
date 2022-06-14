import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import { useEffect } from "react";
import Peer from "./Peer";

function Conference() {
  const peers = useHMSStore(selectPeers);
  useEffect(()=>{
    let time = Date.now()
    return ()=>{
      let total_time = Date.now()-time
      const seconds = (total_time / 1000);
      const minutes = (seconds / 60).toFixed(2);
      if(minutes> 0.02){
        alert(`Total Time 🕛: ${minutes} Minutes `)

      }
    }
  },[])
    
  return (
    <div className="conference-section">
      <h2>Metting</h2>
      <div className="peers-container">
        {peers.map((peer) => (
          <Peer key={peer.id} peer={peer} />
        ))}
      </div>
    </div>
  );
}

export default Conference;
