import React from 'react'
import  Grid  from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import Audio from './Audio'

const Fulfilled = ({audios}) => {
    return (
        <div>
        <Container>
        <Grid container spacing ={3}>
            {audios.filter((audio) => audio.Fulfilstatus).map(audio => (
                <Grid item key={audio.id} xs={12} mg={6} lg={4} >
                    <Audio audio = { audio } />  
                </Grid>
             ))}
        </Grid>
        </Container>
    </div>
    )
}

export default Fulfilled
