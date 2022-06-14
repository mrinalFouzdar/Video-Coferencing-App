import { selectPeers, useHMSStore } from "@100mslive/react-sdk";
import Peer from "./Peer";

function Conference() {
  const peers = useHMSStore(selectPeers);
  // console.log(peers.joinedAt())
    
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
