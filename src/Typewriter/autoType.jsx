import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import './Autotype.css';

function AutoType() {

  return (
    <div className='auto-type'>
        <TypewriterComponent
        options={{
            strings:[ "Dress to Impress: Unleash Your Style..."
            ],
            autoStart: true,
            loop: true,
            pause: 200,
        }}
        />
      
    </div>
  )
}

export default AutoType;
