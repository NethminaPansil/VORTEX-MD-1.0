const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "v24RUKCD#7GjsAI90FmcNgSuin-rucxdFfuAWZGOS1OY0SqOqkMc",
  OWNER_NUM: process.env.OWNER_NUM || "94773279451",
  PREFIX:process.env.PREFIX || ".",
  ALIVE_IMG:process.env.ALIVE_IMG||"https://raw.githubusercontent.com/NethminaPansil/Whtsapp-bot/refs/heads/main/images%20(11).jpeg",
  ALIVE_MSG:process.env.ALIVE_MSG || "Hello , I am alive now!!\n\n Join my Support group using this Link 📥 \n\n https://chat.whatsapp.com/EXPFUXpHxFR5ur03emaNx0 \n\n 💝 𝐌𝐚𝐝𝐞 𝐛𝐲 PANSILU 💝 \n\n 🔒 ᐯㄖ尺ㄒ乇乂 爪ᗪ ㄒ乇卂爪 🔒 ",
  MODE:process.env.MODE || "public",
  AUTO_VOICE:process.env.AUTO_VOICE|| "true",
  AUTO_STICKER:process.env.AUTO_STICKER|| "true",
  AUTO_REPLY:process.env.AUTO_REPLY|| "true",
  GEMINI_API_KEY:process.env.GEMINI_API_KEY || "AIzaSyDrhALyWLk7RN40C1sX5a03XVk8tO48P_8",
  MOVIE_API_KEY:process.env.MOVIE_API_KEY || "sky|d154108e41377cceb22ef92434509bc9081ae46b",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
