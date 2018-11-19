import React, { Component } from 'react'
import { Stage } from '@inlet/react-pixi'

import AppContainer from './AppContainer'
import RotateBunny from './RotateBunny';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gameWidth: 800,
            gameHeight: 600
        }
    }
    render() {
        const {
            gameWidth, 
            gameHeight
        } = this.state

        return (
            <Stage width={gameWidth} height={gameHeight} options={{ backgroundColor: 0xff00ff }}>
                <AppContainer {...this.state}>
                    <RotateBunny/>
                </AppContainer>
            </Stage>
        )
    }
}

export default App;
