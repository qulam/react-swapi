import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider } from './common/context/theme'
import { Layout } from './ui/components'
import Views from './ui/views'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Views />
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
