import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import { blueGrey, purple } from '@material-ui/core/colors'
import DashboardLayout from './layouts/DashLayout'
import Audios from './components/Audios'
import Pending from './components/Pending'
import Fulfilled from './components/Fulfilled'
import React, { useState }  from 'react'


const theme = createMuiTheme({
  palette:{
    primary:blueGrey,
    secondary: purple
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
})

function App() {

  const [audios, setaudios] = useState([
    {
        "id": 1,
        "name": "John Doe",
        "phoneNum":"+254700100113",
        "Fulfilstatus": true
    }, 
    {
        "id": 2,
        "name": "Jane Doe",
        "phoneNum":"+254722100459",
        "Fulfilstatus": false
    }, 
    {
        "id": 3,
        "name": "Taylor Jane",
        "phoneNum":"+25476519450",
        "Fulfilstatus": true
    } , 
    {
        "id": 4,
        "name": "Malloy T",
        "phoneNum":"+25479019470",
        "Fulfilstatus": false
    }, 
    {
      "id": 5,
      "name": "Peter Griff",
      "phoneNum":"+254700100113",
      "Fulfilstatus": false
    }, 
       
  ]);
  
  // Toggle fulfil status

  const toggleFullfil = (id) => {
    setaudios(audios.map((audio) => audio.id === id ? {...audio, Fulfilstatus: !audio.Fulfilstatus}: audio))
  }

  const handleDelete = (id) => {
    setaudios(audios.filter((audio) => audio.id !== id ))
  }

  return (
    <ThemeProvider theme = {theme}>
      <Router>
        <Switch>
          <DashboardLayout>
            <Route exact path= "/">
              <Audios audios = {audios} onToggle = {toggleFullfil} handleDelete={ handleDelete }/>
            </Route>
            <Route  path= "/pending">
              <Pending audios = {audios} />
            </Route>
            <Route  path= "/fulfilled">
              <Fulfilled audios = {audios} />
            </Route>
          </DashboardLayout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

