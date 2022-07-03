import React from 'react'
import { useParams } from 'react-router-dom'

import { useQuery } from 'src/common/hooks'
import { RenderIf } from 'src/ui/components'
import { View } from 'src/ui/views/Characters/ui/components'
import { fetchCharacter } from 'src/ui/views/Characters/common/api'

import CharacterDetailBlock from '../../blocks'

import styles from './Body.module.css'

const Body: React.FC = () => {
  const { pk } = useParams()
  const { data, isLoading, error } = useQuery({
    query: () => fetchCharacter(pk as string),
  })

  return (
    <View isLoading={isLoading} error={error}>
      <div className={styles.body}>
        <RenderIf condition={data}>
          <CharacterDetailBlock {...data} />
        </RenderIf>
      </div>
    </View>
  )
}

export default Body
