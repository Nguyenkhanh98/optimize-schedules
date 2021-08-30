import path from 'path';

const locationARG = process.argv.pop() || 'data/input.json';

const [folderName, file] = locationARG.split('/');

const [fileName, extension] = file.split('.');

const INPUT_FILE_NAME = file;
const OUTPUT_FILE_NAME = `${fileName}.optimal.json`;
const IO_LOCATION = path.join(__dirname, '..', folderName);

export {
    INPUT_FILE_NAME,
    OUTPUT_FILE_NAME,
    IO_LOCATION
}
