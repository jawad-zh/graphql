import { loadData } from "./loadData.js"
import { logout } from "./logout.js"
import { xpFormate } from "./xpFormat.js";

export async function showProfile(token){
    let res = await loadData(token)
    if (res.errors){console.log(res);return
    }   
    console.log('res',res) 
    let totalXp = xpFormate(res.data.transaction.reduce((sum , t)=> sum + Number(t.amount),0))    
    let level = res.data.user[0].transactions[0].amount
    let totalDown = xpFormate(res.data.user[0].totalDown)
    let totalUp = xpFormate(res.data.user[0].totalUp)
    console.log('level',level);
    
    document.body.innerHTML = ``
    const Profile = `
         <div id="nav" >
            <div id="welcomingDiv">
        <p id="wlcMessage" >Welcome<span id="userName">, ${res.data.user[0].firstName} ${res.data.user[0].lastName}</span></p>
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
        <div id="audit" class="card">
            <p> Ratio:<span> ${res.data.user[0].auditRatio.toFixed(2)}</span></p>
            <p>Done: <span>${totalUp}</span></p>
            <p>Receiver: <span>${totalDown}</span></p>
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
    </div>
    `
    const appCountainer = document.createElement('div')
    appCountainer.setAttribute('id','appCountainer')
    appCountainer.innerHTML = Profile
    document.body.append(appCountainer)
    document.getElementById('logout').addEventListener('click',()=>{
        logout()
    })
}