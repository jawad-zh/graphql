import { xpFormate } from "../utils/xpFormat.js";
import {formatDate} from "../utils/formatDate.js"
export function loadProjects(data){
    let countainer = document.getElementById('lastProjectContainerId')
    for (let project of data[0].transactions){
        const div = document.createElement('div')
        div.classList.add('last-projects-card')
         let card =`
            <div class="last-nameAndTime-project" >
                <div class="name" >${project.object.name}</div>
                <div class="time">${formatDate(project.createdAt)}</div>
            </div>
            <div class="add-kb">
                <p>${xpFormate(project.amount)}</p>
            </div>
        `
        div.innerHTML = card
        countainer.append(div)

    }
    // let card =`<div class="last-projects-card" >
    //         <div class="last-nameAndTime-project" >
    //             <div class="name" ></div>
    //             <div class="time"></div>
    //         </div>
    //         <div class="add-kb">
    //             <p>+15kb</p>
    //         </div>
    //     </div>`
}