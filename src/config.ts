//import * as fs from 'fs';

export class Config {
    public discordToken: string;

    constructor() {
        this.discordToken = process.env.GAMEBOT_TOKEN;
    }
}