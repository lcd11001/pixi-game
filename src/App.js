import React, { Component } from 'react'
import { Stage, Sprite, Container } from '@inlet/react-pixi'
import RotateBunny from './RotateBunny';

class App extends Component {
    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight} options={{ backgroundColor: 0xff00ff }}>
                <Container>
                    <RotateBunny/>
                </Container>
            </Stage>
        )
    }
}

export default App;
