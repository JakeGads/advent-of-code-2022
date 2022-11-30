import { syncReadFile } from "../common/fileReaders";

const file = syncReadFile("src/day1/data.txt");
console.log(file);