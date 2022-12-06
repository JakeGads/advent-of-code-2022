import { syncReadFileLines } from "../common/fileReaders";
const data = syncReadFileLines("src/day5/input.txt")
let movements: Array<string> = [];

class Inner{
    letter: string;
    constructor(letter: string){
        this.letter = letter;
    }
}

class Container{
    inners: Array<Inner>;
    designation: number;
    constructor(designation: number){
        this.inners = [];
        this.designation = designation;
    }

    addToTop(inner: Inner){
        this.inners.push(inner)
    }

    reverse(){
        this.inners.reverse();
    }

    takeFromTop(amount: number){
        let returns: Array<Inner> = []
        for(let i = 0; i < amount; i++){
            let temp = this.inners.pop();
            if(temp) 
                returns.push(temp) 
            else 
                break;
        }
        returns.reverse();
        return returns
    }
}

class Instruction {
    amount: number;
    from: number;
    to: number;

    constructor(amount: number, from: number, to: number){
        this.amount = amount;
        this.from = from;
        this.to = to;
    }

}

const containers: Array<Container> = [
    new Container(1),
    new Container(2),
    new Container(3),
    new Container(4),
    new Container(5),
    new Container(6),
    new Container(7),
    new Container(8),
    new Container(9),
]

function onlySpaces(str: string) {
    return str.trim().length === 0;
}

// creates containers and 
for(let i = 0; i < data.length; i++){
    if (data[i] == '') {
        for(let j = i+1; j < data.length; j++){
            movements.push(data[j])
        }
        break;
    }
    let temp = data[i];
    while(temp.includes('[') || temp.includes(']')){
        temp = temp.replace('[', ' ').replace(']', ' ');
    }
    console.log(temp)
    let count = 0;
    for(let j = 1; j < temp.length; j += 4){
        let curr = temp.slice(j, j+3);
        if(!onlySpaces(curr)){
            containers[count].addToTop(new Inner(curr.trim()))
        }
        count++;
    }
}

containers.forEach(element => {
    element.takeFromTop(1); // remove the number
    element.reverse();
});

movements.forEach((element) => {
    function parseInstruction(str: string){
        while(str.includes(" ")){
            str = str.replace(" ", "");
        }
        return new Instruction(
            parseInt(str.slice(str.indexOf("move") + "move".length, str.indexOf("from"))),
            parseInt(str.slice(str.indexOf("from") + "from".length, str.indexOf("to"))) - 1,
            parseInt(str.slice(str.indexOf("to") + "to".length)) - 1
        )
    }

    if(onlySpaces(element)) return
    var instruction = parseInstruction(element)
    var temp = containers[instruction.from].takeFromTop(instruction.amount)
    temp.forEach((value: Inner) => {
        containers[instruction.to].addToTop(value)
    })
})

containers.forEach((element) => {
    process.stdout.write(`${element.inners.pop()?.letter}`)
})

