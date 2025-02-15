const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
    { word: "horizon", hint: "The line where the earth or sea appears to meet the sky." },
    { word: "whistle", hint: "A high-pitched sound made by forcing air through the lips or a device." },
    { word: "meadow", hint: "A field of grass and wildflowers, often used for grazing animals." },
    { word: "harbor", hint: "A place on the coast where ships can dock safely." },
    { word: "echo", hint: "A sound that reflects off a surface and is heard again." },
    { word: "miracle", hint: "An extraordinary and welcome event that cannot be explained by natural laws." },
    { word: "lantern", hint: "A portable light source, often enclosed in a protective casing." },
    { word: "cottage", hint: "A small, cozy house, usually in a rural setting." },
    { word: "quasar", hint: "An extremely bright celestial object powered by a supermassive black hole." },
    { word: "eclipse", hint: "An event where one celestial body moves into the shadow of another." },
    { word: "glacier", hint: "A slow-moving mass of ice formed by the accumulation of snow." },
    { word: "paradise", hint: "An ideal or perfect place, often associated with beauty and peace." },
    { word: "twilight", hint: "The soft light occurring between sunset and complete darkness." },
    { word: "feather", hint: "A soft structure covering the bodies of birds, used for flight and insulation." },
    { word: "cascade", hint: "A small, steep waterfall or series of waterfalls." },
    { word: "comet", hint: "A celestial body composed of ice and dust that orbits the sun." },
    { word: "nebula", hint: "A cloud of gas and dust in space, often the birthplace of stars." },
    { word: "aurora", hint: "A natural light display in the sky, often seen in polar regions." },
    { word: "harmony", hint: "A pleasing combination of different musical notes played or sung together." },
    { word: "infinity", hint: "A concept of endlessness or boundless extension." },
    { word: "velocity", hint: "The speed of something in a given direction." },
    { word: "lighthouse", hint: "A tall tower with a bright light to guide ships at sea." },
    { word: "compass", hint: "A navigational instrument that shows direction." },
    { word: "voyage", hint: "A long journey, especially by sea or in space." },
    { word: "alchemy", hint: "An ancient practice aimed at transforming base metals into gold." },
    { word: "serendipity", hint: "The occurrence of fortunate events by chance." },
    { word: "tranquil", hint: "Peaceful, calm, and free from disturbance." },
    { word: "chess", hint: "A strategic board game played with 16 pieces per player." },
    { word: "whirlpool", hint: "A rapidly rotating mass of water that pulls objects inward." },
    { word: "labyrinth", hint: "A complex maze with many paths and dead ends." },
    { word: "mirage", hint: "An optical illusion caused by atmospheric conditions." },
    { word: "zenith", hint: "The highest point or peak of something." },
    { word: "galore", hint: "In abundance or plentiful supply." },
    { word: "sapphire", hint: "A precious gemstone known for its deep blue color." },
    { word: "tornado", hint: "A violent rotating column of air extending from a thunderstorm to the ground." },
    { word: "constellation", hint: "A group of stars forming a recognizable pattern." },
    { word: "gondola", hint: "A narrow boat used in the canals of Venice." },
    { word: "hologram", hint: "A three-dimensional image formed by light interference." },
    { word: "tempo", hint: "The speed or pace of a piece of music." },
    { word: "blizzard", hint: "A severe snowstorm with strong winds and low visibility." },
    { word: "spectrum", hint: "A range of colors or elements, often seen in light dispersion." },
    { word: "oracle", hint: "A person or medium through whom a deity speaks or gives prophecies." },
    { word: "horizon", hint: "The apparent line where the sky meets the earth or sea." },
    { word: "phoenix", hint: "A mythical bird that regenerates from its ashes." },
    { word: "fossil", hint: "The preserved remains of an ancient organism." },
    { word: "tsunami", hint: "A large sea wave caused by an underwater earthquake or eruption." },
    { word: "marathon", hint: "A long-distance running race of 26.2 miles (42.2 km)." },
    { word: "monarch", hint: "A sovereign head of state, especially a king or queen." },
    { word: "zeppelin", hint: "A large airship with a rigid structure." },
    { word: "artifact", hint: "An object made by humans, typically of historical interest." },
    { word: "pinnacle", hint: "The highest or most successful point of something." },
    { word: "quicksand", hint: "A loose, wet, and sinking type of sand that can trap objects." },
    { word: "panorama", hint: "A wide and unbroken view of a surrounding area." },
    { word: "cathedral", hint: "A large and important church, typically the seat of a bishop." },
    { word: "utopia", hint: "An imagined perfect society where everything is ideal." },
    { word: "silhouette", hint: "A dark outline or shape of an object against a lighter background." },
    { word: "lantern", hint: "A portable light source, often enclosed in glass or paper." },
    { word: "crescendo", hint: "A gradual increase in loudness in music." },
    { word: "riddle", hint: "A puzzle or question requiring thought to solve." },
    { word: "labyrinth", hint: "A complex network of winding paths or passages." },
    { word: "wilderness", hint: "A wild and uninhabited area of land." },
    { word: "carousel", hint: "A rotating amusement ride with horses or animals." },
    { word: "expedition", hint: "A journey undertaken for a specific purpose, often exploration." },
    { word: "serenade", hint: "A piece of music sung or played in honor of someone." },
    { word: "alchemy", hint: "An ancient form of chemistry concerned with transformation." },
    { word: "vortex", hint: "A swirling mass of fluid or air, often forming a spiral." },
    { word: "resonance", hint: "The quality of a sound being deep, full, and reverberating." },
    { word: "tundra", hint: "A cold, treeless biome with frozen ground." },
    { word: "sanctuary", hint: "A place of refuge or safety." },
    { word: "whirlwind", hint: "A rapidly rotating column of air or a chaotic situation." },
    { word: "epoch", hint: "A significant period in history or a person's life." },
    { word: "fjord", hint: "A deep, narrow sea inlet between high cliffs." },
    { word: "nebula", hint: "A massive cloud of gas and dust in space." },
    { word: "prism", hint: "A transparent object that separates light into colors." },
    { word: "nomad", hint: "A person who moves from place to place without a permanent home." },
    { word: "mirage", hint: "An optical illusion, often appearing as water in the desert." },
    { word: "runestone", hint: "A stone with ancient inscriptions, often in Norse cultures." },
    { word: "alchemy", hint: "An ancient practice of transforming substances, often linked to gold-making." },
    { word: "avalanche", hint: "A sudden, rapid flow of snow down a mountainside." },
    { word: "crescent", hint: "A curved shape, often associated with the moon." },
    { word: "labyrinth", hint: "A complex maze with many twists and turns." },
    { word: "horizon", hint: "The line where the sky meets the Earth or sea." },
    { word: "pendulum", hint: "A swinging weight used in clocks and physics experiments." },
    { word: "lullaby", hint: "A soothing song sung to help a child sleep." },
    { word: "mirage", hint: "An optical illusion often seen in deserts." },
    { word: "zenith", hint: "The highest point or peak of something." },
    { word: "aurora", hint: "A natural display of colored lights in the sky, often near the poles." },
    { word: "gargoyle", hint: "A carved stone creature often found on old buildings." },
    { word: "paradox", hint: "A situation that contradicts itself but may still be true." },
    { word: "hologram", hint: "A three-dimensional image created with laser technology." },
    { word: "oracle", hint: "A person or thing believed to provide wise or prophetic advice." },
    { word: "basilisk", hint: "A mythical serpent said to have a deadly gaze." },
    { word: "catacomb", hint: "An underground passageway used as a burial site." },
    { word: "obsidian", hint: "A dark volcanic glass formed from rapid lava cooling." },
    { word: "specter", hint: "A ghostly or haunting presence." },
    { word: "quagmire", hint: "A difficult or swampy situation that is hard to escape." },
    { word: "chimera", hint: "A mythical creature composed of parts from different animals." },
    { word: "epoch", hint: "A significant period in history or one's life." },
    { word: "mosaic", hint: "An artwork made of small colored pieces of material." },
    { word: "scepter", hint: "A ceremonial staff held by a ruler as a symbol of power." },
    { word: "nectar", hint: "A sweet liquid produced by flowers, attracting pollinators." },
    { word: "quartz", hint: "A hard mineral often used in jewelry and timepieces." },
    { word: "trident", hint: "A three-pronged spear, often associated with Poseidon." },
    { word: "lighthouse", hint: "A tall structure that helps guide ships safely at sea." },
    { word: "zeppelin", hint: "A large airship used for travel and exploration." },
    { word: "fathom", hint: "A unit of depth used in measuring water levels." },
    { word: "tempest", hint: "A violent storm with strong winds and heavy rain." },
    { word: "archipelago", hint: "A group or chain of islands." },
    { word: "runestone", hint: "An ancient stone inscribed with runic letters." },
    { word: "amethyst", hint: "A purple gemstone often associated with clarity and peace." },
    { word: "omen", hint: "A sign or event that is believed to predict the future." },
    { word: "atlas", hint: "A book of maps or charts." },
    { word: "sapphire", hint: "A precious gemstone, typically deep blue in color." },
    { word: "pyre", hint: "A pile of wood used for burning a body in funeral rites." },
    { word: "saga", hint: "A long, epic story often featuring heroic deeds." },
    { word: "alchemy", hint: "A medieval practice of turning base metals into gold." },
    { word: "sanctuary", hint: "A place of refuge or protection." },
    { word: "whirlpool", hint: "A swirling body of water that can pull objects downward." },
    { word: "keystone", hint: "A central stone in an arch that holds it together." },
    { word: "meteor", hint: "A space rock that burns up when entering Earth's atmosphere." },
    { word: "galleon", hint: "A large sailing ship used during the Age of Exploration." },
    { word: "serenade", hint: "A song played or sung in admiration, often under a balcony." },
    { word: "flame", hint: "The visible part of a fire." },
    { word: "labyrinth", hint: "A complex maze or network of passages." },
    { word: "pegasus", hint: "A mythical winged horse from Greek mythology." },
    { word: "astronomy", hint: "The study of celestial objects and the universe." },
    { word: "fable", hint: "A short story that teaches a moral lesson." },
    { word: "monolith", hint: "A large, single upright stone, often of historical significance." },
    { word: "harbinger", hint: "A sign that foreshadows a future event." },
    { word: "coral", hint: "A marine organism that forms reefs in warm waters." },
    { word: "rift", hint: "A crack or separation between two things." },
    { word: "canyon", hint: "A deep gorge carved by a river over time." },
    { word: "scepter", hint: "A decorated staff held by royalty as a symbol of power." },
    { word: "thunderbolt", hint: "A flash of lightning accompanied by thunder." },
    { word: "echo", hint: "A sound that reflects and is heard again." },
    { word: "serendipity", hint: "A fortunate discovery made by accident." },
    { word: "onyx", hint: "A black or dark-colored gemstone." },
    { word: "cavern", hint: "A large cave, often with multiple chambers." },
    { word: "crescendo", hint: "A gradual increase in intensity or volume." },
    { word: "catastrophe", hint: "A sudden disaster causing great damage." },
    { word: "prism", hint: "A transparent object that refracts light into a spectrum." },
    { word: "quiver", hint: "A container used for holding arrows." },
    { word: "pendant", hint: "A piece of jewelry hanging from a chain or cord." },
    { word: "talisman", hint: "An object believed to bring good luck or protection." },
    { word: "tome", hint: "A large, heavy book, often scholarly in nature." },
    { word: "zephyr", hint: "A soft, gentle breeze." },
    { word: "runic", hint: "Relating to ancient symbols or letters used in early writing." },
    { word: "plume", hint: "A feather or a rising column of smoke or vapor." },
    { word: "mirage", hint: "An illusion caused by atmospheric conditions." },
    { word: "paradigm", hint: "A model or framework for understanding something." },
    { word: "halcyon", hint: "A period of time that was peaceful and happy." },
    { word: "cascade", hint: "A waterfall or a series of small waterfalls." },
    { word: "equinox", hint: "The time when day and night are of equal length." },
    { word: "panorama", hint: "A wide, unbroken view of a landscape." },
    { word: "maelstrom", hint: "A powerful whirlpool or a chaotic situation." },
    { word: "silhouette", hint: "A dark outline of a shape against a lighter background." },
    { word: "chasm", hint: "A deep opening in the Earth's surface." },
    { word: "harbor", hint: "A sheltered place for ships to dock safely." }
];