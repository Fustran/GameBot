import { Message, Client } from 'discord.js';
import { commandArgs } from './commandArgs';

export abstract class Command {
    name: string;
    desc: string;
    cmd: string;

    constructor(args: commandArgs) {
        this.name = args.name;
        this.cmd = args.cmd;
        this.desc = args.desc;
    }
}