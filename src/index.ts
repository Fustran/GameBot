import { Client } from './Client';
import { config } from './config';

let client = new Client();

client.login(config.discordToken).catch((reason) => {
    console.warn(`Failed to login: ${reason}`);
});