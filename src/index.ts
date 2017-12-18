import { Client } from 'discord.js';
import { config } from './config';
import { Listeners } from './listeners';

let client = new Client();

client.login(config.discordToken);
Listeners.RegisterListeners(client);