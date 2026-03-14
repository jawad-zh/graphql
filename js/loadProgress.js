export function  loadProgress(data){
console.log('from loadProgress',data);
    const progressgraph = document.getElementById('progressgraph')
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")

    svg.setAttribute('width','100%')
    svg.setAttribute('height','300')
    svg.classList.add('progressSvg')
    progressgraph.append(svg)

    //---------- xline
    const xLine = document.createElementNS("http://www.w3.org/2000/svg", "line")

        xLine.setAttribute('x1',10)
        xLine.setAttribute('y1',280)

        xLine.setAttribute('x2',600)
        xLine.setAttribute('y2',280)
        xLine.setAttribute('stroke','white')
        
        svg.appendChild(xLine)

        //-------- yline
        const yLine = document.createElementNS("http://www.w3.org/2000/svg","line")

        yLine.setAttribute('x1',10)
        yLine.setAttribute('y1',0)

        yLine.setAttribute('x2',10)
        yLine.setAttribute('y2',280)
        yLine.setAttribute('stroke','white')

        svg.appendChild(yLine)

        const maxXp = Math.max(...data.map(d=> d.amount))
        const height = 280
        const yPosition = data.map(d=> height - (d.amount / maxXp) * height)
    console.log('yPosition',yPosition);
    
        const width = 600;


        const maxXP = Math.max(...data.map(d => d.amount));

        const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;  
        const y = height - (d.amount / maxXP) * height; 
        return { x, y };
        });

console.log('points',points);
let pointsString = points.map(p => `${p.x},${p.y}`).join(" ");
console.log(pointsString);

const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");

line.setAttribute("points", pointsString);
line.setAttribute("fill", "none");          
line.setAttribute("stroke", "#9969FF");    
line.setAttribute("stroke-width", "3");     
svg.appendChild(line);
points.forEach(p => {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  
  circle.setAttribute("cx", p.x);       
  circle.setAttribute("cy", p.y);        
  circle.setAttribute("r", 4);           
  circle.setAttribute("fill", "#FFD500"); 
  
  svg.appendChild(circle);
});
        
}
