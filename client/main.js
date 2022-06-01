const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const getAllBtn = document.querySelector('#all')
const goalPlanBtns = document.querySelectorAll('.gp-btns')
const createForm = document.querySelector('#create-goal')
const newPrimaryGoal = document.querySelector('#primary')
const newPrimaryPlan = document.querySelector('#primary-plans')
const newSecondaryGoal = document.querySelector('#secondary')
const newSecondryPlan = document.querySelector('#secondary-plans')
const goalContainer = document.querySelector('section')
const deleteGoalBtn = document.querySelector('#delete-btn')



const baseURL = `http://localhost:4000/api`

const getCompliment = () => {
    axios.get(baseURL + "/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get(baseURL + "/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)




function createGoalPlan(goal) {
    let goalSheet = document.createElement('div')
    goalSheet.innerHTML = `<h3>${goal.primaryGoal} </h3>
    <h4>plans</h4>
    <ul>
      <li>${goal.plans[0]}</li>
    </ul>`
  
    goalContainer.appendChild(goalSheet)
  }
  
  function clearGoalPlans() {
    goalContainer.innerHTML = ``
  }
  
  const getAllgoals =() => {
   clearGoalPlans()
  
   axios.get(baseURL + '/goalsPlans')
   .then((res) => { 
     for(let i = 0; i<res.data.length ; i++){
        createGoalPlan(res.data[i]);
     } 
   })
   .catch(error => console.log(error))
  }
  
  getAllBtn.addEventListener('click',getAllgoals)
  
  const getgoal =(event) => {
    clearGoalPlans();
    axios.get(`${baseURL}/goalsPlan/${event.target.id}`)
    .then((res)=> {
      createGoalPlan(res.data);
    })
    .catch(error => console.log(error));
  };
  
  for(let i=0;i<goalPlanBtns.length;i++){
    goalPlanBtns[i].addEventListener('click',getgoal)
  };
  
  
  const createNewgoal = (event) => {
    const reqBody = {
      primaryGoal: newPrimaryGoal.value,
      plans: newPrimaryPlan.value.split(',') 
    }
    event.preventDefault();
    console.log(reqBody)
    clearGoalPlans()
    axios.post(baseURL + '/goalsPlan', reqBody)
    .then((res) => {
      for(let i = 0; i <res.data.length; i++) {
        createGoalPlan(res.data[i])
      }
      newPrimaryGoal.value = '';
      newPrimaryPlan.value ='';
    })
    .catch(error => console.log(error))
  
  }
  
  createForm.addEventListener('submit',createNewgoal)
  
  const deleteGoalsPlans =(event) => {
    event.preventDefault();
    clearGoalPlans()
    axios.delete(baseURL + '/goalsPlan')
    .then((res) => { 
      for(let i = 0; i<res.data.length ; i++){
         createGoalPlan(res.data[i]);
      } 
    })
    .catch(error => console.log(error))
  }
  
  deleteGoalBtn.addEventListener('click',deleteGoalsPlans)

















