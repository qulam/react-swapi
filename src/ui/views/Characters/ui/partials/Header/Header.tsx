import React from 'react'
import { Box, Paper, Typography } from '@mui/material'

import styles from './Header.module.css'

interface IHeader {
  title?: string;
}

const Header: React.FC<IHeader> = ({ title }) => {
  return (
    <Box className={styles.header}>
      <Paper className={styles.paper} elevation={6}>
        <Typography variant='h5' align="right">{title}</Typography>
      </Paper>
    </Box>
  )
}

export default Header