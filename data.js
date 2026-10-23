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
    Sentence case; in-game names keep their capitals. No trailing periods.
    → then · or/list + with ×2 twice. Compass: (N) (SE). Gem level: Lv5.
*/
window.ROUTE = [
{
  id: 'a1', tab: 'I', name: 'Act I', span: 'Clearfell → Ogham', lvl: '1–14',
  tips: [
    'Reset the Cemetery after Draven; Asinia then drops at the higher zone level',
    'Aim for Lvl 14 before Geonor'
  ],
  zones: [
    { n: 'Riverbank', lv: '1', s: [
      'Wounded Man → starter weapon',
      'Find chest, slot gem',
      'Kill *The Bloated Miller*; town is behind him'
    ]},
    { n: 'Clearfell Encampment', town: 1, s: [
      'Renly [Skill Gem]'
    ]},
    { n: 'Clearfell', lv: '2–3', s: [
      'Kill *Beira* (N) [[+10% Cold Res]]',
      '? Mud Burrow: kill *The Devourer* [Skill Gem Lv2] → Renly [Support Gem]',
      '> WP next to Mud Burrow',
      '> Bridge → The Grelwood',
      '? Mysterious Campsite stash [Skill Gem]'
    ]},
    { n: 'The Grelwood', lv: '3–5', wp: 1, s: [
      '> Glowing roots → Tree of Souls',
      '> River upstream → The Red Vale',
      'Find Una',
      'Grim Tangle: grab WP, back',
      'The Red Vale: grab WP, back',
      '? Kill *Gerung* [Skill Gem Lv2]',
      '? Cauldron hut → kill *Areagne* [Support Gem] [Flasks]',
      '> Hardest early fight; chill her with Frost Bomb'
    ]},
    { n: 'The Red Vale', lv: '5–6', wp: 1, s: [
      '3 Obelisks of Rust; loot each',
      'Kill *The Rust King* at the last one [Skill Gem Lv3]',
      '> Pull packs under him for AoE',
      '> Weapon racks: guaranteed tier-2 martial weapon'
    ]},
    { n: 'Town', town: 1, s: [
      'Renly → Runed Spikes'
    ]},
    { n: 'The Grelwood (return)', s: [
      'Activate 3 Runic Seals → Una'
    ]},
    { n: 'Town', town: 1, s: [
      'Una'
    ]},
    { n: 'Grim Tangle', lv: '6', wp: 1, s: [
      '> Mushrooms → Druid · caskets → Cemetery',
      '? Kill *Ervig* [Support Gem]'
    ]},
    { n: 'Cemetery of the Eternals', lv: '6–9', s: [
      'Lachlann',
      '? Sarcophagus by checkpoint (Ancient Ruins) [Ring]',
      'Mausoleum of the Praetor: kill *Draven* → key piece',
      '? Forgotten Riches: glowing pillar switch [Support Gem] [Gold]',
      '> Cache is behind a big sarcophagus; repeatable via zone reset',
      'Tomb of the Consort: kill *Asinia* → key piece',
      '? Haunted Treasure [Support Gem]',
      'Memorial Gate → kill *Lachlann* [Skill Gem Lv3]',
      'Hunting Grounds WP → town'
    ]},
    { n: 'Town', town: 1, s: [
      'Finn, Una, The Hooded One (unlocks identify)'
    ]},
    { n: 'Hunting Grounds', lv: '10', wp: 1, s: [
      '? Delwyn (wisp side quest)',
      'Kill *The Crowbell* [[+2 Skill Points]]',
      '> Blood trails lead to him',
      '! Slam can one-shot; flees at low life',
      'Freythorn: grab WP, back',
      'Ogham Farmlands: grab WP, back',
      'Small ritual, away from start [Support Gem]',
      '> Its locust trail → Freythorn'
    ]},
    { n: 'Freythorn', lv: '11–12', wp: 1, s: [
      'Light 3 small Ritual Altars',
      '> Smoke from the big altar points to each',
      'Big altar: kill *The King in the Mists* [[+30 Spirit]] [Spirit Gem Lv4]',
      '! Phase 2: totems + curses',
      '? Cleanse Ominous Altars → Finn [Charm]'
    ]},
    { n: 'Ogham Farmlands', lv: '12', wp: 1, s: [
      'Lute box (house by checkpoint) → Una in town [[+2 Skill Points]]',
      '? Rare dogs in crop circle [Skill Gem Lv4]'
    ]},
    { n: 'Ogham Village', lv: '12–13', s: [
      '> Stay on the cobble road → smithy',
      'Smithing Tools in smithy, 1st char only [[Salvage Bench]]',
      '? Blacksmith\'s Chest, same house [Blank Rune] [Artificer\'s Orb]',
      'Kill *The Executioner* (N) [Support Gem]',
      'Upstairs lever → Leitis'
    ]},
    { n: 'Manor Ramparts', lv: '13', s: [
      '? Gallows rope by checkpoint [Support Gem]',
      '> Get a Lvl 10 flask + Lvl 11 chest first'
    ]},
    { n: 'Ogham Manor', lv: '13–14', s: [
      'Kill *Candlemass*, 1st floor [[+20 Life]]',
      'Kill *Count Geonor* below',
      '> Each floor down: go opposite the one above',
      '! Phase 2: roll under the sword; chill him early'
    ]},
    { n: 'Town', town: 1, s: [
      'Talk around → The Hooded One → Act II'
    ]}
  ]
},
{
  id: 'a2', tab: 'II', name: 'Act II', span: 'Vastiri → Dreadnought', lvl: '14–29',
  tips: [
    'Mastodon Badlands before Keth → Kabala drops a Lv7 gem',
    'Skip Balbala; use the Deshar vulture Barya and ascend at Lvl 28',
    'Aim for Lvl 29 at Jamanra, Lvl 30 into Act III'
  ],
  zones: [
    { n: 'Vastiri Outskirts', lv: '14–15', s: [
      'The Hooded One',
      'Kill *Rathbreaker*',
      'Back to start → Zarka [Uncut Skill Gem Lv5]'
    ]},
    { n: 'The Ardura Caravan', town: 1, s: [
      'The Hooded One, Asala ×2',
      'Map → Halani Gates → Asala → back → Asala',
      'Map → Mawdun Quarry'
    ]},
    { n: 'Mawdun Quarry', lv: '15', s: [
      '? War cache by checkpoint [Artificer\'s Orb]',
      'Into Mawdun Mine'
    ]},
    { n: 'Mawdun Mine', lv: '16', s: [
      '> Follow connected rails',
      'Kill *Rudja* [Uncut Skill Gem Lv6]',
      'Free Risu'
    ]},
    { n: 'Caravan', town: 1, s: [
      'Risu, Asala → Traitor\'s Passage'
    ]},
    { n: 'Traitor\'s Passage', lv: '17', s: [
      'Seal door + Runic Seals',
      '? Kill *Balbala* [Djinn Barya] [Uncut Skill Gem Lv6]',
      '> Parchment branch = Balbala; other = exit',
      '> Most skip him; Deshar has an easier Barya',
      '? Bell chest, dead end'
    ]},
    { n: 'The Halani Gates', lv: '18', s: [
      'Summon Asala at the gates',
      '> Loot the command tents first',
      '> Asala stuck? Reset at checkpoint',
      'Kill *Jamanra* (1st)',
      'Stairs down → checkpoint → town'
    ]},
    { n: 'Caravan', town: 1, s: [
      'Shambrin, Zarka, Asala',
      'Trial of the Sekhemas: WP only',
      'Map → Mastodon Badlands'
    ]},
    { n: 'Mastodon Badlands', lv: '19–20', s: [
      '> Do this before Keth',
      '? Bone shrine by checkpoint [Support Gem Lv2]'
    ]},
    { n: 'The Bone Pits', lv: '20–21', s: [
      'Hyenas → Sun Clan Relic',
      '> Big hyenas drop it more',
      'Kill *Iktab & Ekbab* → Mastodon Tusks'
    ]},
    { n: 'Caravan', town: 1, s: [
      'Zarka → Keth'
    ]},
    { n: 'Keth', lv: '22', s: [
      'Snakes → Kabala Clan Relic',
      '? Abandoned Prayer, downstairs [Amulet]',
      'Kill *Kabala* (Venom Pit) [[+2 Skill Points]] [Skill Gem Lv7]'
    ]},
    { n: 'The Lost City', lv: '23', s: [
      '? Kill *Ninth Treasure of Keth* (Galleria) [Jewel]',
      '? Golden Tomb [Spirit Gem Lv7]'
    ]},
    { n: 'Buried Shrines', lv: '23', s: [
      '? Guarded sarcophagus [Support Gem]',
      '? Elemental offering [Res Ring]'
    ]},
    { n: 'The Heart of Keth', lv: '24', s: [
      '> Azarian waits at the bottom shrine',
      'Kill *Azarian*',
      'Halani → Everburning Cinders → ignite [Essence]'
    ]},
    { n: 'Caravan', town: 1, s: [
      'Zarka → Valley of the Titans'
    ]},
    { n: 'Valley of the Titans', lv: '25', wp: 1, s: [
      '> Each titan head = one seal',
      '3 Ancient Seals around the edge',
      'Relic Altar: both relics [[+1 Charm Slot]]',
      '> Altar is off one seal path; buff is swappable'
    ]},
    { n: 'The Titan Grotto', lv: '25–26', s: [
      'Kill *Zalmarath* → Flame Ruby'
    ]},
    { n: 'Caravan', town: 1, s: [
      'Zarka, Asala',
      'Map → Traitor\'s Passage (stay outside)',
      'Horn on caravan roof → Asala → Deshar'
    ]},
    { n: 'Deshar', lv: '26–27', s: [
      'Fallen Dekhara by tower [[+2 Skill Points]]',
      '> Letter → Shambrin',
      '2 vultures, side area [Djinn Barya Lvl 28]',
      '> Easiest trial key',
      '? The Unremembered skeleton [Artificer\'s Orb]'
    ]},
    { n: 'Path of Mourning', lv: '27', s: [
      '? Shifting Vases [Rares] [Support Gem Lv2]'
    ]},
    { n: 'The Spires of Deshar', lv: '27', s: [
      'Sisters of Garukhan shrine [[+10% Lightning Res]]',
      'Kill *Tor Gul*',
      '! Hard fight; cap Lightning Res',
      'Town → Asala ×2'
    ]},
    { n: 'Trial of the Sekhemas', lv: '28', wp: 1, s: [
      'Pick the Lvl 28 Barya manually',
      'Rooms: Ritual > Chalice > Hourglass > Gauntlet',
      '> Hourglass: rares add time',
      'Clear trial [[1st Ascendancy]]',
      '> Smith of Kitava: stash a white chest first'
    ]},
    { n: 'The Dreadnought', lv: '28–29', s: [
      'Kill *Jamanra*',
      '> Heavy phys stuns him before the fence phase'
    ]},
    { n: 'Caravan', town: 1, s: [
      'Exit top-left → The Hooded One',
      'Asala → Sandswept Marsh'
    ]}
  ]
},
{
  id: 'a3', tab: 'III', name: 'Act III', span: 'Sandswept → Ziggurat', lvl: '30–42',
  tips: [
    'Servi\'s pick is permanent; most take Stun Threshold',
    'Explorer camps sell guaranteed rares',
    'Stay ~3 levels under zone level; fewer monsters from here on'
  ],
  zones: [
    { n: 'Sandswept Marsh', lv: '30', s: [
      'The Hooded One',
      '? Kill *Rootdredge* [Skill Gem Lv9]',
      '? Orok camp basket [Lesser Jeweller\'s Orb]',
      '? Hanging corpse [Ring] [Skill Gem Lv9]'
    ]},
    { n: 'Ziggurat Encampment', town: 1, s: [
      'Alva, Oswald, The Hooded One',
      'Buy Lvl 30 flasks',
      'Top exit → Jungle Ruins'
    ]},
    { n: 'Jungle Ruins', lv: '30–31', wp: 1, s: [
      '> Talk to explorers → next zone marked on minimap',
      'Kill *Mighty Silverfist* [[+2 Skill Points]]',
      '! Dodge the slam sideways',
      'Jungle Grave → Servi [Rare belt]',
      '? Troubled Camp (Albright) [Rare gloves]',
      '? Vaal Beacon 1/6',
      'WP by the crypts → The Venom Crypts'
    ]},
    { n: 'The Venom Crypts', lv: '35', s: [
      '> Zone is Lvl 35; tougher than nearby',
      '? Sarcophagus [Support Gem Lv3]',
      'Corpse → Orok Poison → A Reprieve',
      '? Vaal Beacon 2/6'
    ]},
    { n: 'Town', town: 1, s: [
      'Poison → Servi [[Permanent pick]] [Artificer\'s Orb]',
      '! Can\'t change: Stun Threshold · Ailment Threshold · Mana Regen',
      'Via Jungle Ruins → Infested Barrens'
    ]},
    { n: 'Infested Barrens', lv: '31–32', wp: 1, s: [
      'Alva + WP beside her',
      '? Troubled Camp (Carroway) [Rare boots]',
      '? Vaal Beacon 3/6'
    ]},
    { n: 'Chimeral Wetlands', lv: '32–33', wp: 1, s: [
      '? Ravaged Camp: logbook + gold chest [Rare armour]',
      '? Toxic Bloom: kill *Noxious Behemoth* [Amulet]',
      'Temple of Chaos: grab WP, back',
      'Kill *Xyclucian* → Inscribed Ultimatum',
      '? Vaal Beacon 4/6'
    ]},
    { n: 'Trial of Chaos', lv: '33+', s: [
      'Ultimatum at entrance; take safe mods',
      '! Skip lightning runes if res is low',
      '> Roll during core placement → fills every socket',
      'Clear trial [[2nd Ascendancy]]'
    ]},
    { n: 'Jiquani\'s Machinarium', lv: '33', s: [
      '> U-shape; generators at both tips',
      'Alva',
      'Small Soul Core → altar by Alva',
      'Collect 4 Small Soul Cores',
      'Blackjaw door: kill *Blackjaw* → Flame Core [[+10% Fire Res]]',
      'Next door → Sanctum'
    ]},
    { n: 'Jiquani\'s Sanctum', lv: '33–34', s: [
      'Alva',
      '2 Medium Soul Cores → generators',
      'Large Soul Core at start → kill *Zicoatl* → core',
      '? Vaal Beacon 5/6',
      '> Corruption altar here (Paquate\'s Mechanism)',
      'WP → Jungle Ruins'
    ]},
    { n: 'Jungle Ruins (return)', s: [
      'Large Soul Core on altar → The Matlan Waterways'
    ]},
    { n: 'The Matlan Waterways', lv: '35', s: [
      '? Narag\'s Hut: kill *Narag* [Rare weapon] [Blacksmith\'s Whetstone]',
      'Step on every pressure pad; walk to the end',
      '? Vaal Beacon 6/6 → Vaal Ruins portal',
      '> Enter the portal right away; it can vanish',
      '? Corpse at Azak Bog entrance → Servi [Rare belt]',
      'Side path → Azak Bog'
    ]},
    { n: 'Azak Bog', lv: '33–34', wp: 1, s: [
      '? Flameskin rituals [Ignagduk\'s Harvest]',
      'Kill *Ignagduk* → Gemrot Skull [[+30 Spirit]] [Spirit Gem Lv10]',
      '> Arena is always top-right',
      'Spear → Servi in town [Charm]'
    ]},
    { n: 'Town', town: 1, s: [
      'Downstairs → Alva',
      'Bottom exit → The Drowned City'
    ]},
    { n: 'The Drowned City', lv: '35–36', s: [
      'Apex of Filth: grab WP, back',
      'The Molten Vault: grab WP, back',
      '? Drowned Quarters hidden rooms [Runes]',
      '! Teal orbs drown you; keep moving',
      '! Crawler ambush past the checkpoint bridge'
    ]},
    { n: 'The Molten Vault', lv: '36', wp: 1, s: [
      'Kill *Mektul* (1st char only) [Uncut Skill Gem Lv10]',
      '! ~4 min lava timer; bring Fire Res',
      '> Alts can skip',
      '? Frost Cores clear blockages [Gold chests]'
    ]},
    { n: 'Town', town: 1, s: [
      'Hammer → Oswald [[Reforging Bench]]',
      'WP → Apex of Filth'
    ]},
    { n: 'Apex of Filth', lv: '36–37', wp: 1, s: [
      '? 3 mushrooms → cauldron [Quality flasks]',
      '> Cauldron Keeper sells caster gear',
      'Kill *Queen of Filth* → Temple Door Idol',
      '! Stay close or she rolls'
    ]},
    { n: 'Town', town: 1, s: [
      'Downstairs → Alva → door → Temple of Kopec'
    ]},
    { n: 'Temple of Kopec', lv: '37', s: [
      '> Triangle floors: check the far corner first',
      'Kill *Ketzuli* upstairs',
      '! Sunlight burns; hug the shade',
      'Alva'
    ]},
    { n: 'Town', town: 1, s: [
      'Gateway → downstairs → Utzaal'
    ]},
    { n: 'Utzaal', lv: '38–39', s: [
      '> Same map as The Drowned City; paved road → Viper',
      'Vaal Goliath (shoulder canister) → Sacrificial Heart',
      '> Also drops in Aggorat',
      '? Side doors: idols to sell',
      'Kill *Viper Napuatzi*',
      '! Mobile; fight from one spot to read her'
    ]},
    { n: 'Aggorat', lv: '39–40', s: [
      '> Follow the chanting',
      'Altar (top-right): heart + dagger [[+2 Skill Points]]',
      '? Crag Tooth [Vaal Orb]',
      'The Black Chambers (top-left)'
    ]},
    { n: 'The Black Chambers', lv: '40–42', s: [
      'Kill *Doryani*',
      '! 3 phases; last one airborne',
      '> Loot drops ~30s later'
    ]},
    { n: 'Town', town: 1, s: [
      'Doryani ×2 → Alva → The Hooded One → Alva'
    ]}
  ]
},
{
  id: 'a4', tab: 'IV', name: 'Act IV', span: 'Kingsmarch → Ngakanu', lvl: '42–52',
  tips: [
    'The island with fragments + Matiki varies per league; Kingsmarch dialogue says where',
    'Matiki is caged on an island; click the cage',
    'Greater Orbs of Transmutation / Augmentation can drop from here'
  ],
  zones: [
    { n: 'Kingsmarch', lv: '42', town: 1, s: [
      'Doryani → Alva',
      'Tujen: accept',
      'Farrow: The Runeseeker quest',
      'Makoru (ship) → pick island'
    ]},
    { n: 'Whakapanu Island', lv: '42–43', s: [
      'Petrified Pirate, coast [Map Piece 1/4]',
      '? Shark Pit: kill *The Great White One* → Shark Fin',
      '> Fin → Kaimana [Uncut Gem Lv11] [Blessing]',
      '? Crabshell Cavern: kill *Clawcrunch* [Support Gem Lv4]'
    ]},
    { n: 'Singing Caverns', wp: 1, s: [
      '? Beckoning Clam → pearl to Rog',
      'Kill *Diamora*',
      'The Hooded One → town'
    ]},
    { n: 'Kingsmarch', town: 1, s: [
      'Ange → Shoreline Hideout → clear → Ange [[Hideout]]'
    ]},
    { n: 'Shrike Island', lv: '43–44', s: [
      'Corpse Nest [Map Piece 2/4]',
      'Kill *Scourge of the Skies*'
    ]},
    { n: 'Abandoned Prison', lv: '44', wp: 1, s: [
      'Kill monsters → Chapel Key',
      '? Armoury elite [Jewel] · Forgotten Cells',
      'Chapel: kill *Forael* → Goddess of Justice [Flask]'
    ]},
    { n: 'Solitary Confinement', s: [
      'Kill *The Prisoner*',
      'Sail → Isle of Kin'
    ]},
    { n: 'Isle of Kin', lv: '45', s: [
      'Flayed Sailor, shore [Map Piece 3/4]',
      '? Doomed Mine [Lesser Jeweller\'s Orb]',
      'Beast Pen: kill *Mimok* [Tier 4 Support Gem]',
      '? Primal Arena: kill *Blind Beast* [Greater Blank Rune]'
    ]},
    { n: 'Volcanic Warrens', lv: '45–46', wp: 1, s: [
      '? *Magma Twins*: lightning first = Ruby Ring · fire first = Topaz Ring',
      'Kill *Krutog* (Tyrant Throne)'
    ]},
    { n: 'Eye of Hinekora', lv: '46–47', wp: 1, s: [
      'Matiki at the well → use well',
      '? Behind waterfall [Spirit Gem Lv12]',
      'Tests: Fire, Nature, Cold',
      'Silent Hall altar → Navali [[+5% Max Mana]]'
    ]},
    { n: 'Halls of the Dead', lv: '47', s: [
      'Trial of Ngakanu → tattoo [[+5% Res or +5 Attribute]]',
      '> Res tattoo suits most builds',
      'Kill *Yama the White*'
    ]},
    { n: 'Trial of the Ancestors', lv: '47–48', s: [
      'Navali + Hinekora [[+2 Skill Points]]'
    ]},
    { n: 'Kedge Bay', lv: '47–48', wp: 1, s: [
      'Dead Man\'s Chest [Map Piece 4/4]',
      '? Abandoned Ship · Tidal Cay · kill *Doran* [Loot]'
    ]},
    { n: 'Journey\'s End', lv: '48–49', wp: 1, s: [
      'Tujen',
      'Kill *Captain Harlin* → Verisium',
      'Freya → Dannig (Verisium Spikes) → Freya',
      'Totem → kill *Omniphobia*',
      'Tujen in town [[+2 Skill Points]]'
    ]},
    { n: 'Plunder\'s Point', s: [
      '4 map pieces → Makoru → Expedition → Deserted Post → Farrow [[Verisium Anvil]]',
      '! Don\'t skip; only way to unlock Runeforging'
    ]},
    { n: 'Arastas', lv: '49–50', wp: 1, s: [
      'Lorandis → follow → break shield',
      '? Bells: Evening = 3 Exalted Orbs · Morning = 3 Regal Orbs',
      'Kill *Torvian* → The Excavation',
      '> Let his rocks hit the 2 priests'
    ]},
    { n: 'The Excavation', lv: '50–51', s: [
      'Kill *Benedictus* → The Hooded One',
      '? Cache at checkpoint',
      'Town → sail to Ngakanu'
    ]},
    { n: 'Ngakanu', lv: '51', s: [
      '? Abyssal Depths · Mad Butcher (big hut)'
    ]},
    { n: 'Heart of the Tribe', lv: '52', s: [
      '? Meeting House chests',
      'Kill *Tavakai* → talk',
      'The Hooded One → Interludes'
    ]}
  ]
},
{
  id: 'in', tab: 'V', name: 'Interludes', span: 'Ogham · Khari · Kriar', lvl: '52–58',
  tips: [
    'Any order; suggested Kriar → Ogham → Khari (Spirit spike first)',
    'Res penalty applies on entry; don\'t scout',
    'Lock in your Ascendancy before the final turn-in'
  ],
  zones: [
    { n: '5.1 · Ogham', lv: '52–53', s: [
      'The Hooded One → The Refuge',
      'Scorched Farmlands WP',
      '? Kill *Isolde & Heldra* (E)',
      'Stones of Serle (S): 6 megaliths',
      '> Lifts the Darkness off Blackwood (N)',
      'Blackwood → Holten',
      'Kill *Godwin & Sigbert* [Blacksmith\'s Whetstone]',
      '? Ferryman, docks [Cheap Greater Runes]',
      'Wolvenhold: kill *Oswin* → Warden\'s Ledger [[+2 Skill Points]] [Unique]',
      'Holten Estate, up 2 floors: kill *Wulfric & Elswyth*'
    ]},
    { n: '5.2 · Khari', lv: '54–55', s: [
      'The Hooded One → Khari Crossing',
      'Kill *Akthi & Anundr* (SE) → Risu [[+2 Skill Points]]',
      '> Wayfinder\'s Seals point W → Pools of Kathal',
      '? Torbek [Cheap caster weapons]',
      'Pools of Kathal WP → Sel Khari Sanctuary WP',
      '? Two Wishes: both Baryas on pedestals [2 rare jewellery]',
      'Kill *Elzarah* at the end',
      'Molten Shrine (NE) → Skullmaw Stairway [[+5% Max Life]]',
      '> Seal bugged? Reset instance',
      'Qimah: Orbala\'s Pillar [[Boon]]',
      '> Swap boon anytime at the pillar',
      'Jado opens Qimah Reservoir',
      '? 2 Sacred Wells [Currency]',
      '? Giant vase → kill *Bloodbilge* [Exalted Orb] [Vaal Orb]',
      'Kill *Azmadi* → Grand Barya'
    ]},
    { n: '5.3 · Kriar', lv: '55–58', s: [
      'The Hooded One → The Glade → Ashen Forest (no WP)',
      'Ancient Monument [Skill Gem]',
      'Kriar Village: follow wisps → kill *Lythara* [[+40 Spirit]] [Spirit Gem]',
      'Glacial Tarn → Howling Caves: kill *The Abominable Yeti* → Icy Tusks',
      'Tusks → Hilda [[+2 Skill Points]]',
      'Glacial Tarn: kill *Rakkar* (NW) → Kriar Peaks',
      'Elder Maddox, ~10 o\'clock [[Free unique]]',
      '> Blue owls nearby',
      'Etched Ravine: kill *Stormgore* → The Cuachic Vault',
      '? Sealed vaults via Small Soul Cores',
      'Kill *Zolin & Zelina*',
      '? Vaal Beacons, one per zone'
    ]},
    { n: 'Wrap-up', s: [
      'All 3 done → The Hooded One [[+2 Skill Points]]',
      'Oriath: Farrow → The Hooded One → Doryani',
      'Maps open (Lvl 58–60)'
    ]}
  ]
}
];

