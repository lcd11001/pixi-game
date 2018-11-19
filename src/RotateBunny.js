import React, { Component } from 'react'
import { Sprite, withPixiApp, Container } from "@inlet/react-pixi";

import { Config } from './Config'


class RotateBunny extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rotation: -45,
        }
    }

    componentDidMount() {
        this.props.app.ticker.add(this.update)

        let width = this.props.app.container.GetWidth()
        let height = this.props.app.container.GetHeight()
        console.log('RotateBunny', width + 'x' + height)
    }

    componentWillUnmount() {
        this.props.app.ticker.remove(this.update)
    }

    update = (delta) => {
        this.setState((state, props) => ({
            rotation: state.rotation + delta * 0.05
        }))
    }

    render() {
        const {
            app: {
                container
                }
        } = this.props

        let width = container.GetWidth()
        let height = container.GetHeight()

        const {
            rotation
        } = this.state

        return (
            <Sprite image="./assets/images/bunny.png" x={width/2} y={height/2} scale={0.2} rotation={rotation} anchor={0.5}/>
        )
    }
}

export default withPixiApp(RotateBunny)