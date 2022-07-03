import React from 'react'

import { CharactersProvider } from './common/context'
import { CharactersBody } from './ui/partials'

const Characters: React.FC = () => {
  return (
    <CharactersProvider>
      <CharactersBody />
    </CharactersProvider>
  )
}

export default Characters