import yargs from "yargs/yargs"
import chalk from "chalk"
import fs from "fs"

const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;
const isWin: boolean = process.platform === "win32"

// Variables
let packagesFolder: string = '';
if (isWin) {
    packagesFolder = __dirname.substr(0, __dirname.lastIndexOf("\\")) + "\\packages\\";
} else {
    packagesFolder = __dirname.substr(0, __dirname.lastIndexOf("/")) + "/packages/";
}

const newPackageName: string = argv._[0] as string;
const newPackagePath: string = packagesFolder + newPackageName;

const validNMPPackageName = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
if(!validNMPPackageName.test(newPackageName)) {
    console.log(chalk.red("🛑 Not a valid package name"));
    process.exit(0);
}

if(fs.existsSync(newPackagePath)){
    console.log(chalk.red("🛑 Component already exists!"));
    process.exit(0)

}

// button-group ButtonGroup
const newPackageNameCamelCase: string = 
    newPackageName
        .split('-') // ['button', 'group']
        .map(partOfTheName => partOfTheName[0].toLocaleUpperCase() + partOfTheName.slice(1)) // ['Button', 'Group']
        .join('') // 'ButtonGroup'

console.log('✅ created ' + newPackagePath)
fs.mkdirSync(newPackagePath);
fs.mkdirSync(newPackagePath + '/src');

