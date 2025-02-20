const { cmd } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    react: "📔",
    desc: "Get command list",
    category: "main",
    filename: __filename,
  },
  async (robin, mek, m, { from, pushname, reply }) => {
    try {
      console.log(`✅ MENU COMMAND TRIGGERED FROM: ${from}`);

      let mainMenu = `👋 *Hello ${pushname}*

1️⃣ Main Commands  
2️⃣ Download Commands  
3️⃣ Group Commands  
4️⃣ Owner Commands  
5️⃣ Convert Commands  
6️⃣ Search Commands  

📝 Reply with a number (1-6) to get the respective command list.
🔄 Reply *0* to return to this menu.`;

      await reply(mainMenu);

      // Enable reply listener
      global.menuSessions = global.menuSessions || {};
      global.menuSessions[from] = true;

      console.log(`✅ Menu Session Started for: ${from}`);
    } catch (e) {
      console.log(`❌ ERROR in MENU COMMAND: ${e}`);
      reply(`❌ Error: ${e}`);
    }
  }
);

// **Reply Listener for Pagination**
cmd(
  {
    pattern: ".*",
    dontAddCommandList: true,
  },
  async (robin, mek, m, { from, body, reply }) => {
    if (!global.menuSessions[from]) return;

    let userInput = body.trim();
    console.log(`📥 Received reply: '${userInput}' from: ${from}`);

    let menuResponse = "";

    switch (userInput) {
      case "1":
        menuResponse = `🎯 *MAIN COMMANDS*  
  ❤️ .alive  
  ❤️ .menu  
  ❤️ .ai <text>  
  ❤️ .system  
  ❤️ .owner  
🔄 Reply *0* to return to Main Menu.`;
        break;
      case "2":
        menuResponse = `📥 *DOWNLOAD COMMANDS*  
  ❤️ .song <text>  
  ❤️ .video <text>  
  ❤️ .fb <link>  
🔄 Reply *0* to return to Main Menu.`;
        break;
      case "3":
        menuResponse = `👥 *GROUP COMMANDS*  
  ❤️ .tagall  
  ❤️ .mute  
  ❤️ .ban  
🔄 Reply *0* to return to Main Menu.`;
        break;
      case "4":
        menuResponse = `🔒 *OWNER COMMANDS*  
  ❤️ .restart  
  ❤️ .update  
🔄 Reply *0* to return to Main Menu.`;
        break;
      case "5":
        menuResponse = `✏️ *CONVERT COMMANDS*  
  ❤️ .sticker <reply img>  
  ❤️ .img <reply sticker>  
  ❤️ .tr <lang> <text>  
  ❤️ .tts <text>  
🔄 Reply *0* to return to Main Menu.`;
        break;
      case "6":
        menuResponse = `🔍 *SEARCH COMMANDS*  
  ❤️ .search <query>  
  ❤️ .ytsearch <query>  
🔄 Reply *0* to return to Main Menu.`;
        break;
      case "0":
        menuResponse = `🔄 Returning to Main Menu...  

1️⃣ Main Commands  
2️⃣ Download Commands  
3️⃣ Group Commands  
4️⃣ Owner Commands  
5️⃣ Convert Commands  
6️⃣ Search Commands  

📝 Reply with a number (1-6) to get the respective command list.
🔄 Reply *0* to return to this menu.`;

        console.log(`♻️ Resetting Menu Session for: ${from}`);
        delete global.menuSessions[from];
        break;
      default:
        menuResponse = "❌ Invalid option! Please reply with a number (1-6) or *0* to return.";
    }

    await reply(menuResponse);
  }
);
