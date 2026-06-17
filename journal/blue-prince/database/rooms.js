const rooms = {
    "numbered": [
        {},
        {
            "name": "Entrance Hall",
            "description": "Past the steps and beyond the grand doors, admission to Mount Holly is granted by way of a dark and garish lobby, suitably called the Entrance Hall. From here, each guest's adventure begins; however, the three doors that proceed onward do not always lead to the same adjoining rooms...",
            "type": ["Permanent","Blueprint"],
            "rarity": "n/a",
            "chess":"n/a",
            "notes":[
                "Rules for how footsteps work are found on the side table. (Though I think it gets replaced with the trophy list later?)",
                "The letter regarding inheritance is found in this room.",
                "There are two statues in this room. I'll have to update with who of once I find the Foyer.",
                "A painting of Trinsdale Lake is in this room.",
                "There are three bird figures here.",
                "There are two canes here.",
                "There is a coatstand here."
            ]
        },
        {
            "name": "Spare Room",
            "description": "An unfurnished, unfinished and otherwise unremarkable empty room. If there had at some point been plans for this spare room, it would seem those designs are now long forgotten.",
            "type":["Blueprint"],
            "rarity": "Commonplace",
            "chess": "n/a",
            "notes":[

            ]
        },
        {
            "name": "Parlor",
            "effect": "🧩",
            "description": "This cozy lounge furnished with couches and armchairs serves as the perfect social setting for receptions and after parties. Consequently this was one of the most popular rooms for entertaining and the late H. S. Sinclair was known to supply a myriad of parlor games to encourage his guests to think and conversate.",
            "type": ["Puzzle", "Blueprint"],
            "rarity": "Commonplace",
            "chess": {"type":"pawn","color":"black"},
            "notes":[
                "There is a letter from M. Lowry regarding the parlor game, along with instructions for the game in this room."
            ]
        },
        {
            "name": "Billiard Room",
            "effect": "🧩",
            "description": "This smoky backroom, featuring a pool table and fully stocked bar, has served as a retreat on more than one occasion for guests lacking the social wit required for after-dinner conversation. A rather curious game of darts provided the less competitive players a unique opportunity to ponder over its unusual rules.",
            "type":["Puzzle","Blueprint"],
            "rarity":"Commonplace",
            "chess":"n/a",
            "notes":[

            ]
        },
        {
            "name": "Closet",
            "effect": "2 items",
            "description": "A very modest recessed space used for storage. This particular closet is favored by the junior members of the staff, who utilize it to stash away assorted articles and knicknacks whose proper place in the estate is yet unknown to them.",
            "type:": ["Blueprint","Dead End"],
            "rarity": "Commonplace",
            "chess": "n/a",
            "notes": [
                "There is an umbrella here.",
                "There is a hat here."
            ]
        },
        {
            "name": "Walk-In Closet",
            "effect": "4 items",
            "description": "The stylish and smart clothes in this generously sized closet belong to the former Mistress of the estate, Lady Epsen. Though the small dressing room has not been used in many years, it is nevertheless kept up and preserved in the state you now find it.",
            "cost":"💎",
            "type":["Blueprint","Dead End"],
            "rarity": "Standard",
            "chess": "n/a",
            "notes": [
                "There is a photo of Lady Epsen here.",
                "There are three hats here."
            ]
        },
        {
            "name": "Attic",
            "effect": "8 items",
            "description": "High above the mansion in its lofty perch, Mt. Holly's Attic provides curious explorers with a cache of dusty keepsakes, trinkets, and clues from a long-forgotten past.",
            "cost":"💎💎💎",
            "type":["Blueprint","Dead End"],
            "rarity":"Rare",
            "chess":{"type": "bishop","color":"white"},
            "notes":[
                "There is a painting of Baroness Auravel wearing the emerald bracelet and moon necklace in this room.",
                "There is a photogrpah of Hebert, Simon, and their father, Tomas. Tomas is pointing off the edge at the pillars in the cliffside."
            ]
        },
        {
            "name": "Storeroom",
            "effect": "+1 🗝️, 1 💎, 1 🪙",
            "description": "A dedicated storage space filled from end to end with a surplus of chairs, carpets, paintings, and a handful of other things that had at one time been in vogue and on display elsewhere in the house.",
            "type": ["Blueprint", "Dead End"],
            "rarity": "Commonplace",
            "chess": {"type":"pawn","color":"white"},
            "notes":[
                "There is a building in here.",
                "There is a black vase in here.",
                "There is a globe in here."
            ]
        },
        {
            "name": "Nook",
            "effect": "+1 🗝️",
            "description": "A sung corner reading room which serves as a quiet, private place for guests to spend a few hoursof their afternoon away from the hustle and bustle of the staff.",
            "type": ["Blueprint"],
            "rarity": "Commonplace",
            "chess": {"type":"rook","color":"white"},
            "notes":[
                "There is a shelf in the shape of the symbol of either Reddington or Mt. Holly not sure which yet that has colored artifacts on it.",
                "There is a coat stand here.",
                "There is what I believe to be a jukebox here.",
                "There are instructions for taking notes. It includes a lowercase 'beside' which is used as part of a complex clue which leads you to finding one of the missing microchips for the Blackbridge Grotto.",
                "The notes note also has a picture of a journal, which when magnified teaches you how to play the dartboard game and a few other basic clues. I don't have a saved image of the magnified journal though."
            ]
        },
        {
            "name": "Garage",
            "effect": "+3 🗝️",
            "description": "Entering and exiting out through the west facing private drive, the Garage serves as a more practical and informal entrance point into the estate.",
            "cost": "💎",
            "type": ["Blueprint", "Dead End"],
            "rarity": "Unusual",
            "chess": "n/a",
            "notes":[
                "You unlock the west path by powering the garage door.",
                "There is a conspicuous box in this room. May be uninteractable though.",
                "There is a note to the driver regarding susipcious absences."
            ]
        },
        {
            "name": "Den",
            "effect": "+1 💎",
            "description": "A more traditional family room, warm and inviting. So comfortable, one might assume that the countless clocks surrounding the sofas are placed in a futile attempt to avoid inevitably wasting the entire day here.",
            "type": ["Blueprint"],
            "rarity": "Commonplace",
            "chess": {"type":"pawn","color":"white"},
            "notes":[
                "There is a conspicious box underneath the clock on the mantle.",
                "There are a ton of clocks in this room. One of them has a pendulum that doesn't work.",
                "There is a blue vase in this room."
            ]
        },
        {
            "name": "Pantry",
            "effect": "+4 🪙",
            "description": "A well stocked pantry is always the true test of a large estate, and keeping Mt. Holly's wide gamut of ingredients and supplies stocked has always been one of the primary priorities of the house staff.",
            "type":["Blueprint"],
            "rarity": "Commonplace",
            "chess": "n/a",
            "notes":[
                "There is a note to Bridgette about stocking the estate with food. It has a clue that directs to one of the 2 microchips.",
                "There is a timer in this room."
            ]
        },
        {
            "name": "Drawing Room",
            "effect": "📐 You may draw new Floor Plans while drafting in this room.",
            "description": "A social sitting rooma dorned wall to wall with artwork and drawings. An unfinished sketch of your uncle sits on an easel in the middle of the room, providing a vivid image of what were prsumably his final days (depending on when the project was abandoned).",
            "cost":"💎",
            "type":"📐 Drafting, Blueprint",
            "rarity": "Commonplace",
            "chess": "pawn",
            "safe": "Unlocked by the candle on the fireplace. Code still yet unknown.",
            "notes":[
                
            ]
        },
        {
            "name": "Utility Closet",
            "effect": "⚙️ Breaker Box",
            "description": "One benefit of the restoration of old buildings is that it allows the owners to update and add modern amenities. The utility closet and the circuit breaker box within were set up when gas powered lighting was retired and replaced by a more fashionable home electrical system.",
            "type":["⚙️ Mechanical", "Blueprint", "Dead End"],
            "rarity": "Standard",
            "chess": "n/a",
            "notes":[
                "You unlock the Gemstone cavern here by inputting the right V.A.C code. Instructions for the code are found in the emails only accessible from the Office.",
                "There is a removed and scratched out switch for 'Cabinet'"
            ]
        },
        {
            "name": "Security",
            "effect": "⚙️ View inventory of all items currently in the house.",
            "description": "A control room with state of the art surveillance equipment, inventory system, and access control via an electronic computer terminal This room is where the estate's patrol guards kick up their feet and thank their stars they are living in a modern era.",
            "cost":"💎",
            "type":["⚙️ Mechanical", "Blueprint"],
            "rarity":"Standard",
            "chess":"Knight",
            "notes":[

            ]
        },
        {
            "name": "Dining Room",
            "effect": "🍽️ Each day, a meal is served inthe dining room after Rank 8 has been reached.",
            "description": "An intimate and warm room with a large dining table boasting a serving tray with a silver dome cover. Dinner is served here each evening.",
            "type":["Blueprint"],
            "rarity": "Standard",
            "chess": {"type":"pawn","color":"white"},
            "notes": [
                "Theres a black vase in this room.",
                "This room has a giant window facing the mountain when on Rank 1, otherwise it has the symbol of mount holly resting on a fireplace mantle."
            ]
        },
        {
            "name": "Observatory",
            "effect": "+1 ⭐",
            "description": "Housing an impressively large telescope, Mount Holly's observatory is a window to the world above and beyond the clouds and sky. Through its mirrored lens, even a novice stargazer will be able to distinctly appreciate the wonder, signs and constellations that punctuate the tapestry of night.",
            "type":["Blueprint"],
            "rarity": "Standard",
            "chess": "Knight",
            "notes":[
                "This room contains The Fixed Stars."
            ]
        }
    ],
    "Bedrooms": [
        {
            "name": "Bedroom",
            "effect": "🚪 Whenever you enter this room, gain 2 👣.",
            "description": "A familiar room that you may have slept in at some prior visit in the past. Like most bedrooms of the estate, these quarters offer you a little rest and recuperation during your long days exploring the surrounding rooms.",
            "type":["🚪 Entry", "Bedroom"],
            "rarity": "Commonplace",
            "chess": {"type":"pawn","color":"white"},
            "notes":[
                "There's a hat in this room.",
                "There's a finger pointing down in this room.",
                "There's a photo of Baroness Auravel in this room.",
                "There's a reddington postcard in this room."
            ]
        },
        {
            "name": "Boudoir",
            "description": "A private salon with a plethora of fainting couches and chaise longues that served both as a dressing room for her Ladyship in the mornings and a cozy sitting room for her in the evenings.",
            "type": ["Bedroom"],
            "rarity": "Standard",
            "chess": "n/a",
            "safe": "Behind the mirror. Code is 1225",
            "notes":[
                "There is a photo of christmas in this room which indicates to put that date into the safe.",
                "This room contains Letter 4."
            ]
        },
        {
            "name": "Guest Bedroom",
            "effect": "+10 👣",
            "description": "A small bedroom maintaned and kept available for accommodating weekend guests and impromptu visitors who find themselves compelled to stay the night.",
            "type":["Bedroom","Dead End"],
            "rarity": "Commonplace",
            "chess": {"type":"pawn","color":"white"},
            "notes": [
                "The room is nautically themed and contains a sailboat, whale, anchor, and ship-wheel.",
                "A letter from 'KL' can be found here regarding the billiard room. Lord Evanson is mentioned in this letter."
            ]
        }
    ],
    "Hallways": [
        {
            "name": "Hallway",
            "description": "One of the many nondescript hallways snaking through the estate and providing elegant causeways between the more noteworthy destinations that the house has to offer.",
            "type": ["Hallway"],
            "rarity": "Commonplace",
            "chess":"n/a",
            "notes":[
                "There is a conspicuous vase of red flowers on a pedastal",
                "There is a false red note regarding locked rooms here."
            ]
        },
        {
            "name": "West Wing Hall",
            "description": "The west wing of the estate has been closed since the death of Lady Epsen. It is unsurprising therefore, that this hallway in its neglected state features boarded windows and dust smothered furniture.",
            "type":["Hallway"],
            "rarity": "Standard",
            "chess":"n/a",
            "notes":[
                "There is a torn note regarding the closing of the West Wing. It has a date on it.",
                "There is a black vase in this room."
            ]
        },
        {
            "name": "East Wing Hall",
            "description": "This fenestrated hallway overlooks the east side of the estate grounds and is warmed in the early day by the light of the rising afternoon sun.",
            "type":["Hallway"],
            "rarity": "Unusual",
            "chess":"n/a",
            "notes":[

            ]
        },
        {
            "name": "Corridor",
            "effect": "Corridor is always left unlocked.",
            "description": "A long hall with two doors at either end that had been one of your uncle's most frequently traveled rooms. Consequently, he had left strict instructions with the household staff that the doors of this corridor should never under any circumstance be locked.",
            "type": ["Hallway"],
            "rarity": "Commonplace",
            "chess": "n/a",
            "notes":[
                "There are two black vases in this room.",
                "There is a hat in this room."
            ]
        },
        {
            "name": "Passageway",
            "description": "A long ramped series of unfinished passages used primarily by the servant staff to traverse the estate quickly.",
            "cost":"💎💎",
            "type":["Hallway"],
            "rarity":"Commonplace",
            "chess":"n/a",
            "notes":[

            ]
        }
    ],
    "Green Rooms": [
        {
            "name": "Courtyard",
            "description": "A charming spot granting guests a bit of fresh air and open skies within the privacy of the manor walls.",
            "cost": "💎",
            "type": ["Green Room"],
            "rarity": "Standard",
            "chess": "n/a",
            "notes": [

            ]
        },
        {
            "name": "Veranda",
            "effect": "🍀 Greater chance of finding items in Green Rooms.",
            "description": "This relaxing breezeway serves s an ideal spot for rocking chairs and lemonade.",
            "cost": "💎💎",
            "type": ["Green Room"],
            "rarity": "Unused",
            "notes": [
                "You can see the statue to the east of the house if you place this room right."
            ]
        }
    ],
    "Red Rooms": [
        {
            "name": "Lavatory",
            "description": "A room one might go to great lengths to avoid showing guests despite them <i>always</i> probing for its location.",
            "type": ["Red Room","Dead End"],
            "rarity": "Standard",
            "chess": "n/a",
            "notes":[
                "You can use the sink to refill the watering can."
            ]
        },
        {
            "name": "Chapel",
            "effect": "Whenever you enter Chapel, lose 1 🪙.",
            "description": "A private sacristy, as ornate as the most lavish rooms of the estate, is watched over by eight Ajeran Angels depicted in stained glass. This room was more a tribute to your uncle's vanity than it was to his faith.",
            "type": ["Entry", "Red Room"],
            "rarity": "Commonplace",
            "chess": {"type":"bishop","color":"white"},
            "notes":[
                "There are ruby candles here!",
                "There is a missing candle on one of the candelabras here.",
                "There are four statues of unknown figures here.",
                "There are stained glass depictions of all of the Ajrean Angels here. They are used in the Tomb to unlock access to the underground.",
                "The description says eight, but there are only seven angels? I think lighting the torches might reveal the eighth."
            ]
        },
        {
            "name": "Gymnasium",
            "effect":"🚪 Whenever you enter Gymnasium, lose 2 👣.",
            "description": "A half-court intended for basketball and racquetball which is seldom used by anyone apart from the junior staff during their lunch hour. At least they did before Mrs. Babbage disallowed the practice after noticing how worn out staff members were after a game.",
            "type": ["Entry","Red Room"],
            "rarity": "Standard",
            "chess":"n/a",
            "notes":[
                
            ]
        }
    ],
    "Outer Rooms": [
        {
            "name": "Toolshed",
            "effect": "2 special items",
            "description": "A simple shed with a variety of tools used by the groundskeepers in the course of their duties.",
            "type": ["Blueprint","Dead End", "Outer Room"],
            "rarity": "Unusual",
            "chess": "n/a",
            "notes":[

            ]
        },
        {
            "name": "Schoolhouse",
            "effect": "📐 Adds 8 Classrooms to today's Draft Pool.",
            "description": "Long before Reddington Elementary was opened, school convened in a single small building. As the student body grew over the years, the need for separate classrooms for each grade arose and the Mt. Holly Schoolhouse was officially closed down.",
            "type": ["📐 Drafting", "Blueprint", "Dead End", "Outer Room"],
            "rarity": "Unusual",
            "chess": "n/a",
            "notes":[
                "There is a desk with 'Herbie' scratched into it.",
                "'within a timely manor' is written on the chalk board.",
                "There is a closing adress written on the desk",
                "You can toggle one of the four gas flames here."
            ]
        },
        {
            "name": "Hovel",
            "effect": "Special FLoorplans now cost additional 👣 instead of 💎.",
            "description": "A squalid dwelling on the edge of the estate belonging to one of the groundskeepers.",
            "type": ["Bedroom","Dead End","Outer Room"],
            "rarity": "Unusual",
            "chess": "n/a",
            "notes":[
                "One of the four flame things can be found here",
                "A letter of dismissal can be found directed towards the old groundskeeper."
            ]
        }
    ],
    "The Grounds": [
        {
            "name": "The Grounds",
            "notes": [
                "There is a birdbath near the four flames."
            ]
        },
        {
            "name": "Private Drive",
            "notes": [
                "There is a birdbath near the gate.",
                "There is a birdbath near the campsite."
            ]
        },
        {
            "name": "Apple Orchard",
            "effect": "Start each day with an extra 20 👣.",
            "notes": [
                "There's a birdbath here.",
                "There's a sundial here.",
                "You can toggle one of the four gas flames here.",
                "The Groundskeeper's Log is found here.",
                "A gemless gem holder is found in the groundskeeper's shed for some reason. ...strange.",
                "The pots here are also broken for some reason."
            ]
        },
        {
            "name": "Campsite",
            "effect": "You may Call It A Day at anytime.",
            "notes": [
                "There's something diggable between the two rocks behind the campsite. ...I dont' remember what clues tell you this though."
            ]
        },
        {
            "name": "West Path",
            "notes":[
                "There's a birdbath here near the garage.",
                "There's a birdbath here near the Outer Room."
            ]
        },
        {
            "name": "Gemstone Cavern",
            "effect": "Each day you will start with an extra 2 💎.",
            "notes":[
                "There is a note talking about access to the underground here.",
                "You can toggle one of the four gas flames here."
            ]
        }
    ],
    "Underground":[
        {
            "name": "The Precipice",
            "notes":[
                "The chess room can be activated by moving the pieces onto spaces that have the matching room.",
                "There is a power-hammerable section of the chess-room.",
                "Foreman's log 3 can be found here along with a date.",
                "There is what looks to be a section of wall that might be hammerable? Or somehow openable?",
                "An entrance to the rest of the underground can be found here",
                "A torn up version of Realm and Rune is found here."
            ]
        }
    ]
}