import { useScroll, useSpring } from 'framer-motion'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import Main from './components/main/Main'
import theme from './theme'
import GlobalStyle from './theme/globalStyles'
// import Background from './components/background/Background'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Main />
        {/* <Background /> */}
      </ThemeProvider>
    </Fragment>
  )
}

export default App
