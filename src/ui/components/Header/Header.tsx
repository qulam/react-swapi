import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import browserRoutes from 'src/common/browserRoutes'

import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <Box className={styles.header} position='fixed'>
      <Link className={styles.link} to={browserRoutes.HOME()}>
        <Typography variant='h2'>STAR WARS</Typography>
      </Link>
    </Box>
  )
}

export default Header
