import express from "express";
import connectDb from "./db/index.js";
import { Client, GatewayIntentBits } from "discord.js";
import URL from "./models/url.js";
import {  nanoid } from "nanoid";
import urlRouter from "./Routes/url.js";
const app = express();

connectDb();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1].trim();
    console.log(url);
    const shortId = nanoid(6);
    console.log(shortId);
    const result = await URL.create({
      shortId: shortId,
      redirectUrl: url,
      visitHistory: [],
    })
      .then(() => {
        console.log("Stored successfully");
      })
      .catch((error) => {
        console.error("Error storing URL:", error.message);
        // Add additional error handling logic if needed
      });
    
    return message.reply({
      content: `your short url is http://localhost:8001/url/${shortId}`,
    });
  }
  message.reply({ content: "I am fine" });
  
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!! ");
});

client.login(process.env.token);

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

app.listen(8001, () => {
  console.log(` Running at port 8001`);
});


//Routes

app.use("/url",urlRouter);