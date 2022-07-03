import React from 'react'

import { DemoViewProvider } from './common/context'
import { DemoViewBody } from './ui/partials'
import styles from './DemoView.module.css'

const DemoView: React.FC = () => {
  return (
    <DemoViewProvider>
      <div className={styles.wrapper}>
        <DemoViewBody />
      </div>
    </DemoViewProvider>
  )
}

export default DemoView
