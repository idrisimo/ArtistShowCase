import React, { useState } from 'react';
import logo from './logo.svg';
import artistImage from './Hiroyuki_Sawano.jpg'
import { Header } from './layout';

import './App.css';

function App() {
  const [artists, setArtistName] = useState([{ id: 1, artistName: 'Hiroyuki Sawano', artistIntro: 'Sawano drops to victory', artistImage: './Hiroyuki_Sawano.jpg', albums: ["A", "B", "C"], facts: ['Some say he created a drop so hard it caused the big bang'] }])

  // const [chosenArtist, setChosenArtist] = useState()

  // const handleArtistSelecction = (artistId) => {
  //   const chosenArtist = artists.find(art => art.id === artistId || 1)
  //   setChosenArtist(chosenArtist)
  // }

  const [albumClick, setAlbumClick] = useState(false)
  const [factClick, setFactClick] = useState(false)
  const displayAlbums = (event) => {
    // event.stopPropagation() //TODO Figure out what exactly this does
    setAlbumClick(!albumClick)
  }
  const displayFacts = (event) => {
    // event.stopPropagation() //TODO Figure out what exactly this does
    setFactClick(!factClick)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="jumbotron row px-3" style={{ backgroundImage: `url(${artistImage})` }}>
        <section>
          {/* <img src={artistImage} className="ArtistProfileImage" alt='image of artist'>
          </img> */}
          <div className='justify-content-center'>
            <h1 aria-label='artistName' id='artistName'>{artists[0].artistName}</h1>
            <h3 aria-label='introText' id='introText'>{artists[0].artistIntro}</h3>
            <button className='btn btn-primary' onClick={displayAlbums}>Albums</button>
            <button className='btn btn-primary' onClick={displayFacts}>Facts</button>
          </div>
        </section>
        </div>
        <div className='row'>
        <section id='albumsSection' className='row' style={{display: albumClick ? '': 'none'}}>
          <ul>
            {
              artists[0]['albums'].map(art => (
                <li key={artists[0]['albums'].indexOf(art)}> {/* Works but at what cost */}
                  <p>{art}</p>
                </li>
              ))
            }
          </ul>

        </section>
        </div>
        <div className='row'>
        <section id='factsSection' style={{display: factClick ? '': 'none'}}>
        <ul>
            {
              artists[0]['facts'].map(art => (
                <li key={artists[0]['facts'].indexOf(art)}> {/* Works but at what cost */}
                  <p>{art}</p>
                </li>
              ))
            }
          </ul>
        </section>
        </div>
      </main>
    </div>
  );
}

export default App;
