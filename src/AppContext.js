import React from 'react'

const AppContainerContext = React.createContext({
    rotation: 0,
    width: 0,
    height: 0,
    portrait: true
})

const AppContainerProvider = AppContainerContext.Provider
const AppContainerConsumer = AppContainerContext.Consumer

const withAppContext = (BaseComponent) => {
    const wrapper = React.forwardRef((props, ref) => (
        <AppContainerConsumer>
            {
                (appContainer) => (
                    <BaseComponent {...props} ref={ref} appContainer={appContainer} />
                )
            }
        </AppContainerConsumer>

    ))

    return wrapper
}

export {
    AppContainerContext,
    AppContainerProvider,
    AppContainerConsumer,
    withAppContext
}