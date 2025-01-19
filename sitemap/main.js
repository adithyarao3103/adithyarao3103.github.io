var cmdHistory = [];
var cmdHistoryIndex = -1;

currentGame = null;

var ipaddr;
function getIPFromAmazon() {
    fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => ipaddr = data)
}
getIPFromAmazon()







let tictactoeGameActive = false;
let tictactoeBoard = null;
let tictactoeGameState = null;

// Add the game logic
function initTicTacToe() {
    tictactoeGameActive = true;
    tictactoeBoard = Array(9).fill(' ');
    tictactoeGameState = {
        currentPlayer: 'X',
        gameOver: false
    };

    outputElement.innerHTML = '';
    
    addToOutput('Welcome to Tic Tac Toe!');
    addToOutput('You are X, Computer is O');
    addToOutput('Enter a number (1-9) to make your move, or enter "quit" to quit:');
    addToOutput('Board positions:');
    addToOutput(' 1 │ 2 │ 3 ');
    addToOutput('───┼───┼───');
    addToOutput(' 4 │ 5 │ 6 ');
    addToOutput('───┼───┼───');
    addToOutput(' 7 │ 8 │ 9 ');
    addToOutput('\nCurrent board:');
    drawTicTacToeBoard();
}

function drawTicTacToeBoard() {
    const lines = [
        ` ${tictactoeBoard[0]} │ ${tictactoeBoard[1]} │ ${tictactoeBoard[2]} `,
        '───┼───┼───',
        ` ${tictactoeBoard[3]} │ ${tictactoeBoard[4]} │ ${tictactoeBoard[5]} `,
        '───┼───┼───',
        ` ${tictactoeBoard[6]} │ ${tictactoeBoard[7]} │ ${tictactoeBoard[8]} `
    ];
    lines.forEach(line => addToOutput(line));
}

function checkTicTacToeWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (tictactoeBoard[a] !== ' ' &&
            tictactoeBoard[a] === tictactoeBoard[b] &&
            tictactoeBoard[a] === tictactoeBoard[c]) {
            return tictactoeBoard[a];
        }
    }
    
    return tictactoeBoard.includes(' ') ? null : 'tie';
}

function makeComputerMove() {
    // First check if computer can win
    const winMove = findWinningMove('O');
    if (winMove !== -1) {
        tictactoeBoard[winMove] = 'O';
        return;
    }
    
    // Then check if player can win and block
    const blockMove = findWinningMove('X');
    if (blockMove !== -1) {
        tictactoeBoard[blockMove] = 'O';
        return;
    }
    
    // Take center if available
    if (tictactoeBoard[4] === ' ') {
        tictactoeBoard[4] = 'O';
        return;
    }
    
    // Take a corner if available
    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(i => tictactoeBoard[i] === ' ');
    if (availableCorners.length > 0) {
        const cornerMove = availableCorners[Math.floor(Math.random() * availableCorners.length)];
        tictactoeBoard[cornerMove] = 'O';
        return;
    }
    
    // Take any available space
    const availableSpots = tictactoeBoard
        .map((spot, idx) => spot === ' ' ? idx : null)
        .filter(spot => spot !== null);
    const move = availableSpots[Math.floor(Math.random() * availableSpots.length)];
    tictactoeBoard[move] = 'O';
}

function findWinningMove(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const line = [tictactoeBoard[a], tictactoeBoard[b], tictactoeBoard[c]];
        if (line.filter(x => x === player).length === 2 &&
            line.filter(x => x === ' ').length === 1) {
            return pattern[line.indexOf(' ')];
        }
    }
    return -1;
}

