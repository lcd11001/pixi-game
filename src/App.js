import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Stage } from '@inlet/react-pixi'

import Config from './Config'
import AppContainer from './AppContainer'

class App extends Component {
    constructor(props) {
        super(props)

        const {
            width,
            height
        } = props

        this.Config = new Config(width, height)
    }

    componentWillReceiveProps(nextProps) {
        this.Config.CalculateScreenSize(nextProps.width, nextProps.height)
    }

    componentDidMount() {
        document.body.style.margin = 0
        document.body.style.overflow = 'hidden'
    }

    render() {
        const {
            options,
            width,
            height
        } = this.props

        let finalOptions = {
            ...this.Config.GetOptions(),
            ...options
        }

        return (
            <Stage options={finalOptions} width={width} height={height}>
                <AppContainer Config={this.Config}>
                    {
                        this.props.children
                    }
                </AppContainer>
            </Stage>
        )
    }
}

App.propsType = {
    options: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number
}

App.defaultProps = {
    options: {},
    width: 1334,
    height: 750
}

export default App;
