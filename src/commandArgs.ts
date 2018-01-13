import { Message } from 'discord.js';
import { Client } from './Client';

// Interface for what gets passed to our command classes
export interface CommandArgs {
    args: Array<string>;
    msg: Message;
    client: Client;
}