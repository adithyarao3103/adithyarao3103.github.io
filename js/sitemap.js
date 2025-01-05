var cmdHistory = [];
var cmdHistoryIndex = -1;

var ipaddr;
function getIPFromAmazon() {
    fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => ipaddr = data)
}
getIPFromAmazon()

const siteMap = {
    'home': {
        url: 'https://adithyarao3103.github.io/',
    },
    'now': {
        url: 'https://adithyarao3103.github.io/now/'
    },
    'interactive': {
        url: 'https://adithyarao3103.github.io/interactive/',
        children: {
            'monte-carlo': {
                url: 'https://adithyarao3103.github.io/Monte-Carlo/'
            },
            'hopfield': {
                url: 'https://adithyarao3103.github.io/Hopfield-Network/'
            },
            'spanning-trees': {
                url: 'https://adithyarao3103.github.io/Spanning-Trees-on-Lattice/',
                children: {
                    'paper.pdf': {
                        url: 'https://adithyarao3103.github.io/Spanning-Trees-on-Lattice/Spanning_Trees_on_a_Lattice.pdf'
                    }
                }
            },
            'game-of-life': {
                url: 'https://adithyarao3103.github.io/Game-Of-Life/'
            }
        }
    },
    'art': {
        url: 'https://adithyarao3103.github.io/art/'
    },
    'old-website': {
        url: 'https://adithyarao3103.github.io/old-website/'
    },
    'older-website': {
        url: 'https://adithyarao3103.github.io/older-website/'
    },
    'travel': {
        url: 'https://adithyarao3103.github.io/travel/'
    },
    'files':{
        children:{
            'cv.pdf': {
                url: 'https://adithyarao3103.github.io/files/Adithya_A_Rao_CV.pdf'
            },
            'quanta.pdf': {
                url: 'https://adithyarao3103.github.io/files/Adithya_Quanta.pdf'
            },
            'The particle problem.pptx': {
                url: 'https://adithyarao3103.github.io/files/The particle problem.pptx'
            }
        }
    }

};

const commands = {
    'help': 'Show available commands',
    'ls': 'List all pages in hierarchy',
    'clear': 'Clear the console',
    'cd': 'Navigate to a page (e.g., cd interactive/hopfield)',
    'uname': 'Print system information',
    'whoami': 'Print effective user name',
    'cowsay': 'Let a cow say something',
    'date': 'Display the current date and time',
    'tree': 'Display the directory structure as a tree',
    'neofetch': 'Display system information in a visually pleasing way',
    'easter': 'Display easter egg commands'
};

const easter_eggs = {
    'coffee': 'Get a virtual coffee break ☕',
    'matrix': 'Enter the matrix mode',
    'weather': 'Check the console weather',
    'dance': 'Make the console dance',
    'flip': 'Flip the console upside down',
    'quote': 'Get a random programmer quote',
    'dinosaur': 'Draw an ASCII dinosaur',
    'fortune': 'Print a random fortune cookie message',
    'sl': 'Run a steam locomotive across your terminal',
}

const outputElement = document.getElementById('output');
const inputElement = document.getElementById('commandInput');
let currentPath = '/';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addToOutputWithAnimation(text, className = '', indent = 0) {
    const div = document.createElement('div');
    div.className = `hierarchy-item ${className}`;
    div.style.animationDelay = `${indent * 0.05}s`;
    div.textContent = '  '.repeat(indent) + text;
    outputElement.appendChild(div);
    await delay(50);
    window.scrollTo(0, document.body.scrollHeight);
}

function addToOutput(text, className = '') {
    const div = document.createElement('div');
    div.textContent = text;
    div.className = className;
    outputElement.appendChild(div);
    window.scrollTo(0, document.body.scrollHeight);
}

async function typeText(text, className = '') {
    const div = document.createElement('div');
    div.className = className;
    outputElement.appendChild(div);
    
    for (let char of text) {
        const span = document.createElement('span');
        span.textContent = char;
        span.className = 'typed-char';
        div.appendChild(span);
        await delay(10);
    }
}

async function listPages(node = siteMap, indent = 0) {
    for (const [key, value] of Object.entries(node)) {
        await addToOutputWithAnimation(`${key}${value.children ? '/' : ''}`, 'success', indent);
        if (value.children) {
            await listPages(value.children, indent + 1);
        }
    }
}

