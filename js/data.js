/* ============================================================
   ADVITIYA SINGH KANTA · PORTFOLIO CONTENT
   ============================================================
   This file drives the project pages (project.html).
   Edit text here, drop images in assets/projects/<slug>/.
   See UPDATE-GUIDE.md for how to make changes safely.
   ============================================================ */

const SITE = {
  name: "Advitiya Singh Kanta",
  role: "Level Designer",
  location: "Dundee, United Kingdom",
  email: "advitiyakanta@gmail.com",
  tagline: "I design levels that guide players without words. From 2D layout to playtested blockout, in Unreal Engine 5.",
  credentials: "7 months professional LD experience · MProf Games Development, Abertay University",
  links: {
    linkedin: "https://www.linkedin.com/in/advitiyasinghkanta/"
  },
  cv: "assets/cv/Advitiya_Kanta_CV.pdf",

  projects: [

    /* ---------------- 1. REVOLVER RIFT (PROFESSIONAL) ---------------- */
    {
      slug: "revolver-rift",
      tier: "professional",
      badge: "Professional · Kahr Works GmbH",
      title: "Revolver Rift",
      subtitle: "AA PvPvE extraction shooter · Kahr Works GmbH",
      cardMeta: "7 months (Dec 2024 – Jun 2025) · UE5",
      card: "More than fifteen compounds blocked out and iterated for an AA extraction shooter in development.",
      hero: "assets/projects/revolver-rift/compound-02.jpg",
      meta: {
        Role: "Level Designer",
        Studio: "Kahr Works GmbH, Dornbirn, Austria",
        Engine: "Unreal Engine 5",
        Duration: "December 2024 to June 2025",
        Focus: "Compound layout, navigation, pacing, playtesting"
      },
      links: [
        { label: "Official game site", url: "https://www.revolver-rift.com/" }
      ],
      sections: [
        {
          heading: "The project",
          body: [
            "Revolver Rift is a hardcore PvPvE extraction shooter in development at Kahr Works, built in Unreal Engine 5. I spent seven months there as a Level Designer working on its map spaces.",
            "In an extraction shooter, the compounds decide the match. Loot, sightlines and risk concentrate in those contested pockets, so every one of them has to ask the player a question: which way in, how loud, and what am I willing to trade for the good loot? I blocked out and iterated <strong>more than fifteen compounds</strong> against that standard."
          ],
          images: []
        },
        {
          heading: "What I owned",
          body: [
            "Compound layouts from first sketch to playable blockout. Navigation and pacing passes across the map. Playtest rounds, and the layout changes that followed from what they showed. I worked in a multinational team with weekly level review syncs, which taught me to present layout decisions to leads, defend the ones that mattered, and let go of the ones that did not survive contact with playtesting.",
            "It also taught me to design inside a performance budget from the first blockout, rather than treating optimization as someone else's cleanup job."
          ],
          images: []
        },
        {
          heading: "Approved blockout work",
          body: [
            "Everything below was made with Unreal's native workflows and is cleared for portfolio use. No final game assets are shown, and detailed layouts stay under NDA. I can walk through the process behind them, from reference to 2D layout to iterated blockout, in an interview."
          ],
          images: [
            { src: "assets/projects/revolver-rift/compound-01.jpg", caption: "Industrial compound. The chimney is the landmark; the yard forces an open crossing to reach the interior loot." },
            { src: "assets/projects/revolver-rift/compound-02.jpg", caption: "Church compound. Strong silhouette for orientation, tight interior for close fights, walled grounds that funnel approaches." },
            { src: "assets/projects/revolver-rift/compound-03.jpg", caption: "Village across terrain. Multiple buildings spread engagement instead of stacking it in one structure." },
            { src: "assets/projects/revolver-rift/compound-04.jpg", caption: "Farm compound. Open approaches with a hard interior core." },
            { src: "assets/projects/revolver-rift/compound-05.jpg", caption: "Swamp compound. Water and terrain slow the approach and telegraph movement." },
            { src: "assets/projects/revolver-rift/compound-06.jpg", caption: "Walled fort compound. One obvious gate, several unobvious ways over the wall." }
          ]
        }
      ]
    },

    /* ---------------- 2. TO PIERCE ETERNITY (STUDIO) ---------------- */
    {
      slug: "to-pierce-eternity",
      tier: "studio",
      badge: "Studio Project \u00b7 Hyperluminal",
      title: "To Pierce Eternity",
      subtitle: "Level Designer on a sci-fi puzzle horror game, made for Hyperluminal",
      cardMeta: "12 weeks \u00b7 team of 12 \u00b7 UE5 \u00b7 Released",
      card: "A derelict space station where the HUD lies and the level is the only thing telling the truth. I owned the player space.",
      hero: "assets/projects/to-pierce-eternity/cover.jpg",
      video: "cHCa_0P5elA",
      meta: {
        Role: "Level Designer",
        Client: "Hyperluminal",
        Team: "12 (Abertay MProf, DES512)",
        Engine: "Unreal Engine 5",
        Duration: "12 weeks, 2026",
        Status: "Released, rated 5.0"
      },
      links: [
        { label: "Play it on itch.io", url: "https://snakelock.itch.io/to-pierce-eternity" }
      ],
      sections: [
        {
          heading: "The problem",
          body: [
            "A companion AI guides you through your helmet HUD, and the HUD lies. That premise puts the level under load. If a player cannot tell a deliberate lie from a bug, they stop playing and start debugging.",
            "So the level had one job: <strong>be the only honest system in the game.</strong> Every guidance decision below follows from that constraint. I owned the player space end to end and designed against it."
          ],
          images: []
        },
        {
          heading: "Planning the space",
          body: [
            "I plan on paper because it forces decisions about order before geometry makes them for me. Hand sketch, then a bubble diagram to test the sequence of beats, then the 2D plan once the flow held.",
            "The red bars are the important marks. They are no-backtracking points, placed where a player would otherwise retreat to safety and drain the tension I had just built. Cross one and the door seals, so every choice is committed.",
            "The layout is a loop. You start in the hibernation chamber and end there, and the room reads differently depending on which of three endings you earned."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/layout-paper.jpg", caption: "Paper pass. Room order, safe zones, storytelling rooms and the loop back to the start." },
            { src: "assets/projects/to-pierce-eternity/bubble-diagram.jpg", caption: "Bubble diagram. Green safe, red puzzle, cyan chase, grey storytelling, orange and purple for the two endings." },
            { src: "assets/projects/to-pierce-eternity/layout-2d-plan.jpg", caption: "2D plan. Critical path, room types, and the no-backtracking bars that make each commitment permanent." }
          ]
        },
        {
          heading: "Sightlines before geometry",
          body: [
            "I plan sightlines on paper before primitives go down, because what a player can see from the doorway decides whether they walk in curious or confused.",
            "In the Entity Experimentation Room the plan was a curiosity hook: pods framing a low centre object, one clear line of sight from the entrance to it, and a light that makes that object the only readable thing in a dark room. The build follows the plan closely enough that you can hold them side by side."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/sightline-plan.jpg", caption: "Plan against execution. Pods frame the sightline, a single light makes the centre object the one readable target, and the curiosity hook pulls the player in without a prompt." }
          ]
        },
        {
          heading: "Guidance without a marker",
          body: [
            "Hyperluminal's QA lead found the flaw. Three identical doors in a symmetrical room gave her nothing to choose between. The space was asking her to guess and calling it a decision.",
            "The obvious fix was an objective marker. I refused it. A marker travels through the HUD, and the HUD is untrustworthy by design, so that fix trades the game's core mechanic for a symptom. I put the information in the environment instead: lighting above the doors for the correct and blocked read, and one distinction object per room.",
            "The rule underneath it is <strong>distinction</strong>. Three identical doors, one differentiator, and players get pulled through without being told. Light does not attract a player; it makes an object readable enough to be chosen. I keep the signal on line and shape, with colour only reinforcing, so the guidance survives a player who cannot separate red from green.",
            "Two people named the same guide object weeks apart, unprompted: a faculty assessor and the QA lead."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/read-leading-lines.jpg", caption: "Diegetic guidance in the maintenance path. Pipes run as leading lines to the correct valve, and the valve is the only lit green element in frame. Nothing in the HUD is doing this work." }
          ]
        },
        {
          heading: "Blockout",
          body: [
            "I built every playable space: hibernation chamber, three puzzle rooms, two safe rooms, storytelling rooms, the maintenance detour and the Underbelly. It started as one hexagonal room and grew outward against the plan.",
            "I gave art the scale early on a rough modular kit, so the greybox could be replaced without the layout being redrawn."
          ],
          images: [],
          toggle: {
            a: {
              name: "Blockout",
              items: [
                { src: "assets/projects/to-pierce-eternity/top-01.jpg", caption: "The hibernation chamber as a single hexagonal room." },
                { src: "assets/projects/to-pierce-eternity/top-02.jpg", caption: "First corridor out, running toward the generator area." },
                { src: "assets/projects/to-pierce-eternity/top-04.jpg", caption: "Station shape emerging. Puzzle wing, safe room and storytelling rooms in place." },
                { src: "assets/projects/to-pierce-eternity/top-06.jpg", caption: "Both wings connected, matching the 2D plan room for room." },
                { src: "assets/projects/to-pierce-eternity/top-08.jpg", caption: "Every playable room built, including the Entity Experimentation Room." },
                { src: "assets/projects/to-pierce-eternity/top-11.jpg", caption: "Final playable area with the art kit in. Same footprint as the plan." }
              ]
            },
            b: {
              name: "2D Layouts",
              items: [
                { src: "assets/projects/to-pierce-eternity/layout-generator-room.jpg", caption: "Generator room. Power control units, control terminal, sightline blockers, storytelling room off the critical path." },
                { src: "assets/projects/to-pierce-eternity/layout-lab.jpg", caption: "Laboratory and Entity Experimentation Room. Interactables and narrative props placed against the sightline plan." },
                { src: "assets/projects/to-pierce-eternity/layout-maintenance.jpg", caption: "Maintenance path. An optional detour that charges traps for a True Ending note." },
                { src: "assets/projects/to-pierce-eternity/layout-underbelly.jpg", caption: "The Underbelly. Trap types, short circuit station, chase trigger, and the two ending corridors." }
              ]
            }
          }
        },
        {
          heading: "The Underbelly",
          body: [
            "The chase runs through the Underbelly, entered by elevator so the descent is a one-way commitment. Traps punish the wrong decision rather than the player: static steam damages and slows, valve steam can catch the player or the entity, spilled liquid does the same. One recharge station. The chase triggers five to seven seconds in, before the player feels ready.",
            "First build, a tester died once, got jumpscared, then sprinted the rest of it untouched. Sprinting was beating the design. I raised entity speed and re-tuned trap timing until running blind gets you caught, which forced the player back into reading the space at speed.",
            "I scripted this section myself: splines, dialogue triggers and trap logic in Blueprints. The QA lead called it the most engaging part of the game."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/paper-underbelly.jpg", caption: "Rough plan. Trap positions, one recharge station, a five to seven second entity trigger, and a 1 to 1.5 minute target run." },
            { src: "assets/projects/to-pierce-eternity/layout-underbelly.jpg", caption: "The plan it became. Trap types by symbol, chase trigger, and the Trust and Don't Trust corridors." },
            { src: "assets/projects/to-pierce-eternity/final-underbelly-traps.jpg", caption: "In engine. The fastest line is not the safest one." },
            { src: "assets/projects/to-pierce-eternity/bp-trap-steam.jpg", caption: "Trap logic in Blueprints, with damage and timing exposed so the sequence could be balanced quickly." }
          ]
        },
        {
          heading: "The room that carries the argument",
          body: [
            "Every pod in the Entity Experimentation Room reads green, so green carries no information. Interact with the recharge station and one pod turns red.",
            "The mechanic doing that is the game's own HUD-obscuring function. The interface shows you the clean version of the room, and the truth only appears once the interface is taken away. That is the whole premise built into one space instead of explained in dialogue.",
            "From week nine I was also the integration point, holding design intent while the art kit, props and lighting replaced the greybox. Released August 2026, rated 5.0."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/cover.jpg", caption: "Entity Experimentation Room, shipped build. One red pod is the entire reveal." }
          ]
        },
        {
          heading: "What I took from it",
          body: [
            "I designed with the distinction rule for weeks before I could name it. Naming it changed what I could do with it: apply it deliberately, defend it in review, and hand it to a teammate in one sentence.",
            "The judgement I would repeat is refusing the objective marker. The cheap fix would have solved the complaint and quietly broken the game."
          ],
          images: []
        },
        {
          heading: "Graybox gallery",
          body: [
            "Every playable area across the station, lit at graybox so each room could be tested for readability before it was dressed."
          ],
          images: [],
          gallery: [
            "assets/projects/to-pierce-eternity/gray-01.jpg","assets/projects/to-pierce-eternity/gray-03.jpg",
            "assets/projects/to-pierce-eternity/gray-04.jpg","assets/projects/to-pierce-eternity/gray-05.jpg",
            "assets/projects/to-pierce-eternity/gray-06.jpg","assets/projects/to-pierce-eternity/gray-07.jpg",
            "assets/projects/to-pierce-eternity/gray-08.jpg","assets/projects/to-pierce-eternity/gray-09.jpg"
          ]
        }
      ]
    },

    /* ---------------- 3. HULL & HORIZON ---------------- */
    {
      slug: "hull-and-horizon",
      tier: "studio",
      badge: "Client Work · V&A Dundee",
      cardMetaAlt: true,
      title: "Hull & Horizon",
      subtitle: "Lead Level Design & Audio · museum experience for the V&A Dundee",
      cardMeta: "Feb – May 2026 · UE5 · Released",
      card: "A first-person Queen Mary deck built for the museum floor and playtested with ten real visitors.",
      hero: "assets/projects/hull-and-horizon/bow-sunset.jpg",
      video: "2T_Sq1BiX0c",
      meta: {
        Role: "Lead Level Designer · Audio",
        Client: "V&A Dundee, Scottish Design Galleries",
        Team: "Clyde Crew, 5 members (Abertay MProf, DES511)",
        Engine: "Unreal Engine 5",
        Duration: "February to May 2026",
        Status: "Released. Playtested at the V&A across 10 visitor sessions."
      },
      links: [
        { label: "Play it on itch.io", url: "https://leonfnr66.itch.io/hull-horizon" }
      ],
      sections: [
        {
          heading: "The brief",
          body: [
            "The V&A Dundee wanted an interactive piece for their Scottish Design Galleries. Visitors explore the RMS Queen Mary during her 1934 construction at Clydebank, in first person, for five to ten minutes. No fail states, no pressure, and many visitors would be holding a controller for the first time.",
            "My design intent fit in one line: <strong>small on a big ship</strong>. The visitor should feel the scale, get pulled forward by curiosity instead of instructions, and leave with one human story they remember."
          ],
          images: []
        },
        {
          heading: "Planning the space",
          body: [
            "The macro path is a single dense loop. You spawn at the bow, get pulled down a stair to the builder corridor, rejoin stairs up to the top deck, pass through the first-class lounge, and end on the balcony. Nothing exists just because we had room for it.",
            "The first ten seconds do three jobs the LDD held me to: a landmark in view, a forward pull, one obvious NPC cluster. Stairs carry the vertical language, because for someone who has never played a game, up means important. Interiors were locked at two rooms, each with a teaching job. The builder room covers the labour. The lounge covers the passengers."
          ],
          images: [
            { src: "assets/projects/hull-and-horizon/layout-topdeck-plan.jpg", caption: "2D top-deck layout plan. Primary route, POIs, NPC positions, restricted zones. Target traversal: 3 to 4 minutes walking, 5 to 7 with interactions." },
            { src: "assets/projects/hull-and-horizon/read-topdeck-goldenpath.jpg", caption: "Top-deck golden path and space read. Central anchor, NPC soft goals, interactable clusters, open-to-tight spatial rhythm." }
          ]
        },
        {
          heading: "Guidance without UI",
          body: [
            "Sightlines and leading lines. NPC clusters as interest magnets. Warm light against cool. Localised audio. What we refused: quest markers, arrows, tutorial text. The museum tone survives or the whole piece fails.",
            "Every interaction is one button and at most three sentences, and each answers one question. What is this part? Why does it matter? Who made or used it? Interactions sit where people naturally pause: corners, overlooks, thresholds."
          ],
          images: [
            { src: "assets/projects/hull-and-horizon/read-pov-forward.jpg", caption: "Player POV read. Landmark hierarchy, horizon line, silhouette order, leading lines funnelling the eye to the mast." },
            { src: "assets/projects/hull-and-horizon/read-focal-corridor.jpg", caption: "Interior corridor focal read. The architecture converges on the focal point. A light lure and familiar-scale props carry the depth." }
          ]
        },
        {
          heading: "From 11 beats to 9",
          body: [
            "The beat map started at eleven beats. In March I cut it to nine. That tightened the pacing for the five-to-seven minute target and killed the scope risk before it could bite us.",
            "I also took over audio in week seven, and it turned out to be the same discipline as layout. Where a sound sits and when it triggers changes how people read the space. The four key NPCs got short vocal cues with subtitles. Ambient workers are subtitle only, triggered by proximity, so voice stays reserved for the beats that carry the story."
          ],
          images: [
            { src: "assets/projects/hull-and-horizon/progression-week5-week12.jpg", caption: "Week 5 blockout against week 12 finalisation. Same bow, same read, everything tightened." }
          ]
        },
        {
          heading: "Playtesting at the V&A, 10 real visitor sessions",
          body: [
            "On 12 March we tested on the museum floor with ten visitors across a wide age range, one structured observation sheet per session so the data stayed comparable.",
            "What held: wayfinding worked in all ten sessions. Nobody got lost, nobody backtracked. The mast pulled attention, the deck spine gave direction, and Sir John Brown stopped every single visitor who reached him. The core bet paid off. Composition and NPC placement can replace UI signposting.",
            "What failed: visitors walked straight through Beat 2 without stopping. Older visitors struggled with the controls, and one assumed the always-visible interact prompt needed constant pressing. Worst of all, there was no ending. Every session had to be closed by a team member standing next to the visitor."
          ],
          images: []
        },
        {
          heading: "What changed and why",
          body: [
            "Beat 2 got a note object that pulls the player right before the work area. The geometry never changed. One object does the work. The interact prompt became contextual, appearing only near key objects. A six-second movement tutorial now shows on entry, a fix the Session 10 visitor proposed themselves. And the NPC roster grew from three to eight, because the data said NPC encounters were the strongest moments in the level.",
            "The missing ending became a quiet outro. Four subtitle lines fade in over the horizon, closing on the ten thousand workers and job number 534, both sourced from our research dossier. I chose reflection over a cutscene because the visitor should end where the builders stood, looking out from the ship they built."
          ],
          images: [
            { src: "assets/projects/hull-and-horizon/shot-08.jpg", caption: "Post-playtest build. The deck at sunset." },
            { src: "assets/projects/hull-and-horizon/shot-13.jpg", caption: "First-class lounge interior, the reflective beat." }
          ]
        },
        {
          heading: "In-engine gallery",
          body: [],
          gallery: [
            "assets/projects/hull-and-horizon/bow-sunset.jpg","assets/projects/hull-and-horizon/shot-01.jpg",
            "assets/projects/hull-and-horizon/shot-02.jpg","assets/projects/hull-and-horizon/shot-03.jpg",
            "assets/projects/hull-and-horizon/shot-04.jpg","assets/projects/hull-and-horizon/shot-05.jpg",
            "assets/projects/hull-and-horizon/shot-06.jpg","assets/projects/hull-and-horizon/shot-07.jpg",
            "assets/projects/hull-and-horizon/shot-09.jpg","assets/projects/hull-and-horizon/shot-10.jpg",
            "assets/projects/hull-and-horizon/shot-11.jpg","assets/projects/hull-and-horizon/shot-12.jpg",
            "assets/projects/hull-and-horizon/shot-14.jpg","assets/projects/hull-and-horizon/shot-15.jpg",
            "assets/projects/hull-and-horizon/shot-16.jpg"
          ],
          images: []
        }
      ]
    },

    /* ---------------- 4. GOODBABIES ---------------- */
    {
      slug: "goodbabies",
      tier: "abertay",
      badge: "Team Project · Abertay",
      title: "GoodBabies",
      subtitle: "Level Design · social-deception game, 10-week UE5 prototype",
      cardMeta: "10 weeks · team of 6 · UE 5.6",
      card: "One room, one bouncer, constant pressure. Social deception at the Baby Mafia's card table.",
      hero: "assets/projects/goodbabies/cover.jpg",
      video: "eWa8z-YIEco",
      meta: {
        Role: "Level Designer",
        Team: "6 members (Abertay MProf, DES510)",
        Engine: "Unreal Engine 5.6",
        Duration: "10 weeks",
        Status: "Released on itch.io, rated 5.0"
      },
      links: [
        { label: "Play it on itch.io", url: "https://colranestudios.itch.io/goodbabies" }
      ],
      sections: [
        {
          heading: "One room, all tension",
          body: [
            "You are an informant inside the Bambino Crime Family, recording incriminating table talk through the baby monitor on your chest while playing cards to stay alive. Seated gameplay, limited movement, a single interior.",
            "The whole level is one room, which means the room has to do everything. My core design question: <strong>how can the environment reinforce tension without overwhelming the player?</strong> Readability for a fixed POV, lighting that steers focus, and threat placement that shapes decisions all follow from it."
          ],
          images: [
            { src: "assets/projects/goodbabies/rough-plan-paper.jpg", caption: "First pass on paper: the nursery as a card den. Window, RC train, clock, toys and the fly event already placed around the table." },
            { src: "assets/projects/goodbabies/layout-2d-plan.jpg", caption: "2D layout plan. Player anchor, opponents, bouncer route, distraction events, storytelling elements." }
          ]
        },
        {
          heading: "Blocking it out, day by day",
          body: [
            "The room went from massing to final inside a week, and every day had one job. Day 2 locked the table as the anchor and used furniture to break sightlines. Day 3 drew the bouncer's patrol directly on the floor, before he existed as a character, so his pressure could be tuned as a route rather than a performance. Day 5 was the lighting pass: one warm source over the table, danger pushed to the edges. The final blockout dressed the space over the same footprint."
          ],
          images: [
            { src: "assets/projects/goodbabies/blockout-day2.jpg", caption: "Day 2. Massing locked: table anchor, furniture as sightline breaks, opponents seated." },
            { src: "assets/projects/goodbabies/blockout-day3-patrol.jpg", caption: "Day 3. The bouncer's patrol route drawn on the floor and walked before the character existed." },
            { src: "assets/projects/goodbabies/blockout-day3-top.jpg", caption: "Day 3, cutaway view. The full route reads at a glance: door, bar, table orbit." },
            { src: "assets/projects/goodbabies/blockout-day5-lighting.jpg", caption: "Day 5. Lighting pass: one warm source owns the table, the rest of the room falls away." },
            { src: "assets/projects/goodbabies/blockout-final.jpg", caption: "Final blockout, dressed. Bar, curtain, props in place over the unchanged footprint." },
            { src: "assets/projects/goodbabies/blockout-progression.jpg", caption: "The whole arc in one panel: blockout to playable space across iterations." }
          ]
        },
        {
          heading: "Designing the POV",
          body: [
            "With the player seated, the camera frame is the level. I cleared the left of the frame to cut cognitive load, anchored the cards and key interactions in the centre, and dimmed the periphery so the table owns attention. The bouncer and the threat cues stay alive at the edge of vision, which is where pressure belongs.",
            "The bouncer stands where you can always half-see him. Triangular bunting reads as quiet aggression, red light signals danger, and his oversized shadow does the intimidation for him. I tested his position until he pressured the player without ever blocking the main interactions."
          ],
          images: [
            { src: "assets/projects/goodbabies/read-player-pov-v2.jpg", caption: "Player POV analysis. Soft light marks the safe zone, the left of frame stays quiet, the background is dimmed to hold focus, and the gameplay rhythm centres on the primary interaction zone." },
            { src: "assets/projects/goodbabies/read-bouncer-tension.jpg", caption: "Bouncer placement analysis. Triangle bunting as threat signal, red light as danger, constant pressure without stealing focus, the shadow doing the intimidation." }
          ]
        },
        {
          heading: "Pacing as a conversation",
          body: [
            "I built the beat map like a conversation between tension and relief. Calm early beats teach the cards and the suspicion system. Mid-game beats stack distractions: the fly, bouncer passes, item cues. The high-tension beats make you multitask until the release. The bouncer ends up predictable enough to feel fair and unpredictable enough to stay dangerous.",
            "I also supported onboarding. Flashcards land at the moment of interaction, popups arrive in low-pressure beats, and the intro videos cover the rules of danger before play starts."
          ],
          images: [
            { src: "assets/projects/goodbabies/pov-cards.jpg", caption: "In play. Cards centred, opponents in frame, the room dark beyond the table light." },
            { src: "assets/projects/goodbabies/shot-01.jpg", caption: "At the table with the Bambino family." }
          ]
        }
      ]
    },

    /* ---------------- 5. BABY'S FIRST TOWER DEFENCE ---------------- */
    {
      slug: "babys-first-tower-defence",
      tier: "abertay",
      badge: "Game Jam · Abertay",
      title: "Baby's First Tower Defence",
      subtitle: "Level Design · snowbound arena, 2-week UE5 prototype",
      cardMeta: "2 weeks · team of 6 · UE5",
      card: "An open snow arena where terrain elevation and a central landmark keep the space readable.",
      hero: "assets/projects/babys-first-tower-defence/cover.jpg",
      video: "-KdVIYtmypk",
      meta: {
        Role: "Level Designer",
        Team: "6 members (Abertay MProf, DES510 game jam)",
        Engine: "Unreal Engine 5",
        Duration: "2 weeks",
        Status: "Released on itch.io"
      },
      links: [
        { label: "Play it on itch.io", url: "https://colranestudios.itch.io/babys-first-tower-defense" }
      ],
      sections: [
        {
          heading: "The opposite problem",
          body: [
            "GoodBabies was one tight interior. This was the deliberate opposite: an open outdoor arena where flow comes from terrain, distance and landmarks instead of walls.",
            "I designed the full top-down layout. Forts placed for <strong>triangular coverage</strong> so no lane goes undefended and no fort defends alone. Natural barriers funnel players toward the centre. Enemy spawns and paths read at a glance, and the central fort is the landmark that kills disorientation. I mapped player aim ranges against the layout so every engagement distance stays fair."
          ],
          images: [
            { src: "assets/projects/babys-first-tower-defence/layout-2d-plan.jpg", caption: "2D layout plan. Forts, combat hotspots, enemy spawns, aim ranges, train path, elevation changes." }
          ]
        },
        {
          heading: "Terrain does the work",
          body: [
            "A flat playground became a layered arena. The terrain forms a bowl: mountains and tree lines contain the space, elevation defines vantage points and enemy approach directions, and slopes create the chokepoints walls would normally provide. Height differences let players predict enemy movement before it happens.",
            "The dressing keeps the fiction light without costing legibility. Snowfall, log cover and the schoolhouse anchor the scene while lanes and spawns stay readable in the middle of a fight."
          ],
          images: [
            { src: "assets/projects/babys-first-tower-defence/v2-blockout-ground.jpg", caption: "Blockout at ground level. The building ring contains the arena; log cover breaks the open ground into approaches." },
            { src: "assets/projects/babys-first-tower-defence/v2-dusk.jpg", caption: "Dressed arena at dusk. The schoolhouse anchors one end and gives every lane a bearing." },
            { src: "assets/projects/babys-first-tower-defence/v2-arena-overview.jpg", caption: "Full arena overview. The terrain bowl, the tree ring, and the defended centre it all funnels toward." }
          ]
        }
      ]
    },

    /* ---------------- 6. MAHARAJA'S PALACE ---------------- */
    {
      slug: "maharajas-palace",
      tier: "personal",
      badge: "Multiplayer Level",
      title: "Maharaja's Palace",
      subtitle: "Tactical FPS multiplayer map · 1920s India",
      cardMeta: "Solo project · UE5",
      card: "A competitive compound where real palace architecture produces the chokepoints.",
      hero: "assets/projects/maharajas-palace/aerial-full.jpg",
      video: "kElo5Ceq0zA",
      meta: {
        Role: "Level Designer (solo)",
        Engine: "Unreal Engine 5",
        Type: "Competitive multiplayer, tactical FPS",
        Setting: "India, 1920s"
      },
      links: [],
      sections: [
        {
          heading: "The design problem",
          body: [
            "Build a tight, compound-style multiplayer map for a tactical FPS where no position feels overpowered. And make 1920s India carry the combat rather than decorate it.",
            "Controlled vantage points sit against multiple entry and exit routes. Every contested area has a flank, so movement beats camping. Rooftops and balconies give real advantage but stay counterable from at least one angle. Height is a tool here, not a throne."
          ],
          images: [
            { src: "assets/projects/maharajas-palace/layout-2d-plan.jpg", caption: "Hand-drawn 2D plan at 100-metre scale. Red traces intended paths, orange marks chokepoints, green marks cover. Sniper-risk entries sit left and right, and the quality loot is placed deep inside the palace so players must cross the compound to earn it." }
          ]
        },
        {
          heading: "From plan to blockout",
          body: [
            "The February greybox settled massing and proportions. By March the blockout carried a full colour language: green for cover, yellow for climbable and vault surfaces. You can read a lane's risk from its colours before you commit to it.",
            "The palace itself is the macro landmark. Its dome breaks the skyline from every lane, so players always know where they are without a minimap doing the thinking for them."
          ],
          images: [
            { src: "assets/projects/maharajas-palace/greybox-early.jpg", caption: "Early greybox, February. Massing and proportions locked before any route work." },
            { src: "assets/projects/maharajas-palace/aerial-topdown.jpg", caption: "Top-down of the finished blockout. The outer ring of buildings feeds three lanes into the central courtyard." },
            { src: "assets/projects/maharajas-palace/blockout-walkway.jpg", caption: "Rooftop walkway. Yellow marks the climbable route, green the cover along it. The walkway trades exposure for a sightline into two lanes." },
            { src: "assets/projects/maharajas-palace/blockout-tower-route.jpg", caption: "Tower and bridge route. A vertical vault path connects courtyard to upper ring without creating a dominant perch." },
            { src: "assets/projects/maharajas-palace/blockout-entry-cover.jpg", caption: "Side entry at ground level. Hard cover immediately inside the gate so entering players are not free kills." },
            { src: "assets/projects/maharajas-palace/blockout-bus-cover.jpg", caption: "Vehicle cover breaking an open lane into two survivable halves." },
            { src: "assets/projects/maharajas-palace/blockout-courtyard.jpg", caption: "Central courtyard, the contested ground. Canopy and tower give partial height without owning the space." }
          ]
        },
        {
          heading: "Authenticity as level design",
          body: [
            "The layout borrows from real palace architecture: courtyards, colonnades, stepped rooflines. Those forms earn their place, because they produce the sightline breaks, chokepoints and rotation loops the fights need. The map reads as a place first and an arena second."
          ],
          images: []
        }
      ]
    },

    /* ---------------- 7. TLOU-INSPIRED DAM LEVEL ---------------- */
    {
      slug: "tlou-dam-level",
      tier: "personal",
      badge: "Singleplayer Level",
      title: "The Dam",
      subtitle: "TLoU-inspired stealth and combat level · full blockout in 7 days",
      cardMeta: "Solo project · 2 weeks · UE5",
      card: "Stealth, combat and traversal across a militia-held dam. Blocked out in seven days.",
      hero: "assets/projects/tlou-dam-level/dam-overview.jpg",
      video: "b7awn57DIU8",
      meta: {
        Role: "Level Designer (solo)",
        Engine: "Unreal Engine 5",
        Type: "Singleplayer. Stealth, combat, traversal.",
        Constraint: "2 weeks total, blockout at proper scale in 7 days"
      },
      links: [],
      sections: [
        {
          heading: "The constraint was the point",
          body: [
            "I gave myself two weeks, with the full blockout at proper scale in the first seven. Real production moves fast and I wanted proof I can hold quality at that speed.",
            "The level follows Ethan Graves, a former army sniper, crossing a militia-held dam where the infected are used as living shields. Stealth, combat and traversal interleave across the dam's height, and the beat order existed before any geometry did."
          ],
          images: [
            { src: "assets/projects/tlou-dam-level/bubble-diagram.jpg", caption: "Bubble diagram from day one. Mechanics introduction, a small stealth challenge, traversal with storytelling, an enforced detour, combat, then the reward." },
            { src: "assets/projects/tlou-dam-level/dam-overview.jpg", caption: "The dam top against the ruined skyline. The distant towers give the player a constant orientation reference across the whole crossing." }
          ]
        },
        {
          heading: "Guidance without colour-coding",
          body: [
            "No yellow paint. Light, silhouette and geometry do the guiding, and the enemies force the choices. The goal was a space that stays believable while the player always, quietly, knows where to go.",
            "The route reads through framing and contrast instead. A torn fence frames the next space before you commit to it. A sunlit wall pulls the eye down the correct street. Water level and railings tell you where you can drop and where you cannot."
          ],
          images: [
            { src: "assets/projects/tlou-dam-level/fence-framing.jpg", caption: "The fence tear frames the route ahead. The player reads the destination before deciding how loudly to reach it." },
            { src: "assets/projects/tlou-dam-level/street-canyon.jpg", caption: "Abandoned cars stagger the street into cover beats, and the lit far wall pulls the eye down the intended route." }
          ]
        },
        {
          heading: "Blockout gallery",
          body: [],
          gallery: [
            "assets/projects/tlou-dam-level/sunset-approach.jpg",
            "assets/projects/tlou-dam-level/courtyard-threat.jpg",
            "assets/projects/tlou-dam-level/inner-courtyard.jpg",
            "assets/projects/tlou-dam-level/climb-route.jpg",
            "assets/projects/tlou-dam-level/water-traversal.jpg"
          ],
          images: []
        }
      ]
    },

    /* ---------------- 8. PROMISED NIGHT ---------------- */
    {
      slug: "promised-night",
      tier: "personal",
      badge: "Personal Project",
      title: "Promised Night",
      subtitle: "Psychological horror level · exploration and light-led guidance",
      cardMeta: "Solo project · UE5",
      card: "Horror in an Indian haveli where moonlight does the wayfinding.",
      hero: "assets/projects/promised-night/shrine-reveal.jpg",
      video: "mmU2tAEojBs",
      meta: {
        Role: "Level Designer (solo)",
        Engine: "Unreal Engine 5",
        Type: "Singleplayer, psychological horror",
        Setting: "An Indian haveli at night",
        Focus: "Exploration, light-led guidance, tension pacing"
      },
      links: [],
      sections: [
        {
          heading: "Fear needs readable space",
          body: [
            "Horror fails when players get lost for the wrong reasons. Promised Night uses locked doors and blocked paths to force deliberate exploration, moonlight through windows as the quiet guide, and multi-level spaces so movement feels natural. Keys, notes and interactables deepen the tension. Flickering lights and audio shifts keep it unpredictable, on purpose.",
            "The setting is an Indian haveli at night, which gives the horror unfamiliar architecture: inner courtyards, long connecting halls, rooms that loop back on themselves. The building itself is part of the threat."
          ],
          images: [
            { src: "assets/projects/promised-night/layout-pencil-plan.jpg", caption: "First pass on paper. Rooms, locked doors, stairs and key placements, with the legend worked out before touching the engine." },
            { src: "assets/projects/promised-night/layout-hybrid-map.jpg", caption: "Hybrid flow and objective map of the haveli's first floor. Start point, blocked paths, locked doors, objectives, storytelling beats, scary encounters and backtracking routes on one sheet." }
          ]
        },
        {
          heading: "Building the haveli",
          body: [
            "The plan went into UE5 as a full floorplan blockout first, checked from above like a dollhouse, then lit scene by scene. Light does the guiding and the frightening in the same pass: a red-lit shrine pulls you across a dark hall, a flashlight beam turns a dining room into a corridor of guesses."
          ],
          images: [
            { src: "assets/projects/promised-night/blockout-floorplan.jpg", caption: "The haveli floorplan blocked out in engine, viewed from above. The pencil plan, made walkable." },
            { src: "assets/projects/promised-night/shrine-reveal.jpg", caption: "The shrine reveal. One warm red light source in a dark room, and the player cannot look anywhere else." },
            { src: "assets/projects/promised-night/dining-dark.jpg", caption: "The dining hall by flashlight. Long table, hard shadows, one readable exit." },
            { src: "assets/projects/promised-night/table-candles.jpg", caption: "Candle-lit table beat. Small pools of light stage the room into steps." },
            { src: "assets/projects/promised-night/cells-scene.jpg", caption: "The cells. The flashlight finds the blood before it finds the way out." }
          ]
        }
      ]
    }

    /* ---- Tiers: "professional" | "studio" | "abertay" | "personal" ----
       To add a project: copy any block above, change the slug,
       drop images in assets/projects/<slug>/, set the tier.        */
  ]
};
