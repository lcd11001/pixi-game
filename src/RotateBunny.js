import React, { Component } from 'react'
import { Sprite, withPixiApp } from "@inlet/react-pixi";


class RotateBunny extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rotation: -45
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
                _options: {
                    width,
                    height
                }
            }
        } = this.props

        const {
            rotation
        } = this.state

        return (
            <Sprite image="./assets/images/bunny.png" x={width/2} y={height/2} scale={0.2} rotation={rotation} anchor={0.5}/>
        )
    }
}

export default withPixiApp(RotateBunny)