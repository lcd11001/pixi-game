import React from 'react';
import ReactDOM from 'react-dom';

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
        options={{
            // transparent: true
            backgroundColor: 0xff00ff
        }}
    >
        {
            RenderChildren()
        }
    </App>
)

ReactDOM.render(<RenderApp />, document.getElementById('root'));
