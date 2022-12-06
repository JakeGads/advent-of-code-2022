import { syncReadFile } from "../common/fileReaders";
let data = syncReadFile("src/day6/input.txt")
// data = "bvwbjplbgvbhsrlpgdmjqwftvncz" // 5
// data = "nppdvjthqldpwncqszvftbrmjlhg" // 6
// data = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg" // 10
// data = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw" // 11
const markerLength = 14;
for(let i = 0; i < data.length; i++){
    let curr = data.slice(i, i+markerLength);
    if(curr.length < markerLength) continue
    let clear = 0;
    for(let j = 0; j < curr.length; j++){
        if(curr.indexOf(curr[j]) == curr.lastIndexOf(curr[j])){
            clear++
        } else {
            break
        }
    } 

    if(clear == markerLength){
        console.log(i+markerLength)
        break
    }
}