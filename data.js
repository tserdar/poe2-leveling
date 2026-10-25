/*
  Route data. Adapted from domistae/poe2-leveling (MIT) — https://github.com/domistae/poe2-leveling
  Rewritten in short form.

  Step syntax
    "text"      required step
    "? text"    optional step (hidden unless "Optional" is on)
    "> text"    tip for the step above (hidden unless "Tips" is on)
    "! text"    warning for the step above (hidden unless "Tips" is on)
    *Name*      boss / key name
    [x]         reward
    [[x]]       permanent reward

  Writing rules (see CLAUDE.md)
    Short but self-explanatory. Sentence case; in-game names keep their capitals.
    No trailing periods. → means "then". Directions spelled out: (north), (south-east).
*/
window.ROUTE = [
{
  id: 'a1', tab: 'I', name: 'Act I', span: 'Clearfell → Ogham', lvl: '1–14',
  tips: [
    'After killing Draven, leave and re-enter the Cemetery; Asinia then drops loot at the higher zone level',
    'Aim for Lvl 14 before the Geonor fight'
  ],
  zones: [
    { n: 'Riverbank', lv: '1', s: [
      'Talk to the Wounded Man → equip the starter weapon',
      'Open the large chests, equip items and gems',
      'Kill *The Bloated Miller*; the town entrance is behind him'
    ]},
    { n: 'Clearfell Encampment', town: 1, s: [
      'Talk to Renly [Skill Gem]'
    ]},
    { n: 'Clearfell', lv: '2–3', s: [
      'Kill *Beira of the Rotten Pack* (north side) [[+10% Cold Res]]',
      '? Enter Mud Burrow, kill *The Devourer* [Skill Gem Lv2]; then talk to Renly in town [Support Gem]',
      '> Waypoint right next to Mud Burrow',
      '> The bridge leads on to The Grelwood',
      '? Abandoned Stash inside the Mysterious Campsite [Skill Gem]'
    ]},
    { n: 'The Grelwood', lv: '3–5', wp: 1, s: [
      '> Glowing roots all lead to the Tree of Souls',
      '> Follow the river upstream to reach The Red Vale',
      'Find and talk to Una',
      'Enter Grim Tangle, take its waypoint, come back',
      'Enter The Red Vale, take its waypoint, come back',
      '? Kill *Gerung, the Brambleghast* [Skill Gem Lv2]',
      '? Hut with a cauldron → kill *Areagne* [Support Gem] [Flasks]',
      '> Hardest early fight; chill her with Frost Bomb'
    ]},
    { n: 'The Red Vale', lv: '5–6', wp: 1, s: [
      'Find the 3 Obelisks of Rust; loot the Runed Girdle from each',
      'Kill *The Rust King*, who spawns at the last obelisk [Skill Gem Lv3]',
      '> Drag monster packs under him so your AoE hits both',
      '> Weapon racks here guarantee a tier-2 martial weapon',
      'Teleport back to town'
    ]},
    { n: 'Clearfell Encampment', town: 1, s: [
      'Talk to Renly → receive Runed Spikes',
      'Teleport to The Grelwood'
    ]},
    { n: 'The Grelwood (second visit)', s: [
      'Activate the 3 Runic Seals, then talk to Una',
      'Teleport back to town'
    ]},
    { n: 'Clearfell Encampment', town: 1, s: [
      'Talk to Una',
      'Teleport to Grim Tangle'
    ]},
    { n: 'Grim Tangle', lv: '6', wp: 1, s: [
      '> Mushroom clusters lead to the Druid; a trail of caskets leads to the Cemetery',
      '? Kill *Ervig, the Rotted Druid* [Support Gem]',
      'Enter Cemetery of the Eternals'
    ]},
    { n: 'Cemetery of the Eternals', lv: '6–9', s: [
      'Talk to Lachlann the Lost',
      '? Sarcophagus near a checkpoint (Ancient Ruins) [Ring]',
      'Mausoleum of the Praetor: kill *Draven* → loot his key piece',
      '? Forgotten Riches: a pillar near a big sarcophagus lights up; use it to open a hidden cache [Support Gem] [Gold]',
      '> Repeatable by resetting the zone from the waypoint',
      'Tomb of the Consort: kill *Asinia* → loot her key piece',
      '? Haunted Treasure secret [Support Gem]',
      'Open the Memorial Gate next to Lachlann → kill *Lachlann* [Ring] [Skill Gem Lv3]',
      'Exit to Hunting Grounds, take the waypoint → teleport to town'
    ]},
    { n: 'Clearfell Encampment', town: 1, s: [
      'Talk to Finn, Una and The Hooded One (he can now identify items)'
    ]},
    { n: 'Hunting Grounds', lv: '10', wp: 1, s: [
      '? Talk to Delwyn (only starts the wisp side mechanic)',
      'Kill *The Crowbell* [[+2 Skill Points]]',
      '> Blood trails from dead livestock lead to him',
      '! His slam can one-shot you; he flees at low life',
      'Enter Freythorn, take its waypoint, come back',
      'Enter Ogham Farmlands, take its waypoint, come back',
      'Complete the small ritual (not the one near the start) [Support Gem]',
      '> It spawns a locust trail pointing to Freythorn',
      'Teleport to Freythorn'
    ]},
    { n: 'Freythorn', lv: '11–12', wp: 1, s: [
      'Activate the 3 small Ritual Altars',
      '> Smoke from the big central altar points to each small one',
      'Use the big altar → kill *The King in the Mists* [[+30 Spirit]] [Spirit Gem Lv4]',
      '! Phase 2: dodge totem summons and curses',
      '? Cleanse the Ominous Altars, then claim a charm from Finn in town [Charm]',
      'Teleport to Ogham Farmlands'
    ]},
    { n: 'Ogham Farmlands', lv: '12', wp: 1, s: [
      'Loot Una\'s Lute Box (house near a checkpoint) → give the lute to Una in town [[+2 Skill Points]]',
      '? Rare dogs inside the crop circle [Skill Gem Lv4]',
      'Enter Ogham Village'
    ]},
    { n: 'Ogham Village', lv: '12–13', s: [
      '> Follow the cobblestone road to reach the smithy',
      'Smithing Tools inside the smithy (first character only) [[Salvage Bench]]',
      '? Blacksmith\'s Chest in the same house [Blank Rune] [Artificer\'s Orb]',
      'Kill *The Executioner*, mostly fought on the north side [Support Gem]',
      'Go upstairs, pull the lever, talk to Leitis',
      'Enter The Manor Ramparts'
    ]},
    { n: 'The Manor Ramparts', lv: '13', s: [
      '? Gallows near a checkpoint: click the rope on the hanging man [Support Gem]',
      '> Have a Lvl 10 flask and a Lvl 11 chest piece before the Manor',
      'Enter Ogham Manor'
    ]},
    { n: 'Ogham Manor', lv: '13–14', s: [
      'Kill *Candlemass* on the first floor [[+20 Life]]',
      'Go downstairs → kill *Count Geonor* (act boss)',
      '> Going down: on each floor head the opposite way from the floor above',
      '! Phase 2: dodge-roll under his sword; chill him as it starts',
      'Teleport back to town'
    ]},
    { n: 'Clearfell Encampment', town: 1, s: [
      'Talk to everyone, then The Hooded One → "Follow the Beast\'s Trail" to Act II'
    ]}
  ]
},
{
  id: 'a2', tab: 'II', name: 'Act II', span: 'Vastiri → Dreadnought', lvl: '14–29',
  tips: [
    'Do Mastodon Badlands before Keth; Kabala then drops a Lv7 gem',
    'Skip Balbala; get the Djinn Barya from the Deshar vultures and ascend at Lvl 28',
    'Aim for Lvl 29 at Jamanra and Lvl 30 entering Act III'
  ],
  zones: [
    { n: 'Vastiri Outskirts', lv: '14–15', s: [
      'Talk to The Hooded One',
      'Kill *Rathbreaker*',
      'Teleport back to the start of the zone → talk to Zarka [Uncut Skill Gem Lv5]',
      'Enter The Ardura Caravan'
    ]},
    { n: 'The Ardura Caravan', town: 1, s: [
      'Talk to The Hooded One and Sekhema Asala (twice)',
      'Use the desert map → The Halani Gates; talk to Asala there',
      'Return to the caravan, talk to Asala again',
      'Travel to Mawdun Quarry'
    ]},
    { n: 'Mawdun Quarry', lv: '15', s: [
      '? Faridun War Cache near a checkpoint [Artificer\'s Orb]',
      'Enter Mawdun Mine'
    ]},
    { n: 'Mawdun Mine', lv: '16', s: [
      '> Follow the rail tracks; at junctions take the branch where the tracks connect',
      'Kill *Rudja* [Uncut Skill Gem Lv6]',
      'Talk to Risu in the cage',
      'Teleport back to town'
    ]},
    { n: 'The Ardura Caravan', town: 1, s: [
      'Talk to Risu and Asala',
      'Travel to Traitor\'s Passage'
    ]},
    { n: 'Traitor\'s Passage', lv: '17', s: [
      '? Activate the 3 Runic Seals to open the Ancient Seal door → kill *Balbala, the Traitor* [Djinn Barya] [Uncut Skill Gem Lv6]',
      '> At the one fork: the branch hung with parchment leads to Balbala, the other is the exit',
      '> Most builds skip this fight; the Deshar vultures give an easier Barya',
      '? Bell Chest in a dead end',
      'Take the stairs up to The Halani Gates'
    ]},
    { n: 'The Halani Gates', lv: '18', s: [
      '> Loot the command tents before opening the gates',
      'Summon Asala to open the gates',
      '> If Asala gets stuck, reset at a checkpoint and she catches up',
      'Kill *Jamanra* (first fight)',
      'Go down the stairs to the checkpoint → teleport to town'
    ]},
    { n: 'The Ardura Caravan', town: 1, s: [
      'Talk to Shambrin, Zarka and Asala',
      'Travel to the Trial of the Sekhemas, take the waypoint only (run it later at Lvl 28)',
      'Travel to Mastodon Badlands'
    ]},
    { n: 'Mastodon Badlands', lv: '19–20', s: [
      '> Doing this before Keth raises Keth\'s level, so Kabala drops a Lv7 gem',
      '? Shrine of Bones near a checkpoint [Support Gem Lv2]',
      'Enter The Bone Pits'
    ]},
    { n: 'The Bone Pits', lv: '20–21', s: [
      'Kill hyenas until the Sun Clan Relic drops',
      '> Tall Goliath hyenas drop it more often',
      'Kill *Iktab & Ekbab* → loot the Mastodon Tusks',
      '> Keep both relics for the altar in Valley of the Titans',
      'Teleport back to town'
    ]},
    { n: 'The Ardura Caravan', town: 1, s: [
      'Talk to Zarka → travel to Keth'
    ]},
    { n: 'Keth', lv: '22', s: [
      'Kill snakes until the Kabala Clan Relic drops',
      '? Abandoned Prayer, down the stairs [Amulet]',
      'Kill *Kabala, Constrictor Queen* in the Venom Pit [[+2 Skill Points]] [Skill Gem Lv7]',
      'Enter The Lost City'
    ]},
    { n: 'The Lost City', lv: '23', s: [
      '? Kill *Ninth Treasure of Keth* in the Galleria [Jewel]',
      '? Golden Tomb [Spirit Gem Lv7]',
      'Enter Buried Shrines'
    ]},
    { n: 'Buried Shrines', lv: '23', s: [
      '? Guarded sarcophagus [Support Gem] [Lesser Jeweller\'s Orb]',
      '? Make an offering (fire, water or lightning) [Res Ring]',
      'Enter The Heart of Keth'
    ]},
    { n: 'The Heart of Keth', lv: '24', s: [
      '> Head down to the Halani shrine at the bottom; Azarian is there',
      'Kill *Azarian*',
      'Talk to the water goddess Halani → use the Everburning Cinders on her [Essence]',
      'Teleport back to town'
    ]},
    { n: 'The Ardura Caravan', town: 1, s: [
      'Talk to Zarka → travel to Valley of the Titans'
    ]},
    { n: 'Valley of the Titans', lv: '25', wp: 1, s: [
      '> Each giant titan head has a path to one seal',
      'Activate the 3 Ancient Seals around the edge of the map',
      'Find the Medallion at the Relic Altar, then place both relics [[+1 Charm Slot]]',
      '> The altar is on a side path off one seal route; the charm bonus can be changed later',
      'Enter The Titan Grotto'
    ]},
    { n: 'The Titan Grotto', lv: '25–26', s: [
      'Kill *Zalmarath, the Colossus* → loot the Flame Ruby',
      'Teleport back to town'
    ]},
    { n: 'The Ardura Caravan', town: 1, s: [
      'Talk to Zarka and Asala',
      'Pick Traitor\'s Passage on the map but don\'t enter',
      'Sound the horn on top of the caravan → talk to Asala → travel to Deshar'
    ]},
    { n: 'Deshar', lv: '26–27', s: [
      'Loot the Fallen Dekhara near the tower [[+2 Skill Points]]',
      '> Take the letter to Shambrin in town',
      'Kill the 2 vultures in the side area [Djinn Barya Lvl 28]',
      '> The easy key for your first Ascendancy',
      '? The Unremembered skeleton near a checkpoint [Artificer\'s Orb]',
      'Enter Path of Mourning'
    ]},
    { n: 'Path of Mourning', lv: '27', s: [
      '? Shifting Vases encounter [Rares] [Support Gem Lv2]',
      'Enter The Spires of Deshar'
    ]},
    { n: 'The Spires of Deshar', lv: '27', s: [
      'Use the Sisters of Garukhan shrine [[+10% Lightning Res]]',
      'Kill *Tor Gul*',
      '! One of the hardest fights in the act; cap your Lightning Res',
      'Teleport to town → talk to Asala (twice)'
    ]},
    { n: 'Trial of the Sekhemas', lv: '28', wp: 1, s: [
      'On entry, pick the Lvl 28 Djinn Barya manually (not the Lvl 22 default)',
      'Room priority: Ritual > Chalice > Hourglass > Gauntlet',
      '> Hourglass rooms: killing rares adds time',
      'Finish the trial [[1st Ascendancy]]',
      '> Smith of Kitava: stash a white chest piece first'
    ]},
    { n: 'The Dreadnought', lv: '28–29', s: [
      'Travel to The Dreadnought → kill *Jamanra, the Abomination* (act boss)',
      '> He starts armour-broken; heavy physical hits stun him before the lightning fence phase',
      'Teleport back to town'
    ]},
    { n: 'The Ardura Caravan', town: 1, s: [
      'Leave the caravan (top left) → talk to The Hooded One',
      'Talk to Asala → "Travel to the Sandswept Marsh"'
    ]}
  ]
},
{
  id: 'a3', tab: 'III', name: 'Act III', span: 'Sandswept → Ziggurat', lvl: '30–42',
  tips: [
    'Servi\'s choice is permanent; most builds take Stun Threshold',
    'Explorer camps give guaranteed rares: gloves, boots, armour',
    'Stay about 3 levels under zone level; fewer monsters from here on'
  ],
  zones: [
    { n: 'Sandswept Marsh', lv: '30', s: [
      'Talk to The Hooded One',
      '? Kill *Rootdredge* [Skill Gem Lv9]',
      '? Basket at the Orok Campsite [Lesser Jeweller\'s Orb]',
      '? Corpse hanging from a tree [Ring] [Skill Gem Lv9]',
      'Enter Ziggurat Encampment'
    ]},
    { n: 'Ziggurat Encampment', town: 1, s: [
      'Talk to Alva, Oswald and The Hooded One',
      'Buy Lvl 30 flasks from the town vendor',
      'Take the top exit to Jungle Ruins'
    ]},
    { n: 'Jungle Ruins', lv: '30–31', wp: 1, s: [
      'Find and talk to Alva; take the waypoint near her',
      '> Talk to explorers at camps; they mark the next area on your minimap',
      'Kill *Mighty Silverfist* [[+2 Skill Points]]',
      '! Dodge his slam sideways, not backwards',
      '? Ravaged corpse at the Jungle Grave → Servi offers a belt [Rare belt]',
      '? Troubled Camp (Gwendolyn Albright) [Rare gloves]',
      '? Clear the Vaal Beacon pack (1 of 6)',
      'Take the waypoint near the crypts → enter The Venom Crypts'
    ]},
    { n: 'The Venom Crypts', lv: '35', s: [
      '> Zone level 35, much higher than the areas around it',
      '? Sarcophagus event [Support Gem Lv3]',
      'Find the corpse, loot the Orok Poison → go to the safe zone "A Reprieve"',
      '? Clear the Vaal Beacon pack (2 of 6)',
      'Teleport back to town'
    ]},
    { n: 'Ziggurat Encampment', town: 1, s: [
      'Give the Orok Poison to Servi and pick a bonus [[Permanent bonus]] [Artificer\'s Orb]',
      '! Can\'t be changed: +25% Stun Threshold · +30% Elemental Ailment Threshold · +25% Mana Regeneration',
      'Go to Infested Barrens through Jungle Ruins'
    ]},
    { n: 'Infested Barrens', lv: '31–32', wp: 1, s: [
      '? Troubled Camp (Sebastian Carroway) [Rare boots]',
      '? Clear the Vaal Beacon pack (3 of 6)',
      'Enter Chimeral Wetlands'
    ]},
    { n: 'Chimeral Wetlands', lv: '32–33', wp: 1, s: [
      '? Ravaged Camp: logbook and gold chest [Rare armour]',
      '? Toxic Bloom: kill the *Noxious Behemoth* [Amulet]',
      '? League encounter [Skill Gem Lv9]',
      'Enter the Temple of Chaos, take its waypoint, come back',
      'Kill *Xyclucian, the Chimera* → loot the Inscribed Ultimatum',
      '? Clear the Vaal Beacon pack (4 of 6)',
      'Enter Jiquani\'s Machinarium behind the boss, take waypoint'
    ]},
    { n: 'Trial of Chaos (when ready)', lv: '33+', s: [
      'Use the Inscribed Ultimatum at the trial entrance; pick mods you can handle',
      '! Avoid lightning-rune mods if your Lightning Res is low',
      '> Dodge-roll between the slam and twist of the core placement to copy the core into every socket',
      'Finish the trial [[2nd Ascendancy]]'
    ]},
    { n: 'Jiquani\'s Machinarium', lv: '33', s: [
      '> Map is a squared U-shape; the generators are at the two tips',
      'Summon and talk to Alva',
      'Loot a Small Soul Core → place it in the stone altar next to Alva',
      'Collect the other Small Soul Cores (4 in total)',
      '> One core opens the Sanctum; two open the Blackjaw door or a secret loot room',
      'Open the Blackjaw door → kill *Blackjaw, the Remnant* → use the Flame Core [[+10% Fire Res]]',
      'Open another door → enter Jiquani\'s Sanctum'
    ]},
    { n: 'Jiquani\'s Sanctum', lv: '33–34', s: [
      'Summon and talk to Alva',
      'Loot 2 Medium Soul Cores → place them in the generators',
      'Back at the start, use the Large Soul Core → kill *Zicoatl, Warden of the Core* → loot the core',
      '? Clear the Vaal Beacon pack (5 of 6)',
      '> Paquate\'s Mechanism here can corrupt items',
      'Teleport to Jungle Ruins'
    ]},
    { n: 'Jungle Ruins (second visit)', s: [
      'Use the Large Soul Core on the stone altar → opens the way to The Matlan Waterways'
    ]},
    { n: 'The Matlan Waterways', lv: '35', s: [
      '? Narag\'s Hut: kill *Narag of the Vile Word* [Rare weapon] [Blacksmith\'s Whetstone]',
      'Walk over every pressure pad (6–8), then go to the end of the zone',
      '? Clear the last Vaal Beacon pack (6 of 6) → portal to the Vaal Ruins',
      '> Enter the portal right away; it can disappear',
      '? Ravaged corpse at the Azak Bog entrance → Servi [Rare belt]',
      'Take the side entrance to Azak Bog'
    ]},
    { n: 'Azak Bog', lv: '33–34', wp: 1, s: [
      '? Flameskin rituals [Ignagduk\'s Harvest]',
      'Kill *Ignagduk, the Bog Witch* → use the Gemrot Skull [[+30 Spirit]] [Uncut Spirit Gem Lv10]',
      '> Her arena is always in the top-right corner',
      'Bring Ignagduk\'s spear to Servi in town [Charm]',
      'Teleport back to town'
    ]},
    { n: 'Ziggurat Encampment', town: 1, s: [
      'Go downstairs, talk to Alva',
      'Take the bottom exit to The Drowned City'
    ]},
    { n: 'The Drowned City', lv: '35–36', s: [
      '> Same fixed layout as Utzaal later on',
      'Find Apex of Filth, take its waypoint, come back',
      'Find The Molten Vault, take its waypoint, come back',
      '? Drowned Quarters: hidden rooms with rares, gold and chests [Runes]',
      '! Teal drowning orbs block vision and kill if you stay; keep moving',
      '! A crawler swarm ambushes just after the bridge with the checkpoint'
    ]},
    { n: 'The Molten Vault', lv: '36', wp: 1, s: [
      'Kill *Mektul, the Forgemaster* (first character only) [Uncut Skill Gem Lv10] [Artificer\'s Orb]',
      '! About a 4-minute molten-flood timer; be over-levelled and bring Fire Res',
      '> Skip on alt characters',
      '? Frost Cores on stone altars clear the lava blockages [Gold chests]',
      'Teleport back to town'
    ]},
    { n: 'Ziggurat Encampment', town: 1, s: [
      'Give the Hammer of Kamasa to Oswald [[Reforging Bench]]',
      'Teleport to Apex of Filth'
    ]},
    { n: 'Apex of Filth', lv: '36–37', wp: 1, s: [
      '? Find 3 mushrooms → use them at the cauldron [Quality flasks]',
      '> The Cauldron Keeper is also a hidden vendor for caster gear and jewellery',
      'Kill *Queen of Filth* → loot the Temple Door Idol',
      '! Stay close to her; backing away triggers her rolling slam',
      'Teleport back to town'
    ]},
    { n: 'Ziggurat Encampment', town: 1, s: [
      'Go downstairs, talk to Alva → take the door behind her to Temple of Kopec'
    ]},
    { n: 'Temple of Kopec', lv: '37', s: [
      '> Each floor is a triangle; check the far corner first',
      'Go upstairs → kill *Ketzuli, High Priest of the Sun*',
      '! Sunlight indoors stacks a burning debuff; stay in the shade between packs',
      'Talk to Alva'
    ]},
    { n: 'Ziggurat Encampment', town: 1, s: [
      'Take the Gateway → go downstairs → enter Utzaal'
    ]},
    { n: 'Utzaal', lv: '38–39', s: [
      '> Same layout as The Drowned City; the paved road leads to Viper',
      'Kill Vaal Goliaths (canister on the shoulder) until the Sacrificial Heart drops',
      '> They also appear in Aggorat',
      '? Side doors with idols you can sell to Oswald',
      'Kill *Viper Napuatzi*',
      '! Very mobile; fight from one spot so her attacks become predictable',
      'Enter Aggorat'
    ]},
    { n: 'Aggorat', lv: '39–40', s: [
      '> Follow the town crier\'s chanting',
      'Sacrificial Altar (top-right of the map): place the heart, stab it with the dagger [[+2 Skill Points]]',
      '? Crag Tooth league encounter [Vaal Orb]',
      'Enter The Black Chambers (top-left of the map)'
    ]},
    { n: 'The Black Chambers', lv: '40–42', s: [
      'Kill *Doryani, Royal Thaumaturge* (act boss)',
      '! Three phases; the last one is airborne',
      '> Loot drops about 30 seconds after the kill',
      'Teleport back to town'
    ]},
    { n: 'Ziggurat Encampment', town: 1, s: [
      'Talk to Doryani twice → Alva → The Hooded One → Alva'
    ]}
  ]
},
{
  id: 'a4', tab: 'IV', name: 'Act IV', span: 'Kingsmarch → Ngakanu', lvl: '42–52',
  tips: [
    'Which islands hold the weapon fragments and Matiki changes each league; dialogue in Kingsmarch tells you',
    'Matiki is locked in a cage on one of the islands; click the cage to free Matiki',
    'Greater Orbs of Transmutation and Augmentation can start dropping from here'
  ],
  zones: [
    { n: 'Kingsmarch', lv: '42', town: 1, s: [
      'Talk to Doryani, then Alva',
      'Talk to Tujen, accept his quest',
      'Talk to Farrow, accept The Runeseeker quest',
      'Talk to Makoru on the ship → pick an island'
    ]},
    { n: 'Whakapanu Island', lv: '42–43', s: [
      'Petrified Pirate on the coast [Map Piece 1 of 4]',
      '? Shark Pit: kill *The Great White One* → Shark Fin',
      '> Give the fin to Kaimana (at Ngakanu, or on the docks after Tavakai) [Uncut Gem Lv11] [Blessing]',
      '? Crabshell Cavern: kill *Clawcrunch* [Support Gem Lv4]',
      'Enter Singing Caverns'
    ]},
    { n: 'Singing Caverns', wp: 1, s: [
      '? Beckoning Clam → Humming Pearl, give it to Rog',
      'Kill *Diamora, Song of Death*',
      'Talk to The Hooded One → teleport to town'
    ]},
    { n: 'Kingsmarch', town: 1, s: [
      'Talk to Ange → Shoreline Hideout; clear it, talk to Ange again [[Hideout]]'
    ]},
    { n: 'Shrike Island', lv: '43–44', s: [
      'Corpse Nest with an impaled Karui [Map Piece 2 of 4]',
      'Kill *Scourge of the Skies*',
      'Talk to The Hooded One → sail on'
    ]},
    { n: 'Abandoned Prison', lv: '44', wp: 1, s: [
      'Kill monsters until the Chapel Key drops',
      '? Armoury (elite drops a jewel) and Forgotten Cells [Jewel]',
      'Open the chapel → kill *Forael* → use the Goddess of Justice [Flask]',
      'Enter Solitary Confinement'
    ]},
    { n: 'Solitary Confinement', s: [
      'Kill *The Prisoner*',
      'Talk to The Hooded One → sail to Isle of Kin'
    ]},
    { n: 'Isle of Kin', lv: '45', s: [
      'Flayed Sailor near the shore [Map Piece 3 of 4]',
      '? Doomed Mine (Fossilised Formation) [Lesser Jeweller\'s Orb]',
      'Beast Pen: kill *Mimok the Enslaved* [Tier 4 Support Gem]',
      '? Primal Arena: kill *Blind Beast* [Greater Blank Rune]',
      'Enter Volcanic Warrens'
    ]},
    { n: 'Volcanic Warrens', lv: '45–46', wp: 1, s: [
      '? Volcanic Nest: *Magma Twins*; kill lightning one first for a Ruby Ring, fire one first for a Topaz Ring',
      'Kill *Krutog, Lord of Kin* at The Tyrant Throne',
      'Teleport to Kingsmarch'
    ]},
    { n: 'Eye of Hinekora', lv: '46–47', wp: 1, s: [
      'Talk to Matiki at the well (not in town), then click the well',
      '? Hidden chest behind the waterfall [Spirit Gem Lv12]',
      'Complete the 3 tests: Fire, Nature, Cold',
      'Pay respects at the Silent Hall altar, talk to Navali [[+5% Max Mana]]',
      'Enter Halls of the Dead'
    ]},
    { n: 'Halls of the Dead', lv: '47', s: [
      'Trial of Ngakanu (3 tests) → pick a tattoo [[+5% Res or +5 Attribute]]',
      '> The resistance tattoo suits most builds',
      'Kill *Yama the White* (low life, easy to stun)',
      'Enter Trial of the Ancestors'
    ]},
    { n: 'Trial of the Ancestors', lv: '47–48', s: [
      'Talk to Navali and Hinekora [[+2 Skill Points]]',
      'Teleport → sail to Kedge Bay'
    ]},
    { n: 'Kedge Bay', lv: '47–48', wp: 1, s: [
      'Dead Man\'s Chest / Smuggler\'s Stash [Map Piece 4 of 4]',
      '? Abandoned Ship and Tidal Cay (Tombgrowl) [Loot]',
      '? Kill *Doran, the Deft*, a tough mobile rogue exile near the entrance [Loot]',
      'Enter Journey\'s End'
    ]},
    { n: 'Journey\'s End', lv: '48–49', wp: 1, s: [
      'Talk to Tujen',
      'Kill *Captain Harlin* → loot the Verisium',
      'Talk to Freya Hartlin',
      'In town, get Verisium Spikes from Dannig → back to Freya',
      'Use the totem → kill *Omniphobia*',
      'Talk to Tujen in town [[+2 Skill Points]]'
    ]},
    { n: 'Plunder\'s Point', s: [
      'Give all 4 map pieces to Makoru → sail → Dannig → Expedition → Deserted Post → summon Farrow [[Verisium Anvil]]',
      '! Don\'t skip; this is the only way to unlock Runeforging'
    ]},
    { n: 'Arastas', lv: '49–50', wp: 1, s: [
      'Talk to Missionari Lorandis → follow him → destroy the shield',
      '? Ring a bell: Evening gives 3 Exalted Orbs, Morning gives 3 Regal Orbs',
      'Kill *Torvian* → enter The Excavation',
      '> Let his thrown stones hit the 2 priests above'
    ]},
    { n: 'The Excavation', lv: '50–51', s: [
      'Kill *Benedictus* at the Precursor Forge → talk to The Hooded One',
      '? Excavated Cache at the checkpoint',
      'Teleport to Kingsmarch → sail to Ngakanu'
    ]},
    { n: 'Ngakanu', lv: '51', s: [
      '? Abyss → Abyssal Depths [Loot]',
      '? Kill the *Mad Butcher* in the large hut [Loot]',
      'Enter Heart of the Tribe'
    ]},
    { n: 'Heart of the Tribe', lv: '52', s: [
      '? Chests in the Meeting House',
      'Kill *Tavakai* (act boss), then talk to him',
      'Return to town, talk to The Hooded One → unlocks the Interludes'
    ]}
  ]
},
{
  id: 'in', tab: 'V', name: 'Interludes', span: 'Ogham · Khari · Kriar', lvl: '52–58',
  tips: [
    'Play them in any order; suggested Kriar → Ogham → Khari for the early +40 Spirit',
    'Resistances drop as soon as you enter; only go in when ready to run it',
    'Settle your Ascendancy before the final turn-in'
  ],
  zones: [
    { n: '5.1 · Ogham', lv: '52–53', s: [
      'Talk to The Hooded One → travel to The Refuge',
      'Enter Scorched Farmlands, take the waypoint',
      '? Kill *Isolde & Heldra* (east)',
      'Stones of Serle (south): activate the 6 Runed Megaliths',
      '> This lifts the Darkness sealing the Blackwood entrance (north)',
      'Go through Blackwood → Holten',
      'Kill *Godwin & Sigbert* in Holten [Blacksmith\'s Whetstone]',
      '? Soul of the Ferryman at the docks in Holten [Cheap Greater Runes]',
      'Wolvenhold: kill *Oswin, the Dread Warden* → use the Warden\'s Ledger [[+2 Skill Points]] [Unique] [Vaal Orb]',
      'Holten Estate: climb two staircases → kill *Thane Wulfric & Lady Elswyth*',
      'Finish the interlude → return to town'
    ]},
    { n: '5.2 · Khari', lv: '54–55', s: [
      'Talk to The Hooded One → travel to Khari Crossing',
      'Kill *Akthi & Anundr* (south-east) → talk to Risu [[+2 Skill Points]]',
      '> Wayfinder\'s Seals point west to the Pools of Kathal',
      '? Torbek in Khari Crossing [Cheap caster weapons]',
      'Go to Pools of Kathal, take the waypoint',
      'Enter Sel Khari Sanctuary, take the waypoint',
      '? Two Wishes: put both Baryas on their pedestals [2 rare jewellery]',
      'At the end of the sanctuary, kill *Elzarah, the Cobra Lord*',
      'Molten Shrine (north-east) → Skullmaw Stairway → Molten One\'s Gift [[+5% Max Life]]',
      '> If the seals bug out, reset the instance',
      'Enter Qimah → Orbala\'s Pillar: pick 1 of 7 boons [[Boon]]',
      '> You can swap the boon later at the pillar',
      'Summon Jado to open Qimah Reservoir',
      '? Fill the 2 Sacred Wells with Vials of Sacred Water [Currency]',
      '? Click the giant vase → kill *Bloodbilge* [Exalted Orb] [Vaal Orb] [Skill Gem]',
      'Kill *Azmadi, the Faridun Prince* → use the Grand Barya',
      'Finish the interlude → return to town'
    ]},
    { n: '5.3 · Kriar', lv: '55–58', s: [
      'Talk to The Hooded One → travel to Mount Kriar → through The Glade into Ashen Forest (no waypoint)',
      'Find the Ancient Monument [Skill Gem]',
      'Kriar Village: follow the wisps → kill *Lythara, the Wayward Spear* [[+40 Spirit]] [Spirit Gem] [Gemcrust Skull]',
      'Glacial Tarn → Howling Caves: kill *The Abominable Yeti* → loot the Icy Tusks',
      'Give the Icy Tusks to Hilda [[+2 Skill Points]]',
      'Back in Glacial Tarn, kill *Rakkar, the Frozen Talon* (north-west) → opens Kriar Peaks',
      'Kriar Peaks: find Elder Maddox around 10–11 o\'clock [[Free unique]]',
      '> Blue spirit owls are nearby',
      'Etched Ravine: kill *Stormgore, the Guardian* → opens The Cuachic Vault',
      '? Open sealed vaults at stone altars with Small Soul Cores [Loot]',
      'Kill *Zolin & Zelina* in The Cuachic Vault',
      '? One Vaal Beacon per zone (Fate of the Vaal storyline)'
    ]},
    { n: 'Wrap-up', s: [
      'After all 3 interludes, talk to The Hooded One in Kingsmarch [[+2 Skill Points]]',
      'Travel to Oriath → talk to Farrow, The Hooded One (lying down), Doryani',
      'Maps unlocked; start your first map at Lvl 58–60'
    ]}
  ]
}
];

