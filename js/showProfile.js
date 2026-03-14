import { loadData } from "./loadData.js"
import { logout } from "./logout.js"
import { xpFormate } from "./xpFormat.js";
import {loadSkills}  from './loadSkills.js';
import {loadProgress} from "./loadProgress.js"
import {loadRatio} from './loadRatio.js';
export async function showProfile(token){
    let res = await loadData(token)
    console.log('data from show profile',res);
    
    if (res.errors){console.log(res);return}
    let totalXp = xpFormate(res.xpTransactions.reduce((sum , t)=> sum + Number(t.amount),0))    
    let level = res.userInfo[0].transactions[0].amount
    let totalDown = xpFormate(res.userInfo[0].totalDown)
    let totalUp = xpFormate(res.userInfo[0].totalUp)  
    document.body.innerHTML = ``
    const Profile = `
         <div id="nav" >
         <div id="welcomingDiv">
         <p id="wlcMessage" >Welcome<span id="userName">, ${res.userInfo[0].firstName} ${res.userInfo[0].lastName}</span></p>
        </div>
        <div id="logout" >logout</div>
    </div>
    <div id="cardSection" >
        <div id="level" class="card">
        your level:
        <span>${level}</span>
        </div>
        <div id="xp" class="card">
        your xp:
        <span>${totalXp}</span>
        </div>
      
    </div>
    <div id="graphContainer" >
    <div id="skills" >
    <div id="skillTitle" class="graphTitle">
    your Skills
    </div>
    <div id="skillgraph" class="graphBox">
    
    </div>
    </div>
    <div id="progress" >
    <div id="progressTitle" class="graphTitle">
    your progress
    </div>
    <div id="progressgraph" class="graphBox">
    
    </div>
  
    </div>
     <div id="ratio"  class="graphBox">
    <div id="progressTitle" class="graphTitle">
    your Ratio
    </div>
     <div id="ratiograph" class="graphBox">
    <svg id="circlesvg" width="220" height="220" viewBox="0 0 220 220">

    <circle
        cx="110"
        cy="110"
        r="90"
        fill="none"
        stroke="#333036"
        stroke-width="20"
    />
    <circle
        id="valid"
        cx="110"
        cy="110"
        r="90"
        fill="none"
        stroke="#22c55e"
        stroke-width="20"
        stroke-linecap="round"
        transform="rotate(-90 110 110)"
    />
    <circle
        id="failed"
        cx="110"
        cy="110"
        r="90"
        fill="none"
        stroke="#ef4444"
        stroke-width="20"
        stroke-linecap="round"
        transform="rotate(-90 110 110)"
    />
    <text
        id="percent"
        x="110"
        y="115"
        text-anchor="middle"
        font-size="24"
        fill="white"
        
    >
    </text>

</svg>
<div id="ratioCardsCountainer">
<div  class="cardRatio">
        total Down:
        <span>${totalDown}</span>
    
    </div>
    <div  class="cardRatio">
        total UP:
        <span>${totalUp}</span>
        </div>
   
    <div class="cardRatio">
        failed:
        <span id="failedCard" ></span>
        </div>
    
    <div  class="cardRatio">
        valided:
        <span id="validedCard" ></span>
        </div>
    
   </div>
</div>
    </div>
    `
    const appCountainer = document.createElement('div')
    appCountainer.setAttribute('id','appCountainer')
    appCountainer.innerHTML = Profile
    document.body.append(appCountainer)
    document.getElementById('logout').addEventListener('click',()=>{
        logout()
    })
    loadSkills(res.skills)  
    loadProgress(res.xpProgress)
    loadRatio(res.userInfo)
}