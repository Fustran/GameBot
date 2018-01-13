import { Command } from '../command';
import { CommandArgs } from '../commandArgs';
import { ReactionUI } from '../ReactionUI';

class Idle extends Command {

    async exec(args: CommandArgs) {
        let UI = new ReactionUI(args, ['◀', '▶'], {
            'author': {
                'name': 'Help Menu',
                'icon_url': 'https://cdn.discordapp.com/embed/avatars/0.png'
            },
            'fields': [
                {
                    "name": "AAAAAAA",
                    "value": "aaaaaaaaaaaaaaa"
                }
            ]
        });
    }

    constructor() {
        super({
            name: 'Idle',
            cmdAliases: ['idle', 'i'],
            desc: 'Idle game stuff.',
            reqArgs: 0
        });
    }
}

export = Idle;