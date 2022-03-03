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

// post api/details
app.post('/add/data', (req, res) => {
// set the condition all are necessary
    if(!req.body.name || !req.body.email || !req.body.address || !req.body.phone || !req.body.objective || !req.body.education || !req.body.experience || !req.body.skills || !req.body.projects || !req.body.personal_info){
        res.status(400).json({
            error: "All fields are required"
        });
    }
  const user = {
    id: Data.length + 1,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    objective: req.body.objective,
    education: req.body.education,
    experience: req.body.experience,
    skills: req.body.skills,
    projects: req.body.projects,
    personal_info: req.body.personal_info
  }
    Data.push(user);
    res.status(200).json(Data);
})

// put api/details
app.put('/update/data/:id', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;

    let index = Data.findIndex((item) => {
        return (item.id == Number.parseInt(id));
    });

    if(index >= 0){
        let dt = Data[index]
        dt.name = name;
        res.json(dt);
    }else{
        res.status(400)
        res.end();
    }

})

// delete api/details
app.delete('/delete/data/:id', (req, res) => {
    let id = req.params.id;
    let index = Data.findIndex((item) => {
        return (item.id == Number.parseInt(id));
    });

    if(index >= 0){
        Data.splice(index, 1);
        res.json(user);
    }else{
        res.status(400).json({
            error: "No data found"
        });
    }
})

app.listen(4000, () => {
    console.log('Baby Coming on Port 4000!')
})