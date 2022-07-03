import React from 'react'
import { Routes, Route } from 'react-router-dom'

import browserRoutes from 'src/common/browserRoutes'

import Characters from './Characters'

const Views: React.FC = () => {
  return (
    <Routes>
      <Route path={browserRoutes.HOME()} element={<Characters />} />
      <Route path={browserRoutes.CHARACTERS()} element={<Characters />} />
    </Routes>
  )
}

export default Views