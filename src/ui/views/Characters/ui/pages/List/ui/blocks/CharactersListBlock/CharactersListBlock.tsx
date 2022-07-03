import React, { useCallback } from 'react'
import { Box, Grid, Pagination } from '@mui/material'

import {
  ICharactersResponseDTO,
  ISingleCharacter,
} from 'src/ui/views/Characters/common/interfaces'

import { CharacterCard } from '../../components'

import styles from './CharactersListBlock.module.css'

interface ICharactersListBlock {
  charactersFlow: ICharactersResponseDTO | null
  onPageChange: (overrides: object) => void
  page: number
}

const CharactersListBlock: React.FC<ICharactersListBlock> = ({
  charactersFlow,
  onPageChange,
  page,
}) => {
  if (!charactersFlow?.results) return null

  const paginationCount = useCallback(() => {
    if (!charactersFlow?.results?.length) return 0
    return Math.round(charactersFlow?.count / charactersFlow?.results?.length)
  }, [charactersFlow])

  return (
    <Box className={styles.wrapper}>
      <Grid spacing={2} container className={styles.cardWrapper}>
        {charactersFlow?.results?.map(
          (item: ISingleCharacter, index: number) => (
            <CharacterCard key={index} {...item} />
          ),
        )}
      </Grid>
      <Box className={styles.pagination}>
        <Pagination
          onChange={(event, page) => onPageChange({ page })}
          hidden={paginationCount() <= 1}
          count={paginationCount()}
          page={page}
        />
      </Box>
    </Box>
  )
}

export default CharactersListBlock
