

var TelegramBot = require('node-telegram-bot-api');
// var token = '110363325:AAG54DEncwixij-GyjcI3zP9iJMdpUv2dnE';

var token = '110363325:AAG54DEncwixij-GyjcI3zP9iJMdpUv2dnE';
var botantoken = '81096';
var botan = require('botanio')(botantoken);


var RestaurantArray = ["На поляне",
"Денис Давыдовъ",
"Столовая RT",
"Ташкент",
"Бодрум"];

var PutinStickerArray = ["BQADAgADuQMAAjq5FQJZfuBnaRaTbwI",
"BQADAgADtwMAAjq5FQLUee55WTCS8QI",
"BQADAgADuwMAAjq5FQLtCYM50dXJZwI",
"BQADAgADvQMAAjq5FQKDKb_G-aawSAI",
"BQADAgADvwMAAjq5FQIcHTiX9g3C9QI",
"BQADAgADwQMAAjq5FQLh4BJz5lE7NAI",
"BQADAgADwwMAAjq5FQLiayFJLoJudQI",
"BQADAgADxQMAAjq5FQI8t5MgYM9aXAI",
"BQADAgADxwMAAjq5FQLpjqXX78G-vQI",
"BQADAgADyQMAAjq5FQJRIzY8YRjEGwI",
"BQADAgADywMAAjq5FQKrW7YhVfQE6gI",
"BQADAgADzQMAAjq5FQJnE5icVw29ZgI",
"BQADAgADzwMAAjq5FQK56v-Nh4MnhgI",
"BQADAgAD0QMAAjq5FQJotu-_UYLffQI",
"BQADAgAD0wMAAjq5FQJ7PWZbgAEYsQI",
"BQADAgAD1QMAAjq5FQJBrILLB2Sl2gI",
"BQADAgAD1wMAAjq5FQI7v4nJ4tfolQI",
"BQADAgAD2QMAAjq5FQKZxkUHKMBBwgI",
"BQADAgAD2wMAAjq5FQLvz4A6VMrzbAI",
"BQADAgAD3wMAAjq5FQIhi_iMy04QwgI",
"BQADAgAD4QMAAjq5FQL-Rh5SR7RNpAI",
"BQADAgAD4wMAAjq5FQKNaKHtGELCMwI",
"BQADAgAD5QMAAjq5FQKyCF1BK5OY6wI",
"BQADAgAD5wMAAjq5FQL671Lj-au_uAI",
"BQADAgAD6QMAAjq5FQI8bG6gzo7E8AI",
"BQADAgAD6wMAAjq5FQLntGQ3IIf16wI",
"BQADAgAD7QMAAjq5FQLBH-UlezfilgI",
"BQADAgAD7wMAAjq5FQIzrui8fP4lkQI",
"BQADAgAD8QMAAjq5FQI1tKHActLUvgI",
"BQADAgAD8wMAAjq5FQKeAAF0e9mqhp0C",
"BQADAgAD9QMAAjq5FQJj6cB5_8YQdwI",
"BQADAgADEgQAAjq5FQKweoxDK2Nl6gI",
"BQADAgADFQQAAjq5FQLriRpr1gABG1UC",
"BQADAgADFwQAAjq5FQLQ0bSIZSy7vwI",
"BQADAgADGQQAAjq5FQKa6h03m_QOowI",
"BQADAgADGwQAAjq5FQLYA6fJsIIXzQI",
"BQADAgADHQQAAjq5FQLKqRBqI77XQQI",
"BQADAgADHwQAAjq5FQLqnANUU3kKogI",
"BQADAgADJAQAAjq5FQLViALVyssgHwI",
"BQADAgADJgQAAjq5FQI2dzTbNJQCwwI",
"BQADAgADKwQAAjq5FQJKZB_dkrpcdgI",
"BQADAgADLgQAAjq5FQJ4oryaPuqlhwI"
];

var bot = new TelegramBot(token, {polling: true});

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
	var randSticker = PutinStickerArray[Math.floor(Math.random() * PutinStickerArray.length)];
	var randRest = RestaurantArray[Math.floor(Math.random() * RestaurantArray.length)];
    console.log(msg);
	//var myString = "������� ������� �������� "+randRest;
	// myString = JSON.parse( JSON.stringify( myString ) )
    bot.sendSticker(chatId, "randSticker);
	console.log("Sticker send:" + randSticker);
		botan.track(msg, 'Start');
	//bot.sendMessage(chatId, "Сегодня предлагается посетить "+randRest , {caption: "This is Dalet Bot from RT"});
	// bot.sendMessage(chatId, msg.text , {caption: "This is Dalet Bot from RT"});
	
});