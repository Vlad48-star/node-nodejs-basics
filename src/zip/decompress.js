import * as path from "path";
import * as fs from "fs";
import * as zlib from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const container = path.join(__dirname, "files");
const fileToDecompressPath = path.join(container, "archive.gz");
const textFilePath = path.join(container, "fileToCompress.txt");

export const decompress = async () => {
  const readStream = fs.createReadStream(fileToDecompressPath);
  const writeStream = fs.createWriteStream(textFilePath);
  const gunZip = zlib.createGunzip();
  readStream.pipe(gunZip).pipe(writeStream);
};

decompress();
