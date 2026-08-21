/* Portfolio content. Every claim here is traceable to the CV, the project files
   or first-hand evidence. No invented metrics, outcomes or responsibilities. */
const SITE = {
  name: "Advitiya Singh Kanta",
  role: "Level Designer",
  location: "Dundee, United Kingdom",
  email: "advitiyakanta@gmail.com",
  linkedin: "https://www.linkedin.com/in/advitiyasinghkanta/",
  cv: "assets/downloads/Advitiya-Singh-Kanta-Level-Designer-CV.pdf",
  projects: [
    {
      slug: "revolver-rift",
      tier: "selected",
      badge: "Commercial · Kahr Works GmbH",
      title: "Revolver Rift",
      subtitle: "Compound Level Design on an announced AA PvPvE extraction shooter",
      description: "Commercial Level Design at Kahr Works on Revolver Rift: 5+ multi-building compounds taken from 2D layout to playable greybox in Unreal Engine 5.",
      hero: "assets/projects/revolver-rift/cover.jpg",
      heroAlt: "Revolver Rift title card over a frontier settlement",
      summary: {
        Role: "Level Designer",
        Project: "Revolver Rift",
        Studio: "Kahr Works GmbH",
        Type: "Commercial · remote",
        Duration: "7 months · Dec 2024 – Jun 2025",
        Engine: "Unreal Engine 5",
        Status: "Announced, in development"
      },
      skills: ["2D layout", "Blockout", "Approach routes", "Cover and sightlines", "Landmarks", "Pacing", "Studio review"],
      links: [
        { label: "Official game site", url: "https://www.revolver-rift.com/" }
      ],
      sections: [
        {
          heading: "The project",
          body: [
            "Revolver Rift is an announced AA PvPvE extraction shooter in development at Kahr Works. I worked there as a Level Designer for seven months, remotely, building compound spaces for the game.",
            "Compounds are where navigation, risk and player contact concentrate. My work sat underneath them: how players approach, what they can see from where, where cover sits, and where contact is likely."
          ]
        },
        {
          heading: "What I owned",
          variant: "contribution",
          bullets: [
            "Built 5+ multi-building compounds in Unreal Engine 5, taking each from 2D layout to playable greybox.",
            "Designed approach routes, cover spacing, sightlines and contact points.",
            "Tuned navigation and pacing through playthrough and review passes.",
            "Used landmark silhouettes and elevation change to improve navigation, long-range readability and risk communication.",
            "Iterated layouts against studio feedback while following the studio's blockout conventions, naming standards and production workflow."
          ]
        },
        {
          heading: "How I worked",
          steps: ["2D plan", "Compound blockout", "Studio review", "Iteration"],
          body: [
            "Each compound started as a 2D plan: building footprints, approach lines, the cover that separates them and the points where routes converge. Only then did it go into the engine.",
            "In the blockout I walked the space at player scale and checked the reads a plan cannot show: how the compound looks from long range, whether the entry a player picks is the one the layout implies, and whether height gives an advantage that can still be answered from the ground.",
            "Layouts then went through studio review and back into the blockout. Most of the design happened in that loop."
          ]
        },
        {
          heading: "Compound blockouts",
          body: [
            "These are the six compounds cleared for the portfolio."
          ],
          images: [
            { src: "assets/projects/revolver-rift/compound-01.jpg", alt: "Industrial compound greybox with a tall chimney landmark above an open yard", caption: "Industrial compound. The chimney anchors the silhouette from long range; the open yard separates the exterior approach from the interior mass, so committing to the building is a visible decision." },
            { src: "assets/projects/revolver-rift/compound-02.jpg", alt: "Church compound greybox with a central spire and walled grounds", caption: "Church compound. A single tall landmark plus a walled perimeter gives the space one unmistakable long-range read and a small number of legible ways in." },
            { src: "assets/projects/revolver-rift/compound-03.jpg", alt: "Village compound greybox with several small structures spread across terrain", caption: "Village compound. Several small structures distribute movement across the terrain rather than concentrating it in one dominant building, so contact happens over a wider area." },
            { src: "assets/projects/revolver-rift/compound-04.jpg", alt: "Farm compound greybox with open approaches leading into a dense interior cluster", caption: "Farm compound. Open approaches read as exposed, and the density inside rewards players who choose their entry rather than crossing the open ground directly." },
            { src: "assets/projects/revolver-rift/compound-05.jpg", alt: "Waterside compound greybox with buildings arranged across uneven terrain", caption: "Waterside compound. Terrain and water define the approach before the buildings do, which limits the number of routes and makes the remaining ones easier to read." },
            { src: "assets/projects/revolver-rift/compound-06.jpg", alt: "Fort compound greybox with a perimeter wall and a main gate", caption: "Fort compound. The perimeter wall makes the main gate immediately legible while keeping vertical routes available for players who do not want the obvious entry." }
          ]
        },
        {
          heading: "Production context",
          body: [
            "This was studio work under NDA, so the briefs, map context, review notes and performance targets are not public.",
            "The work was remote, which meant most decisions were read rather than explained in person. Layouts were named and structured to the studio's conventions so another designer could open a compound and follow the intent without me in the room."
          ]
        }
      ],
      credits: {
        "My work": "2D compound layouts, UE5 blockouts, approach routes, cover spacing, sightlines, contact points, and the navigation and pacing passes described above.",
        "Team work": "Revolver Rift, its systems, final art and wider world are Kahr Works team work.",
        "Cover image": "The Revolver Rift title card is official Kahr Works project artwork, used here as project branding. It is not my work.",
        "Context": "Commercial employment at Kahr Works GmbH, December 2024 to June 2025. The title is announced and still in development."
      }
    },
    {
      slug: "to-pierce-eternity",
      tier: "selected",
      badge: "Hyper Luminal Games client brief · Abertay MProf",
      title: "To Pierce Eternity",
      subtitle: "Research to iteration on a horror level where the interface cannot be trusted",
      description: "Level Design for To Pierce Eternity, a Hyper Luminal Games client brief: research, paper planning, 2D layout, blockout, chase implementation, QA and iteration in Unreal Engine 5.",
      hero: "assets/projects/to-pierce-eternity/cover.jpg",
      heroAlt: "Entity Experimentation Room in the To Pierce Eternity team build",
      video: "cHCa_0P5elA",
      summary: {
        Role: "Level Designer",
        Project: "To Pierce Eternity",
        Brief: "Hyper Luminal Games client brief",
        Course: "Abertay MProf",
        Team: "12 people",
        Duration: "May – Aug 2026",
        Engine: "Unreal Engine 5"
      },
      skills: ["Reference research", "Bubble diagrams", "2D layouts", "Blockout", "Level Blueprint", "Chase pacing", "QA-led iteration"],
      links: [
        { label: "Play the team build on itch.io", url: "https://snakelock.itch.io/to-pierce-eternity" },
        { label: "Level design sample (PDF)", url: "assets/downloads/To-Pierce-Eternity-Level-Design-Sample.pdf" }
      ],
      sections: [
        {
          heading: "The project",
          body: [
            "To Pierce Eternity is a first-person horror game built by a twelve-person Abertay MProf team for a Hyper Luminal Games client brief. A companion AI guides the player through a helmet HUD, and that HUD lies.",
            "That premise puts the load on the level. If a player cannot separate deliberate deception from a broken game the idea collapses, so the environment had to stay the one source of navigation the player could trust."
          ]
        },
        {
          heading: "What I owned",
          variant: "contribution",
          bullets: [
            "Planned the player space from bubble diagram to 2D layout.",
            "Blocked out every playable area in Unreal Engine 5.",
            "Redesigned the spatial plan after a mid-project scope cut, and preserved route structure and player flow through the reduced footprint.",
            "Owned chase flow and trap placement in the Underbelly.",
            "Implemented chase flow using Level Blueprint, splines and trigger volumes.",
            "Resolved ambiguous safe-room doors after QA feedback using contrast, framing and approach angle instead of additional UI."
          ]
        },
        {
          heading: "01 · Research and visual gathering",
          steps: ["Research", "Paper plan", "2D layout", "Blockout", "Implementation", "QA", "Iteration"],
          body: [
            "Before planning the playable space, I gathered visual references for the major room types and spatial language I needed for the blockout: hibernation chamber, generator room, laboratory, entity experimentation room and the Underbelly.",
            "The goal was to establish a consistent visual vocabulary for scale, function, composition and environmental identity rather than reproduce individual references."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/research-board.jpg", alt: "Reference board grouping visual research by room type: hibernation chamber, generator room, laboratory, entity experimentation room and Underbelly", caption: "Visual references gathered during early blockout research." }
          ]
        },
        {
          heading: "02 · Paper planning",
          body: [
            "The sequence began on paper: room order, safe zones, storytelling rooms and the loop back to the starting chamber. Working by hand kept the whole route in view while it was still cheap to change.",
            "Scope reduced twice: from five planned puzzle rooms to three at the client pitch, then to two later in production. I redrew the bubble diagram rather than patching an obsolete plan, so the critical path and ending loop stayed legible to the rest of the team."
          ],
          grid: [
            { src: "assets/projects/to-pierce-eternity/layout-paper.jpg", alt: "Hand-drawn room sequence and route plan for To Pierce Eternity", caption: "Paper pass: room order, safe zones, storytelling rooms and the loop back to the start." },
            { src: "assets/projects/to-pierce-eternity/bubble-diagram.jpg", alt: "Colour-coded bubble diagram separating safe, puzzle, chase, hallway and storytelling beats", caption: "Bubble diagram redrawn after the scope cut: safe, puzzle, chase, hallway and storytelling beats separated by function." }
          ]
        },
        {
          heading: "03 · 2D spatial layout",
          body: [
            "The digital plan fixed the critical path, room types and the no-backtracking thresholds marked in red. Crossing one seals the route behind the player, which protects forward momentum and makes the final choice binding.",
            "Room-level plans carried the detail the overview could not: where an interaction sits, what blocks a sightline, and which detours are optional."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/layout-2d-plan.jpg", alt: "Digital top-down layout showing critical path, room types and no-backtracking thresholds", caption: "Critical path, room types and no-backtracking thresholds, fixed before blockout." }
          ],
          grid: [
            { src: "assets/projects/to-pierce-eternity/layout-generator-room.jpg", alt: "Annotated generator room plan marking interaction positions and sightline blockers", caption: "Generator room: interaction positions and sightline blockers." },
            { src: "assets/projects/to-pierce-eternity/layout-lab.jpg", alt: "Annotated laboratory and entity room plan showing circulation and narrative placement", caption: "Laboratory and Entity Experimentation Room: circulation and narrative placement." },
            { src: "assets/projects/to-pierce-eternity/layout-maintenance.jpg", alt: "Annotated maintenance route plan with an optional detour", caption: "Maintenance path: optional detour and guidance route." },
            { src: "assets/projects/to-pierce-eternity/layout-underbelly.jpg", alt: "Annotated Underbelly chase plan showing traps, chase trigger and the final route choice", caption: "Underbelly: traps, chase trigger and the final route choice." }
          ]
        },
        {
          heading: "04 · Blockout",
          body: [
            "The blockout grew from one hibernation chamber into the full playable route. By Week 8 every playable space was blocked out; from Week 9 I held the spatial intent while team-owned art, props and lighting replaced the greybox.",
            "The sightline study below was made before geometry existed. Pods frame a central object from the entrance, and the finished room keeps that hierarchy, so curiosity rather than an objective marker pulls the player forward.",
            "Revelation beats were one of the project's core design pillars, and the blockout is where they were staged. I sequenced the route so that what the player interacts with and what changes as a result are not in the same place. In the pair below, the cable on the floor leads the eye to the power terminal and the interaction prompt sits there, but the hatch it opens is off to the side, so the player has to re-read the room rather than watch a panel change."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/sightline-plan.jpg", alt: "Sightline plan beside the completed Entity Experimentation Room showing matching framing", caption: "Plan against execution: pod placement frames the centre object, and one readable light source carries the entrance sightline." }
          ],
          grid: [
            { src: "assets/projects/to-pierce-eternity/top-01.jpg", alt: "Top-down greybox of the first hibernation chamber", caption: "Hibernation chamber: the first playable room." },
            { src: "assets/projects/to-pierce-eternity/top-02.jpg", alt: "Top-down greybox extending from the hibernation chamber into a corridor", caption: "The first corridor extends the route toward the generator area." },
            { src: "assets/projects/to-pierce-eternity/top-04.jpg", alt: "Top-down greybox of the puzzle wing, safe room and storytelling rooms", caption: "Puzzle wing, safe room and storytelling rooms establish the station structure." },
            { src: "assets/projects/to-pierce-eternity/blockout-both-wings.jpg", alt: "Top-down blockout showing the station's two wings connected after the plan revision", caption: "Both wings connected after the plan revision." },
            { src: "assets/projects/to-pierce-eternity/blockout-full-station.jpg", alt: "Top-down blockout of the complete station with every playable room in place, including the Entity Experimentation Room", caption: "Every playable room blocked out, including the Entity Experimentation Room." },
            { src: "assets/projects/to-pierce-eternity/blockout-underbelly.jpg", alt: "Underbelly blockout: modular corridors with a spline path traced through the chase route", caption: "Full Underbelly playable area blocked out using the modular kit, testing the spline and entity movement through the chase sequence." }
          ],
          tailImages: [
            { src: "assets/projects/to-pierce-eternity/revelation-beat-hud.jpg", alt: "Side-by-side view of a station room: the power terminal highlighted with a cable leading toward it, then the same view after interaction with a hexagonal hatch open beside it", caption: "Revelation beat: the cable leads the eye to the terminal, and interacting with it opens the hatch to the side of where the player is looking." }
          ]
        },
        {
          heading: "05 · Implementation",
          body: [
            "I planned the Underbelly chase on paper, built its spatial flow, placed the traps, and positioned the spline and trigger beats that drive it. Chase flow was implemented with Level Blueprint, splines and trigger volumes.",
            "For early elevator-to-Underbelly timing I built a small Level Blueprint prototype using paired trigger volumes, player checks and Set Actor Location, so pacing could be tested before the final elevator existed. Entity behaviour and HUD systems were programming-owned."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/basic-elevator-teleport-blueprint.png", alt: "Level Blueprint graph with paired trigger-volume teleport flows used for elevator timing tests", caption: "Level Blueprint flow test: paired trigger overlaps move the player between two temporary elevator endpoints so pacing could be evaluated early." }
          ],
          grid: [
            { src: "assets/projects/to-pierce-eternity/paper-underbelly.jpg", alt: "Hand-drawn Underbelly chase and trap plan", caption: "Paper chase pass: route, trap positions, recharge point and the intended shape of the run." },
            { src: "assets/projects/to-pierce-eternity/bp-trap-steam.jpg", alt: "Unreal editor viewport with a steam trap actor selected beside the placement plan", caption: "Placing a steam-trap actor in the level against the plan." },
            { src: "assets/projects/to-pierce-eternity/final-underbelly-traps.jpg", alt: "Underbelly trap area in the completed team build", caption: "Traps implemented and placed through the Underbelly to reinforce tension: the green wire aids the player, the red one puts them at a disadvantage." }
          ]
        },
        {
          heading: "06 · QA and playtesting",
          body: [
            "On 7 July a Hyper Luminal Games QA tester found that three identical doors in a symmetrical safe room gave no defensible route choice. An objective marker would have solved it, but the marker would have travelled through the HUD the player is not supposed to trust.",
            "A 24 July external test exposed a second problem: sprinting straight through the Underbelly bypassed the chase read entirely."
          ],
          table: {
            headers: ["Observation", "Decision", "Change"],
            rows: [
              ["Three identical doors made the route a guess", "Keep honest guidance out of the lying HUD", "Door-state lighting plus one distinction object in each safe room"],
              ["A maintenance objective needed a stronger read", "Use line and shape before colour", "Pipes lead to the correct valve; green light reinforces rather than carries it"],
              ["Sprinting beat the chase sequence", "Make the fast line cost something", "Rebalanced trap and slowdown placement along the run"]
            ]
          }
        },
        {
          heading: "07 · Iteration",
          body: [
            "I changed the environment rather than the interface. Placeholder door lighting communicated open and blocked states, one distinction object per safe room broke the symmetry, and the same rule went into the maintenance path using pipes as leading lines with colour only as reinforcement.",
            "I would refuse the objective marker again. When interface reliability is the mechanic, the trustworthy information has to live in the space instead."
          ],
          grid: [
            { src: "assets/projects/to-pierce-eternity/read-leading-lines.jpg", alt: "Maintenance path with pipes leading toward a lit valve", caption: "Pipe direction provides the leading line; green light reinforces rather than carries the route." },
            { src: "assets/projects/to-pierce-eternity/top-11.jpg", alt: "Top-down view of the final team build following the greybox footprint", caption: "Team art integrated over the same spatial footprint." }
          ]
        },
        {
          heading: "How I collaborated",
          body: [
            "I worked to other people's designs as well as my own. Puzzle design had a separate owner, and where a concept came from someone else I blocked it out and integrated it into the playable space rather than redrawing it around my plan.",
            "The scope cut and the QA findings both came from outside my own judgement, and both changed the level. Discussing intent early, about what a room is for and what the player should read first, made those conversations quick enough to act on inside the schedule."
          ]
        }
      ],
      credits: {
        "My work": "Reference research, paper planning, bubble diagram and 2D layouts, every playable-space blockout, spatial integration, chase flow, spline and trigger placement, trap placement, and the guidance changes described above.",
        "Team work": "Puzzle design, level design document co-authorship, Entity and HUD code, lighting execution, modular art, props, UI, decals and audio had separate owners.",
        "Third-party assets": "Final-build captures contain team and project assets. The reference board collects third-party images gathered for research; none of them are my work. My claim is limited to the spatial and implementation work described here.",
        "Context": "Abertay MProf team project responding to a Hyper Luminal Games client brief. This was not employment at Hyper Luminal Games."
      }
    },
    {
      slug: "hull-and-horizon",
      tier: "selected",
      badge: "V&A Dundee client brief · Abertay MProf",
      title: "Hull & Horizon",
      subtitle: "A museum-floor level, tested with visitors and changed from what they did",
      description: "Lead Level Design on Hull & Horizon, a V&A Dundee client brief: deck route, landmark hierarchy, NPC placement, and iteration driven by 10 structured observation sessions.",
      hero: "assets/projects/hull-and-horizon/bow-sunset.jpg",
      heroAlt: "Bow of the RMS Queen Mary at sunset in the Hull and Horizon build",
      video: "2T_Sq1BiX0c",
      summary: {
        Role: "Lead Level Designer",
        Project: "Hull & Horizon",
        Brief: "V&A Dundee client brief",
        Course: "Abertay MProf",
        Team: "5 people",
        Duration: "Feb – May 2026",
        Engine: "Unreal Engine 5"
      },
      skills: ["Deck route design", "Landmark hierarchy", "Spatial pacing", "NPC placement", "Structured observation", "Iteration", "Level design documentation"],
      links: [
        { label: "Play the team build on itch.io", url: "https://leonfnr66.itch.io/hull-horizon" }
      ],
      sections: [
        {
          heading: "The project",
          body: [
            "Hull & Horizon is a first-person experience aboard the RMS Queen Mary, made by a five-person Abertay MProf team for a V&A Dundee client brief.",
            "The audience was museum visitors, including people who had never held a controller. Five to ten minutes, no fail state, and no second chance to explain the controls, so the space had to do the teaching."
          ]
        },
        {
          heading: "What I owned",
          variant: "contribution",
          bullets: [
            "Designed and blocked out the first-person deck route for a five-to-ten minute experience.",
            "Designed the landmark hierarchy, spatial pacing and NPC placement.",
            "Built the deck spine, stair transitions and interior flow in Unreal Engine 5.",
            "Used leading lines and silhouette contrast to support navigation without waypoints or markers.",
            "Authored the level design document and the observation framework used for structured testing."
          ]
        },
        {
          heading: "Spatial planning",
          body: [
            "Before any layout work I planned the route over a reference image of the ship: the player start, the path forward, the stairs, the primary landmark, and the areas to close off.",
            "Three constraints shaped it. The experience had to run at roughly five minutes. A large part of the audience was older visitors who could not walk the whole museum, so the route had to be short, level and undemanding. And it had to arrive at the balcony in a way that felt like a walk along a ship rather than a corridor with a destination at the end.",
            "Marking restricted and negative space this early mattered as much as marking the path. Deciding where the player could not go is what allowed the open deck to stay open."
          ],
          images: [
            { src: "assets/projects/hull-and-horizon/spatial-planning-annotated.jpg", alt: "Hand-annotated reference image of the RMS Queen Mary marking the player path, primary landmark, stairs and restricted space", caption: "Route, landmark, stairs and restricted space marked over a reference image of the ship before layout work began." }
          ]
        },
        {
          heading: "Design",
          steps: ["Design", "Blockout", "Observation", "Findings", "Iteration"],
          body: [
            "The route runs along a clear deck spine, uses stairs as the vertical cue and NPC clusters as soft goals. Interiors were kept to two focused spaces so every transition had a teaching or narrative job.",
            "The plan targeted roughly three to four minutes of walking, stretching toward the client's window when visitors stopped to interact. With no markers available, navigation had to come from silhouette, leading lines and what the next opening reveals."
          ],
          images: [
            { src: "assets/projects/hull-and-horizon/layout-topdeck-plan.jpg", alt: "Annotated 2D top-deck plan marking the main route, points of interest, NPC positions and restricted areas", caption: "Top-deck plan: main route, points of interest, NPC positions and restricted areas, set before blockout." },
            { src: "assets/projects/hull-and-horizon/read-topdeck-goldenpath.jpg", alt: "Annotated top-down view of the top deck marking the golden path, the mast as central anchor, soft boundaries and interactable clusters", caption: "Top deck: the golden path, the mast as central anchor, and soft boundaries that restrict without walls." },
            { src: "assets/projects/hull-and-horizon/read-pov-forward.jpg", alt: "Annotated forward player view marking the mast as primary landmark, silhouette hierarchy, layered elevation and leading lines", caption: "Forward silhouette: mast, funnel and superstructure stack against the sky so the space parses in one look." },
            { src: "assets/projects/hull-and-horizon/read-focal-corridor.jpg", alt: "Annotated interior corridor showing architecture converging on an NPC at the vanishing point, diegetic signage and light used as a lure", caption: "Interior corridor: architecture converges on the NPC at the vanishing point, with light at the far end pulling the player through." }
          ]
        },
        {
          heading: "Level beats",
          body: [
            "With the layout fixed, I mapped the experience as a sequence of nine beats: arrival at the bow, the work area, meeting Sir John Brown, the stairs down, the lower corridor, the builder encounter, the return upstairs, the first-class lounge and the final view.",
            "The beat map is what kept the five-minute target honest. It sets how long the player spends in each space, alternates open deck against enclosed interior, and places every NPC encounter where the route needs a reason to keep going rather than an instruction.",
            "It also fixed the order of discovery. Brown points toward the lower passage, so the stairs read as an invitation rather than a dead end, and the lounge lands last because the experience should end on a view instead of a task."
          ],
          beatMap: {
            src: "assets/projects/hull-and-horizon/level-beat-map.jpg",
            alt: "Hull and Horizon beat flow diagram listing nine numbered beats from deck entry through the work area, inspection, stairs, lower corridor, builder room, stair exit and first-class lounge to the final view",
            label: "See beat map"
          }
        },
        {
          heading: "Playtesting and observation",
          variant: "photos",
          body: [
            "I ran 10 structured observation sessions on the museum floor at V&A Dundee on 12 March 2026, using an observation framework I wrote, and coordinated the day with the team.",
            "Rather than collecting opinions, I watched where attention went, where people hesitated, what they walked past, and what they did when the game stopped telling them anything, then wrote it down against the framework so findings could be compared between sessions.",
            "Raw sheets, participant descriptions, quotes, ages and timings stay private. What follows is the aggregate."
          ],
          steps: ["Observe", "Document", "Identify the problem", "Iterate"],
          grid: [
            { src: "assets/projects/hull-and-horizon/playtest-va-dundee.jpg", alt: "Two visitors playing Hull and Horizon on a large screen during a session at V&A Dundee", caption: "Visitor playtesting at V&A Dundee during structured observation." },
            { src: "assets/projects/hull-and-horizon/observation-notes.jpg", alt: "Advitiya writing observation notes in a notebook during a V&A Dundee playtest session", caption: "Recording observations during a V&A Dundee playtest session." }
          ]
        },
        {
          heading: "What the sessions changed",
          body: [
            "The route held. The cues around it did not. The revision pass kept the spatial spine and changed what was attached to it."
          ],
          table: {
            headers: ["Observation", "Design change", "Reason"],
            rows: [
              ["No backtracking or route breakdown recorded against the framework", "Kept the mast, deck spine and stair hierarchy", "Preserve the part already communicating clearly"],
              ["Beat 2 was repeatedly skipped", "Added a note object before the work area", "Create a pause and an attention cue without rebuilding the route"],
              ["Controls and the persistent prompt caused confusion", "Added a short movement tutorial and made the prompt contextual", "Reduce first-time controller ambiguity"],
              ["NPC moments carried attention most reliably", "Expanded the roster from 3 to 8", "Use characters as spatial and narrative anchors"],
              ["Visitors needed a team member to tell them it had ended", "Added a quiet horizon outro", "Signal closure without breaking the museum tone"]
            ]
          }
        },
        {
          heading: "Iteration and result",
          body: [
            "Earlier in production I had already condensed the beat map from eleven beats to nine to protect the visitor-time target. After the museum test, the note object, contextual prompt, movement tutorial, expanded NPC roster and outro addressed the observed problems without discarding the route that worked.",
            "The project is my clearest evidence of using structured observation to make specific Level Design decisions."
          ],
          images: [
            { src: "assets/projects/hull-and-horizon/progression-week5-week12.jpg", alt: "Side-by-side comparison of the Week 5 blockout and the Week 12 team build of Hull and Horizon", caption: "Week 5 blockout beside the Week 12 team build." }
          ]
        },
        {
          heading: "Additional ownership",
          body: [
            "I also took responsibility for the project's audio scope during production while maintaining the Level Design deliverables."
          ]
        },
        {
          heading: "How I collaborated",
          body: [
            "Another designer shared Level Design coverage and implemented interactables, so route and interaction decisions had to be agreed rather than assumed. Programming, 3D art, core systems and music were owned elsewhere in the team.",
            "The level design document and observation framework existed mainly so other people could work from my intent without me narrating it, and so the playtest findings arrived as something the whole team could act on."
          ]
        }
      ],
      credits: {
        "My work": "Lead Level Design for the deck route, blockout, landmark hierarchy, spatial pacing, NPC placement, level design documentation, observation framework, playtest synthesis, and the audio scope described above.",
        "Team work": "Another designer shared Level Design and interactable coverage; programming, 3D art, core systems and music were team-owned.",
        "Third-party assets": "Final-build captures include team and project assets. I claim only the work described above.",
        "Context": "Abertay MProf team project created to a V&A Dundee client brief. This was not employment at V&A Dundee, and it is not a permanent installation."
      }
    },
    {
      slug: "goodbabies",
      tier: "more",
      badge: "Abertay MProf team prototype",
      title: "GoodBabies",
      subtitle: "One room, a fixed camera, and everything the player needs inside the frame",
      description: "A 10-week Unreal Engine 5.6 team prototype: single-room layout for a fixed camera, threat staging and beat-mapped pacing.",
      hero: "assets/projects/goodbabies/blockout-day2.jpg",
      heroAlt: "Early GoodBabies room blockout around the card table",
      video: "eWa8z-YIEco",
      summary: {
        Role: "Level Designer",
        Project: "GoodBabies",
        Type: "Abertay MProf team prototype",
        Team: "6 people",
        Duration: "10 weeks",
        Engine: "Unreal Engine 5.6"
      },
      skills: ["Fixed-camera composition", "Rapid blockout", "Threat staging", "Beat mapping"],
      links: [
        { label: "Play the team prototype on itch.io", url: "https://colranestudios.itch.io/goodbabies" }
      ],
      sections: [
        {
          heading: "The problem",
          body: [
            "The player stays seated at a card table while social-deception events unfold around one room. With movement removed, the camera frame becomes the level: the primary interaction has to stay readable while a threat remains present at the edge of attention.",
            "I built a single-room layout for that fixed camera and beat-mapped the pacing so critical gameplay reads stayed inside one framed view."
          ],
          grid: [
            { src: "assets/projects/goodbabies/rough-plan-paper.jpg", alt: "Hand-drawn GoodBabies room plan around a card table", caption: "Paper pass: card-table anchor, surrounding events and the threat route." },
            { src: "assets/projects/goodbabies/layout-2d-plan.jpg", alt: "Annotated 2D GoodBabies room layout marking player anchor, opponents and bouncer route", caption: "2D plan: player anchor, opponents, bouncer route, distractions and storytelling elements." }
          ]
        },
        {
          heading: "Level beats",
          body: [
            "Before building the space I wrote the level out beat by beat: what happens at each point of progression, where the player's focus should sit, and what each beat is there to teach or to pressure.",
            "With the player seated and the camera fixed, pacing had to come from events rather than movement. The map schedules the slap rounds against the baby-management loop, the fly events and the cuckoo clock, keeping demands apart early on and deliberately overlapping them toward the finale.",
            "The blockout was built to serve this structure. Everything in the room had to sit where the beat scheduled for that moment stays readable from the player's seat."
          ],
          beatMap: {
            src: "assets/projects/goodbabies/level-beat-map.jpg",
            alt: "GoodBabies beat-to-beat map listing progression percentage, event, player focus and design intent for every beat of a round",
            label: "See beat map"
          }
        },
        {
          heading: "Blockout",
          body: [
            "The room moved from massing to a dressed team build in a short iteration sequence. The table stayed the visual anchor, furniture broke long sightlines, and the bouncer route was drawn and walked before any character implementation existed.",
            "The progression below puts each blocked-out space beside the dressed build that replaced it. The framed composition is what had to survive that handover."
          ],
          grid: [
            { src: "assets/projects/goodbabies/blockout-day2.jpg", alt: "Day 2 GoodBabies room blockout showing table anchor and furniture massing", caption: "Day 2: table anchor and furniture massing." },
            { src: "assets/projects/goodbabies/blockout-day3-patrol.jpg", alt: "Bouncer patrol route drawn on the GoodBabies blockout floor", caption: "Day 3: patrol route tested as spatial pressure before character implementation." }
          ],
          tailImages: [
            { src: "assets/projects/goodbabies/blockout-progression.jpg", alt: "Three GoodBabies blockout views above the dressed team build of each corresponding space", caption: "Blockout to dressed build across the level's spaces." }
          ]
        },
        {
          heading: "Reading the room from the player's seat",
          body: [
            "With the camera fixed, the frame is the level. I annotated the player's view to check that the primary interaction, the narrative anchor and the threat all resolve in a single read.",
            "The table holds the centre of the frame because that is where the gameplay rhythm sits. The Don sits directly ahead as the narrative anchor, with the other opponents flanking him. The left side is kept low in visual noise so nothing pulls the eye off the table, and the background is dimmed to hold contrast on the cards.",
            "The bouncer is the pressure. He is placed deep in the frame rather than near the table, so he registers as a constant threat without competing with the interaction for attention. Red light, a long cast shadow and the pointed bunting above him carry that read at the edge of vision."
          ],
          images: [
            { src: "assets/projects/goodbabies/read-player-pov.jpg", alt: "Annotated player view marking the primary interaction zone at the table, the Don as narrative anchor, secondary focus and threat signalling", caption: "Player POV: primary interaction zone, narrative anchor, secondary focus and threat signalling in one frame." },
            { src: "assets/projects/goodbabies/read-bouncer-placement.jpg", alt: "Annotated view of the bouncer standing deep in the room under red light with a long cast shadow", caption: "Bouncer placement: distance, red light and shadow length build pressure without pulling focus from the table." }
          ]
        },
        {
          heading: "Fly events: implementation and balancing",
          body: [
            "The fly is a spline-driven distraction that the programming team built as a system. My work was the level-design side of it: where each fly enters, the shape of its path across the table, where it lands, and how long the player has before it costs them.",
            "I placed and edited the splines in the level, then balanced the events against the beat map. The first fly is slow and alone; later ones move faster and eventually arrive in pairs, with landing spots varied so the path cannot be memorised.",
            "Balancing meant testing the overlap. A fly during ordinary dialogue is a nuisance. A fly during an incriminating line forces a real choice between swatting and recording, and that is where the beat earns its place."
          ],
          images: [
            { src: "assets/projects/goodbabies/fly-spline-implementation.jpg", alt: "Spline path being edited over the GoodBabies card table beside the resulting fly event during play", caption: "Editing the fly spline in the level, beside the event as it reads in play." }
          ]
        }
      ],
      credits: {
        "My work": "Level beats, room layout, blockout, fixed-view readability, pacing, and the placement and balancing of the fly events.",
        "Team work": "Gameplay systems, characters, final art, UI and audio were team-owned. The spline system driving the flies was built by the programming team; I authored the paths and the event balance inside it.",
        "Context": "Abertay MProf team prototype. No external client or commercial claim."
      }
    },
    {
      slug: "maharajas-palace",
      tier: "more",
      badge: "Personal study",
      title: "Maharaja's Palace",
      subtitle: "Palace architecture as multiplayer structure: routes, landmarks and counterable height",
      description: "A personal Unreal Engine 5 multiplayer spatial study using palace architecture to explore route choice, landmarks and vertical positioning.",
      hero: "assets/projects/maharajas-palace/aerial-full.jpg",
      heroAlt: "Aerial view of the Maharaja's Palace UE5 blockout",
      summary: {
        Role: "Level Designer · solo",
        Project: "Maharaja's Palace",
        Type: "Personal spatial study",
        Engine: "Unreal Engine 5",
        Evidence: "Plan and blockout only; no playtest or balance data"
      },
      skills: ["Route choice", "Landmarks", "Verticality", "Reference-led spatial design"],
      links: [],
      sections: [
        {
          heading: "Intent",
          body: [
            "The study asks whether palace courtyards, colonnades and stepped roofs can produce a readable multiplayer structure rather than act as decoration. The paper plan maps routes, cover intent and contested areas before the blockout."
          ],
          images: [
            { src: "assets/projects/maharajas-palace/layout-2d-plan.jpg", alt: "Hand-drawn Maharaja's Palace route and cover plan", caption: "Intended routes, chokepoints, cover and the central palace objective." }
          ]
        },
        {
          heading: "Blockout",
          body: [
            "The dome acts as the macro landmark. Rooftops and balconies introduce height, while ground routes and connecting paths keep elevated positions from becoming the only way to read the map.",
            "These images show spatial intent and blockout craft. Without player data they do not demonstrate competitive balance."
          ],
          grid: [
            { src: "assets/projects/maharajas-palace/greybox-early.jpg", alt: "Early greybox massing for Maharaja's Palace", caption: "Early massing and proportion pass." },
            { src: "assets/projects/maharajas-palace/aerial-topdown.jpg", alt: "Top-down view of the Maharaja's Palace blockout", caption: "Outer structures feed routes toward the courtyard." },
            { src: "assets/projects/maharajas-palace/blockout-walkway.jpg", alt: "Elevated walkway route in the Maharaja's Palace blockout", caption: "A visible high route, balanced by exposure." },
            { src: "assets/projects/maharajas-palace/blockout-courtyard.jpg", alt: "Central courtyard in the Maharaja's Palace blockout", caption: "The courtyard as contested spatial anchor." }
          ]
        }
      ],
      credits: {
        "My work": "Reference selection, paper plan, route structure and blockout. Every image here is mine.",
        "Context": "Self-directed personal project with no client."
      }
    },
    {
      slug: "promised-night",
      tier: "more",
      badge: "Personal study",
      title: "Promised Night",
      subtitle: "An Indian haveli built around looping routes and light-led guidance",
      description: "A personal Unreal Engine 5 horror spatial study using an Indian haveli, looping routes and light-led composition.",
      hero: "assets/projects/promised-night/blockout-floorplan.jpg",
      heroAlt: "Top-down UE5 blockout of the Promised Night haveli",
      video: "mmU2tAEojBs",
      summary: {
        Role: "Level Designer · solo",
        Project: "Promised Night",
        Type: "Personal horror study",
        Engine: "Unreal Engine 5",
        Evidence: "Plan and blockout only; no external playtest data"
      },
      skills: ["Route loops", "Environmental guidance", "Tension pacing", "Light-led composition"],
      links: [],
      sections: [
        {
          heading: "Planning the haveli",
          body: [
            "The paper plan maps rooms, locked doors, stairs, keys and return paths before the engine pass. A hybrid flow map then layers objectives, blocked routes, storytelling beats and scare intent over the same structure."
          ],
          grid: [
            { src: "assets/projects/promised-night/layout-pencil-plan.jpg", alt: "Hand-drawn floor plan for the Promised Night haveli", caption: "Rooms, doors, stairs and key placements." },
            { src: "assets/projects/promised-night/layout-hybrid-map.jpg", alt: "Promised Night objective and route-flow map", caption: "Objectives, blocked paths, storytelling beats and return routes." }
          ]
        },
        {
          heading: "Light-led composition",
          body: [
            "Moonlight, warm focal points and hard shadow create the intended reads inside a looping haveli. The images show composition intent, not validated wayfinding outcomes."
          ],
          images: [
            { src: "assets/projects/promised-night/blockout-floorplan.jpg", alt: "Top-down UE5 blockout of the Promised Night haveli", caption: "The blockout translated from the paper layout." }
          ]
        }
      ],
      credits: {
        "My work": "Paper plan, objective flow, blockout and lighting intent.",
        "Context": "Self-directed personal project with no client."
      }
    },
    {
      slug: "babys-first-tower-defence",
      tier: "more",
      badge: "Two-week team jam",
      title: "Baby's First Tower Defence",
      subtitle: "A short arena study, kept as early rapid-layout evidence",
      description: "A two-week Unreal Engine 5 team jam project showing a 2D arena plan, terrain funnel intent and landmark-based readability.",
      hero: "assets/projects/babys-first-tower-defence/cover.jpg",
      heroAlt: "Player defending the snow arena with the tower health bars and enemy counter on screen",
      video: "-KdVIYtmypk",
      summary: {
        Role: "Level Designer",
        Project: "Baby's First Tower Defence",
        Type: "Abertay two-week team jam",
        Team: "6 people",
        Engine: "Unreal Engine 5",
        Evidence: "Layout and blockout intent; no balance or encounter data"
      },
      skills: ["Rapid layout", "Terrain funnel intent", "Landmarks"],
      links: [
        { label: "Play the team prototype on itch.io", url: "https://colranestudios.itch.io/babys-first-tower-defense" }
      ],
      sections: [
        {
          heading: "Arena layout",
          body: [
            "The top-down plan uses terrain elevation, an outer tree and mountain ring and a central structure to organise an open arena. It is kept here as early rapid-layout evidence rather than a lead case study.",
            "The images support 2D-to-3D prototyping and landmark intent. They do not demonstrate encounter balance or tested lane coverage."
          ],
          grid: [
            { src: "assets/projects/babys-first-tower-defence/layout-2d-plan.jpg", alt: "Annotated 2D plan for the snow arena showing boundary, enemy paths and elevation", caption: "Arena boundary, enemy paths, landmarks and elevation." },
            { src: "assets/projects/babys-first-tower-defence/v2-blockout-ground.jpg", alt: "Ground-level snow arena blockout", caption: "Terrain and props break the open field into approaches." },
            { src: "assets/projects/babys-first-tower-defence/v2-arena-overview.jpg", alt: "Aerial overview of the snow arena blockout", caption: "Central landmark and contained terrain bowl." }
          ]
        }
      ],
      credits: {
        "My work": "2D arena layout and blockout intent.",
        "Team work": "Gameplay, art, systems and audio were shared team work.",
        "Context": "Two-week Abertay game jam. No client or commercial claim."
      }
    },
    {
      slug: "tlou-dam-level",
      tier: "more",
      badge: "Personal study",
      title: "The Dam",
      subtitle: "A two-week greybox exercise in beat order and environmental framing",
      description: "A solo Unreal Engine 5 blockout study: bubble diagram, fast greybox production and environmental framing.",
      hero: "assets/projects/tlou-dam-level/bubble-diagram.jpg",
      heroAlt: "Bubble diagram for The Dam route and beats",
      video: "b7awn57DIU8",
      summary: {
        Role: "Level Designer · solo",
        Project: "The Dam",
        Type: "Personal study",
        Duration: "2 weeks; first greybox pass in 7 days",
        Engine: "Unreal Engine 5",
        Evidence: "Beat diagram and blockout; no encounter or playtest data"
      },
      skills: ["Beat mapping", "Rapid greybox", "Environmental framing"],
      links: [],
      sections: [
        {
          heading: "Constraint and plan",
          body: [
            "A two-week limit, with the main greybox scale established in seven days. The bubble diagram sequences introduction, traversal, detour and escalation before any geometry."
          ],
          images: [
            { src: "assets/projects/tlou-dam-level/bubble-diagram.jpg", alt: "Bubble diagram for The Dam sequencing introduction, traversal, detour and escalation", caption: "Beat diagram, made before the blockout." }
          ]
        },
        {
          heading: "Framing the route",
          body: [
            "Fence openings, contrast and street geometry frame the intended route. With no external test or implemented encounters, the study does not claim proven stealth or combat design."
          ],
          grid: [
            { src: "assets/projects/tlou-dam-level/street-canyon.jpg", alt: "Greybox street forming a visual channel toward the next area", caption: "Street geometry narrows the view and frames the next destination before the turn." },
            { src: "assets/projects/tlou-dam-level/fence-framing.jpg", alt: "Greybox fence opening framing the route beyond", caption: "The fence opening creates a controlled view of the route beyond." },
            { src: "assets/projects/tlou-dam-level/sunset-approach.jpg", alt: "Greybox approach using warm sky contrast to frame the destination", caption: "Skyline and warm background contrast make the destination easier to pick out." }
          ]
        }
      ],
      credits: {
        "My work": "Beat diagram, route, blockout and environmental framing.",
        "Context": "Self-directed personal project. The Last of Us is referenced as genre inspiration only; no affiliation is claimed."
      }
    }
  ],
  testimonials: [
    {
      name: "Aidan",
      role: "Technical Designer",
      linkedin: "https://www.linkedin.com/in/aidanhwhit/",
      photo: "assets/people/aidan.jpg",
      quote: "Advitiya's level design work was integral to delivering our game's intended player experience. He did a fantastic job of planning gameplay sequences, providing clear rationale and iterating whenever necessary."
    },
    {
      name: "Leon",
      role: "Gameplay & Systems Designer",
      linkedin: "https://www.linkedin.com/in/leon-misoulis/",
      photo: "assets/people/leon.jpg",
      quote: "Adi has been an incredible collaborator, always willing to discuss topics, seek feedback and find the best possible solutions. He always considers the player's point of view when designing, which is a very strong quality in a level designer."
    },
    {
      name: "Jon",
      role: "Level Designer",
      linkedin: "https://www.linkedin.com/in/jon-hans-schaub/",
      photo: "assets/people/jon.jpg",
      quote: "Adi has been a consistent help towards the finishing of To Pierce Eternity. Our discussions on layout, intent and player flow were always extremely helpful, and he is able to adapt to other people's designs and block them out effectively. I highly recommend Adi."
    }
  ]
};
