let binaryToDecimal = (binary)=>{
    const binaryList = binary.split('').reverse()

    let decimalValue = 0

    for(let i=0;i<binaryList.length;i++){
        decimalValue += parseInt(binaryList[i])*(2**i)
    }

    return JSON.stringify(decimalValue)
}

export default binaryToDecimal