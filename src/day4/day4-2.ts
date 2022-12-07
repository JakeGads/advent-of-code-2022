import { FileToArray } from "../common/fileReaders";
let data = FileToArray("src/day4/input.txt");

class Group{
    firstArray: Array<number>;
    secondArray: Array<number>;

    constructor(entire: string){
        let groups = entire.split(",")
        let first = this.createGrouping(groups[0]);
        let second = this.createGrouping(groups[1])
        this.firstArray = this.createArray(first[0], first[1]);
        this.secondArray = this.createArray(second[0], second[1]);
    }

    private createGrouping(group: string){
        return group.split("-").map((x) => Number(x));
    }

    private createArray(low: number, high: number){
        let temp: Array<number> = [];

        for(let i = low; i <= high; i++){
            temp.push(i)
        }

        return temp
    }

    compare(): number {
        for(let i = 0; i < this.firstArray.length; i++){
            if(this.secondArray.includes(this.firstArray[i])){
                return 1;
            }
        }

        return 0;
    }
}

// data = ["2-4,6-8","2-3,4-5","5-7,7-9","2-8,3-7","6-6,4-6","2-6,4-8"]

let sum = 0;
data.forEach((x) => {
    if(x != ''){
        console.log(new Group(x))
        sum += new Group(x).compare();
    }
})

console.log(sum)