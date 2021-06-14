import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import { useHistory, useLocation } from 'react-router'

const drawerWidth = 240

const useStyles = makeStyles((theme)=>{
    return{
        page:{
            background:'#f9f9f9',
            width:'100%', 
            padding: theme.spacing(2)
        },
        drawer:{
            width: drawerWidth
        },
        drawerPaper:{
            width: drawerWidth
        }, root:{
            display:'flex'
        }, active:{
            background:"#f4f4f4"
        }, title:{
            padding:theme.spacing(2)
        }, appbar:{
            width:`calc(100% - ${drawerWidth}px)`
        }, toolbar: theme.mixins.toolbar
        , welcome:{
            flexGrow:'1'
        }, avatar:{
            marginLeft: theme.spacing(2)
        }
    }
  
})

const DashLayout = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {text:"Dashboard", icon: <AssessmentOutlinedIcon color="secondary"/>, path:"/" },
        {text:"Pending Orders", icon:<AssignmentLateOutlinedIcon color="secondary"/>, path:"/pending" , color:"secondary"},
        {text:"FulFilled Orders", icon:<AssignmentTurnedInOutlinedIcon color="secondary"/>, path:"/fulfilled" , color:"secondary"},
    ]
    return (
        <div className = {classes.root}>
            {/* app bar */}
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <Typography className={classes.welcome}>
                        Dashboard
                    </Typography>
                    <Typography>
                        UserName
                    </Typography>
                    <Avatar src = "/logo512.png" className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            {/* side drawer */}
            <Drawer
                className = {classes.drawer}
                variant= "permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant="h5" className = {classes.title}>
                        Audio-Orders
                    </Typography>
                </div>

                {/* Links */}
                <List>
                    {menuItems.map(item =>(
                        <ListItem key={item.text} button 
                            onClick ={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
               
            </Drawer>


            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div> 
        </div>
    )
}

export default DashLayout
