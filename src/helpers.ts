import { Command } from './command';
import path = require('path');
import fs = require('fs');

export async function loadCommands(p: string) : Promise<any> {
    return new Promise((resolve, reject) => {
        // Find files in the commands directory
        fs.readdir(p, (err, files) => {
            if (err) {
                reject(err);
            } else {
                // Try to load commands
                let cmds = new Map();
                files.forEach(file => {
                    if (path.extname(file) === '.js') {
                        try {
                            let cmdClass = require(`${p}/${file}`);
                            let cmd = <Command>new cmdClass();
                            cmd.cmdAliases.forEach(alias => {
                                cmds.set(alias, cmd);
                            });
                        } catch(e) {
                            reject(e);
                        }
                    }
                });
                resolve(cmds);
            }
        });
    });
}