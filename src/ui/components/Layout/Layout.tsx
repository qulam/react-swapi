import React from 'react'
import { Container, CssBaseline } from '@mui/material'

import Header from '../Header'

import styles from './Layout.module.css'

interface ILayout {
  children: JSX.Element,
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <CssBaseline />
      <Header />
      <Container maxWidth='lg' className={styles.container}>
        {children}
      </Container>
    </div>
  )
}

export default Layout