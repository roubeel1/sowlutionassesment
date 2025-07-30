import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const paragraph = "This is a specific paragraph where certain keywords will be highlighted based on the user's input. Try typing words like 'keywords', 'paragraph', or 'highlighted'.";

  const highlightText = (text, keyword) => {
    if (!keyword) return text;

    const regex = new RegExp(`(${keyword})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container">
      <h2>Search in Paragraph</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input"
      />
      <div className="paragraph">
        {highlightText(paragraph, searchTerm)}
      </div>
    </div>
  );
}

export default App;
