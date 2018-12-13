import React from 'react';
import ReactDOM from 'react-dom';

import { Config } from './Config'
import App from './App';

import { Container } from '@inlet/react-pixi';
import SpriteDemo from './SpriteDemo';
import RotateBunny from './RotateBunny'


const RenderChildren = () => (
    <Container>
        <RotateBunny />
        <SpriteDemo />
    </Container>
)

const RenderApp = () => (
    <App
        canvasWidth={Config.width}
        canvasHeight={Config.height}
        options={{
            // transparent: Config.isBackgroundTransparent
            backgroundColor: 0xff00ff
        }}
    >
        {
            RenderChildren()
        }
    </App>
)

ReactDOM.render(<RenderApp />, document.getElementById('root'));
