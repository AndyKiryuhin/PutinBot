var TelegramBot = require('node-telegram-bot-api');
var token = '120468813:AAHeg2aGmnzXdzeRIem-TBjnCTkX9HHxkVM';
var PutinStickerArray = ["BQADAgADuQMAAjq5FQJZfuBnaRaTbwI",
"BQADAgADtwMAAjq5FQLUee55WTCS8QI",
"BQADAgADuwMAAjq5FQLtCYM50dXJZwI",
"BQADAgADvQMAAjq5FQKDKb_G-aawSAI",
"BQADAgADvwMAAjq5FQIcHTiX9g3C9QI",
"BQADAgADwQMAAjq5FQLh4BJz5lE7NAI"];

var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
	var rand = PutinStickerArray[Math.floor(Math.random() * PutinStickerArray.length)];
    console.log(msg);
    bot.sendMessage(chatId, "This is Dalet Bot from RT!", {caption: "This is Dalet Bot from RT"});
	bot.sendSticker(chatId, rand);
});