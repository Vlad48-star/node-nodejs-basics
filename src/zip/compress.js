import * as path from "path";
import * as fs from "fs";
import * as zlib from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const container = path.join(__dirname, "files");
const fileToCompressPath = path.join(container, "fileToCompress.txt");
const archiveFilePath = path.join(container, "archive.gz");

export const compress = async () => {
  const readStream = fs.createReadStream(fileToCompressPath, "utf8");
  const writeStream = fs.createWriteStream(archiveFilePath);
  const gZip = zlib.createGzip();
  readStream.pipe(gZip).pipe(writeStream);
};

compress();
