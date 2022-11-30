import { readFileSync } from "fs";

export function syncReadFile(filename: string) {
    const result = readFileSync(filename, 'utf-8');
    console.log(result); 
    return result;
}