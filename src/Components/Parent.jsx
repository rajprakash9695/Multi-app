import React from 'react';
import { useState } from 'react';

let nextId = 0;

export default function Parent() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div className="container">
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <br />
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}
