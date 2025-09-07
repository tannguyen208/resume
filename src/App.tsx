import { useScroll, useSpring } from 'framer-motion'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { Resume } from './components/Resume'
import theme from './theme'
import GlobalStyle from './theme/globalStyles'

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
        <Resume />
        {/* Progress bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 ease-out"
            style={{ transform: `scaleX(${scaleX})`, transformOrigin: 'left' }}
          />
        </div>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
