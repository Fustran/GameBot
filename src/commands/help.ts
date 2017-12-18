import { Command } from '../command';
import { Message, Client } from 'discord.js';

export class Help extends Command {
    
    async exec(msg: Message, client: Client) {
        //HELP STUFF
    }

    constructor() {
        super({
            name: 'Help',
            cmdAliases: ['help', 'h'],
            desc: 'Displays a list of commands. Takes no arguments.',
            reqArgs: 0
        });
    }
}