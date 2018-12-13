import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Stage } from '@inlet/react-pixi'

import AppContainer from './AppContainer'

class App extends Component {
    componentDidMount() {
        document.body.style.margin = 0
        document.body.style.overflow = 'hidden'
    }

    render() {
        const {
            options = {}
        } = this.props

        return (
            <Stage options={options}>
                <AppContainer>
                    {
                        this.props.children
                    }
                </AppContainer>
            </Stage>
        )
    }
}

App.propsType = {
    options: PropTypes.object
}

export default App;
