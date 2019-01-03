import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withPixiApp } from '@inlet/react-pixi'

import { AppContainerProvider } from './AppContext'

class AppContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			width: 0,
			height: 0
		}
	}

	componentWillMount() {
		this._resize()
	}

	componentWillReceiveProps(nextProps) {
		const {
			Config: {
				width,
				height
			}
		} = nextProps

		if (width !== this.state.width || height !== this.state.height) {
			this._resize()
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this._resize)
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this._resize)
	}

	_resize = () => {
		const {
			Config
		} = this.props

		const {
			renderer
		} = this.props.app

		const {
			renderer: {
				view: {
					ownerDocument,
					parentNode
				}
			}
		} = this.props.app

		let rootNode = parentNode.parentNode
		let parentWidth = window.innerWidth
		let parentHeight = window.innerHeight

		if (ownerDocument.body !== rootNode) {
			parentWidth = rootNode.clientWidth
			parentHeight = rootNode.clientHeight
		}

		Config.isScreenPortrait = parentWidth < parentHeight
		
		if (!Config.isReverseScaleRatio) {
			if (Config.isGamePortrait) {
				if (Config.isScreenPortrait) {
					this.ratio = parentWidth / parentHeight
					renderer.resize(Config.height * this.ratio, Config.height);

					this.offsetX = (renderer.width - Config.width) / 2;
					this.offsetY = 0;
				}
				else {
					this.ratio = parentHeight / parentWidth
					renderer.resize(Config.height, Config.height * this.ratio);

					this.offsetX = (renderer.height - Config.width) / 2;
					this.offsetY = 0;
				}
			}
			else {
				if (Config.isScreenPortrait) {
					this.ratio = parentWidth / parentHeight
					renderer.resize(Config.width * this.ratio, Config.width);

					this.offsetX = 0;
					this.offsetY = (renderer.width - Config.height) / 2;
				}
				else {
					this.ratio = parentHeight / parentWidth
					renderer.resize(Config.width, Config.width * this.ratio);

					this.offsetX = 0;
					this.offsetY = (renderer.height - Config.height) / 2;
				}
			}
		}
		else {
			if (Config.isGamePortrait) {
				if (Config.isScreenPortrait) {
					this.ratio = parentHeight / parentWidth
					renderer.resize(Config.width, Config.width * this.ratio);

					this.offsetX = 0;
					this.offsetY = (renderer.height - Config.height) / 2;
				}
				else {
					this.ratio = parentWidth / parentHeight
					renderer.resize(Config.width * this.ratio, Config.width);

					this.offsetX = 0;
					this.offsetY = (renderer.width - Config.height) / 2;
				}
			}
			else {
				if (Config.isScreenPortrait) {
					this.ratio = parentHeight / parentWidth
					renderer.resize(Config.height, Config.height * this.ratio);

					this.offsetX = (renderer.height - Config.width) / 2;
					this.offsetY = 0;
				}
				else {
					this.ratio = parentWidth / parentHeight
					renderer.resize(Config.height * this.ratio, Config.height);

					this.offsetX = (renderer.width - Config.width) / 2;
					this.offsetY = 0;
				}
			}
		}

		renderer.view.setAttribute("style", `width:${parentWidth}px; height:${parentHeight}px`);
		this.Rotate(this.IsRotate());

		// console.log('AppContainer::_resize', parentWidth + 'x' + parentHeight, '	renderer => ', renderer.width + 'x' + renderer.height)
	}

	GetWidth() {
		const {
			renderer
		} = this.props.app

		if (this.state.rotation === 0) {
			return renderer.width;
		}
		else {
			return renderer.height;
		}
	}

	GetHeight() {
		const {
			renderer
		} = this.props.app

		if (this.state.rotation === 0) {
			return renderer.height;
		}
		else {
			return renderer.width;
		}
	}

	Align(stage) {
		const {
			renderer
		} = this.props.app

		stage.position.set(renderer.width / 2, renderer.height / 2);
		stage.pivot.set(this.GetWidth() / 2, this.GetHeight() / 2);
	}

	Rotate(isRotate) {
		const {
			Config
		} = this.props

		const {
			stage,
			renderer
		} = this.props.app

		if (isRotate) {
			stage.position.set(renderer.width / 2, renderer.height / 2);
			stage.pivot.set(renderer.width / 2, renderer.height / 2);
			stage.rotation = -90 * Math.PI / 180;
		}
		else {
			stage.pivot.set(0, 0);
			stage.position.set(0, 0);
			stage.rotation = 0;
		}

		this.setState({
			rotation: stage.rotation === 0 ? 0 : 90,
			rotationRad: stage.rotation === 0 ? 0 : Math.PI / 2,
			width: renderer.width,
			height: renderer.height,
			portrait: Config.isScreenPortrait
		})
	}

	IsRotate() {
		const {
			Config
		} = this.props

		return Config.isGamePortrait !== Config.isScreenPortrait;
	}

	render() {
		return (
			<AppContainerProvider value={this.state}>
				{
					this.props.children
				}
			</AppContainerProvider>
		)
	}
}

AppContainer.propsType = {
	Config: PropTypes.object.isRequired
}

export default withPixiApp(AppContainer);
