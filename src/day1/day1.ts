import { syncReadFileLines } from "../common/fileReaders";

const file = syncReadFileLines("src/day1/input.txt");

let largestElf = 0;
let currentArr = [0];

file.forEach((value: string) => {
    if(value == ""){
        const sum = currentArr.reduce((a,b) => a+b);
        currentArr = [];
        if(sum > largestElf){
            largestElf = sum;
        }
        return;
    }
    currentArr.push(Number(value))
})

console.log(largestElf)