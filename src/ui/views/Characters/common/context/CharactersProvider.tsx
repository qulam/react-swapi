import React from 'react'

import CharactersContext from './CharactersContext'
import useCharacters from './useCharacters'

interface ICharactersProvider {
  children: JSX.Element,
}

const CharactersProvider: React.FC<ICharactersProvider> = ({ children }) => {
  const context = useCharacters()

  return (
    <CharactersContext.Provider value={context}>
      {children}
    </CharactersContext.Provider>
  )
}

export default CharactersProvider