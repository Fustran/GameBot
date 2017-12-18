import { Message, Client } from 'discord.js';
import { config } from './config';

export abstract class ParseMsg {

    static parse(msg: Message, client: Client) {
        let findCommand = new RegExp(`^${config.commandChar}[^ ].+`).exec(msg.content);
        if (findCommand !== null) {
            // Seperate command word from args
            let args = findCommand[0].split(' ');
            let cmd = args[0].slice(1);
            args = args.splice(1);
            console.log(cmd);
            console.log(args);
        }
    }
}