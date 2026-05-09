export function xpFormate(num){
    let is = false
    if (num < 0){
        num = -num
        is = true
    }
    if (num>= 1000000){
        if (is){
            return `-${(num/1000000).toFixed(2)} MB`
        }else{
            return `+${(num/1000000).toFixed(2)} MB`

        }
    }else if ( num>= 1000){
        if (is){
            return `-${(num/1000).toFixed(1)} KB `
        }else{
            return `+${(num/1000).toFixed(1)} KB `
        }
    }
    return `${num}`
}