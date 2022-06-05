import * as path from "path";
import * as fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const container = path.join(__dirname, 'files');
const fileToWritePath = path.join(container, 'fileToWrite.txt');

export const write = async () => {
  const writeStream = fs.createWriteStream(fileToWritePath);
  process.stdin.on('data', (data) => {
    writeStream.write(data);
    process.exit();
  });
};

write();