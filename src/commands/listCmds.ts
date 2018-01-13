import { Command } from '../command';
import { CommandArgs } from '../commandArgs';

class listCmds extends Command {
    async exec(args: CommandArgs) {
        console.log(args.client.cmds);
    }

    constructor() {
        super({
            name: 'listCommands',
            cmdAliases: ['l', 'list', 'listcommands'],
            desc: 'Lists the loaded commands. Debug tool.',
            reqArgs: 0
        });
    }
}

export = listCmds;