import React, { useState } from 'react';
import { Projects, SocialProfiles, Title } from './';
import profile from '../assets/bo.jpg';

function App() {
  const [displayBio, setDisplayBio] = useState(false);

  const toggleDisplayBio = () => {
    setDisplayBio(!displayBio);
  };

  return (
    <div>
      <img src={profile} alt="profile" className="profile" />
      <h1>Hello!</h1>
      <p>My name is Boris.</p>
      <Title />
      <p>I'm always looking forward to working on meaningful projects.</p>
      {displayBio ? (
        <div>
          <p>I live in London, and I love to code.</p>
          <p>
            My favorite language is JavaScript, and I think React.js is awesome.
          </p>
          <p>Besides coding, I also love football and Thai cuisine!</p>
          <button className="btn btn-primary" onClick={toggleDisplayBio}>
            Show less
          </button>
        </div>
      ) : (
        <div>
          <button className="btn btn-primary" onClick={toggleDisplayBio}>
            Read more
          </button>
        </div>
      )}
      <hr />
      <Projects />
      <hr />
      <SocialProfiles />
    </div>
  );
}

export default App;
