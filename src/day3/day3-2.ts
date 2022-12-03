import { syncReadFileLines } from "../common/fileReaders";
import { offsetAlpha } from "../common/commonVars";

let id_index = 0;
class Rucksack{
    id: number;
    entire: string;
    first: string;
    second: string;
    match: number;

    constructor(entire: string){
        this.id = id_index;
        id_index++;
        this.entire = entire;
        this.first = this.entire.slice(0, Number(entire.length / 2))
        this.second = this.entire.slice(Number(entire.length / 2), entire.length)
        this.match = 0
        for(const char of this.first){
            if(this.second.includes(char)){
                this.match = offsetAlpha.indexOf(char);
                break;
            }
        }
    }
}
function innerMatch(innerArray: Array<Rucksack>){
    try {
        for(const char of innerArray[0].entire){
            let count = 0;
            innerArray.forEach((sack) => {
                if(sack.entire.includes(char)){
                    count += 1;
                }
            })
    
            if(count == innerArray.length){
                return offsetAlpha.indexOf(char)
            }
        }
        
    } catch (error) {
        console.error(error)
    }
    
    console.log("something might be wrong here");
    console.log(innerArray);
    return 0;
}

let file = syncReadFileLines("src/day3/input.txt")
// file = [
//     "vJrwpWtwJgWrhcsFMMfFFhFp",
//     "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
//     "PmmdzqPrVvPwwTWBwg",
//     "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
//     "ttgJtRGJQctTZtZT",
//     "CrZsJsPPZsGzwwsLwLmpwMDw"
// ]

let rucksacks: Array<Rucksack> = [];
file.forEach((line) => {
    if(line != ""){
        rucksacks.push(new Rucksack(line))
    }
})

let skip = 0;
let take = 3;
let sum = 0;
while(true){
    const inner = rucksacks.slice(skip, skip + take);
    skip += 3;
    sum += innerMatch(inner);

    if(skip >= rucksacks.length){
        break;
    }

}

console.log(sum)