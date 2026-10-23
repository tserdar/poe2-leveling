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
*/
window.ROUTE = [
{
  id: 'a1', tab: 'I', name: 'Act I', span: 'Clearfell → Ogham', lvl: '1–14',
  perm: ['+4 pts', '+10% cold res', '+30 spirit', '+20 life', 'Salvage bench'],
  tips: [
    'Reset the Cemetery after Draven so Asinia drops at the higher zone level.',
    'Aim for lvl 14 before Geonor.'
  ],
  zones: [
    { n: 'Riverbank', lv: '1', s: [
      'Wounded Man → starter weapon',
      'Open big chests, slot gems',
      'Kill *Bloated Miller*, town is behind him'
    ]},
    { n: 'Clearfell Encampment', town: 1, s: [
      'Renly [Skill gem]'
    ]},
    { n: 'Clearfell', lv: '2–3', s: [
      'Kill *Beira* (north) [[+10% cold res]]',
      '? Mud Burrow: *Devourer* [Skill gem 2], then Renly [Support gem]',
      '> WP next to Mud Burrow',
      '> Bridge → Grelwood',
      '? Mysterious Campsite stash [Skill gem]'
    ]},
    { n: 'The Grelwood', lv: '3–5', wp: 1, s: [
      '> Glowing roots → Tree of Souls',
      '> River upstream → Red Vale',
      'Find Una',
      'Grim Tangle: grab WP, back',
      'Red Vale: grab WP, back',
      '? *Gerung* [Skill gem 2]',
      '? Cauldron hut → *Areagne* [Support gem] [Flasks]',
      '> Hardest early fight. Chill her with Frost Bomb.'
    ]},
    { n: 'The Red Vale', lv: '5–6', wp: 1, s: [
      '3 Obelisks of Rust, loot each',
      '*Rust King* at the last one [Skill gem 3]',
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
      '? *Ervig* [Support gem]'
    ]},
    { n: 'Cemetery of the Eternals', lv: '6–9', s: [
      'Lachlann',
      '? Sarcophagus by checkpoint (Ancient Ruins) [Ring]',
      'Mausoleum of the Praetor: *Draven* → key piece',
      '? Forgotten Riches: glowing pillar switch [Support gem] [Gold]',
      '> Cache sits behind a big sarcophagus. Repeatable via zone reset.',
      'Tomb of the Consort: *Asinia* → key piece',
      '? Haunted Treasure [Support gem]',
      'Memorial Gate → kill *Lachlann* [Skill gem 3]',
      'Hunting Grounds WP → town'
    ]},
    { n: 'Town', town: 1, s: [
      'Finn, Una, Hooded One (unlocks identify)'
    ]},
    { n: 'Hunting Grounds', lv: '10', wp: 1, s: [
      '? Delwyn (wisp side quest)',
      'Kill *Crowbell* [[+2 pts]]',
      '> Blood trails lead to him',
      '! Slam can one-shot. Flees at low life.',
      'Freythorn: grab WP, back',
      'Ogham Farmlands: grab WP, back',
      'Small ritual, away from start [Support gem]',
      '> Locust trail it spawns → Freythorn'
    ]},
    { n: 'Freythorn', lv: '11–12', wp: 1, s: [
      'Light 3 small Ritual Altars',
      '> Smoke from the big altar points to each',
      'Big altar: *King in the Mists* [[+30 spirit]] [Spirit gem 4]',
      '! Phase 2: totems + curses',
      '? Cleanse Ominous Altars → Finn [Charm]'
    ]},
    { n: 'Ogham Farmlands', lv: '12', wp: 1, s: [
      'Lute box (house by checkpoint) → Una in town [[+2 pts]]',
      '? Rare dogs in crop circle [Skill gem 4]'
    ]},
    { n: 'Ogham Village', lv: '12–13', s: [
      '> Stay on the cobble road → smithy',
      'Smithing Tools in smithy, 1st char [[Salvage bench]]',
      '? Blacksmith\'s Chest, same house [Blank rune] [Artificer\'s]',
      'Kill *Executioner* (north) [Support gem]',
      'Upstairs lever → Leitis'
    ]},
    { n: 'Manor Ramparts', lv: '13', s: [
      '? Gallows rope by checkpoint [Support gem]',
      '> Get a lvl 10 flask + lvl 11 chest first'
    ]},
    { n: 'Ogham Manor', lv: '13–14', s: [
      'Kill *Candlemass*, 1st floor [[+20 life]]',
      'Kill *Count Geonor* below',
      '> Each floor down: go opposite the one above',
      '! Phase 2: roll under the sword. Chill him early.'
    ]},
    { n: 'Town', town: 1, s: [
      'Talk around → Hooded One → Act II'
    ]}
  ]
},
{
  id: 'a2', tab: 'II', name: 'Act II', span: 'Vastiri → Dreadnought', lvl: '14–29',
  perm: ['+4 pts', '+10% lightning res', '+1 charm slot', '1st ascendancy'],
  tips: [
    'Badlands before Keth → Kabala drops a lvl 7 gem.',
    'Skip Balbala. Use the Deshar vulture barya and ascend at 28.',
    'Aim for lvl 29 at Jamanra, 30 into Act III.'
  ],
  zones: [
    { n: 'Vastiri Outskirts', lv: '14–15', s: [
      'Hooded One',
      'Kill *Rathbreaker*',
      'Back to start → Zarka [Uncut skill 5]'
    ]},
    { n: 'Ardura Caravan', town: 1, s: [
      'Hooded One, Asala ×2',
      'Map → Halani Gates → Asala → back → Asala',
      'Map → Mawdun Quarry'
    ]},
    { n: 'Mawdun Quarry', lv: '15', s: [
      '? War cache by checkpoint [Artificer\'s]',
      'Into Mawdun Mine'
    ]},
    { n: 'Mawdun Mine', lv: '16', s: [
      '> Follow connected rails',
      'Kill *Rudja* [Uncut skill 6]',
      'Free Risu'
    ]},
    { n: 'Caravan', town: 1, s: [
      'Risu, Asala → Traitor\'s Passage'
    ]},
    { n: 'Traitor\'s Passage', lv: '17', s: [
      'Seal door + Runic Seals',
      '? *Balbala* [Djinn barya] [Uncut skill 6]',
      '> Parchment branch = Balbala. Other = exit.',
      '> Most skip him. Deshar has an easier barya.',
      '? Bell chest, dead end'
    ]},
    { n: 'Halani Gates', lv: '18', s: [
      'Summon Asala at the gates',
      '> Loot the command tents first',
      '> Asala stuck? Reset at checkpoint.',
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
      '? Bone shrine by checkpoint [Support gem 2]'
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
      'Kill *Kabala* (Venom Pit) [[+2 pts]] [Skill gem 7]'
    ]},
    { n: 'The Lost City', lv: '23', s: [
      '? *Ninth Treasure of Keth* (Galleria) [Jewel]',
      '? Golden Tomb [Spirit gem 7]'
    ]},
    { n: 'Buried Shrines', lv: '23', s: [
      '? Guarded sarcophagus [Support gem]',
      '? Elemental offering [Res ring]'
    ]},
    { n: 'Heart of Keth', lv: '24', s: [
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
      'Relic Altar: both relics [[+1 charm slot]]',
      '> Altar is off one seal path. Buff is swappable.'
    ]},
    { n: 'Titan Grotto', lv: '25–26', s: [
      'Kill *Zalmarath* → Flame Ruby'
    ]},
    { n: 'Caravan', town: 1, s: [
      'Zarka, Asala',
      'Map → Traitor\'s Passage (stay outside)',
      'Horn on caravan roof → Asala → Deshar'
    ]},
    { n: 'Deshar', lv: '26–27', s: [
      'Fallen Dekhara by tower [[+2 pts]]',
      '> Letter → Shambrin',
      '2 vultures, side area [Barya lvl 28]',
      '> Easiest trial key',
      '? Unremembered skeleton [Artificer\'s]'
    ]},
    { n: 'Path of Mourning', lv: '27', s: [
      '? Shifting Vases [Rares] [Support gem 2]'
    ]},
    { n: 'Spires of Deshar', lv: '27', s: [
      'Garukhan shrine [[+10% lightning res]]',
      'Kill *Tor Gul*',
      '! Hard fight. Cap lightning res.',
      'Town → Asala ×2'
    ]},
    { n: 'Trial of the Sekhemas', lv: '28', wp: 1, s: [
      'Pick the lvl 28 barya manually',
      'Rooms: Ritual > Chalice > Hourglass > Gauntlet',
      '> Hourglass: rares add time',
      'Clear trial [[1st ascendancy]]',
      '> Smith of Kitava: stash a white chest first'
    ]},
    { n: 'The Dreadnought', lv: '28–29', s: [
      'Kill *Jamanra*',
      '> Heavy phys stuns him before the fence phase'
    ]},
    { n: 'Caravan', town: 1, s: [
      'Exit top-left → Hooded One',
      'Asala → Sandswept Marsh'
    ]}
  ]
},
{
  id: 'a3', tab: 'III', name: 'Act III', span: 'Sandswept → Ziggurat', lvl: '30–42',
  perm: ['+4 pts', '+10% fire res', '+30 spirit', 'Reforging bench', '2nd ascendancy', 'Servi pick'],
  tips: [
    'Servi\'s pick is permanent. Most take stun threshold.',
    'Explorer camps sell guaranteed rares.',
    'Stay ~3 levels under zone level. Fewer mobs from here on.'
  ],
  zones: [
    { n: 'Sandswept Marsh', lv: '30', s: [
      'Hooded One',
      '? *Rootdredge* [Skill gem 9]',
      '? Orok camp basket [Jeweller\'s]',
      '? Hanging corpse [Ring] [Skill gem 9]'
    ]},
    { n: 'Ziggurat Encampment', town: 1, s: [
      'Alva, Oswald, Hooded One',
      'Buy lvl 30 flasks',
      'Top exit → Jungle Ruins'
    ]},
    { n: 'Jungle Ruins', lv: '30–31', wp: 1, s: [
      '> Talk to explorers → next zone marked on minimap',
      'Kill *Mighty Silverfist* [[+2 pts]]',
      '! Dodge the slam sideways',
      'Jungle Grave → Servi [Rare belt]',
      '? Troubled Camp (Albright) [Rare gloves]',
      '? Vaal Beacon 1/6',
      'WP by the crypts → Venom Crypts'
    ]},
    { n: 'Venom Crypts', lv: '35', s: [
      '> Zone is lvl 35, tougher than nearby',
      '? Sarcophagus [Support gem 3]',
      'Corpse → Orok Poison → A Reprieve',
      '? Vaal Beacon 2/6'
    ]},
    { n: 'Town', town: 1, s: [
      'Poison → Servi [[Permanent pick]] [Artificer\'s]',
      '! Can\'t change: stun / ailment threshold / mana regen',
      'Via Jungle Ruins → Infested Barrens'
    ]},
    { n: 'Infested Barrens', lv: '31–32', wp: 1, s: [
      'Alva + WP beside her',
      '? Troubled Camp (Carroway) [Rare boots]',
      '? Vaal Beacon 3/6'
    ]},
    { n: 'Chimeral Wetlands', lv: '32–33', wp: 1, s: [
      '? Ravaged Camp: logbook + gold chest [Rare armour]',
      '? Toxic Bloom: Noxious Behemoth [Amulet]',
      'Temple of Chaos: grab WP, back',
      'Kill *Xyclucian* → Inscribed Ultimatum',
      '? Vaal Beacon 4/6'
    ]},
    { n: 'Trial of Chaos', lv: '33+', s: [
      'Ultimatum at entrance, take safe mods',
      '! Skip lightning runes if res is low',
      '> Roll during core placement → fills every socket',
      'Clear trial [[2nd ascendancy]]'
    ]},
    { n: 'Jiquani\'s Machinarium', lv: '33', s: [
      '> U-shape. Generators at both tips.',
      'Alva',
      'Small Soul Core → altar by Alva',
      'Collect 4 small cores',
      'Blackjaw door: *Blackjaw* → Flame Core [[+10% fire res]]',
      'Next door → Sanctum'
    ]},
    { n: 'Jiquani\'s Sanctum', lv: '33–34', s: [
      'Alva',
      '2 medium cores → generators',
      'Large core at start → *Zicoatl* → core',
      '? Vaal Beacon 5/6',
      '> Corruption altar here (Paquate\'s Mechanism)',
      'WP → Jungle Ruins'
    ]},
    { n: 'Jungle Ruins (return)', s: [
      'Large core on altar → Matlan Waterways'
    ]},
    { n: 'Matlan Waterways', lv: '35', s: [
      '? Narag\'s Hut: *Narag* [Rare weapon] [Whetstone]',
      'Step on every pressure pad, walk to the end',
      '? Vaal Beacon 6/6 → Vaal Ruins portal',
      '> Enter the portal right away, it can vanish',
      '? Corpse at Azak Bog entrance → Servi [Rare belt]',
      'Side path → Azak Bog'
    ]},
    { n: 'Azak Bog', lv: '33–34', wp: 1, s: [
      '? Flameskin rituals [Ignagduk\'s Harvest]',
      'Kill *Ignagduk* → Gemrot Skull [[+30 spirit]] [Spirit gem 10]',
      '> Arena is always top-right',
      'Spear → Servi in town [Charm]'
    ]},
    { n: 'Town', town: 1, s: [
      'Downstairs → Alva',
      'Bottom exit → Drowned City'
    ]},
    { n: 'The Drowned City', lv: '35–36', s: [
      'Apex of Filth: grab WP, back',
      'Molten Vault: grab WP, back',
      '? Drowned Quarters hidden rooms [Runes]',
      '! Teal orbs drown you: keep moving',
      '! Crawler ambush past the checkpoint bridge'
    ]},
    { n: 'The Molten Vault', lv: '36', wp: 1, s: [
      'Kill *Mektul* (1st char) [Uncut skill 10]',
      '! ~4 min lava timer. Bring fire res.',
      '> Alts can skip',
      '? Frost Cores clear blockages [Gold chests]'
    ]},
    { n: 'Town', town: 1, s: [
      'Hammer → Oswald [[Reforging bench]]',
      'WP → Apex of Filth'
    ]},
    { n: 'Apex of Filth', lv: '36–37', wp: 1, s: [
      '? 3 mushrooms → Cauldron [Quality flasks]',
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
      '! Sunlight burns. Hug the shade.',
      'Alva'
    ]},
    { n: 'Town', town: 1, s: [
      'Gateway → downstairs → Utzaal'
    ]},
    { n: 'Utzaal', lv: '38–39', s: [
      '> Same map as Drowned City. Paved road → Viper.',
      'Vaal Goliath (shoulder canister) → Sacrificial Heart',
      '> Also drops in Aggorat',
      '? Side doors: idols to sell',
      'Kill *Viper Napuatzi*',
      '! Mobile. Fight from one spot to read her.'
    ]},
    { n: 'Aggorat', lv: '39–40', s: [
      '> Follow the chanting',
      'Altar (top-right): heart + dagger [[+2 pts]]',
      '? Crag Tooth [Vaal orb]',
      'Black Chambers (top-left)'
    ]},
    { n: 'The Black Chambers', lv: '40–42', s: [
      'Kill *Doryani*',
      '! 3 phases, last one airborne',
      '> Loot drops ~30s later'
    ]},
    { n: 'Town', town: 1, s: [
      'Doryani ×2 → Alva → Hooded One → Alva'
    ]}
  ]
},
{
  id: 'a4', tab: 'IV', name: 'Act IV', span: 'Kingsmarch → Ngakanu', lvl: '42–52',
  perm: ['+4 pts', '+5% mana', 'Tattoo', 'Hideout', 'Verisium anvil'],
  tips: [
    'Island holding fragments + Matiki varies per league. Kingsmarch dialogue says where.',
    'Matiki is caged on an island. Click the cage.',
    'Greater Transmutes / Augments can drop from here.'
  ],
  zones: [
    { n: 'Kingsmarch', lv: '42', town: 1, s: [
      'Doryani → Alva',
      'Tujen: accept',
      'Farrow: Runeseeker quest',
      'Makoru (ship) → pick island'
    ]},
    { n: 'Whakapanu Island', lv: '42–43', s: [
      'Petrified Pirate, coast [Map piece 1/4]',
      '? Shark Pit: *Great White One* → Shark Fin',
      '> Fin → Kaimana [Uncut gem 11] [Blessing]',
      '? Crabshell Cavern: *Clawcrunch* [Support gem 4]'
    ]},
    { n: 'Singing Caverns', wp: 1, s: [
      '? Beckoning Clam → pearl to Rog',
      'Kill *Diamora*',
      'Hooded One → town'
    ]},
    { n: 'Kingsmarch', town: 1, s: [
      'Ange → Shoreline Hideout → clear → Ange [[Hideout]]'
    ]},
    { n: 'Shrike Island', lv: '43–44', s: [
      'Corpse Nest [Map piece 2/4]',
      'Kill *Scourge of the Skies*'
    ]},
    { n: 'Abandoned Prison', lv: '44', wp: 1, s: [
      'Kill mobs → Chapel Key',
      '? Armoury elite [Jewel] · Forgotten Cells',
      'Chapel: *Forael* → Goddess of Justice [Flask]'
    ]},
    { n: 'Solitary Confinement', s: [
      'Kill *The Prisoner*',
      'Sail → Isle of Kin'
    ]},
    { n: 'Isle of Kin', lv: '45', s: [
      'Flayed Sailor, shore [Map piece 3/4]',
      '? Doomed Mine [Jeweller\'s]',
      'Beast Pen: *Mimok* [T4 support gem]',
      '? Primal Arena: *Blind Beast* [Greater blank rune]'
    ]},
    { n: 'Volcanic Warrens', lv: '45–46', wp: 1, s: [
      '? *Magma Twins*: lightning first = Ruby ring · fire first = Topaz',
      'Kill *Krutog* (Tyrant Throne)'
    ]},
    { n: 'Eye of Hinekora', lv: '46–47', wp: 1, s: [
      'Matiki at the well → use well',
      '? Behind waterfall [Spirit gem 12]',
      'Tests: Fire, Nature, Cold',
      'Silent Hall altar → Navali [[+5% mana]]'
    ]},
    { n: 'Halls of the Dead', lv: '47', s: [
      'Trial of Ngakanu → tattoo [[+5% res or +5 stat]]',
      '> Res tattoo suits most builds',
      'Kill *Yama the White*'
    ]},
    { n: 'Trial of the Ancestors', lv: '47–48', s: [
      'Navali + Hinekora [[+2 pts]]'
    ]},
    { n: 'Kedge Bay', lv: '47–48', wp: 1, s: [
      'Dead Man\'s Chest [Map piece 4/4]',
      '? Abandoned Ship · Tidal Cay · *Doran* [Loot]'
    ]},
    { n: 'Journey\'s End', lv: '48–49', wp: 1, s: [
      'Tujen',
      'Kill *Captain Harlin* → Verisium',
      'Freya → Dannig (Verisium Spikes) → Freya',
      'Totem → kill *Omniphobia*',
      'Tujen in town [[+2 pts]]'
    ]},
    { n: 'Plunder\'s Point', s: [
      '4 map pieces → Makoru → Expedition → Deserted Post → Farrow [[Verisium anvil]]',
      '! Don\'t skip. Only way to unlock Runeforging.'
    ]},
    { n: 'Arastas', lv: '49–50', wp: 1, s: [
      'Lorandis → follow → break shield',
      '? Bells: Evening = 3 Exalts · Morning = 3 Regals',
      'Kill *Torvian* → Excavation',
      '> Let his rocks hit the 2 priests'
    ]},
    { n: 'The Excavation', lv: '50–51', s: [
      'Kill *Benedictus* → Hooded One',
      '? Cache at checkpoint',
      'Town → sail to Ngakanu'
    ]},
    { n: 'Ngakanu', lv: '51', s: [
      '? Abyssal Depths · Mad Butcher (big hut)'
    ]},
    { n: 'Heart of the Tribe', lv: '52', s: [
      '? Meeting House chests',
      'Kill *Tavakai* → talk',
      'Hooded One → Interludes'
    ]}
  ]
},
{
  id: 'in', tab: 'V', name: 'Interludes', span: 'Ogham · Khari · Kriar', lvl: '52–58',
  perm: ['+8 pts', '+5% life', '+40 spirit', 'Free unique', 'Boon'],
  tips: [
    'Any order. Suggested: Kriar → Ogham → Khari (spirit spike first).',
    'Res penalty kicks in on entry. Don\'t scout.',
    'Lock in your ascendancy before the final turn-in.'
  ],
  zones: [
    { n: '5.1 · Ogham', lv: '52–53', s: [
      'Hooded One → The Refuge',
      'Scorched Farmlands WP',
      '? *Isolde & Heldra* (east)',
      'Stones of Serle (south): 6 megaliths',
      '> Lifts the Darkness off Blackwood (north)',
      'Blackwood → Holten',
      'Kill *Godwin & Sigbert* [Whetstone]',
      '? Ferryman, docks [Cheap greater runes]',
      'Wolvenhold: *Oswin* → Ledger [[+2 pts]] [Unique]',
      'Holten Estate, up 2 floors: *Wulfric & Elswyth*'
    ]},
    { n: '5.2 · Khari', lv: '54–55', s: [
      'Hooded One → Khari Crossing',
      'Kill *Akthi & Anundr* (SE) → Risu [[+2 pts]]',
      '> Wayfinder\'s Seals point west → Pools',
      '? Torbek [Cheap caster weapons]',
      'Pools of Kathal WP → Sel Khari Sanctuary WP',
      '? Two Wishes: both baryas on pedestals [2 rare jewels]',
      'Kill *Elzarah* at the end',
      'Molten Shrine (NE) → Skullmaw Stairway [[+5% life]]',
      '> Seal bugged? Reset instance.',
      'Qimah: Orbala\'s Pillar [[Boon]]',
      '> Swap boon anytime at the pillar',
      'Jado opens Qimah Reservoir',
      '? 2 Sacred Wells [Currency]',
      '? Giant vase → *Bloodbilge* [Exalt] [Vaal]',
      'Kill *Azmadi* → Grand Barya'
    ]},
    { n: '5.3 · Kriar', lv: '55–58', s: [
      'Hooded One → Glade → Ashen Forest (no WP)',
      'Ancient Monument [Skill gem]',
      'Kriar Village: follow wisps → *Lythara* [[+40 spirit]] [Spirit gem]',
      'Glacial Tarn → Howling Caves: *Yeti* → Icy Tusks',
      'Tusks → Hilda [[+2 pts]]',
      'Tarn: *Rakkar* (NW) → Kriar Peaks',
      'Elder Maddox, ~10 o\'clock [[Free unique]]',
      '> Blue owls nearby',
      'Etched Ravine: *Stormgore* → Cuachic Vault',
      '? Sealed vaults via small soul cores',
      'Kill *Zolin & Zelina*',
      '? Vaal Beacons, one per zone'
    ]},
    { n: 'Wrap-up', s: [
      'All 3 done → Hooded One [[+2 pts]]',
      'Oriath: Farrow → Hooded One → Doryani',
      'Maps open (lvl 58–60)'
    ]}
  ]
}
];

