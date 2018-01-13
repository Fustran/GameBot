import { Command } from '../command';
import { CommandArgs } from '../commandArgs';

class Help extends Command {

    async exec(args: CommandArgs) {
        let text = '\n';
        // We have the same command registered multiple times, so cache already parsed by name as well
        let alreadyParsed = new Map();
        let commands = args.client.cmds;
        commands.forEach((cmd) => {
            if (cmd instanceof Command && alreadyParsed.get(cmd.name) === undefined) {
                text += `**Command Name:**\n${cmd.name}\n**Command Aliases:**\n${cmd.cmdAliases}\n**Description:**\n${cmd.desc}\n \n`;
                alreadyParsed.set(cmd.name, cmd.name);
            }
        });
        args.msg.reply(text);
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

export = Help;