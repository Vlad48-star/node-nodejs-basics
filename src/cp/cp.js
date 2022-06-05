import path from 'path';
import { fork } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const moduleDirname = dirname(__filename);
const childFilePath = path.resolve(moduleDirname, 'files/script.js');
const argsArr = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
    const child = fork(childFilePath, args);
    process.stdout.write(`Please, input text\n`); 
    child.on('message', () => {
        process.stdout.write(`Please, input text\n`); 
    })
};

spawnChildProcess(argsArr);