/* General tips, shown on the Tips tab. */
window.TIPS = [
  { h: 'Pace', items: [
    'Keep moving. Short town visits. ~5h campaign is the target.',
    'Don\'t memorise layouts, too much changed in 0.5.',
    'Blue packs ≈ 3.5× white XP. Skip whites unless behind.',
    'Stay ~3 levels under zone level (+1 per 16 char levels).'
  ]},
  { h: 'Gear & currency', items: [
    'Red Vale racks give a tier-2 martial weapon. No need to mule.',
    '1–2 Regals per act, on good weapon bases. Hold Exalts.',
    'Expect a whole act without a weapon upgrade. Next real jump is T1 maps.',
    'Save Artificer\'s, runes, whetstones for your end-of-Act-IV weapon.',
    'Shop once per act, at the start.',
    'Regex the vendor search. Use a levelling loot filter.'
  ]},
  { h: 'Controls', items: [
    'Ctrl on the passive tree auto-confirms.',
    'Bind Quick Assign for attribute nodes.',
    'Ctrl+Shift+click hotbar slots → weapon-swap skills.',
    'Set up stash tabs on Standard before league start.'
  ]},
  { h: 'Ascendancy', items: [
    'Levelling picks: Demon Form, Smith of Kitava, Sorcery Ward. Respec later.',
    'Final ascendancy before the last interlude turn-in.'
  ]},
  { h: 'Forbidden Rites (0.5.5 league)', items: [
    'Every zone has a Ritual. Rewards: currency + gear.',
    'Boss ritual clusters: 2 per act, 1 per interlude. Bosses chain into the next altar.',
    'Finish a chain → spend Tribute on uniques.',
    'Party: everyone hears Aoife before it starts.'
  ]}
];
