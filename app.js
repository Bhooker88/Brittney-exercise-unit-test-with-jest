// function fromYenToPound
const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen *0.8;
    return valueInPound;
}
// function fromDollarToYen
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}

// function "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

//function for sum of 2 numbers
const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

