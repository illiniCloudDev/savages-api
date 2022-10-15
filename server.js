const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')


app.use(cors())

const savages = {
    'charlie' : {
        'age': 24,
        'status': 'Up and coming',
        'birthLocation': 'Chicago, Illinois',
    },
    'bruce lee' : {
        'age' : 32,
        'status' : 'Top G',
        'birthLocation' : ' San Francisco, CA, United States', 
    },
    'sylvester stallone' : {
        'age' : 76,
        'status' : 'Top G',
        'birthLocation' : 'New York, NY, United States', 
    },
    'Dolph Lundgren' : {
        'age': 64,
        'status' : 'Top G',
        'birthLocation' : 'Spånga, Sweden',
    },
    'unknown' : {
        'age': 0,
        'status' : 'unknown',
        'birthLocation' : 'unknown',
    }
} 

//main route is ALWAYS FORWARD SLASH
//.get is a network request 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//another route 
app.get('/api/:name', (req, res) => {
    let savageName = req.params.name.toLocaleLowerCase()
    if(savages[savageName]){
        res.json(savages[savageName])
    }else{
        res.json(savages['unknown'])
    }
})

//THIS is having the server to listen 
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running onport ${PORT}! IT IS WORKING!`)
})