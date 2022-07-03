import React, { useState } from 'react'

import { useDebounce, useQuery } from 'src/common/hooks'
import { View } from 'src/ui/views/Characters/ui/components'
import { fetchCharacters } from 'src/ui/views/Characters/common/api'
import { ICharactersResponseDTO } from 'src/ui/views/Characters/common/interfaces'
import { DEFAULT_CHARACTERS_PAGE } from 'src/ui/views/Characters/ui/pages/List/common/constants'

import { CharactersListBlock, FilterBlock } from '../../blocks'

import styles from './Body.module.css'

interface IFetchCharactersResponse {
  data: ICharactersResponseDTO | null
  error: any
  isLoading: boolean
}

interface IFilterState {
  page: number
  search?: string
}

const Body: React.FC = () => {
  const [queryParams, setQueryParams] = useState<IFilterState>({
    page: DEFAULT_CHARACTERS_PAGE,
    search: '',
  })

  const debouncedSearchValue = useDebounce({
    value: queryParams.search,
    delay: 500,
  })

  const queryParamsDTO = {
    search: debouncedSearchValue,
    page: queryParams.page,
  }

  const { data, error, isLoading }: IFetchCharactersResponse = useQuery({
    query: (queryParams) => fetchCharacters(queryParams),
    queryParams: queryParamsDTO,
  })

  const changeQueryParamsHandler = (overrides?: object) =>
    setQueryParams((prevState) => ({ ...prevState, ...overrides }))

  return (
    <div className={styles.body}>
      <FilterBlock
        search={queryParams.search}
        onFilterChange={changeQueryParamsHandler}
      />
      <View error={error} isLoading={isLoading}>
        <CharactersListBlock
          charactersFlow={data}
          page={queryParams.page}
          onPageChange={changeQueryParamsHandler}
        />
      </View>
    </div>
  )
}

export default Body
