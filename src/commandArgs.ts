import { Message, Client } from "discord.js";

// Interface for what gets passed to our command classes
export interface CommandArgs {
    args: Array<string>;
    msg: Message;
    client: Client;
}