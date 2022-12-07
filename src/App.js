import {fetchFromMyLiveWallPaper} from './main/fetch_query' 
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  var counter = 1
  const [vedioSrc, setSourc] = useState(fetchFromMyLiveWallPaper(2)); 
  useEffect(() => {
    const interval = setInterval(() => {
      counter+=1
      setSourc(fetchFromMyLiveWallPaper(counter));
    }, 40000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <video autoPlay loop muted id='bg-video'
      src={vedioSrc}
      />
    </div>
  );
}
export default App;
