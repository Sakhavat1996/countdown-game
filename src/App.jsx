import Header from './components/Header.jsx';
import Player from './components/Player.jsx';
import TableChallenge from './components/TableChallenge.jsx';

function App() {
  return (
    <>
      <Header/>
      <Player />
      <div id="challenges">
        <TableChallenge title="Asan" targetTime={1}/>
        <TableChallenge title="Orta" targetTime={3}/>
        <TableChallenge title="Çətin" targetTime={7}/>
        <TableChallenge title="SuperStart" targetTime={10}/>
      </div>
    </>
  );
}

export default App;
