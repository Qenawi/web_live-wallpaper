import sample from './vedio/bg.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted id='bg-video'
      src={sample}
      />
    </div>
  );
}

export default App;
