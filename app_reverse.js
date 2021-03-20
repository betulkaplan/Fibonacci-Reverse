function reverseString(myStr){
    let revStr = ''
    for(let i = myStr.length-1; i >= 0; i--){
        revStr += myStr[i]
    }
    return revStr;
}

function reverseString2(dummyStr){
    let strArr = dummyStr.split("");
    strArr = strArr.reverse();
    strArr = strArr.join("");
    return strArr;
}
