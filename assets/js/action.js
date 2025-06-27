import { downloadLocalFile } from './downloads.js';

document.addEventListener('DOMContentLoaded', async () => {
    let ghToken = null;
    
    const down = await downloadLocalFile('github.txt');
    console.log('Downloaded', down)
});
