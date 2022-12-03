import { syncReadFileLines } from "../common/fileReaders";
const file = syncReadFileLines("src/day2/input.txt");

enum PLAY{
    ROCK = 1,
    PAPER = 2,
    SICSSORS= 3,
    ERROR = 0
}

enum COMMAND{
    LOSE = 0,
    DRAW = 3,
    WIN = 6,
    ERROR = 0
}

function parsePlay(input: string){
    switch(input){
        case 'A': return PLAY.ROCK;
        case 'B': return PLAY.PAPER;
        case 'C': return PLAY.SICSSORS;
        default: return PLAY.ERROR;
    }
}

function parseCommand(input: string){
    switch(input){
        case 'X': return COMMAND.LOSE
        case 'Y': return COMMAND.DRAW
        case 'Z': return COMMAND.WIN
        default: return COMMAND.ERROR
    }
}

function calcPlay(command: COMMAND, play: PLAY){
    switch(command){
        case COMMAND.WIN:
            switch(play){
                case PLAY.ROCK: return PLAY.PAPER;
                case PLAY.PAPER: return PLAY.SICSSORS;
                case PLAY.SICSSORS: return PLAY.ROCK;
            }
            break
        case COMMAND.DRAW: return play;
        case COMMAND.LOSE:
            switch(play){
                case PLAY.ROCK: return PLAY.SICSSORS;
                case PLAY.PAPER: return PLAY.ROCK;
                case PLAY.SICSSORS: return PLAY.PAPER;
            }
    }

    return PLAY.ERROR;
}

let score = 0;

file.forEach((value) => {
    const opp = parsePlay(value.split(" ")[0]);
    const command = parseCommand(value.split(" ")[1]);

   score += command + calcPlay(command, opp); 
})

console.table({score:score})