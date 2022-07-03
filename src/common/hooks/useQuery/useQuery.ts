import { useState, useEffect } from 'react'

interface IUseQuery {
  query: (queryParams?: object) => Promise<any>
  skip?: boolean
  queryParams?: object
  onSuccess?: (data: any) => void // you can use this life cycle methods to get data and set to your store such as Redux
  onError?: (data: any) => void // you can use this life cycle methods to get network error
}

interface IState {
  error: any
  isLoading: boolean
  data: any
}

const useQuery = ({
  query,
  skip,
  queryParams,
  onError,
  onSuccess,
}: IUseQuery) => {
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
          if (onSuccess) onSuccess(data)
          updateState({ data })
        })
        .catch((error) => {
          if (onError) onError(error)
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
