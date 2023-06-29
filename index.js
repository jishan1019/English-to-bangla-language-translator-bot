const TelegramBot = require("node-telegram-bot-api");
const translate = require("google-translate-api");

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual Telegram bot token
const bot = new TelegramBot("6198708594:AAFQnhsGMXI5QcrbeZTlEOyd7x5tjD6vNC0", {
  polling: true,
});

// Event listener for incoming messages
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  try {
    // Translate the incoming message from English to Bengali (Bangla)
    const translatedText = await translate(text, { from: "en", to: "bn" });

    // Send the translated text back to the user
    bot.sendMessage(chatId, translatedText.text);
  } catch (error) {
    console.error(error);
    bot.sendMessage(
      chatId,
      "An error occurred while translating. Please try again."
    );
  }
});
