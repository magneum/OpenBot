//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, blyat, isAdmin, participants) => {
  try {
    if (!blyat.isGroup) {
      await BloomBot.sendMessage(blyat.chat, {
        react: {
          text: "❌",
          key: blyat.key,
        },
      });
      return blyat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error*  
> _It's a group command!_`
      );
    }
    if (!isAdmin && !BloomBot.isSudo) {
      await BloomBot.sendMessage(blyat.chat, {
        react: {
          text: "❌",
          key: blyat.key,
        },
      });
      return blyat.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await BloomBot.profilePictureUrl(blyat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = BloomBot.display;
    }
    if (BloomBot.args) {
      return await BloomBot.sendMessage(
        blyat.chat,
        {
          image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
          caption: `*📢ChatId:* ${blyat.chat}
Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
Ῠ 🕛𝐓𝐢𝐦𝐞:  ${BloomBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: \n${BloomBot.args.join(" ")}`,
          mentions: await participants.map((a) => a.id),
        },
        { quoted: blyat }
      );
    } else {
      return await BloomBot.sendMessage(
        blyat.chat,
        {
          image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
          caption: `*📢ChatId:* ${blyat.chat}
Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
Ῠ 🕛𝐓𝐢𝐦𝐞:  ${BloomBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: \nAttention Everyone`,
          mentions: await participants.map((a) => a.id),
        },
        { quoted: blyat }
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, blyat, error);
  }
};
module.exports.aliases = [];