function handleTicTacToeMove(input) {
    if (!tictactoeGameActive) return false;

    outputElement.innerHTML = '';
    
    // Check if input is 'quit' to end the game
    if (input.toLowerCase() === 'quit') {
        addToOutput('Game ended. Thanks for playing!');
        tictactoeGameActive = false;
        tictactoeGameState = null;
        return true;
    }
    
    const move = parseInt(input) - 1;
    if (isNaN(move) || move < 0 || move > 8 || tictactoeBoard[move] !== ' ') {
        addToOutput('Invalid move! Please enter a number between 1 and 9 for an empty space.');
        drawTicTacToeBoard();
        return true;
    }
    
    // Player move
    tictactoeBoard[move] = 'X';
    addToOutput('\nYour move:');
    drawTicTacToeBoard();
    
    // Check for winner after player move
    let winner = checkTicTacToeWinner();
    if (winner) {
        handleGameEnd(winner);
        return true;
    }
    
    // Computer move
    addToOutput('\nComputer\'s move:');
    makeComputerMove();
    drawTicTacToeBoard();
    
    // Check for winner after computer move
    winner = checkTicTacToeWinner();
    if (winner) {
        handleGameEnd(winner);
        return true;
    }
    
    return true;
}

function handleGameEnd(winner) {
    if (winner === 'tie') {
        addToOutput('Game Over - It\'s a tie!');
    } else {
        addToOutput(`Game Over - ${winner === 'X' ? 'You win!' : 'Computer wins!'}`);
    }
    addToOutput('Type "tictactoe" to play again or any other command to continue.');
    tictactoeGameActive = false;
    tictactoeGameState = null;
}

// Modify your handleCommand function to add the tictactoe case:
// Add this to your switch statement in handleCommand:













async function wordScramble() {
    const words = ['function', 'variable', 'console', 'terminal', 'program'];
    const word = words[Math.floor(Math.random() * words.length)];
    const scrambled = word.split('')
        .sort(() => Math.random() - 0.5)
        .join('');

    await addToOutput("Welcome to Word Scramble!");
    await addToOutput(`Unscramble this word: ${scrambled}`);
    await addToOutput("Hint: It's programming-related!");

    return {
        name: 'unscramble',
        handler: async (input) => {
            const guess = input.toLowerCase();

            if (guess === 'quit') {
                currentGame = null;
                return "Game ended. Thanks for playing!";
            }
            
            if (guess === word) {
                currentGame=null;
                return "Correct! You unscrambled the word!";
            } else {
                return "Not quite! Try again!";
            }
        }
    };
}


const commands = {
    'help': 'Show available commands',
    'ls': 'List all pages in hierarchy',
    'tree': 'Display the directory structure as a tree',
    'clear': 'Clear the console',
    'cd': 'Navigate to a page (e.g., cd interactive/Hopfield-Network)',
    'tictactoe': 'Play a game of Tic Tac Toe',
    'unscramble': 'Play unscramble a word',
    'uname': 'Print system information',
    'whoami': 'Print effective user name',
    'cowsay': 'Let a cow say something',
    'date': 'Display the current date and time',
    'neofetch': 'Display system information in a visually pleasing way',
    'easter': 'Display easter egg commands',
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

async function addToOutputWithAnimation(text, url = '', className = '', indent = 0) {
    const div = document.createElement('div');
    div.className = `hierarchy-item ${className}`;
    div.style.animationDelay = `${indent * 0.05}s`;

    if (url) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = '  '.repeat(indent) + text;
        link.className = 'clickable-link'; // Add a specific class for links
        div.appendChild(link);
    } else {
        div.textContent = '  '.repeat(indent) + text;
    }

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
        await addToOutputWithAnimation(
            `${key}${value.children ? '/' : ''}`,
            value.url || '',
            'success',
            indent
        );
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
    if (tictactoeGameActive) {
        if (handleTicTacToeMove(cmd)) {
            return;
        }
    }
    if (currentGame) {
        const result = await currentGame.handler(cmd);
        if (result.includes('Congratulations!') || result.includes('Game Over!')) {
            currentGame = null;
        }
        addToOutput(result);
        return;
    }

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
            addToOutputWithAnimation('\nTo open a page, click on the page name,\nor use cd <full path> (eg. cd interactive/Hopfield-Network)')
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
            addToOutput('Sitemap v42.0.π Console powered by coffee-and-sleepless-nights-v137 on Adithya:Profile');
            break;

        case 'whoami':
            addToOutput(`${ipaddr.slice(0, -1)}@Adithya:Profile`);
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
                'The bug you have been looking for is in the last place you will look.',
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
                    await addToOutputWithAnimation(
                        `${prefix}${prefix ? '└── ' : ''}${key}${value.children ? '/' : ''}`,
                        value.url || ''
                    );
                    if (value.children) {
                        await printTree(value.children, prefix + '    ');
                    }
                }
            }
            await printTree();
            addToOutputWithAnimation('\nTo open a page, click on the page name,\nor use cd <full path> (eg. cd interactive/Hopfield-Network)')
            break;

            case 'neofetch':
