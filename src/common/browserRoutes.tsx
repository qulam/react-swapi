export default {
  HOME: () => '/',
  DEMO: () => '/architecture-explanation',
  CHARACTERS: () => '/characters*',
  CHARACTERS_LIST: () => '/characters/list',
  CHARACTER_DETAIL: (pk: number | string) => `/characters/detail/${pk}`,
}
