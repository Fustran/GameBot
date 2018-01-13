import { Message, MessageReaction, ReactionCollector, ReactionEmoji, User } from 'discord.js';
import { CommandArgs } from './commandArgs';

export class ReactionUI {
    reactions: Array<string>;
    author: User;

    constructor(args: CommandArgs, reactions: Array<string>, embedObj: Object) {
        this.reactions = reactions;
        this.author = args.msg.author;

        let embed;
        try {
            embed = args.msg.channel.send({embed: embedObj});
            embed.then((e) => {
                if (e instanceof Message) {
                    this.setupEmbed(e);
                }
            });
        } catch(e) {
            console.error(e);
        }
    }

    // Do some tasks like adding reactions and establishing listeners for our richEmbed UI
    async setupEmbed(msg: Message) {
        try {
            const msgReactions = await this.createOrderedReactions(msg);
        } catch(err) {
            console.error(err);
        }
    }

    // Make sure we add the reactions to the post in the correct order, then return a map of the MessageReactions
    async createOrderedReactions(, msg: Message) : Promise<any> {
        return new Promise( async (resolve, reject) => {
            let msgReactions: Map<string, MessageReaction> = new Map();
            for (let reaction of this.reactions) {
                try {
                    const msgReact = await msg.react(reaction);
                    msgReactions.set(reaction, msgReact);
                } catch(err) {
                    console.error(err);
                    reject(err);
                }
            }
            resolve(msgReactions);
        });
    }
}