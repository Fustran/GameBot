import { Message, Client } from 'discord.js';
import { CommandProperties } from './commandProperties';
import { CommandArgs } from './commandArgs';

export abstract class Command {
    name: string;
    desc: string;
    cmdAliases: Array<string>;
    reqArgs: number;
    reqPerms?: Array<string>;

    constructor(props: CommandProperties) {
        this.name = props.name;
        this.cmdAliases = props.cmdAliases;
        this.desc = props.desc;
        this.reqArgs = props.reqArgs;
        this.reqPerms = props.reqPerms;
    }
    abstract exec(args: CommandArgs) : Promise<any>
}