/* General tips, shown on the Tips tab. */
window.TIPS = [
  { h: 'Pace', items: [
    'Keep moving; short town visits. Target: ~5 h campaign',
    'Don\'t memorise layouts; too much changed in 0.5',
    'Magic packs ≈ 3.5× white XP; skip whites unless behind',
    'Stay ~3 levels under zone level (+1 per 16 character levels)'
  ]},
  { h: 'Gear & currency', items: [
    'The Red Vale weapon racks give a tier-2 martial weapon; no need to mule',
    '1–2 Regal Orbs per act, on good weapon bases; hold Exalted Orbs',
    'Expect a whole act without a weapon upgrade; next real jump is T1 maps',
    'Save Artificer\'s Orbs, runes and whetstones for your end-of-Act-IV weapon',
    'Shop once per act, at the start',
    'Use regex in vendor search and a levelling loot filter'
  ]},
  { h: 'Controls', items: [
    'Hold Ctrl on the passive tree to auto-confirm',
    'Bind Quick Assign for attribute nodes',
    'Ctrl+Shift+click hotbar slots → weapon-swap skills',
    'Set up stash tabs on Standard before league start'
  ]},
  { h: 'Ascendancy', items: [
    'Levelling picks: Demon Form, Smith of Kitava, Sorcery Ward; respec later',
    'Finalise your Ascendancy before the last Interlude turn-in'
  ]},
  { h: 'Forbidden Rites (0.5.5 league)', items: [
    'Every zone has a Ritual; rewards are currency + gear',
    'Boss Ritual clusters: 2 per act, 1 per Interlude; bosses chain into the next altar',
    'Finish a chain → spend Tribute on uniques',
    'In a party, everyone must hear Aoife before it starts'
  ]}
];
