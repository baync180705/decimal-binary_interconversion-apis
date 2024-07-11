let  decimalToBinary = (decimal)=>{
    let binaryList = []

    while(decimal>1){
        let r = decimal%2
        decimal = Math.floor(decimal/2)
        binaryList.push(r)
    }
    binaryList.push(1)
    const binary = binaryList.reverse().join('')
    return binary
}

export default decimalToBinary