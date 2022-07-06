function inflationCalculator(){

    let inflationCalculator = document.querySelector('#inflationRate');
let money= document.querySelector('#money');
// komentar za parseFloat //

inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);

    let years = document.querySelector('#years').value;

    years = parseFloat(years);



// formula za izaracunavanje inflacije. //
let worth = money + (money * (inflationRate / 100));




for(let i =1; i<years;  i++  ){
    worth += worth * (inflationRate / 100);
}


worth = worth.toFixed(2);


let newElement =document.createElement('div');

newElement.class = 'new-value';
newElement.innerText = `Danasnjih ${money}  DINARA vredi isto kao   
${worth} DINARA za ${years} godina.`  ;



document. querySelector ('.container').appendChild(newElement);

}