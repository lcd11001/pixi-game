import React from 'react'

const AppContainerContext = React.createContext({
    rotation: 0
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