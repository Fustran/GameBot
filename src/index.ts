import { Client } from 'discord.js';
import { Config } from './config';
import { Listeners } from './listeners';

let client = new Client();
let config = new Config();

client.login(config.discordToken);
Listeners.RegisterListeners(client);
