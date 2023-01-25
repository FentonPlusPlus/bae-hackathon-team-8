import React, { useState, useEffect } from 'react'
import './Header.css'
import baesustainable from '../../Images/baesustainable.png'
import sustainableimage from '../../Images/sustainableimage.png'

function Header() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    generateRandomFact();
  }, [])

  function generateRandomFact() {
    const facts = [
      'If we stop using fossil fuels, we’ll end global warming',
      'Recycling is the best thing you can do to reduce your carbon footprint',
      'Leaving your TV on standby wastes vast amounts of energy',
      'Buying local food is better than buying imported products',
      'Taking the train or driving has less environmental impact than flying'
    ];

    const factDisplayed = facts[Math.floor(Math.random() * facts.length)]

    setFact(`${factDisplayed}`);
  };

  return (
    <div className='header-container'>
      <div className='header-left'>
        <img src={baesustainable} alt=''/>
      </div>
      <div className='header-right'>
        <img src={sustainableimage}/>
        <p>{fact}</p>
      </div>
    </div>

  )
}

export default Header
