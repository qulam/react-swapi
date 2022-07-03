import React from 'react'

import DemoViewContext from './DemoViewContext'
import useDemoView from './useDemoView'

interface IDemoViewProvider {
  children: JSX.Element
}

const DemoViewProvider: React.FC<IDemoViewProvider> = ({ children }) => {
  const context = useDemoView()

  return (
    <DemoViewContext.Provider value={context}>
      {children}
    </DemoViewContext.Provider>
  )
}

export default DemoViewProvider
