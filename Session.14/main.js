
import { Maths } from "./maths.js";
import chalk from "chalk";


    const [command, ...args] = process.argv.slice(2);
    
    // const args = process.argv.slice(2);
    // const [command, numbers] = args;
    // const parcel = numbers
    //     .split(",")
    //     .map((value) => parseInt(value.trim()))
    // console.log(sum(parcel))


    const maths = new Maths(args);

    switch (command.toString().toLowerCase()) {
        case "sum":
            console.log(chalk.green.bold("Calculating sum..."))
            console.log(chalk.blue.bold(`Your sum result of is: ${chalk.greenBright.bold(maths.sum([4, 5, 7, 1, 33]))}`));
            break;

        case "average":
            console.log(chalk.green.bold("Calculating average..."))
            console.log(chalk.blue.bold(`Your average result is: ${chalk.greenBright.bold(maths.average([4, 5, 7, 1, 33]))}`));
            break;

        case "median":
            console.log(chalk.green.bold("Calculating median..."))
            console.log(chalk.blue.bold(`Your median result is: ${chalk.greenBright.bold(maths.median([4, 5, 7, 1, 33]))}`));
            break;
        
        default:
            console.error(chalk.redBright.bold("No command with this name."));
    }
