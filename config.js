const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUREQzFTVlRzNWRxTVdFMmRtQlBZQ1BQL1lWT0FkaDhtalp3Y0FiM0ZFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidk1BS0pqQ2tZbjc1SW9ZYTRFZUljUmpYcEN0UkpYb3VHZXV0eEpzeVdoOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNTjE1TVV5RE12M1BMNEwrSkZyY2t0WEJUa05oMUg2WE8xZ3Z1TWJTM21FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1dUR5Smx2bVhEdmhDV3k1SHVLaXUyVGtHbDdYMXg5N0ZEUDRjT2VDeWpBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJay9JVVZLSUx5QzRjWXJtajlpanhZWXFraE1zZFpPczJZVG9vWEF1bWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhTUmRmNnU3ZXQvSjVKbmU1bUNMbnQvV0thUkZmcW9OVzVock9SUnc0MUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU5tcWp3d09JMEhFZ0FKZkRtdGtyQ3JJaU5EQmc4bHc5NG53Z1RFNXkzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTQ0MzVTcWIyMmJTQ05hMUdYTG10RHNOZWJrUWFhVDh1OGdqV3F4bzgzMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVkU0ZaNXZMelM4K2lsbVppSXZ0ZDlURXhLVEQxMkdZdWt1YUR0Q2orcjdOaWxoMGlqVzVlOFpUMnFFa0g0dTROWmdoczNzRytvRGpPTVpCbXJWc2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiJ0eHpjbG5LdEdjZUk3dVpDTG93eE9CZnpDNDJySHNkUllVM2tmUmoxZTRZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE5NjU4NzQyM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRUIxODBCRjBBQUMwNzhFMTMwRkI0NTJCMUM3OEU0RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0OTkxNzY0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxOTY1ODc0MjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjQwNEM5NDdDMkUxOTRBNjY0MTFCNjc0QjFDMjMxQkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDk5MTc2NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiOENYTlI0V1giLCJtZSI6eyJpZCI6IjkyMzE5NjU4NzQyMzo2MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLjg4RfUyBDIM6bIFIgX+ODhCIsImxpZCI6IjEwNjYwNTgzNjI2NzY1Mjo2MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00rbXRkTURFSTZaN01RR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InBic3pQVFg2S0NsYnNJOTlBQWdSYmFGMWY1dDF5RUY0TlZ0cW1WYUFpQzg9IiwiYWNjb3VudFNpZ25hdHVyZSI6InQybW10ZndZcXplSUZaUWlqTkxVbHNpeTY3bW1PUWtzUmxZN1VFWkExSDFkWll1QVpqcFFhckVwWEhlMng2WVRsMm9wWGVzaU5VL3ZWV05pV1pmTkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVUTFTbkhvdGdQSnp5QXpsenpoUEdpSG00STFseUthcHlVSEowZHI4bk9lNkM1OTNJS0hhd1hTYTczRTUya3hlR3R2Q3dsekRJeG0zU2E0VlEzbkxodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5NjU4NzQyMzo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhVzdNejAxK2lncFc3Q1BmUUFJRVcyaGRYK2JkY2hCZURWYmFwbFdnSWd2In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ5OTE3NjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSitUIiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Junaid MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/5wdw1l.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Junaid MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Junaid MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923196587423",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*JunaidMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
