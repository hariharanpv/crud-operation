const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const api = require('./Server/Routes/api');

const port = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api',api);

app.listen(port,()=>{
    console.log('Server started at PORT ${port}');
})