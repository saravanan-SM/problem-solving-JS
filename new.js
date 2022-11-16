
// ---------------- Problem 1 ---------------------------
let input = "C1e10h23P4k13";
let result = "";
let str = "";
let num = '';

for(let i = 0; i <= input.length; i++){
    if(parseFloat(input[i]) || parseFloat(input[i]) === 0 ){
        console.log(typeof(0))
        num = num.concat("", input[i])
    } else{
        if(str.length > 0) {
            for(let j = 0; j < num; j++){
                result += str;
            }
            num = '';
        }
        str = '';
        str += input[i]
    }
}

console.log("Problem 1 ANS:-", result)

// --------------- Problem 2 ----------------------

let commissionDetail = [
    {
        from: 1, 
        to: 400, 
        commission: 5
    },
    {
        from: 401, 
        to: 800, 
        commission: 4
    },
    {
        from: 801, 
        to: 1200, 
        commission: 3
    },
    {
        from: 1201, 
        to: 9000, 
        commission: 2
    },
    {
        from: 9001, 
        to: 15000, 
        commission: 1
    }
]
function numTest(num){
    commissionDetail.forEach(element => {
        if( num >= element.from && num <= element.to ){
            console.log("Problem 2 ANS:-", `Your commission rate is ${element.commission}% you will get $${num * element.commission / 100} and remaining amount is $ ${num}`)
        }
    });
}
numTest(12452)






// --------------- Problem 3 ----------------------

let words = "virat sachin dhoni virat rahul virat rahul sachin";

function countRepeatedWords(data) {
  let char = data.split(" ");
  let wordMap = {};

  for (let i = 0; i < char.length; i++) {
    let currentWordCount = wordMap[char[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[char[i]] = count + 1;
  }
  return wordMap
}

console.log("Problem 3 ANS:-", countRepeatedWords(words));
