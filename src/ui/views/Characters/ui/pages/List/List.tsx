import React from 'react'

import { PageWrapper } from '../../components'

import { ListBody } from './ui/partials'
import styles from './List.module.css'

const List: React.FC = () =>
  <div className={styles.list}>
    <PageWrapper headerTitle='Characters list page'>
      <ListBody />
    </PageWrapper>
  </div>

export default List