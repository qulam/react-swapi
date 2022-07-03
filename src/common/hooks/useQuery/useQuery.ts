import { useState, useEffect } from 'react'

interface IUseQuery {
  query: (queryParams?: object) => Promise<any>
  skip?: boolean
  queryParams?: object
}

interface IState {
  error: any
  isLoading: boolean
  data: any
}

const useQuery = ({ query, skip, queryParams }: IUseQuery) => {
  const [state, setState] = useState<IState>({
    error: null,
    isLoading: false,
    data: null,
  })

  const updateState = (overrides: object) => {
    setState((prevState) => ({ ...prevState, ...overrides }))
  }

  useEffect(() => {
    if (!Object.is(skip, true)) {
      updateState({ isLoading: true })
      query(queryParams)
        .then((data: any) => {
          updateState({ data })
        })
        .catch((error) => {
          updateState({ error })
        })
        .finally(() => {
          updateState({ isLoading: false })
        })
    }
  }, [JSON.stringify(queryParams)])

  return state
}

export default useQuery
