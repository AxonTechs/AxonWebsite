import React from 'react'
import PremiumTech from './PremiumTech'
import Click from './Click'
import ParticleBg from './ParticleBg'
import ChooseUs from './ChooseUs'
import LatestProject from './LatestProject'
import Strategy from './Strategy'
import ClintSays from './ClintSays'
import RequestQuote from './RequestQuote'


export default function Home() {
  return (
    <div> 
        <ParticleBg/> 
        <Click/> 
       <PremiumTech/> 
       <ChooseUs/>
       <LatestProject/>
       <Strategy/> 
       <ClintSays/> 
       <RequestQuote/>
    </div>
  )
}
