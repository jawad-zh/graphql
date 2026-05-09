export function loadRatio(data){
    console.log('data',data);
    
    const failedTime = data[0]?.failed.aggregate.count  || "0"
    const validTime = data[0]?.success.aggregate.count || "0"

    const totalAudit = failedTime + validTime
    if(totalAudit === 0) return

    const validPercent = (validTime / totalAudit) * 100;
    const failedPercent = (failedTime / totalAudit) * 100
    // if (!validPercent || !failedPercent)return
    const radius = 90
    const circumference = 2 * Math.PI * radius

    const validCircle = document.getElementById("valid")
    const failedCircle = document.getElementById("failed")

    validCircle.style.strokeDasharray =
        `${(validPercent/100)*circumference} ${circumference}`

    failedCircle.style.strokeDasharray =
        `${(failedPercent/100)*circumference} ${circumference}`

    failedCircle.style.strokeDashoffset =
        -(validPercent/100)*circumference

    const percent = document.getElementById("percent")
    percent.innerHTML =
        `Ratio : ${data[0]?.auditRatio?.toFixed(2)||"0"} /
        ${totalAudit} Audits
        `
        const failedCard = document.getElementById('failedCard')
        const validedCard = document.getElementById('validedCard')
        console.log('failed:',failedPercent,'valid:',validPercent);
        
        failedCard.innerHTML =` 
        ${failedPercent?failedPercent.toFixed(2):"0" }%
        `
         validedCard.innerHTML =` 
        ${validPercent?validPercent.toFixed(2):"0" }% 
        `
        validedCard.style.color="#22c55e"
        failedCard.style.color="#ef4444"
}