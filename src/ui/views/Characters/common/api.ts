import apiRoutes from 'src/common/apiRoutes'
import { instanceAxios } from 'src/common/config/axios'

export const fetchCharacters = (params?: object) =>
  instanceAxios
    .get(apiRoutes.FETCH_CHARACTERS(), { params })
    .then((res) => res.data)

export const fetchCharacter = (pk: string | number) =>
  instanceAxios.get(apiRoutes.FETCH_CHARACTER(pk)).then((res) => res.data)
