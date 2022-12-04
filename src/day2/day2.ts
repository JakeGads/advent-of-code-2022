import { FileToArray } from "../common/fileReaders";
const file = FileToArray("src/day2/input.txt");

enum plays{
    ROCK,
    PAPER,
    SICSSORS,
    ERROR
}

function transform(input: string){
    if("AX".includes(input)){
        return plays.ROCK
    }

    if("BY".includes(input)){
        return plays.PAPER
    }

    if("CZ".includes(input)){
        return plays.SICSSORS
    }

    return plays.ERROR
}

function check(opp: plays, me:plays): number{
    switch (me) {
    case plays.ROCK:
        switch (opp) {
            case plays.PAPER:
                return 0;
                break;
            case plays.ROCK:
                return 3;
            case plays.SICSSORS:
                return 6;
                break;
        }
        break;
    case plays.PAPER:
        switch (opp) {
            case plays.PAPER:
                return 3;
                break;
            case plays.ROCK:
                return 6;
            case plays.SICSSORS:
                return 0;
                break;
        }
        break;
    case plays.SICSSORS:
        switch (opp) {
            case plays.PAPER:
                return 6;
                break;
            case plays.ROCK:
                return 0;
            case plays.SICSSORS:
                return 3;
                break;
        }
        break;
    default:
        return 0;
        break;
    }
    return 0;
}

let score = 0;

file.forEach((value) => {
    const opp = transform(value.split(" ")[0]);
    const me = transform(value.split(" ")[1]);

    if(opp == plays.ERROR || me == plays.ERROR){
        console.log(score)
    }

    score += check(opp, me) + (me + 1);
})