import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Typography,
  Card,
  Button,
  CardActions,
  CardContent,
  Grid,
} from '@mui/material'

import { getPrimaryKeyFromURL } from 'src/common/utils'
import browserRoutes from 'src/common/browserRoutes'
import { ISingleCharacter } from 'src/ui/views/Characters/common/interfaces'

import styles from './CharacterCard.module.css'

const CharacterCard: React.FC<ISingleCharacter> = ({
  name,
  birth_year: birthYear,
  eye_color: eyeColor,
  gender,
  url,
}) => {
  return (
    <Grid item xs={4}>
      <Card className={styles.card}>
        <CardContent>
          <Typography variant='h5' component='div'>
            {name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {`${gender}/${birthYear}`}
          </Typography>
          <Typography variant='body2'>{eyeColor}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>
            <Link
              className={styles.link}
              to={browserRoutes.CHARACTER_DETAIL(getPrimaryKeyFromURL(url))}
            >
              <Typography variant='body2'>Learn More</Typography>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CharacterCard
