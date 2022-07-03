import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

import { ISingleCharacter } from 'src/ui/views/Characters/common/interfaces'

import { DetailTable } from '../../components'

import styles from './CharacterDetail.module.css'

const CharacterDetailBlock: React.FC<ISingleCharacter> = (characterData) => {
  const tableData = Object.entries(characterData)

  return (
    <Box className={styles.wrapper}>
      <Typography align='center' variant='h4'>
        {characterData.name}
      </Typography>
      <Divider sx={{mb: '15px', mt: '15px'}} />
      <DetailTable data={tableData} />
    </Box>
  )
}

export default CharacterDetailBlock
