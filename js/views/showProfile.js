import { loadData } from "../loadData/loadData.js"
import { logout } from "../auth/logout.js"
import { xpFormate } from "../utils/xpFormat.js";
import {loadSkills}  from '../loadData/loadSkills.js';
import {loadRatio} from '../loadData/loadRatio.js';
import { loadProjects } from "../loadData/loadProject.js";
export async function showProfile(token){
    let res = await loadData(token)
    console.log('data from show profile',res);
    
    if (res.errors){console.log(res);return}
    // if (res.transactions.length===0 && )
    let totalXp = xpFormate(res?.xpTransactions?.reduce((sum , t)=> sum + Number(t.amount),0)) || "0xp"    
    let level = res?.userInfo[0]?.transactions[0]?.amount || "0"
    let totalDown = xpFormate(res?.userInfo[0]?.totalDown)=="null"?"0":xpFormate(res?.userInfo[0]?.totalDown)
    let totalUp = xpFormate(res?.userInfo[0]?.totalUp)=="null"?"0": xpFormate(res?.userInfo[0]?.totalUp)
    document.body.innerHTML = ``
    const Profile = `
         <div id="nav" >
         <div id="welcomingDiv">
         <p id="wlcMessage" >Welcome<span id="userName">, ${res?.userInfo[0]?.firstName||"0"} ${res?.userInfo[0]?.lastName||"0"}</span></p>
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
      <div id="cohort" class="card">
        your cohort:
        <span>${res.userInfo[0]?.cohort[0]?.cohorts[0]?.labelName || "0"}</span>
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
        <span>${totalDown?totalDown:"0"}</span>
    
    </div>
    <div  class="cardRatio">
        total UP:
        <span>${totalUp || "0"}</span>
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
     <div id="lastProjectContainerId" class="graphBox" >
        <h1 class="graphTitle">your last three project</h1>
        
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
    loadRatio(res.userInfo)
    loadProjects(res.userProject)
}