import { Command } from './command';
import { loadCommands } from './helpers';
import { Message } from 'discord.js';
import { config } from './config';
import djs = require('discord.js');

export class Client extends djs.Client {
    cmds: Map<string, Command> = new Map();
    constructor() {
        super();

        loadCommands(`${__dirname}/commands`).then((value) => {
            if (value instanceof Map) {
                this.cmds = value;
            }
        }).catch((e) => console.error(e));

        this.on('message', this.onMessage);
        this.on('ready', this.onReady);
        this.on('reconnecting', this.onReconnecting);
    }

    async onMessage(msg: Message) {
        let findCommand = new RegExp(`^${config.commandChar}[^ ].*`).exec(msg.content);
        if (findCommand !== null) {
            // Seperate command word from args
            let args = findCommand[0].split(' ');
            let cmdString = args[0].slice(1).toLowerCase();
            args = args.splice(1);
            let cmd = this.cmds.get(cmdString);
            // If we find the command, try to run it
            if (cmd) {
                try {
                    let res = await cmd.exec({args, msg, client: this});
                } catch (e) {
                    console.error(`exec failed. | ${e}`);
                }
            }
        }
    }

    async onReady() {
        console.log(`${this.user.username} ready.`);
    }

    async onReconnecting() {
        console.error(`${this.user.username} reconnecting.`);
    }
}