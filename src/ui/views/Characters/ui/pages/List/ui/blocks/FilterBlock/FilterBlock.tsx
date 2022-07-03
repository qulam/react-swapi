import React from 'react'
import { Box, Divider, IconButton, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import styles from './FilterBlock.module.css'

interface IFilterBlock {
  search?: string
  onFilterChange: (overrides?: object) => void
}

const FilterBlock: React.FC<IFilterBlock> = ({ search, onFilterChange }) => {
  return (
    <>
      <Box className={styles.wrapper}>
        <InputBase
          fullWidth
          placeholder='Search characters...'
          value={search}
          onChange={(event) =>
            onFilterChange({ search: event.target.value, page: 1 })
          }
        />
        <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Box>
      <Divider />
    </>
  )
}

export default FilterBlock
