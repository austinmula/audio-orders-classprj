import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    textAlign:'center',
  },
  title: {
    
  },
  pos: {
    marginBottom: 12,
  },
});


function Stats({audios}) {
    const classes = useStyles();
    
    return (
        <Grid container spacing={2}>
            
            <Grid item xs={12} mg={6} lg={4}>
                <Card className={classes.root} >
                    <CardContent>
                        <AssignmentIcon fontSize="large" color="primary">

                        </AssignmentIcon>
                        <Typography className={classes.title} color="textSecondary" variant="h4" component="h2" gutterBottom>
                             Total Orders
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" variant="h4" component="h2" gutterBottom>
                             {audios.length}
                         </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} mg={6} lg={4} >
                <Card className={classes.root} >
                    <CardContent>
                        <AssignmentTurnedInIcon fontSize="large" color="primary">

                        </AssignmentTurnedInIcon>
                        <Typography className={classes.title} color="textSecondary" variant="h4" component="h2" gutterBottom>
                             Fulfilled Orders
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" variant="h4" component="h2" gutterBottom>
                            {audios.filter((x, i) => {return x.Fulfilstatus}).length}
                         </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} mg={6} lg={4}>
                <Card className={classes.root} >
                    <CardContent>
                        <AssignmentLateIcon fontSize="large" color="error">

                        </AssignmentLateIcon>
                        <Typography className={classes.title} color="textSecondary" variant="h4" component="h2" gutterBottom>
                             Pending Orders
                        </Typography>
                        <Typography className={classes.title} color="textSecondary" variant="h4" component="h2" gutterBottom>
                             {audios.filter((x, i) => {return !x.Fulfilstatus}).length}
                         </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        
    )
}

export default Stats
