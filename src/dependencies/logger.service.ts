export default class LoggerService {
    logRed(str: string) {
        console.log(`%c${str}`, 'color:red');
    }

    logBlue(str: string) {
        console.log(`%c${str}`, 'color:blue');
    }

    logStringWithColor(str: string, color: string) {
        console.log(`%c${str}`, `color:${color}`);
    }
}
