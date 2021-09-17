import React from 'react'

// TODO: put these in a single css with media-queries

import '../css/shared/global.css'
import '../css/light/global.css'

import '../css/shared/button.css'
import '../css/light/button.css'

import '../css/shared/seperator.css'
import '../css/light/seperator.css'

import Seperator from '../components/Seperator'
import Button from '../components/Button'

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
    <Button link tag='a' href='#cool'>LINK (a)</Button>

    <h3>Seperators</h3>
    <Seperator />
    <Seperator title='With Title' />
  </main>
)

export default App
