export function xpFormate(num){
    if (num>= 1000000){
        return `${(num/1000000).toFixed(2)} MB`
    }else if ( num>= 1000){
        return `${(num/1000).toFixed(1)} KB `
    }
    return `${num}`
}