/* General tips, shown on the Tips tab. */
window.TIPS = [
  { h: 'Pace', items: [
    'Keep moving and keep town visits short; aim for a ~5 hour campaign',
    'Don\'t memorise layouts; too much changed in 0.5',
    'Magic (blue) packs give about 3.5× the XP of white ones; skip whites unless under-levelled',
    'Stay about 3 levels under the zone level (+1 for every 16 character levels)'
  ]},
  { h: 'Gear & currency', items: [
    'The Red Vale weapon racks give a tier-2 martial weapon, so no need to carry an old one',
    'Use 1–2 Regal Orbs per act on good weapon bases; save Exalted Orbs',
    'Expect a whole act without a weapon upgrade; the next real jump is tier 1 maps',
    'Save Artificer\'s Orbs, runes and whetstones for your weapon at the end of Act IV',
    'Shop once per act, at the start',
    'Use a regex in vendor search and a levelling loot filter'
  ]},
  { h: 'Controls', items: [
    'Hold Ctrl on the passive tree to skip the confirm step',
    'Bind Quick Assign for attribute nodes (no default key)',
    'Ctrl+Shift+click a hotbar slot to assign weapon-swap skills',
    'Set up stash tab names and layout on Standard before the league starts'
  ]},
  { h: 'Ascendancy', items: [
    'Good levelling picks: Demon Form, Smith of Kitava, Sorcery Ward; respec later',
    'Finalise your Ascendancy before the last Interlude turn-in'
  ]},
  { h: 'Forbidden Rites (0.5.5 league)', items: [
    'Every zone has a Ritual; it rewards currency and gear',
    'Boss Ritual clusters: 2 per act, 1 per interlude; each boss carries into the next altar',
    'Finish a full chain to spend Tribute on uniques',
    'In a party, everyone must hear Aoife before the Ritual starts'
  ]}
];
