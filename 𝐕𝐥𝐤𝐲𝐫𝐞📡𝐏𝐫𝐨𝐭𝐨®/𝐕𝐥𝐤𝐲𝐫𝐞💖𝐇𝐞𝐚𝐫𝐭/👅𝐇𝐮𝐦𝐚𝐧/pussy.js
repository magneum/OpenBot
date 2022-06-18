"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const Image_Button_1 = __importDefault(require("../../\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\u2618\uFE0F\uD835\uDC0A\uD835\uDC1E\uD835\uDC32\uD835\uDC2C/Image_Button"));
const Video_Button_1 = __importDefault(require("../../\uD835\uDC15\uD835\uDC25\uD835\uDC24\uD835\uDC32\uD835\uDC2B\uD835\uDC1E\u2618\uFE0F\uD835\uDC0A\uD835\uDC1E\uD835\uDC32\uD835\uDC2C/Video_Button"));
/*
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」                                                                            「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」
⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
*/
const Oops = require(`../../𝐕𝐥𝐤𝐲𝐫𝐞☘️𝐊𝐞𝐲𝐬/Oops`);
const got = require(`got`);
const ffmpeg = require(`fluent-ffmpeg`);
const Downloader = require(`nodejs-file-downloader`);
const VOID = require(`../../𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
const path_1 = __importDefault(require("path"));
var scriptName = path_1.default.basename(__filename);
var dotScrpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
module.exports = {
    name: dotScrpt,
    category: path_1.default.basename(__dirname),
    handle(TUF, Fox, Vʟӄʏʀɛ, ǟʀɢʊʍɛռȶ, ӄ𝖗𝖞ӄ𝖓𝖟) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ʟɴᴀᴍᴇ = Vʟӄʏʀɛ.sender;
                const ᴅꜰɴᴀᴍᴇ = Vʟӄʏʀɛ.commandName;
                const ᴘɴᴀᴍᴇ = ʟɴᴀᴍᴇ.replace(/[^\d+]/g, "");
                let grup;
                try {
                    grup = yield TUF.getGroupMetaData(Vʟӄʏʀɛ.chatId, Vʟӄʏʀɛ);
                }
                catch (e) {
                    console.log(e);
                }
                const ꜰɪɴᴀᴍᴇ = ᴅꜰɴᴀᴍᴇ.charAt(0).toUpperCase() + ᴅꜰɴᴀᴍᴇ.slice(1);
                /*
                ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
                「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」                                                                            「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」
                ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
                */
                if (Vʟӄʏʀɛ.isGroup && !Vʟӄʏʀɛ.isSenderGroupAdmin && !Vʟӄʏʀɛ.isSenderMOD) {
                    return Image_Button_1.default.VImg(TUF, Fox, Vʟӄʏʀɛ, `❌𝐃𝐞𝐧𝐢𝐞𝐝: _Admins/Dev Only.You Are Not Allowed!_`, "./𝐕𝐥𝐤𝐲𝐫𝐞👜𝐁𝐚𝐠/Vʟӄʏʀɛ.png");
                }
                /*
                ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
                「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」                                                                            「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」
                ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
                */
                yield got(`https://www.reddit.com/r/pussy/random.json`).then((newScpt) => __awaiter(this, void 0, void 0, function* () {
                    var file = JSON.parse(newScpt.body);
                    var title = file[0].data.children[0].data.title;
                    var amazeme = file[0].data.children[0].data.url;
                    /*
                    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
                    「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」                                                                            「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」
                    ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
                    */
                    if (!amazeme.endsWith(`.png`) &&
                        !amazeme.endsWith(`.jpg`) &&
                        !amazeme.endsWith(`.jpeg`)) {
                        var amazeme = yield got(`https://www.reddit.com/r/pussy/random.json`).then((newScpt) => __awaiter(this, void 0, void 0, function* () {
                            var file = JSON.parse(newScpt.body);
                            var title = file[0].data.children[0].data.title;
                            var amazeme = file[0].data.children[0].data.url;
                            return Image_Button_1.default.VImg(TUF, Fox, Vʟӄʏʀɛ, `👅 𝐓𝐨𝐩𝐢𝐜: ${title}`, amazeme);
                        }));
                        /*
                        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
                        「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」                                                                            「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」
                        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
                        */
                    }
                    else if (amazeme.endsWith(`.gif`)) {
                        const downloader = yield new Downloader({
                            url: amazeme,
                            directory: `${__dirname}`,
                            fileName: `${Date.now()}_${ꜰɪɴᴀᴍᴇ}.gif`,
                            cloneFiles: false,
                        });
                        try {
                            yield downloader.download();
                            ffmpeg(`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.gif`)
                                .outputOptions([
                                `-pix_fmt yuv420p`,
                                `-c:v libx264`,
                                `-movflags +faststart`,
                                `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
                            ])
                                .save(`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.mp4`)
                                .on(`end`, () => __awaiter(this, void 0, void 0, function* () {
                                yield Video_Button_1.default.VVid(TUF, Fox, Vʟӄʏʀɛ, `👅 𝐓𝐨𝐩𝐢𝐜: ${title}`, `${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.mp4`);
                                yield VOID.VOID(`${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.mp4`, `${__dirname}/${Date.now()}_${ꜰɪɴᴀᴍᴇ}.gif`);
                                return;
                            }));
                        }
                        catch (error) {
                            return Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error);
                        }
                        /*
                        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
                        「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」                                                                            「   𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®   」
                        ⦓════════════════════════════════════════════| ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════⦔
                        */
                    }
                    else {
                        return Image_Button_1.default.VImg(TUF, Fox, Vʟӄʏʀɛ, `👅 𝐓𝐨𝐩𝐢𝐜: ${title}`, amazeme);
                    }
                }));
            }
            catch (error) {
                return Oops.VOp(TUF, Fox, Vʟӄʏʀɛ, error);
            }
        });
    },
};
