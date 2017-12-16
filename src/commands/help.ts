import { Command } from '../command';
import { commandArgs } from '../commandArgs';
import { Message, Client } from 'discord.js';

export class Help extends Command {
    
    async exec(msg: Message, client: Client) {
        
    }

    constructor() {
        super({
            name: 'Help',
            cmd: 'help',
            desc: 'Displays a list of commands.'
        });
    }
}