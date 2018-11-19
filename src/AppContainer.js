import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withPixiApp, Container } from '@inlet/react-pixi'

class AppContainer extends Component {
    componentWillMount() {
        this._resize()
    }

    componentDidMount() {
        window.addEventListener("resize", this._resize)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._resize)
    }

    _resize = () => {
        this.scaleScene(this.props.app.renderer, this.props.app.stage)
    }

    scaleScene = (renderer, sceneContainer) => {
        if (!renderer || !sceneContainer) {
            console.log('renderer', renderer, 'sceneContainer', sceneContainer)
            return
        }
        const gameWidth = this.props.gameWidth;
        const gameHeight = this.props.gameHeight;
        const gameOrientation = gameWidth > gameHeight ? 'landscape' : 'portrait';
        const gameLandscapeScreenRatio = gameWidth / gameHeight;
        const gamePortraitScreenRatio = gameHeight / gameWidth;

        const isScreenPortrait = window.innerHeight >= window.innerWidth;
        const isScreenLandscape = !isScreenPortrait;
        const screenRatio = window.innerWidth / window.innerHeight;

        let newWidth;
        let newHeight;

        if ((gameOrientation === 'landscape' && isScreenLandscape) || (gameOrientation === 'portrait' && isScreenPortrait)) {
            if (screenRatio < gameLandscapeScreenRatio) {
                newWidth = gameWidth;
                newHeight = Math.round(gameWidth / screenRatio);
            } else {
                newWidth = Math.round(gameHeight * screenRatio);
                newHeight = gameHeight;
            }
        } else {
            if (screenRatio < gamePortraitScreenRatio) {
                newWidth = gameHeight;
                newHeight = Math.round(gameHeight / screenRatio);
            } else {
                newWidth = Math.round(gameWidth * screenRatio);
                newHeight = gameWidth;
            }
        }

        renderer.resize(newWidth, newHeight);

        sceneContainer.x = (newWidth - gameWidth) / 2;
        sceneContainer.y = (newHeight - gameHeight) / 2;
    }

    render() {
        return (
            <Container>
                {
                    this.props.children
                }
            </Container>
        )
    }
}

AppContainer.propTypes = {
    gameWidth: PropTypes.number.isRequired,
    gameHeight: PropTypes.number.isRequired
}

export default withPixiApp(AppContainer);
