export default {
  FETCH_CHARACTERS: () => '/people',
  FETCH_CHARACTER: (pk: string | number) => `/people/${pk}`,
}
