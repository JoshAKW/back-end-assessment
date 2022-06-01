const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const {
     getCompliment,
     getFortune,
 } = require('./controller')


app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);






let goalsPlans = [
    {
        id: 0,
        primaryGoal: 'To Graduate From DevMountain', 
        plans: ['finish all labs and challenges']
    }, 
    {
        id: 1, 
        primaryGoal: 'To network with other students and mentors', 
        plans: ['peer program as often and with as many peers as I can', ]
    },
]

app.get('/api/goalsPlans', (req, res) => {
    res.status(200).send(goalsPlans)
})





let id = 2

app.post('/api/goalsPlan', (req, res) => {
    let newGoal = {...req.body, id}
    newGoal.plans = newGoal.plans.slice(0, 1)
    goalsPlans.unshift(newGoal)
    res.status(200).send(goalsPlans)
    id++
})

app.delete('/api/goalsPlan', (req, res) => {
if (goalsPlans[0].id>1){
    goalsPlans.shift()}

    res.status(200).send(goalsPlans)
})


app.listen(4000, () => console.log("Server running on 4000"));




