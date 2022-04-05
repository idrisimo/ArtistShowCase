import React, {useState} from 'react';
import logo from './logo.svg';
import artistImage from './Hiroyuki_Sawano.jpg'
import { Header } from './layout';
import './App.css';

function App() {
  const [artistName, setArtistName] = useState("test")
  const [artistIntro, setArtistIntro] = useState("test")

  const displayAlbums = (event) => {
    // event.stopPropagation() //TODO Figure out what exactly this does
    console.log('click')
  }
  const displayFacts = (event) => {
    // event.stopPropagation() //TODO Figure out what exactly this does
    console.log('click')
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <main>
        <section>
        <img src={artistImage} className="ArtistProfileImage" alt='image of artist'>
        </img>
        <h1 aria-label='artistName' id='artistName'>{artistName}</h1>
        <h2 aria-label='introText' id='introText'>{artistName}</h2>
        <button onClick={displayAlbums}>Albums</button>
        <button onClick={displayFacts}>Facts</button>
        </section>
        <section id='albumsSection'>

        </section>
        <section id='factsSection'>

        </section>
      </main>
    </div>
  );
}

export default App;
