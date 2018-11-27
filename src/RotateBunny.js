import React, { Component } from 'react'
import { Sprite, withPixiApp, Container } from "@inlet/react-pixi";

import { Config } from './Config'


class RotateBunny extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rotation: 0,
        }
    }

    componentDidMount() {
        this.props.app.ticker.add(this.update)
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
                renderer,
                stage
            },

        } = this.props

        let width = renderer.width
        let height = renderer.height

        let bg = width > height
            ? './assets/bg/1334x750.jpg'
            : './assets/bg/750x1334.jpg'

        const {
            rotation
        } = this.state

        return (
            <Sprite image={bg} x={width / 2} y={height / 2} scale={1} rotation={stage.rotation} anchor={0.5}>
                <Sprite image="./assets/images/bunny.png" x={0} y={0} scale={0.2} rotation={rotation} anchor={0.5} />
            </Sprite>
        )
    }
}

export default withPixiApp(RotateBunny)