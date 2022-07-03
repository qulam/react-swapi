import React from 'react'
import { Box, Grow, Paper } from '@mui/material'

import { RenderIf } from 'src/ui/components'

import { CharactersHeader } from '../../partials'

import styles from './PageWrapper.module.css'

interface IPageWrapper {
  children: JSX.Element;
  headerTitle?: string;
}

const PageWrapper: React.FC<IPageWrapper> = ({ children, headerTitle }) => {
  return (
    <Grow
      in={true}
      timeout={300}
    >
      <Box className={styles.box}>
        <RenderIf condition={!!headerTitle}>
          <CharactersHeader title={headerTitle} />
        </RenderIf>
        <Paper className={styles.paper} elevation={6}>
          {children}
        </Paper>
      </Box>
    </Grow>
  )
}

export default PageWrapper