import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'


export default function Create() {

  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        color='textSecondary'
      >
        create new note
      </Typography>

      <Button
      type='submit'
      color='secondary'
      variant='contained'
      endIcon={<KeyboardArrowRightIcon/>}
      onClick={()=>console.log('you clicked me')}
      >
        Submit
      </Button>
    </Container>
  )
}