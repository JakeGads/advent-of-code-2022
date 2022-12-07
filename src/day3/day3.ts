import { FileToArray } from "../common/fileReaders";
import { offsetAlpha } from "../common/commonVars";

class Rucksack{
    first: string;
    second: string;
    match: number;

    constructor(entire: string){
        this.first = entire.slice(0, Number(entire.length / 2))
        this.second = entire.slice(Number(entire.length / 2), entire.length)
        this.match = 0
        for(const char of this.first){
            if(this.second.includes(char)){
                this.match = offsetAlpha.indexOf(char);
                break;
            }
        }
    }
}

const file = FileToArray("src/day3/input.txt")
let sum = 0;

file.forEach((line) => {
    sum += new Rucksack(line).match
})

console.log(sum)