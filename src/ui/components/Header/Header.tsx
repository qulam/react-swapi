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
      <Box className={styles.shortcuts}>
        <Link className={styles.link} to={browserRoutes.HOME()}>
          <Typography variant='h6'>Home /</Typography>
        </Link>
        <Link className={styles.link} to={browserRoutes.CHARACTERS_LIST()}>
          <Typography variant='h6'>Characters /</Typography>
        </Link>
        <Link className={styles.link} to={browserRoutes.DEMO()}>
          <Typography variant='h6'>Architecture Explanation</Typography>
        </Link>
      </Box>
    </Box>
  )
}

export default Header
