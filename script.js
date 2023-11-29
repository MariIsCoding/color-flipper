const newColor = document.getElementById('newColor');
const color = document.getElementById('color')


const hexVal = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']



function getHexVal(){
    const random = Math.floor(Math.random()* hexVal.length)

    const randomHexVal = hexVal[random]
    return randomHexVal;
}

function getHex(stringLength){
    let hex = ''
    for (let i = 0; i < stringLength; i++){
        hex += getHexVal()
    }

    return hex;
}


newColor.addEventListener('click',() => {
    const hex = '#' + getHex(6)

    document.body.style.setProperty('background-color', hex)
    
    color.innerHTML = hex
})