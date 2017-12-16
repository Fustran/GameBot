import { Client, Message } from 'discord.js';
import { ParseMsg } from './parseMsg';

export abstract class Listeners {

    static RegisterListeners(client: Client) {
        client.on('message', (m: Message) => { ParseMsg.parse(m, client); });
        client.on('ready', () => { console.log(`${client.user.username} ready.`); });
        client.on('reconnecting', () => { console.warn(`${client.user.username} reconnecting.`); });
    }
}