//                 const art = `
// ██╗  ██╗███████╗██╗     ██╗      ██████╗ 
// ██║  ██║██╔════╝██║     ██║     ██╔═══██╗
// ███████║█████╗  ██║     ██║     ██║   ██║
// ██╔══██║██╔══╝  ██║     ██║     ██║   ██║
// ██║  ██║███████╗███████╗███████╗╚██████╔╝
// ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
//                 `;
//                 const art = `
//    ___      ___      ___     ___      ___     ___      ___   
//   \/\\  \\    \/\\  \\    \/\\  \\   \/\\  \\    \/\\__\\   \/\\__\\    \/\\  \\  
//  \/::\\  \\  \/::\\  \\  _\\:\\  \\  \\:\\  \\  \/:\/__\/_ |::L__L  \/::\\  \\ 
// \/::\\:\\__\\/:\/\\:\\__\\\/\\\/::\\__\\ \/::\\__\\\/::\\\/\\__\\|:::\\__\\\/::\\:\\__\\
// \\\/\\::\/  \/\\:\\\/:\/  \/\\::\/\\\/__\/\/:\/\\\/__\/\\\/\\::\/  \/\/:;;\/__\/\\\/\\::\/  \/
//   \/:\/  \/  \\::\/  \/  \\:\\__\\  \\\/__\/     \/:\/  \/ \\\/__\/     \/:\/  \/ 
//   \\\/__\/    \\\/__\/    \\\/__\/            \\\/__\/            \\\/__\/  
// `
                const art = `
 █████╗ ██████╗ ██╗████████╗██╗  ██╗██╗   ██╗ █████╗ 
██╔══██╗██╔══██╗██║╚══██╔══╝██║  ██║╚██╗ ██╔╝██╔══██╗
███████║██║  ██║██║   ██║   ███████║ ╚████╔╝ ███████║
██╔══██║██║  ██║██║   ██║   ██╔══██║  ╚██╔╝  ██╔══██║
██║  ██║██████╔╝██║   ██║   ██║  ██║   ██║   ██║  ██║
╚═╝  ╚═╝╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
`
                var t1 = new Date("March 31, 2001 05:10:00");
                var t2 = new Date();
                var dif = t2.getTime() - t1.getTime();

                var Seconds_from_T1_to_T2 = dif / 1000;
                var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
                // var age = new Date(t2 - t1).getFullYear() - 1970
                var day = 1000 * 60 * 60 * 24;
                var days = Math.floor(dif/day);
                var months = Math.floor(days/31);
                var years = Math.floor(months/12);
                var days = days - (months * 31);
                var months = months - (years * 12);
                const info = `
${ipaddr.slice(0, -1)}@Adithya:Profile
-----------------------
OS       : Sitemap v42.0.π
Kernel   : v${years}.${months}.${days}
Terminal : coffee-and-sleepless-nights-v137
CPU      : 1000% usage. Barely holding together
Memory   : 2 PeB / 2.5 PeB
Uptime   : ${Seconds_Between_Dates}
Theme    : Sometimes sunshine sometimes blues
                `;
                addToOutput(art + info);
                break;

        case 'tictactoe':
            initTicTacToe();
            break;

        case 'unscramble':
            currentGame = await wordScramble();
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