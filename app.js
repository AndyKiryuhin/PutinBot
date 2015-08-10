var TelegramBot = require('node-telegram-bot-api');
var token = '120468813:AAHeg2aGmnzXdzeRIem-TBjnCTkX9HHxkVM';
var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    console.log(msg);
    bot.sendMessage(chatId, "This is Dalet Bot from RT!", {caption: "This is Dalet Bot from RT"});
});