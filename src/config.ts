interface Config {
    discordToken: string
    commandChar: string;
}
export const config : Config = {
    discordToken: process.env.GAMEBOT_TOKEN,
    commandChar: '>'
}