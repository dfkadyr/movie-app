import * as React from 'react'
import { hot, setConfig } from 'react-hot-loader'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'

import { MainPage } from './scenes/main'

import normalizeStyle from './styles/normalize'
import globalStyle from './styles/main'
import fontsStyle from './styles/fonts'
import theme from './styles/theme'

const GlobalStyle = createGlobalStyle`
  ${normalizeStyle}
  ${globalStyle}
  ${fontsStyle}
`

const MainRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </BrowserRouter>
)

function App({ store }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <MainRouter />
        </Provider>
      </ThemeProvider>
      <GlobalStyle />
    </>
  )
}

setConfig({ logLevel: 'debug' })

export default hot(module)(App)
