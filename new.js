
// ---------------- Problem 1 ---------------------------
let input = "C1e10h23P4k13";
let result = "";
let str = "";
let num = '';

for(let i = 0; i <= input.length; i++){
    if(parseFloat(input[i]) || parseFloat(input[i]) === 0 ){
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



// --------------- Problem 4 ----------------------
// get like this bracket (), (), ()

let char = '((()()))()))(())))';

let split = char.split('')
let join = [];

split.forEach((ele, index) => {
  if(index % 2 == 0 && ele == '(' && split[index+1] == ')'){
    join.push(ele);
    join.push(split[index+1]);
  }
})

console.log("Problem 3 ANS:-", join)


// --------------- Problem 5 ----------------------
// Get Missing Numbers From Array [1,2,3,5,7,9]

const missingNumbers = num => {
    const max = Math.max(...num);
    const min = Math.min(...num);
    const missing = new Array();

    for(let i=min; i<= max; i++) {
        if(!num.includes(i)) {
        missing.push(i);
        }
    }
    return missing;
}

console.log("ans =>", missingNumbers([1,2,3,5,7,9]));


// --------------- Problem 6 ----------------------
// Create Diemesional Array 

const dynamicDimensional = num => {
    let ans = new Array();
    let diemesional = 3;
    let modulo = Math.ceil(num.length / diemesional);
    for(var i = 0; i < modulo; i++){
        ans.push(num.slice(i*diemesional, ((i+1)*diemesional)))
    }
    return ans;
}

console.log("ans =>", dynamicDimensional([1,2,3,4,56,7,8,9,10]));  