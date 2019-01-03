class Config {
    constructor(defaultWidth, defaultHeight) {
        this.scale = 1
        this.isGamePortrait = false
        this.isScreenPortrait = window.innerWidth < window.innerHeight
        this.isSupportTwoScreenSize = false
        this.isReverseScaleRatio = false
        this.isUseDetectRenderer = false
        this.isBackgroundTransparent = true

        this.CalculateScreenSize(defaultWidth, defaultHeight)
    }

    CalculateScreenSize(defaultWidth, defaultHeight) {
        if (this.isGamePortrait) {
            this.width = defaultWidth
            this.height = defaultHeight
        } else {
            this.width = defaultHeight
            this.height = defaultWidth
        }
    }

    GetOptions() {
        return {
            transparent: this.isBackgroundTransparent
        }
    }
}

export default Config