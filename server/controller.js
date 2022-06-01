const getCompliment =(req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];
    res.status(200).send(randomCompliment);
}



const getFortune = (req, res) => {
    const fortunes = ["A beautiful, smart, and loving person will be coming into your life.","A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A feather in the hand is better than a bird in the air.", "A fresh start will put you on your way.", "A friend asks only for your time not your money.", "A friend is a present you give yourself."];
     let randomIndex = Math.floor(Math.random() * fortunes.length);
     let randomfortunes = fortunes[randomIndex]; 
        res.status(200).send(randomfortunes);
    }



module.exports = {
getCompliment,
getFortune
}





// const  createHouse = (req,res) => {
//     let newHouse = {...req.body,id:globalId}
//     houses.push(newHouse)
//     res.status(200).send(houses)
//     globalId++
// }

// const updateHouse = (req,res) => {
//     const findHouseId = (house) => {
//       return +house.id === +req.params.id
//     }
//     const houseId = houses.findIndex(findHouseId)
//     if (houseId != -1){
  
//     if(req.body.type === 'plus'){
//     houses[houseId].price += 10000
//     } else if(houses[houseId].price >= 5000){
//       houses[houseId].price -= 10000
//     }
//     else {
//       houses[houseId].price = 0
//     }
//     }
//     res.status(200).send(houses)
//     }


//     const deleteHouse = (req,res) => {

//         const findHouseId = (house) => {
//           return +house.id === +req.params.id
//         }
//         const houseId = houses.findIndex(findHouseId)
//         if (houseId != -1){
//           houses.splice(houseId,1)
//           res.status(200).send(houses)
//         }
//       }