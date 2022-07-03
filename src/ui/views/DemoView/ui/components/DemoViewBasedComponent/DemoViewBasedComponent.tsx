import React from 'react'
import { Typography } from '@mui/material'

import styles from './DemoViewBasedComponent.module.css'

const DemoViewBasedComponent: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Typography variant='h5' color='#FFF' align='center'>
        I am a local COMPONENT and my parent is a BLOCK
      </Typography>
      <Typography variant='body2' color='#FFF' mt={2} align='center'>
        I will be used inside only the my parent MODULE. If there will be
        another Module that need to me, then You should move me to the
        /src/ui/components folder to be GLOBAL COMPONENT. By the way, Global
        Components can be used in every Module.
      </Typography>
    </div>
  )
}

export default DemoViewBasedComponent
