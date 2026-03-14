export function loadRatio(data){
    console.log('data',data);
    
    const failedTime = data[0].failed.aggregate.count
    const validTime = data[0].success.aggregate.count

    const totalAudit = failedTime + validTime
    if(totalAudit === 0) return

    const validPercent = (validTime / totalAudit) * 100
    const failedPercent = (failedTime / totalAudit) * 100

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
        `Ratio : ${data[0].auditRatio.toFixed(2)} /
        ${totalAudit} Audits
        `
        const failedCard = document.getElementById('failedCard')
        const validedCard = document.getElementById('validedCard')
        failedCard.innerHTML =` 
        ${failedPercent.toFixed(2)}%
        `
         validedCard.innerHTML =` 
        ${validPercent.toFixed(2)}%
        `
        validedCard.style.color="#22c55e"
        failedCard.style.color="#ef4444"
}