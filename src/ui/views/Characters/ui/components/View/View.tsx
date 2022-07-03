import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'

import styles from './View.module.css'

interface IView {
  children: JSX.Element;
  isLoading: boolean;
  error: any;
}

const ViewWrapper: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <Box className={styles.view}>
      {children}
    </Box>
  )
}

const View: React.FC<IView> = ({ children, isLoading, error }) => {
  if (isLoading) return (
    <ViewWrapper>
      <CircularProgress color='inherit' />
    </ViewWrapper>
  )

  if (error) return (
    <ViewWrapper>
      <Typography variant='h2'>
        Something went wrong...
      </Typography>
    </ViewWrapper>
  )

  return children
}

export default View