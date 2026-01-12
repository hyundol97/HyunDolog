import { exec } from 'node:child_process';
import os from 'node:os';

const url = 'http://localhost:3000';

const command =
    os.platform() === 'win32'
        ? `start ${url}`
        : os.platform() === 'darwin'
          ? `open ${url}`
          : `xdg-open ${url}`;

exec(command);
