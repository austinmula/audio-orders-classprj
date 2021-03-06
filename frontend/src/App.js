import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import { blueGrey, purple } from '@material-ui/core/colors'
import DashboardLayout from './layouts/DashLayout'
import Audios from './components/Audios'
import Pending from './components/Pending'
import Fulfilled from './components/Fulfilled'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

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
    const f = [];
    const list = [
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

    ]
    const [audios, setaudios] = useState([]);
    const [audiosSort, setaudiosSort] = useState([]);
    function genData(urls){

        const c = Math.floor(Math.random() * list.length)
        const b = list[c]
        console.log('random b',b,c,list.length)
        b.src = urls
        b.id = uuidv4()
        console.log(b)
        return b
    }
    //get from backend
    useEffect( ()=>{
        (async () => {


            const {data} = await axios.get('/api/recordings')
            console.log('data backend',data)
            for(let i=0; i<data.length;i++){
                const x = genData(data[i])
                f.push(x)

            }
            setaudios(f)
            setaudiosSort(f)

        })()
    },[])



  // Toggle fulfil status

  const toggleFullfil = (id) => {
    setaudios(audios.map((audio) => audio.id === id ? {...audio, Fulfilstatus: !audio.Fulfilstatus}: audio))
      setaudiosSort(audiosSort.filter((audiosSort) => audiosSort.id !== id ))

  }

  const handleDelete = (id) => {
    setaudios(audios.filter((audio) => audio.id !== id ))
  }



  return (
    <ThemeProvider theme = {theme}>
        {audios.length > 0 && audiosSort.length > 0 &&
        <Router>
            <Switch>
                <DashboardLayout>
                    <Route exact path= "/">
                        <Audios audios = {audios.length > audiosSort.length ? audiosSort: audios } onToggle = {toggleFullfil} handleDelete={ handleDelete }/>
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

        }

    </ThemeProvider>
  );
}

export default App;