function showHelp() {
    const helpText = Object.entries(commands)
        .map(([cmd, desc]) => `${cmd.padEnd(10)} - ${desc}`)
        .join('\n');
    addToOutput(helpText);
}

function showEaster() {
    const helpText = Object.entries(easter_eggs)
        .map(([cmd, desc]) => `${cmd.padEnd(10)} - ${desc}`)
        .join('\n');
    addToOutput(helpText);
}

function findPageUrl(path) {
    let current = siteMap;
    const parts = path.split('/').filter(Boolean);
    
    for (const part of parts) {
        if (current[part]) {
            current = current[part];
            continue;
        }
        
        if (!current.children || !current.children[part]) return null;
        current = current.children[part];
    }
    
    return current.url;
}

async function handleCommand(cmd) {
    cmdHistory = [cmd, ...cmdHistory];
    cmdHistoryIndex = -1;
    const commandHistory = document.createElement('div');
    commandHistory.className = 'command-history';
    commandHistory.textContent = `➜ ${cmd}`;
    outputElement.appendChild(commandHistory);

    const [command, ...args] = cmd.toLowerCase().trim().split(' ');

    switch (command) {
        case 'ls':
            await listPages();                    
            addToOutputWithAnimation('Use cd <full path> to open the page. Eg. cd interactive/hopfield')
            break;
        case 'clear':
            outputElement.innerHTML = '';
            break;
        case 'help':
            showHelp();
            break;
        case 'cd':
            const path = args[0];
            if (!path) {
                addToOutput('Please specify a path', 'error');
                break;
            }
            const url = findPageUrl(path);
            if (url) {
                window.location.href = url;
            } else {
                addToOutput(`Path not found: ${path}`, 'error');
            }
            break;
        case 'pwd':
            addToOutput(currentPath);
            break;

        case 'easter':
            showEaster();
            break;

        case 'coffee':
            const coffeeStages = [
                'Finding the perfect beans...',
                'Grinding beans...',
                'Heating water to 96°C...',
                'Brewing your virtual coffee...',
                '☕ Here\'s your coffee! *virtual aroma wafting*'
            ];
            for (const stage of coffeeStages) {
                await typeText(stage);
                await delay(800);
            }
            break;

        case 'matrix':
            document.body.style.transition = '0.5s';
            const original = document.body.style.color;
            document.body.style.color = '#00ff00';
            await typeText('Wake up, Neo...', 'success');
            await delay(1000);
            await typeText('The Matrix has you...', 'success');
            await delay(1000);
            await typeText('Follow the white rabbit.', 'success');
            setTimeout(() => {
                document.body.style.color = original;
            }, 3000);
            break;

        case 'weather':
            const weathers = [
                '🌞 Sunny with a chance of syntax errors',
                '🌧️ Raining semicolons',
                '⛈️ Thunder and debugging storms',
                '🌈 Rainbow after successful compilation',
                '❄️ Freezing cold cache misses'
            ];
            addToOutput(weathers[Math.floor(Math.random() * weathers.length)]);
            break;

        case 'dance':
            const danceFrames = ['(⌐■_■)', '(■_■¬)', '(¬_¬■)', '(■¬_■)', '(⌐■_■)'];
            for (let i = 0; i < 3; i++) {
                for (const frame of danceFrames) {
                    await typeText(frame);
                    await delay(200);
                    outputElement.removeChild(outputElement.lastChild);
                }
            }
            addToOutput('🎵 Dance complete! 🎵');
            break;

        case 'flip':
            document.body.style.transform = document.body.style.transform === 'rotate(180deg)' 
                ? 'rotate(0deg)' 
                : 'rotate(180deg)';
            document.body.style.transition = '1s';
            break;

        case 'quote':
            const quotes = [
                '"There are only two hard things in Computer Science: cache invalidation and naming things." - Phil Karlton',
                '"The best error message is the one that never shows up." - Thomas Fuchs',
                '"First, solve the problem. Then, write the code." - John Johnson',
                '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
                '"It\'s not a bug – it\'s an undocumented feature." - Anonymous'
            ];
            addToOutput(quotes[Math.floor(Math.random() * quotes.length)]);
            break;

        case 'dinosaur':
            const dino = `
              __
             / _)
    _.----._/ /
   /         /
__/ (  | (  |
/__.-'|_|--|_|`;
            addToOutput(dino);
            break;

        case 'uname':
            addToOutput('sitemap-1.1.0 website-console for Adithya A Rao');
            break;

        case 'whoami':
            addToOutput(`${ipaddr.slice(0, -1)}@website-console`);
            break;

        case 'sl':
            const train = [
                '           ====        ________                ___________',
                '       _D _|  |_______/        \\__I_I_____===__|_________/',
                '       |(_)---  |   H\\________/ |   |        =|___ ___|',
                '       /     |  |   H  |  |     |   |         ||_| |_||',
                '      |      |  |   H  |__--------------------| [___] |',
                '      | ________|___H__/__|_____/[][]~\\_______|       |',
                '      |/ |   |-----------I_____I [][] []  D   |=======|',
                '    __/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|',
                '     |/-=|___|=    ||    ||    ||    |_____/~\\___/',
                '      \\_/      \\O=====O=====O=====O_/      \\_/'
            ];
            for (const line of train) {
                await addToOutputWithAnimation(line);
                await delay(100);
            }
            break;

        case 'cowsay':
            const message = args.join(' ') || 'Moo!';
            const cowMessage = `
${'_'.repeat(message.length + 2)}
< ${message} >
${'-'.repeat(message.length + 2)}
       \\   ^__^
        \\  (oo)\\________
           (__)\\         )\\/\\
                ||----w |
                ||     ||`;
            addToOutput(cowMessage);
            break;

        case 'fortune':
            const fortunes = [
                'Today is your lucky day to commit code without bugs.',
                'A clever commit message will come to you soon.',
                'Someone will appreciate your well-documented code.',
                'The bug you haveve been looking for is in the last place you will look.',
                'Your code will compile on the first try... eventually.'
            ];
            addToOutput(fortunes[Math.floor(Math.random() * fortunes.length)]);
            break;

        case 'date':
            addToOutput(new Date().toString());
            break;

        case 'tree':
            async function printTree(node = siteMap, prefix = '') {
                for (const [key, value] of Object.entries(node)) {
                    await addToOutputWithAnimation(`${prefix}${prefix ? '└── ' : ''}${key}${value.children ? '/' : ''}`);
                    if (value.children) {
                        await printTree(value.children, prefix + '    ');
                    }
                }
            }
            await printTree();
            addToOutputWithAnimation('Use cd <full path> to open the page. Eg. cd interactive/hopfield')
            break;

            case 'neofetch':
                const art = `
██╗  ██╗███████╗██╗     ██╗      ██████╗ 
██║  ██║██╔════╝██║     ██║     ██╔═══██╗
███████║█████╗  ██║     ██║     ██║   ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
                `;
                const info = `
${ipaddr.slice(0, -1)}@website-console
-----------------------
OS      : Sitemap-1.1.0
Kernel  : JavaScript
Terminal: Web Browser
CPU     : Client-Side
Memory  : Client-Side
Theme   : Tokyo Night
Commands: ${Object.keys(commands).length} available
                `;
                addToOutput(art + info);
                break;



        default:
            if (cmd.trim()) {
                addToOutput(`Command not found: ${cmd}`, 'error');
                addToOutput('Type "help" to see available commands');
            }
    }
}

inputElement.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = this.value;
        this.value = '';
        handleCommand(command);
    }
    if (e.key === 'ArrowUp') {
        cmdHistoryIndex = (cmdHistoryIndex + 1) > cmdHistory.length - 1 ? cmdHistory.length - 1 : cmdHistoryIndex + 1;
        this.value = cmdHistory[cmdHistoryIndex];
        this.focus();
        setTimeout(() => {
            this.setSelectionRange(this.value.length, this.value.length);
        }, 0);
    }
    if (e.key === 'ArrowDown') {
        cmdHistoryIndex = (cmdHistoryIndex - 1) < 0 ? 0 : cmdHistoryIndex - 1;
        this.value = cmdHistory[cmdHistoryIndex];
        this.focus();
        setTimeout(() => {
            this.setSelectionRange(this.value.length, this.value.length);
        }, 0);
    }
});

// Initial welcome message
window.onload = async function() {
    await typeText('Welcome to the Sitemap Console!');
    await typeText('Type "help" to see available commands');
    await typeText('Type "tree" or "ls" to list all pages');
    inputElement.focus();
    handleCommand('tree');

};

// Keep focus on input
document.addEventListener('click', () => {
    inputElement.focus();
});