const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')


app.use(cors())

const savages = {
    'camaro' : {
        'url': `https://www.autogespot.com/chevrolet-camaro-zl1-2019/2022/06/06`,
    },
    'apartment' : {
        'url' : `https://rejournals.com/wp-content/uploads/2020/10/Skyline-Residence-2-scaled.jpg`,
    },
    'camaro zl1' : {
        'url' : `https://ag-spots-2020.o.auroraobjects.eu/2020/04/09/chevrolet-camaro-zl1-1le-2019-c963509042020122351_1.jpg`,
    },
    'future' : {
        'url': `https://unsplash.com/photos/s95oB2n9jng`,
    },
    'unknown' : {
        'url': `https://unsplash.com/photos/PhYq704ffdA`,
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