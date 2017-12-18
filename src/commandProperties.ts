export interface CommandProperties {
    name: string;
    cmdAliases: Array<string>;
    desc: string;
    reqArgs: number;
    reqPerms?: Array<string>;
}