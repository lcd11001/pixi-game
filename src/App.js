import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Stage } from '@inlet/react-pixi'

import AppContainer from './AppContainer'
import RotateBunny from './RotateBunny';

class App extends Component {
    componentDidMount() {
        document.body.style.margin = 0
        document.body.style.overflow = 'hidden'
    }

    render() {
        const {
            canvasWidth,
            canvasHeight,
            options = {}
        } = this.props

        console.log('App', this.props)

        return (
            <Stage width={canvasWidth} height={canvasHeight} options={options}>
                <AppContainer {...this.props}>
                    <RotateBunny />
                </AppContainer>
            </Stage>
        )
    }
}

App.propsType = {
    canvasWidth: PropTypes.number.isRequired,
    canvasHeight: PropTypes.number.isRequired,
    options: PropTypes.object
}

export default App;
