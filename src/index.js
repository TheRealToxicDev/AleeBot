/****************************************
 *
 *   AleeBot: Made for discord servers
 *   Copyright (C) 2017-2020 Alee Productions
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * *************************************/

const token = require("../tokens.json");
const Eris = require('eris');
const prefix = "ab:"

let bot = new Eris(token.abtoken);
bot.on("ready", () => {
    console.log("AleeBot has started!");
});
bot.on("messageCreate", (msg) => {
    if(msg.content === prefix + "ping") {
        bot.createMessage(msg.channel.id, "Pong!, Test has passed. Running on Eris!");
    }
    if(msg.content === prefix + "help") {
        bot.createMessage(msg.channel.id, {embed: {
            title: "AleeBot 4.0.0 Help", // Title of the embed
            //description: "Here is some more info, with **awesome** formatting.\nPretty *neat*, huh?",
            author: { // Author property
                name: msg.author.username,
                icon_url: msg.author.avatarURL
            },
            color: 0x008000, // Color, either in hex (show), or a base-10 integer
            fields: [ // Array of field objects
                {
                    name: "Commands", // Field title
                    value: "Help isn't available yet.", // Field
                    inline: true // Whether you want multiple fields in same line
                }
            ],
            footer: { // Footer text
                text: "AleeBot 4.0.0 Beta. Created by Alee Productions and Written in Eris."
            }
        }
        });
    }
});
bot.connect();