import { logout } from "./logout.js"

export  function showProfile(){
    document.body.innerHTML = ``
    const Profile = `
         <div id="nav" >
            <div id="welcomingDiv">
        <p id="wlcMessage" >Welcome<span id="userName">, jawad zahraoui</span></p>
        </div>
        <div id="logout" >logout</div>
    </div>
    <div id="cardSection" >
        <div id="level" class="card">
            your level:
            <p>22</p>
        </div>
        <div id="xp" class="card">
            your xp:
            <p>356kb</p>
        </div>
        <div id="audit" class="card">
            audit:
            <p>12</p>
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

    document.getElementById('logout').addEventListener('click',(e)=>{
        logout()
    })
}