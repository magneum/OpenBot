`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Buttons = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ᴠʟᴋʏʀᴇ_Buttons`);
const ᴠʟᴋʏʀᴇ_Static = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ᴠʟᴋʏʀᴇ_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const { exec } = require(`child_process`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
ᴠʟᴋʏʀᴇӄǟɨʐօ: `*${ᴋᴇɪ}${newScpt}* _reply to audio_`,
async handle(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, ᴠʟᴋʏʀᴇ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
const ʟɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.sender;
const ᴅꜰɴᴀᴍᴇ = ᴠʟᴋʏʀᴇ.commandName;
const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.split("@")[0].replace(/[+ ]/g, "");
const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
const Bagde = require(`../../ᴠʟᴋʏʀᴇ🥠ᴘᴏʀᴛ/badge`);
const ms = require(`parse-ms`);
Bagde.findOne(
{
ID: ᴠʟᴋʏʀᴇ.sender,
},
async (error, userBadge) => {
if (error) return ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
if (!userBadge) {
var newUser = new Bagde({
ID: ᴠʟᴋʏʀᴇ.sender,
Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
value: `True`,
Limits: 10,
CurrentLimitTime: Date.now(),
PermanentLimitTime: 43200000,
});
await newUser
.save()
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
return ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`❣️𝗠𝗲𝗻𝘁𝗶𝗼𝗻:  ꧁ *@${ᴘɴᴀᴍᴇ}* ꧂

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${ꜰɪɴᴀᴍᴇ}_  
║🧈 *Added To DB for _${newScpt}_ command First Time!*
║🦋 _Try ${ᴋᴇɪ}${ᴅꜰɴᴀᴍᴇ} Again!_
╚════════════╝`,
`./ᴠʟᴋʏʀᴇ🔌cord/ᴠʟᴋʏʀᴇ_Mongo.png`
);
} else {
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;

var clock =
userBadge.PermanentLimitTime -
(Date.now() - userBadge.CurrentLimitTime);
if (clock > 0 && userBadge.Limits == 0) {
userBadge.value = `False`;
await userBadge
.save()
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (clock > 0 && !userBadge.Limits == 0) {
userBadge.Limits = userBadge.Limits - 1;
userBadge.value = `True`;
await userBadge
.save()
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (clock < 0 && userBadge.Limits == 0) {
if (userBadge.Badge === `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 10;
} else if (userBadge.Badge === `🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 20;
} else if (userBadge.Badge === `🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 40;
} else if (userBadge.Badge === `🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 60;
} else if (userBadge.Badge === `💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 80;
} else if (userBadge.Badge === `💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 100;
}
userBadge.CurrentLimitTime = Date.now();
userBadge.value = `True`;
await userBadge
.save()
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
}
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (!ᴠʟᴋʏʀᴇ.fromMe && userBadge.value === "False") {
let time = ms(
userBadge.PermanentLimitTime -
(Date.now() - userBadge.CurrentLimitTime)
);
return ᴠʟᴋʏʀᴇ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
if (ᴠʟᴋʏʀᴇ.isReplyAudio) {
ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`❣️𝗠𝗲𝗻𝘁𝗶𝗼𝗻:  ꧁ *@${ᴘɴᴀᴍᴇ}* ꧂


╔════◇🌿𝗣𝗹𝗲𝗮𝘀𝗲 𝘄𝗮𝗶𝘁!
║🎹 𝗙𝗶𝗹𝘁𝗲𝗿 𝗧𝘆𝗽𝗲: _${ꜰɪɴᴀᴍᴇ}_
║⏰ 𝗪𝗮𝗶𝘁 𝗧𝗶𝗺𝗲: _Depends on Filter Type._
╚════════════╝`,
"./ᴠʟᴋʏʀᴇ🔌cord/ᴠʟᴋʏʀᴇ_neon.png"
);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
var FILEOBJECT = {
message:
chat.message.extendedTextMessage.contextInfo.quotedMessage,
};
var FILEID = chat.message.extendedTextMessage.contextInfo.stanzaId;
console.log(FILEOBJECT);
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.downloadAndSaveMediaMessage(FILEOBJECT, `${FILEID}`);
var Convert_From = `${FILEID}.mp4`;
var Convert_To = `_${FILEID}_.mp4`;
exec(
`ffmpeg -i ${Convert_From} -af "atempo=0.8" ${Convert_To}`,
async (error) => {
cleanRF.cleanRF(Convert_From);
if (error) {
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
return;
}
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(
ᴠʟᴋʏʀᴇ.chatId,
fs.readFileSync(Convert_To),
MessageType.audio,
{
mimetype: "audio/mp4",
quoted: chat,
}
);
await cleanRF.cleanRF(Convert_To);
}
);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
} else {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ᴠʟᴋʏʀᴇ.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.ᴠʟᴋʏʀᴇӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ᴠʟᴋʏʀᴇӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((error) => ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat));
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
ʟɴᴀᴍᴇ,
ᴘɴᴀᴍᴇ,
ᴠʟᴋʏʀᴇ.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
}
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
}
);
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
} catch (error) {
ꜰᴜᴄᴋ.catch(error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
return;
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
