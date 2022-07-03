import React from 'react'
import { Routes, Route } from 'react-router-dom'

import browserRoutes from 'src/common/browserRoutes'

import Characters from './Characters'
import DemoView from './DemoView'

const Views: React.FC = () => {
  return (
    <Routes>
      <Route path={browserRoutes.HOME()} element={<Characters />} />
      <Route path={browserRoutes.CHARACTERS()} element={<Characters />} />
      <Route path={browserRoutes.DEMO()} element={<DemoView />} />
    </Routes>
  )
}

export default Views
