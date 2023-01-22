const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

exports.run = (bot, message, args, from, id) => {
    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:ARAbdullah\n' // full name
            + 'ORG:ARAbdullah;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=94771966060:+94771966060\n' // WhatsApp ID + phone number
            + 'END:VCARD'
            bot.sendMessage(from, {displayname: "Abdullah", vcard: vcard}, contact, { quoted: message })
            bot.sendMessage(from, "dia gapunya pacar ambil aja", text)
        }

exports.help = {
    name: "Owner",
    description: "Show the owner bot's",
    usage: "owner",
    cooldown: 5,
};
