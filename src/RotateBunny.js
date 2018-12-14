import React, { Component } from 'react'
import { Sprite, withPixiApp, Container } from "@inlet/react-pixi";
import { withAppContext } from './AppContext'

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
            appContainer: {
                width,
                height,
                rotationRad,
                portrait
            },

        } = this.props

        let bg = portrait
            ? './assets/bg/750x1334.jpg'
            : './assets/bg/1334x750.jpg'

        let bgScale = portrait
            ? Math.max(width / 750, height / 1334)
            : Math.max(width / 1334, height / 750)

        return (
            <Sprite image={bg} x={width / 2} y={height / 2} scale={bgScale} rotation={rotationRad} anchor={0.5}>
                <Sprite image="./assets/images/bunny.png" x={0} y={0} scale={0.2} rotation={this.state.rotation} anchor={0.5} />
            </Sprite>
        )
    }
}

export default withPixiApp(withAppContext(RotateBunny))