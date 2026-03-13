
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
        chartdiv.append(key)
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('height','100%')
        svg.setAttribute('width','100%')
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute('x','0')
        rect.setAttribute('y','0')        
        rect.setAttribute('width',`${totalExpSkills[key]}%`)
        rect.setAttribute('height',"100%")
        rect.setAttribute('fill','#9969FF')
       svg.append(rect)
       chartdiv.append(svg)
       skillgraph.append(chartdiv)
    }
    
}