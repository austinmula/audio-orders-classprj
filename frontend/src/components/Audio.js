import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { IconButton} from '@material-ui/core'
import AudioPlayer from 'material-ui-audio-player';
import { DeleteOutlined } from '@material-ui/icons'
import Avatar from '@material-ui/core/Avatar';
import { lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles({
    avatar:{
        backgroundColor:lightGreen[500]
    },
    test:{
        borderLeft: (audio) =>{
            if (audio.Fulfilstatus){
                return "5px solid #fff"
            }
            if (!audio.Fulfilstatus){
                return "3px solid #ff5733"
            }
        }
    }
})


const Audio = ({audio, onToggle, handleDelete}) => {
    const classes = useStyles(audio)
    return (
        <div onDoubleClick={() => onToggle(audio.id)}>
        <Card elevation={3} className={classes.test}>
            <CardHeader
                 avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {audio.name[0]}
                    </Avatar>}
                action={
                    <IconButton onClick = {()=>handleDelete(audio.id)}>
                        <DeleteOutlined color="error" />
                    </IconButton>
                }
                title={audio.name}
                subheader={audio.phoneNum}
            />
            <CardContent>
                <AudioPlayer 
                elevation={0}
                width="100%"
                variation="primary"
                spacing={2}
                order="reverse"
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
            </CardContent>
        
        </Card>
   
    </div>
    )
}

export default Audio
