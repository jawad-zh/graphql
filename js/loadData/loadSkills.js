
export function  loadSkills(skillData){
    const totalExpSkills = {}
    for (let skill of skillData){
        if (totalExpSkills[skill.type]){
            if (totalExpSkills[skill.type] < skill.amount){
                totalExpSkills[skill.type] = skill.amount
            }
        }else{
            totalExpSkills[skill.type] = skill.amount
        }
    }    
    const skillgraph = document.getElementById('skillgraph')
    for (let key in totalExpSkills){

        const chartdiv = document.createElement('div')
        chartdiv.classList.add('chart')

        const skillName = document.createElement('p')
        skillName.classList.add('skillName')
        skillName.innerHTML = `${key.replace("skill_","")}`
        chartdiv.append(skillName)

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('height','100%')
        svg.setAttribute('width','100%')

        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute('x','0')
        rect.setAttribute('y','0')        
        rect.setAttribute('width',`${totalExpSkills[key]}%`)
        rect.setAttribute('height',"100%")
        rect.setAttribute('fill','#9969FF')
        rect.setAttribute('rx','10')
        rect.setAttribute('ry','10')
       svg.append(rect)
       chartdiv.append(svg)
       skillgraph.append(chartdiv)

        const skillPercent = document.createElement('p')
        skillPercent.classList.add('skillPercent')
        skillPercent.innerHTML = `${totalExpSkills[key]}%`||"0"
        chartdiv.append(skillPercent)
    }
    
}