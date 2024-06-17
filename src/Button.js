import React, { useState, useEffect } from 'react';
import './Button.css';

function Button() {
  const [mode, setMode] = useState(true);

  const changeMode = () => {
    setMode(!mode);
  };

  useEffect(() => {
    document.body.className = mode ? 'light-mode' : 'dark-mode';
  }, [mode]);

  const light = (
    <div className="light">
      <div className="rectangle dark">
        <div className="cylinder light">
          <button onClick={changeMode} className="ball dark"></button>
        </div>
      </div>
    </div>
  );

  const dark = (
    <div className="dark">
      <div className="rectangle light">
        <div className="cylinder dark">
          <button onClick={changeMode} className={`ball ${mode ? 'left' : 'right'}`}></button>
        </div>
      </div>
    </div>
  );

  return <div>{mode ? light : dark}</div>;
}

export default Button;
