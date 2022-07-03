import React from 'react'
import { Typography } from '@mui/material'

import { DemoViewBasedComponent } from '../../components'

import styles from './DemoView.module.css'

const DemoViewSection: React.FC = () => {
  return (
    <div className={styles.demoViewSection}>
      <Typography variant='h5' color='#FFF' align="center">
        I am a BLOCK that my parent is a PARTIAL. I will be used inside only PARTIALS of my parent Module
      </Typography>
      <DemoViewBasedComponent />
    </div>
  )
}

export default DemoViewSection
