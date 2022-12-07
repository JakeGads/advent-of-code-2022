import { FileToArray } from "../common/fileReaders";
const file = FileToArray("src/day1/input.txt");

let largestElfs = [0, 0, 0];
let currentArr = [0];

file.forEach((value: string) => {
    if(value == ""){
        const sum = currentArr.reduce((a,b) => a+b);
        currentArr = [];
        if(sum > largestElfs[2]){
            largestElfs.push(sum);
            largestElfs = largestElfs.sort((a,b) => b-a);
            largestElfs = largestElfs.slice(0,3);
        }
        return;
    }
    currentArr.push(Number(value))
})

console.table({
    "indie": largestElfs,
    "Sum": largestElfs.reduce((a,b) => a + b)
})