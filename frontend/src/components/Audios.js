import  Grid  from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import Audio from './Audio'
import Stats from './Stats'
import Title from './Title'

const Audios = ({ audios, onToggle, handleDelete }) => {
    return (
        <Container>
            <Stats audios={audios}/>
            <Title title="All Orders"/>
            <Grid container spacing ={3}>
                {audios.map(audio => (
                    <Grid item key={audio.id} xs={12} mg={6} lg={4} >
                        <Audio audio = { audio } onToggle={ onToggle } handleDelete = { handleDelete }/>  
                    </Grid>
                 ))}
            </Grid>
        </Container>
    )
}

export default Audios
