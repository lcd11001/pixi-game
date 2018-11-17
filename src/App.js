import React, { Component } from 'react'
import { Stage, Sprite } from '@inlet/react-pixi'

class App extends Component {
    render() {
        return (
            <Stage width={window.innerWidth} height={window.innerHeight} options={{ backgroundColor: 0xff00ff }}>
                <Sprite image="./assets/images/bunny.png" x={100} y={100} />
            </Stage>
        )
    }
}

export default App;
