let myMessage = 'hello my friends, today is a new day';
let mySplit = myMessage.split(" ");
console.log(mySplit.length);
console.log(myMessage[0]);
console.log(myMessage[myMessage.length -1]);

let newM = myMessage.toUpperCase();
console.log(newM);
let firstLetter = newM[0];
let restMessage = myMessage.slice(1);
let joinM = firstLetter.concat(restMessage);
console.log(joinM);

let resultM = mySplit.map(s => {
    let upper = s.toUpperCase();
    let firstLetter = upper[0];
    let rest = s.slice(1);
    let join = firstLetter.concat(rest);
    return join;
});
console.log(resultM);
let oneR = resultM.join(' ');
console.log(oneR);