import React from 'react'

// TODO: put these in a single css with media-queries

import '../css/shared/global.css'
import '../css/light/global.css'

import '../css/shared/button.css'
import '../css/light/button.css'

import '../css/shared/seperator.css'
import '../css/light/seperator.css'

import '../css/shared/panel.css'
import '../css/light/panel.css'

import Seperator from '../components/Seperator'
import Button from '../components/Button'
import Panel from '../components/Panel'

const App = () => (
  <main>
    <h3>Buttons</h3>
    <Button>REGULAR</Button>
    <Button primary>PRIMARY</Button>
    <Button link>LINK</Button>
    <Button subtle>SUBTLE</Button>
    <Button ghost>GHOST</Button>
    <Button red>RED</Button>
    <Button orange>ORANGE</Button>
    <Button yellow>YELLOW</Button>
    <Button green>GREEN</Button>
    <Button cyan>CYAN</Button>
    <Button blue>BLUE</Button>
    <Button violet>VIOLET</Button>
    <Button tag='a' href='#cool'>a-tag</Button>

    <h3>Seperators</h3>
    <Seperator />
    <Seperator title='With Title' />

    <h3>Panels</h3>
    <Panel>
      <h4>Regular Panel, this is title</h4>
      <p>Crypto-weathered into wonton soup dead denim nodality DIY construct. Motion katana tower wristwatch military-grade soul-delay rebar semiotics drone. Gang 8-bit-ware realism jeans warehouse into cartel. Kanji rebar digital corporation Chiba wonton soup long-chain hydrocarbons soul-delay order-flow grenade. Franchise receding pistol engine shanty town woman car construct tank-traps garage euro-pop sunglasses j-pop.</p>
    </Panel>

    <Panel shaded>
      <h4>Shaded</h4>
      <p>Assassin vinyl dissident free-market uplink Kowloon monofilament man semiotics carbon disposable film boat vehicle pistol refrigerator knife. Tank-traps corrupted smart-Shibuya DIY vehicle film assassin semiotics nodal point tattoo sunglasses math-order-flow drugs. Advert camera alcohol sentient engine kanji long-chain hydrocarbons pre-youtube network.</p>
    </Panel>

    <Panel border>
      <h4>Bordered</h4>
      <p>Dolphin math-tiger-team face forwards sunglasses wonton soup refrigerator shrine drone realism. Knife-space BASE jump numinous cyber-Chiba chrome Legba stimulate euro-pop long-chain hydrocarbons saturation point. Kowloon nano-crypto-girl garage katana meta-order-flow construct. Plastic wristwatch fluidity RAF sprawl systema artisanal paranoid beef noodles. Bicycle order-flow rifle drone tank-traps beef noodles A.I. 3D-printed crypto. </p>
    </Panel>
    <Panel border>
      Here is one with no title.
    </Panel>
  </main>
)

export default App
