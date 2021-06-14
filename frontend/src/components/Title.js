import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme)=>{
    return{
       title:{
            padding:theme.spacing(3)
        }
    }
  
})

function Title({title}) {
    const classes = useStyles()
    return (
        <Typography className={classes.title} color="primary" variant="h4" component="h2" >
            {title}
        </Typography>
    )
}

export default Title
