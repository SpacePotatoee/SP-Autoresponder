    if (msg.content.toLowerCase().includes("<@1360807782001148134> wiki_unplanned") && msg.author.id.includes("520961867368103936")) {
        setTimeout(() => {response.delete()}, 1200_000)
        const response = await msg.reply({
            components: [w.wikiCreatorHome()],
            flags: MessageFlags.IsComponentsV2
        });
    }

    if (msg.content.toLowerCase().includes("<@1360807782001148134> links")) {
        setTimeout(() => {response.delete()}, 1200_000)
        const response = await msg.reply({
            components: [w.linkCreator()],
            flags: MessageFlags.IsComponentsV2
        });
    }



/*
"important_note": {
                "fields": [
                    {
                        "name": "KNOWN UNSOLVABLE ISSUES",
                        "value": "• The mod does NOT work with integrated graphics\n• The mod does NOT work on MacOS (due to OpenGL requirements)\n• The mod does NOT work with Sodium, Iris or any other performance mod that changes rendering\n• The mod does NOT work on Forge or Neoforge\n• The mod requires Fabric loader\n• Do NOT use Fabulous! graphics - only Fast or Fancy work\n\nThese issues CANNOT be fixed as they are engine limitations!"
                    }
                ],
                "image":"https://cdn.discordapp.com/attachments/1345899658974728356/1367537156335206400/Integrated.png?ex=6814f1b9&is=6813a039&hm=6f68c339439a242e9fc7b5a1dfaca8b006b4578fe50cecdad45ee30085f437ce&"
            },
            "dependencies": {
                "fields": [
                    {
                        "name": "What do I need to install?",
                        "value": "Required dependencies for Minecraft 1.20.1:\n• Fabric API (any version)\n• Simple Voice Chat (1.20.1-2.4.32 or later)\n• GeckoLib (4.4.9 or later)\n\nMake sure you're using Fabric loader, NOT Forge/Neoforge!"
                    }
                ]
            },
            "graphics": {
                "fields": [
                    {
                        "name": "Graphics Settings Requirements",
                        "value": "• Use Fast or Fancy graphics only\n• Do NOT use Fabulous! graphics\n• Do NOT use Sodium/Iris or other performance mods\n• The mod may not work with integrated graphics"
                    }
                ]
            },
            "backrooms": {
                "fields": [
                    {
                        "name": "How do I enter the Backrooms?",
                        "value": "Suffocate yourself in any way for long enough and you'll noclip into the Backrooms. You'll need to travel through all 4 levels to escape:\n\n1. Level 0 - The classic Backrooms\n2. Level 1 - The Habitable Zone\n3. Level 2 - Pipe Dreams\n4. The Poolrooms\n5. The Infinite Grass Field"
                    }
                ]
            },
            "skinwalker": {
                "fields": [
                    {
                        "name": "Skinwalker Not Spawning?",
                        "value": "The skinwalker does not spawn naturally in singleplayer (this is intentional).\n\nYou can use these commands if needed:\n• /skinwalker <target> - Makes skinwalker take target's skin\n• /release <target> - Releases target from skinwalker\n• /backroomsevent <event> - Manually triggers an event\n• /gimmemyinventoryback <target> - Restores saved inventory"
                    }
                ]
            },
            "flashlight": {
                "fields": [
                    {
                        "name": "How do I use the flashlight?",
                        "value": "Press R to toggle your flashlight on/off."
                    }
                ]
            },
            "shaders": {
                "fields": [
                    {
                        "name": "About the Shaders/Visual Effects",
                        "value": "• The shaders and visual effects are built into the mod\n• You cannot remove or disable them - they're part of the core experience\n• The mod uses Veil for these effects (already included)\n• Make sure you don't remove Veil's deferred resource pack"
                    }
                ]
            },
            "integrated": {
                "fields": [
                    {
                        "name": "Why does my game crash on world load?",
                        "value": "Either you have an incompatible mod, or you use integrated graphics"
                    }
                ]
            },
            "shaders_2": {
                "fields": [
                    {
                        "name": "Where are the shaders?",
                        "value": "The shaders are built in"
                    }
                ]
            },
            "multiplayer": {
                "fields": [
                    {
                        "name": "How do I play with friends?",
                        "value": "There are two ways to play multiplayer:\n\n1. Essential Mod (Recommended):\n• Install Essential mod\n• Add friends on social\n• Host/join through Essential\n\n2. Dedicated Server:\n• Set up a dedicated server\n• For Aternos: Change Simple Voice Chat port from 24454 to -1 in config"
                    }
                ]
            },
            "enter": {
                "fields": [
                    {
                        "name": "How do I enter the backrooms?",
                        "value": "To enter the Backrooms:\n1. Dig a hole\n2. Enclose yourself inside\n3. Fill with sand/gravel to suffocate\n\nYou'll know it's working when:\n• Static sounds play\n• Screen goes black\n• Cutscene shows you falling into Level 0"
                    }
                ]
            },
            "mechanics": {
                "fields": [
                    {
                        "name": "Basic Game Mechanics",
                        "value": "• Jumping is DISABLED in the Backrooms (prevents hunger loss)\n• Press 'R' for flashlight (unusable in Poolrooms)\n• Watch ceiling lights for orientation\n• You need to travel 1000+ blocks to find exits"
                    }
                ]
            },
            "levels": {
                "fields": [
                    {
                        "name": "About the Levels",
                        "value": "You must progress through all levels to escape:\n\n1. Level 0 - The classic Backrooms (exit: white lights & staircase)\n2. Level 1 - The Habitable Zone (exit: hole in wall with stairs)\n3. Level 2 - Pipe Dreams\n4. The Poolrooms (exit: giant tall room with pool)\n5. The Infinite Grass Field (exit: giant pillars, some are fake)"
                    }
                ]
            },
            "error": {
                "fields": [
                    {
                        "name": "Common Error Solutions",
                        "value": "1. Check your mods folder has:\n• Fabric API\n• GeckoLib\n• Simple Voice Chat\n• The mod itself\n\n2. Common issues:\n• Wrong mod loader (need Fabric, not Forge)\n• Incompatible graphics mods\n• Using Fabulous graphics\n• Integrated graphics\n• MacOS"
                    }
                ]
            },
            "install": {
                "fields": [
                    {
                        "name": "How do I install the mod?",
                        "value": "https://youtu.be/89AWIz0RtFw"
                    }
                ]
            },
            "new_levels": {
                "fields": [
                    {
                        "name": "Will there be any new levels?",
                        "value": "At the moment, no. SP is currently busy working on a new video"
                    }
                ]
            },
            "leave_level": {
                "fields": [
                    {
                        "name": "How do I get to the next level?",
                        "value": "Walk 1000 blocks or more to start spawning exits and look around for one"
                    },
                    {
                        "name": "Level 0",
                        "value": "White lights, Staircase"
                    },
                    {
                        "name": "Level 1",
                        "value": "Hole in the wall with stairs"
                    },
                    {
                        "name": "Poolrooms",
                        "value": "Giant room with pool, really tall"
                    },
                    {
                        "name": "Infinite field",
                        "value": "Giant pillar, some of them are fake"
                    }
                ]
            },
            "command": {
                "fields": [
                    {
                        "name": "Is there a command to get to the next level?",
                        "value": "/level <level>"
                    }
                ]
            },
            "hint": {
                "fields": [
                    {
                        "name": "Is there a way to remove the hint at the start of the game?",
                        "value": "You can change the option to enable / disable it in the mod settings (requires modmenu to see)"
                    }
                ]
            }
*/
