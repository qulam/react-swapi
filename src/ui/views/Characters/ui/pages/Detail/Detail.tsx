import React from 'react'

import { PageWrapper } from '../../components'

import { DetailBody } from './ui/partials'
import styles from './Detail.module.css'

const Detail: React.FC = () => {
  return (
    <div className={styles.detail}>
      <PageWrapper headerTitle='Character detail page'>
        <DetailBody />
      </PageWrapper>
    </div>
  )
}

export default Detail
