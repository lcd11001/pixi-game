class GameConfig {
    constructor() {
        console.log('Config::constructor')

        this.scale = 1
        this.isGamePortrait = true
        this.isScreenPortrait = window.innerWidth < window.innerHeight
        this.isSupportTwoScreenSize = true
        this.isReverseScaleRatio = false
        this.isUseDetectRenderer = false
        this.isBackgroundTransparent = false

        this.CalculateScreenSize()
    }

    CalculateScreenSize() {
        if (this.isGamePortrait) {
            this.width = 750
            this.height = 1334
        } else {
            this.width = 1334
            this.height = 750
        }
    }
}

export const Config = new GameConfig()