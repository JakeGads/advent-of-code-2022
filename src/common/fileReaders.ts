import { readFileSync } from "fs";

export function syncReadFile(filename: string) {
    const result = readFileSync(filename, 'utf-8');
    return result;
}

export function FileToArray(filename: string) {
    const result = syncReadFile(filename);
    const arr = result.split('\n');
    return arr;
}