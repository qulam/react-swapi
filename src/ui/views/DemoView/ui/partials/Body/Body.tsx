import React from 'react'
import { Typography } from '@mui/material'

import { DemoViewSection } from '../../blocks'

import styles from './Body.module.css'

const Body: React.FC = () => {
  return (
    <div className={styles.demoView}>
      <Typography variant='h5' align='center'>
        I am a PARTIAL that I wrap local BLOCKS and local COMPONENTS. My parent
        is a Module. There are too many modules, because, our project is Modular
        system.
      </Typography>
      <DemoViewSection />
      <a target="_blank" href='https://nagibaba.medium.com/ultimate-ternary-folder-structure-for-large-react-applications-9bb6882d4372' rel="noreferrer">
        <Typography variant='body2' color='#000' mt={4}>
          For more detail about the architecture && SOLID PRINCIPLES
        </Typography>
      </a>
    </div>
  )
}

export default Body
