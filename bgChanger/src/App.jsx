
import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('lightblue'); // Initial background color

  // const changeBackgroundColor = () => {
  //   const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Generate a random color
  //   setBackgroundColor(randomColor);
  // };

  return (
    <div style={{ backgroundColor:color, width: '100%', height: '100vh' }}>
      <div>
        <button onClick={()=>setColor('red')} style={{backgroundColor:'red',margin:'10px',color:'whitesmoke'}}>red</button>
        <button onClick={()=>setColor('blue')} style={{backgroundColor:'blue',margin:'10px',color:'whitesmoke'}}>blue</button>
        <button onClick={()=>setColor('green')} style={{backgroundColor:'green',margin:'10px',color:'whitesmoke'}}>green</button>
        <button onClick={()=>setColor('olive')} style={{backgroundColor:'olive',margin:'10px',color:'whitesmoke'}}>olive</button>
        <button onClick={()=>setColor('white')} style={{backgroundColor:'white',margin:'10px',color:'black'}}>white</button>
        <button onClick={()=>setColor('yellow')} style={{backgroundColor:'yellow',margin:'10px',color:'black'}}>yellow</button>
        <button onClick={()=>setColor('black')} style={{backgroundColor:'black',margin:'10px',color:'whitesmoke'}}>black</button>
        <button onClick={()=>setColor('pink')} style={{backgroundColor:'pink',margin:'10px',color:'whitesmoke'}}>pink</button>
        <button onClick={()=>setColor('gray')} style={{backgroundColor:'gray',margin:'10px',color:'whitesmoke'}}>gray</button>

      </div>
    </div>
  );
};

export default App;