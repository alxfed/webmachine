---
---
import { downloadLocalFile } from './downloads.js';

document.addEventListener('DOMContentLoaded', async () => {
    let ghToken = null;
    
    const down = await downloadLocalFile({{ site.github_settings.token_file }});
    console.log('Downloaded', down)
});
