import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/header/Header'
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
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Header />
        <Main />
        {/* <Background /> */}
      </ThemeProvider>
    </Fragment>
  )
}

export default App
