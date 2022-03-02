import express from 'express';
import Data from "./Api/Data.js"
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// get api/details
app.get('/details', (req, res) => {
    res.status(200).json(Data);
})

app.listen(4000, () => {
    console.log('Baby Coming on Port 4000!')
})