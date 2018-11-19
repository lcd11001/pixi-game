import React from 'react';
import ReactDOM from 'react-dom';

import { Config } from './Config'
import App from './App';

const RenderApp = () => (
    <App 
        canvasWidth={Config.width} 
        canvasHeight={Config.height}
        options={{
            // transparent: Config.isBackgroundTransparent
            backgroundColor: 0xff00ff
        }}
    />
)

ReactDOM.render(<RenderApp />, document.getElementById('root'));
