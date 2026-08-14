/* Evidence-reviewed portfolio content. Keep public claims within the boundaries
   recorded in EVIDENCE_AND_CLAIMS_AUDIT.md in the delivery package. */
const SITE = {
  name: "Advitiya Singh Kanta",
  role: "Level Designer",
  location: "Dundee, United Kingdom",
  email: "advitiyakanta@gmail.com",
  cv: "assets/downloads/Advitiya-Singh-Kanta-CV.pdf",
  projects: [
    {
      slug: "revolver-rift",
      tier: "professional",
      badge: "Professional work · Kahr Works GmbH",
      title: "Revolver Rift",
      subtitle: "Seven months of commercial Level Design on a UE5 extraction shooter in development",
      description: "Public-evidence Level Design case study: seven months at Kahr Works on Revolver Rift, using only six UE5 compound blockouts already on the canonical site.",
      hero: "assets/projects/revolver-rift/compound-02.jpg",
      heroAlt: "Greybox of a church compound for Revolver Rift",
      summary: {
        Context: "Professional studio work on an AA PvPvE extraction shooter in development",
        Role: "Level Designer",
        Studio: "Kahr Works GmbH",
        Engine: "Unreal Engine 5",
        Duration: "7 months · December 2024 to June 2025",
        Ownership: "2D layouts, compound blockouts, navigation and pacing passes",
        Constraint: "NDA-limited; only six images already public before this update are shown",
        Status: "Announced and in development; not presented as a shipped title"
      },
      skills: ["UE5 blockout", "2D-to-3D spatial design", "Navigation", "Pacing", "Team review"],
      links: [
        { label: "Official game site", url: "https://www.revolver-rift.com/" }
      ],
      sections: [
        {
          heading: "Brief and professional context",
          body: [
            "Revolver Rift is a PvPvE extraction shooter in development at Kahr Works. I worked there for seven months as a Level Designer, contributing compound layouts and playable UE5 blockouts.",
            "Compound spaces concentrate navigation, risk and player contact. I focus here on readable approaches, landmark silhouettes and route structure. Confidential metrics, maps and unapproved process material are not included."
          ]
        },
        {
          heading: "What I owned",
          body: [
            "I took compound ideas from 2D layout into playable blockout, then revised navigation and pacing through team review. I created more than five compound blockouts across the seven-month placement.",
            "The detailed briefs, map context, review notes, performance targets and player-eye captures remain under NDA. No new Kahr archive material has been added in this update."
          ]
        },
        {
          heading: "Already-public blockouts",
          body: [
            "These six views were already public in the canonical portfolio. Captions describe visible spatial intent only; they do not invent a feedback history or performance result."
          ],
          images: [
            { src: "assets/projects/revolver-rift/compound-01.jpg", alt: "Industrial compound greybox with chimney landmark and open yard", caption: "Industrial compound: a tall chimney anchors the silhouette while the open yard separates exterior approach from the interior mass." },
            { src: "assets/projects/revolver-rift/compound-02.jpg", alt: "Church compound greybox with walled grounds", caption: "Church compound: a central landmark and walled grounds give the space a clear long-range read." },
            { src: "assets/projects/revolver-rift/compound-03.jpg", alt: "Village compound greybox distributed across terrain", caption: "Village compound: several small structures distribute movement across the terrain instead of one dominant building." },
            { src: "assets/projects/revolver-rift/compound-04.jpg", alt: "Farm compound greybox with open approach and dense core", caption: "Farm compound: open approaches lead into a denser interior cluster." },
            { src: "assets/projects/revolver-rift/compound-05.jpg", alt: "Waterside compound greybox with buildings across uneven terrain", caption: "Waterside compound: terrain and water define the approach before the building mass takes over." },
            { src: "assets/projects/revolver-rift/compound-06.jpg", alt: "Fort compound greybox with wall and gate", caption: "Fort compound: the perimeter wall makes the main gate immediately legible while preserving vertical route options." }
          ]
        },
        {
          heading: "Result and next proof",
          body: [
            "The placement is Advitiya's strongest professional credential: sustained Level Design work in a studio pipeline on an in-development commercial title. Because process proof is NDA-limited, the most valuable future addition is one explicitly approved brief-to-revision strip and a short player-eye run."
          ]
        }
      ],
      credits: {
        "My work": "2D compound layouts, UE5 blockouts, navigation and pacing passes described above.",
        "Team work": "Revolver Rift, its systems, final assets and wider world are Kahr Works team work.",
        "Third-party / marketplace assets": "No new asset-ownership claim is made; only the six blockout views already public are reproduced.",
        "Client or brief context": "Commercial employment at Kahr Works GmbH for seven months; the title is still in development."
      }
    },
    {
      slug: "to-pierce-eternity",
      tier: "studio",
      badge: "Abertay MProf · Hyper Luminal Games client brief",
      title: "To Pierce Eternity",
      subtitle: "The complete case study: paper plan to UE5 blockout, QA observation and revision",
      description: "Abertay MProf Level Design case study for a Hyper Luminal Games client brief: spatial planning, UE5 blockout, environmental guidance and evidence-led iteration.",
      hero: "assets/projects/to-pierce-eternity/cover.jpg",
      heroAlt: "Entity Experimentation Room in the To Pierce Eternity team build",
      video: "cHCa_0P5elA",
      summary: {
        Context: "Abertay MProf client-brief team project for Hyper Luminal Games",
        Role: "Level Designer",
        Team: "12-person multidisciplinary student team",
        Engine: "Unreal Engine 5",
        Duration: "12 weeks · May to August 2026",
        Ownership: "Player-space planning, every playable-space blockout, spatial integration, chase flow and trap placement",
        Constraint: "The HUD lies; the environment must remain the player's trustworthy guide",
        Result: "Completed academic team build; public team build linked below"
      },
      skills: ["Bubble diagrams", "2D layouts", "UE5 blockout", "Sightlines", "Environmental guidance", "Playtest-led iteration"],
      links: [
        { label: "Play the team build on itch.io", url: "https://snakelock.itch.io/to-pierce-eternity" },
        { label: "Download the one-page Level Design sample", url: "assets/downloads/To-Pierce-Eternity-Level-Design-Sample.pdf" }
      ],
      sections: [
        {
          heading: "The design problem: the level is the honest system",
          body: [
            "The companion AI communicates through a helmet HUD, and that HUD lies. If a player cannot separate deliberate deception from a broken game, the premise collapses. The environment therefore had to remain the only trustworthy source of navigation.",
            "The sightline study below was made before geometry. Pods frame a central object from the entrance; the completed room preserves that visual hierarchy so curiosity, not an objective marker, pulls the player forward."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/sightline-plan.jpg", alt: "Side-by-side sightline plan and completed Entity Experimentation Room", caption: "Plan against execution: pod placement frames the centre object and one readable light source carries the entrance sightline." }
          ]
        },
        {
          heading: "My ownership and the team boundary",
          body: [
            "I designed the player space: paper sketch, bubble diagram, digital 2D layout, beats, blockout and the placement of guidance, interactions and chase beats. By Week 8 every playable space was blocked out; from Week 9 I held spatial intent while team-owned art, props and lighting replaced the greybox.",
            "Puzzle Design and LDD co-authorship had a separate owner. Entity behaviour and HUD systems were programming-owned. Lighting execution, the modular kit, props, UI, decals, audio and other disciplines also had separate owners. Final-build screenshots show the team result, not sole authorship."
          ]
        },
        {
          heading: "Plan, scope cut and spatial structure",
          body: [
            "The sequence began on paper, moved into a bubble diagram and then a digital 2D plan before blockout. The scope reduced twice: from five planned puzzle rooms to three at the client pitch, then to two implemented puzzle rooms later in production. I redrew the bubble diagram and layout rather than patching an obsolete plan, keeping the critical path and ending loop legible to the team.",
            "Red bars on the plan mark no-backtracking thresholds. Crossing one seals the route behind the player, preserving forward momentum and making the final trust choice binding."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/layout-paper.jpg", alt: "Hand-drawn To Pierce Eternity room sequence and route plan", caption: "Paper pass: room order, safe zones, storytelling rooms and the loop back to the starting chamber." },
            { src: "assets/projects/to-pierce-eternity/bubble-diagram.jpg", alt: "Colour-coded bubble diagram for To Pierce Eternity", caption: "Revised bubble diagram after the scope cut: safe, puzzle, chase, hallway and storytelling beats separated by function." },
            { src: "assets/projects/to-pierce-eternity/layout-2d-plan.jpg", alt: "Digital top-down layout for To Pierce Eternity", caption: "Digital 2D plan: critical path, room types and no-backtracking thresholds before blockout." }
          ]
        },
        {
          heading: "QA observation to design change",
          body: [
            "On 7 July, a Hyper Luminal Games QA tester found that three identical doors in a symmetrical safe room gave no defensible route choice. An objective marker would have passed through the untrustworthy HUD and weakened the premise.",
            "On 8 July I changed the environment instead: placeholder door lighting communicated open and blocked reads, while one distinction object in each safe room broke the symmetry. I then applied the same rule to the maintenance path, using pipes as leading lines and colour only as reinforcement."
          ],
          table: {
            headers: ["Observation", "Design decision", "Change", "Why it fits the brief"],
            rows: [
              ["Three identical doors made the route a guess", "Keep honest guidance out of the lying HUD", "Door-state lighting plus one distinction object per safe room", "The space supplies the answer without an objective marker"],
              ["A maintenance objective needed a stronger read", "Use line and shape before colour", "Pipes lead to the correct valve; green light reinforces", "The cue remains readable when colour alone is not"]
            ]
          },
          images: [
            { src: "assets/projects/to-pierce-eternity/read-leading-lines.jpg", alt: "Maintenance path with pipes leading toward a lit valve", caption: "Maintenance path: pipe direction provides the leading line; green light reinforces rather than carries the route." }
          ]
        },
        {
          heading: "From 2D layout to playable blockout",
          body: [
            "The comparison keeps planning and implementation side by side. The blockout grew from one hibernation chamber into the full playable route; the 2D plans record the room-level intent that the geometry had to preserve."
          ],
          toggle: {
            blockout: {
              name: "Blockout progression",
              items: [
                { src: "assets/projects/to-pierce-eternity/top-01.jpg", alt: "Top-down greybox of the first hibernation chamber", caption: "Hibernation chamber: the first playable room." },
                { src: "assets/projects/to-pierce-eternity/top-02.jpg", alt: "Top-down greybox extending from the hibernation chamber into a corridor", caption: "The first corridor extends the route toward the generator area." },
                { src: "assets/projects/to-pierce-eternity/top-04.jpg", alt: "Top-down greybox of the puzzle wing, safe room and storytelling rooms", caption: "Puzzle wing, safe room and storytelling rooms establish the station structure." },
                { src: "assets/projects/to-pierce-eternity/top-06.jpg", alt: "Top-down greybox showing the two connected station wings", caption: "Both wings connected after the plan revision." },
                { src: "assets/projects/to-pierce-eternity/top-08.jpg", alt: "Top-down view of the complete playable-space greybox", caption: "Every playable room blocked out, including the Entity Experimentation Room." },
                { src: "assets/projects/to-pierce-eternity/top-11.jpg", alt: "Top-down final team build following the greybox footprint", caption: "Team art integrated over the same spatial footprint." }
              ]
            },
            layouts: {
              name: "Room layouts",
              items: [
                { src: "assets/projects/to-pierce-eternity/layout-generator-room.jpg", alt: "Annotated generator-room plan with interaction positions and blockers", caption: "Generator room: interaction positions and sightline blockers." },
                { src: "assets/projects/to-pierce-eternity/layout-lab.jpg", alt: "Annotated laboratory and Entity-room circulation plan", caption: "Laboratory and Entity Experimentation Room: circulation and narrative placement." },
                { src: "assets/projects/to-pierce-eternity/layout-maintenance.jpg", alt: "Annotated maintenance-route plan with an optional detour", caption: "Maintenance path: optional detour and guidance route." },
                { src: "assets/projects/to-pierce-eternity/layout-underbelly.jpg", alt: "Annotated Underbelly chase plan with traps and a final route choice", caption: "Underbelly: traps, chase trigger and final route choice." }
              ]
            }
          }
        },
        {
          heading: "Chase flow, testing and implementation boundary",
          body: [
            "I planned the Underbelly chase on paper, built its spatial flow, placed traps, and positioned spline and trigger beats. A 24 July external test exposed that sprinting could bypass the intended reading. The final pass refined trap and slowdown balance so running straight through no longer beat the sequence.",
            "Entity functionality remained programming-owned. The final image below is an Unreal editor/actor setup view used to place a steam-trap actor against the plan; it is not a Blueprint node graph and is not presented as proof of advanced scripting."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/paper-underbelly.jpg", alt: "Hand-drawn Underbelly chase and trap plan", caption: "Paper chase pass: route, trap positions, recharge point and intended run shape." },
            { src: "assets/projects/to-pierce-eternity/layout-underbelly.jpg", alt: "Digital Underbelly route and trap layout", caption: "Digital layout: trap types, chase trigger and the final trust choice." },
            { src: "assets/projects/to-pierce-eternity/final-underbelly-traps.jpg", alt: "Underbelly trap area in the completed team build", caption: "Team build: the fastest line is exposed to the trap read designed into the route." },
            { src: "assets/projects/to-pierce-eternity/bp-trap-steam.jpg", alt: "Unreal editor view with a steam trap actor selected beside the placement plan", caption: "Editor setup and plan placement, not a Blueprint graph. The steam-trap actor is selected in the level beside the spatial plan." }
          ]
        },
        {
          heading: "Basic Level Blueprint flow prototype",
          body: [
            "For early elevator-to-Underbelly flow testing, I built a small Level Blueprint prototype using paired trigger volumes, player checks and Set Actor Location nodes. Its purpose was to test pacing and transition timing before the final elevator solution existed.",
            "This is a basic, project-specific flow-test prototype. It is not proof of broader scripting expertise or ownership of the team's gameplay architecture."
          ],
          images: [
            { src: "assets/projects/to-pierce-eternity/basic-elevator-teleport-blueprint.png", alt: "Basic Unreal Level Blueprint with paired trigger-volume teleport flows for elevator testing", caption: "Basic Level Blueprint flow test: paired trigger overlaps move the player between two temporary elevator endpoints for pacing evaluation." }
          ]
        },
        {
          heading: "Result and reflection",
          body: [
            "This is the strongest complete sample in the portfolio because the design chain stays visible: intent, paper plan, 2D structure, blockout, external observation, change and team handoff.",
            "The decision I would repeat is refusing the objective marker. The useful lesson is narrower than 'UI is bad': when interface reliability is the mechanic, trustworthy spatial information has to live somewhere else."
          ]
        }
      ],
      credits: {
        "My work": "Player-space planning, bubble diagram and layouts, every playable-space blockout, spatial integration, chase flow, spline/trigger placement and trap placement.",
        "Team work": "Puzzle Design and LDD co-authorship, Entity/HUD code, lighting execution, modular art, props, UI, decals and audio had separate owners.",
        "Third-party / marketplace assets": "Final-build captures contain team and project assets; Advitiya's claim is limited to the spatial work and implementation boundaries described here.",
        "Client or brief context": "Abertay MProf academic team project responding to a Hyper Luminal Games client brief. This was not employment at Hyper Luminal Games."
      }
    },
    {
      slug: "hull-and-horizon",
      tier: "studio",
      badge: "Abertay MProf · V&A Dundee client brief",
      title: "Hull & Horizon",
      subtitle: "The playtest case study: ten museum-floor sessions translated into concrete revisions",
      description: "Abertay MProf team project to a V&A Dundee brief: UE5 spatial design, museum constraints and anonymised playtest-to-change evidence.",
      hero: "assets/projects/hull-and-horizon/bow-sunset.jpg",
      heroAlt: "Bow of the RMS Queen Mary at sunset in the Hull and Horizon team build",
      video: "2T_Sq1BiX0c",
      summary: {
        Context: "Abertay MProf team project created to a V&A Dundee brief",
        Role: "Lead Level Designer and Audio Lead",
        Team: "Team of 5",
        Engine: "Unreal Engine 5",
        Duration: "February to May 2026",
        Ownership: "Top-deck layout, blockout, pacing, NPC placement, playtest synthesis and audio scope",
        Constraints: "Broad museum audience, first-time controller users, 5–10 minute experience, no fail state",
        Result: "10 museum-floor sessions informed a documented revision pass"
      },
      skills: ["Museum-fit spatial design", "UE5 blockout", "Wayfinding", "Pacing", "Structured observation", "Iteration"],
      links: [
        { label: "Play the team build on itch.io", url: "https://leonfnr66.itch.io/hull-horizon" }
      ],
      sections: [
        {
          heading: "Brief, ownership and constraints",
          body: [
            "The team created a first-person RMS Queen Mary experience for an Abertay client brief from V&A Dundee. It was designed for a broad museum audience, including visitors unfamiliar with controllers, inside a five-to-ten-minute window and without fail states.",
            "As Lead Level Designer I owned the top-deck route, spatial pacing, landmark hierarchy and NPC placement. I also authored the Level Design documentation and observation structure, coordinated the playtest day and took over Audio Lead responsibilities in Week 6. Another designer shared Level Design coverage and interactable implementation; the wider team owned programming, art, core systems and music."
          ]
        },
        {
          heading: "Plan and spatial guidance",
          body: [
            "The route uses a clear deck spine, stairs as a vertical cue and NPC clusters as soft goals. Interiors were kept to two focused spaces so each transition had a teaching or narrative job rather than adding breadth for its own sake.",
            "The plan targeted roughly three to four minutes of walking, extending toward the client window when visitors stopped for interactions. The images below annotate the intended route, hierarchy and focal reads."
          ],
          images: [
            { src: "assets/projects/hull-and-horizon/layout-topdeck-plan.jpg", alt: "Annotated 2D top-deck plan for Hull and Horizon", caption: "The top-deck plan marks the main route, points of interest, NPC positions and restricted areas before blockout." },
            { src: "assets/projects/hull-and-horizon/read-pov-forward.jpg", alt: "Annotated player view showing the forward route and landmark order on the ship deck", caption: "The forward player view checks which landmarks appear first and how the ship silhouette pulls attention along the deck." },
            { src: "assets/projects/hull-and-horizon/read-focal-corridor.jpg", alt: "Annotated greybox corridor showing focal hierarchy and leading lines", caption: "The corridor annotation shows how wall edges, contrast and the opening ahead direct the player's view toward the next space." },
            { src: "assets/projects/hull-and-horizon/read-topdeck-goldenpath.jpg", alt: "Annotated top-deck greybox showing the intended golden path", caption: "The top-deck read traces the intended route and shows how stairs, deck edges and landmark placement keep the path legible." }
          ]
        },
        {
          heading: "Ten sessions: observation to change",
          body: [
            "The team ran ten structured museum-floor sessions at V&A Dundee on 12 March 2026. The public case study reports only aggregate findings; raw sheets, participant descriptions, quotes, ages, timings and photographs remain private.",
            "The useful signal was mixed: the route itself held, but interaction onboarding and closure did not. The revision pass preserved the spatial spine and changed the cues around it."
          ],
          table: {
            headers: ["Observation", "Evidence", "Design change", "Reason"],
            rows: [
              ["Wayfinding held", "No recorded spatial backtracking or route breakdown across 10 sessions", "Kept the mast, deck spine and stair hierarchy", "Preserve the part already communicating clearly"],
              ["Beat 2 was skipped", "Repeated in the structured observation synthesis", "Added a note object before the work area", "Create a pause and attention cue without rebuilding the route"],
              ["Controls and the persistent prompt caused confusion", "Control friction and repeated-button behaviour appeared in some sessions", "Added a 6-second movement tutorial and made the prompt contextual", "Reduce first-time controller ambiguity"],
              ["NPC moments carried attention", "NPC encounters were the strongest repeated engagement points", "Expanded the roster from 3 to 8", "Use characters as spatial and narrative anchors"],
              ["The build had no clear ending", "Sessions required a team member to tell visitors the experience had ended", "Added a quiet horizon outro", "Signal closure without breaking the museum tone"]
            ]
          }
        },
        {
          heading: "Iteration and result",
          body: [
            "Earlier in production I condensed the beat map from eleven beats to nine to protect the visitor-time target. After the museum test, the note, contextual prompt, short movement tutorial, expanded NPC roster and outro addressed observed problems without discarding the route that had worked.",
            "The project shows how I used structured observation to make specific Level Design decisions after a museum-floor test. It does not claim universal accessibility expertise or a permanent V&A installation."
          ],
          images: [
            { src: "assets/projects/hull-and-horizon/progression-week5-week12.jpg", alt: "Side-by-side Hull and Horizon views comparing the Week 5 blockout with the Week 12 team-build state", caption: "Week 5 and Week 12 comparison: the route and major spatial decisions remain visible as the team build develops around the blockout." }
          ]
        }
      ],
      credits: {
        "My work": "Lead Level Design for the top-deck route, blockout, pacing, NPC placement, documentation, playtest synthesis and the Audio Lead scope described above.",
        "Team work": "Another designer shared Level Design/interactable coverage; programming, 3D art, core game systems and music were team-owned.",
        "Third-party / marketplace assets": "Final-build captures include team and project assets; only Advitiya's spatial, documentation, test-synthesis and specified audio work is claimed.",
        "Client or brief context": "Abertay MProf academic team project created to a V&A Dundee brief. This was not employment at V&A Dundee or a permanent installation."
      }
    },
    {
      slug: "goodbabies",
      tier: "abertay",
      badge: "Abertay MProf team prototype",
      title: "GoodBabies",
      subtitle: "Rapid Level Design for a fixed-view social-deception prototype",
      description: "A 10-week Unreal Engine 5.6 team prototype showing rapid layout, fixed-view readability, threat staging and beat-mapped pacing.",
      hero: "assets/projects/goodbabies/blockout-day2.jpg",
      heroAlt: "Early GoodBabies room blockout around the card table",
      video: "eWa8z-YIEco",
      summary: {
        Context: "Abertay MProf team prototype",
        Role: "Level Designer",
        Team: "6 people",
        Engine: "Unreal Engine 5.6",
        Duration: "10 weeks",
        Ownership: "Room layout, blockout progression, fixed-view readability and pacing support",
        Evidence: "Paper plan, 2D layout and staged blockout images",
        Status: "Public prototype on itch.io; shown here as a short team project"
      },
      skills: ["Rapid prototyping", "Fixed-view composition", "Threat staging", "Pacing", "Team collaboration"],
      links: [
        { label: "Play the team prototype on itch.io", url: "https://colranestudios.itch.io/goodbabies" }
      ],
      sections: [
        {
          heading: "Design problem",
          body: [
            "The player remains seated at a card table while social-deception events unfold around one room. With limited movement, the camera frame becomes the level: primary interactions must stay readable while threats remain present at the edge of attention."
          ],
          images: [
            { src: "assets/projects/goodbabies/rough-plan-paper.jpg", alt: "Hand-drawn GoodBabies room plan around a card table", caption: "Paper pass: card-table anchor, surrounding events and threat route." },
            { src: "assets/projects/goodbabies/layout-2d-plan.jpg", alt: "Annotated 2D GoodBabies room layout", caption: "2D plan: player anchor, opponents, bouncer route, distractions and storytelling elements." }
          ]
        },
        {
          heading: "Rapid blockout progression",
          body: [
            "The room moved from massing to a dressed team build across a short iteration sequence. The table remained the visual anchor; furniture broke long sightlines, and the bouncer route was drawn and walked before character implementation."
          ],
          images: [
            { src: "assets/projects/goodbabies/blockout-day2.jpg", alt: "Day 2 GoodBabies room blockout", caption: "Day 2: table anchor and furniture massing." },
            { src: "assets/projects/goodbabies/blockout-day3-patrol.jpg", alt: "Bouncer patrol route drawn on the GoodBabies blockout floor", caption: "Day 3: patrol route tested as spatial pressure before character implementation." }
          ]
        },
        {
          heading: "What this sample demonstrates",
          body: [
            "GoodBabies is supporting evidence for rapid prototyping, fixed-view composition, pacing intent and team work. It is not presented as balance telemetry or commercial work."
          ]
        }
      ],
      credits: {
        "My work": "Room layout, Level Design blockout, fixed-view readability and pacing support described above.",
        "Team work": "Gameplay systems, characters, final art, UI, audio and the wider prototype were team-owned.",
        "Third-party / marketplace assets": "Final-build visuals are not presented as Advitiya's art work; the claim is limited to Level Design.",
        "Client or brief context": "Abertay MProf academic team prototype with no external client employment claim."
      }
    },
    {
      slug: "maharajas-palace",
      tier: "personal",
      badge: "Personal multiplayer spatial study",
      title: "Maharaja's Palace",
      subtitle: "A UE5 blockout study in route choice, landmarks and counterable height",
      description: "A personal UE5 multiplayer spatial study using palace architecture to explore routes, landmarks and vertical positioning.",
      hero: "assets/projects/maharajas-palace/aerial-full.jpg",
      heroAlt: "Aerial view of the Maharaja's Palace UE5 blockout",
      summary: {
        Context: "Personal spatial-design study",
        Role: "Level Designer · solo",
        Engine: "Unreal Engine 5",
        Type: "Tactical-FPS-inspired multiplayer blockout",
        Ownership: "Reference, paper plan, route structure and greybox",
        Focus: "Landmarks, route choice, vertical positions and Indian palace forms",
        "Evidence gap": "No multiplayer telemetry, balance test or playable download is supplied"
      },
      skills: ["Spatial planning", "Landmarks", "Route choice", "Verticality", "Cultural reference"],
      links: [],
      sections: [
        {
          heading: "Design intent",
          body: [
            "The study asks how palace courtyards, colonnades and stepped roofs can produce a readable multiplayer structure rather than act as decoration. The paper plan maps routes, cover intent and contested areas before the blockout."
          ],
          images: [
            { src: "assets/projects/maharajas-palace/layout-2d-plan.jpg", alt: "Hand-drawn Maharaja's Palace route and cover plan", caption: "2D plan: intended routes, chokepoints, cover and the central palace objective." }
          ]
        },
        {
          heading: "From plan to blockout",
          body: [
            "The palace dome acts as the macro landmark. Rooftops and balconies introduce height while ground routes and connecting paths keep elevated positions from becoming the only way to read the map.",
            "These images demonstrate spatial intent and UE5 greybox craft. Without player data, they do not prove competitive balance."
          ],
          images: [
            { src: "assets/projects/maharajas-palace/greybox-early.jpg", alt: "Early greybox massing for Maharaja's Palace", caption: "Early massing and proportion pass." },
            { src: "assets/projects/maharajas-palace/aerial-topdown.jpg", alt: "Top-down view of the Maharaja's Palace blockout", caption: "Top-down blockout: outer structures feed routes toward the courtyard." },
            { src: "assets/projects/maharajas-palace/blockout-walkway.jpg", alt: "Elevated walkway route in Maharaja's Palace", caption: "Elevated walkway: a visible high route balanced by exposure." },
            { src: "assets/projects/maharajas-palace/blockout-courtyard.jpg", alt: "Central courtyard in the Maharaja's Palace blockout", caption: "Central courtyard as contested spatial anchor." }
          ]
        }
      ],
      credits: {
        "My work": "Reference selection, paper plan, route structure and UE5 blockout.",
        "Team work": "Solo Level Design study; no team-production claim.",
        "Third-party / marketplace assets": "Advitiya owns the self-directed study and every image published here; no client or team ownership is implied.",
        "Client or brief context": "Self-directed personal project with no commercial client."
      }
    },
    {
      slug: "promised-night",
      tier: "personal",
      badge: "Personal horror spatial study",
      title: "Promised Night",
      subtitle: "An Indian haveli blockout exploring environmental guidance and tension",
      description: "A personal UE5 horror spatial study using an Indian haveli, looping routes and light-led composition.",
      hero: "assets/projects/promised-night/blockout-floorplan.jpg",
      heroAlt: "Top-down UE5 blockout of the Promised Night haveli",
      video: "mmU2tAEojBs",
      summary: {
        Context: "Personal Level Design study",
        Role: "Level Designer · solo",
        Engine: "Unreal Engine 5",
        Type: "Singleplayer psychological-horror blockout",
        Ownership: "Paper plan, objective flow, blockout and lighting intent",
        Focus: "Exploration, route loops, environmental guidance and tension pacing",
        "Evidence gap": "No external playtest data is supplied"
      },
      skills: ["Paper planning", "Route loops", "Environmental guidance", "Pacing", "Setting-led spatial design"],
      links: [],
      sections: [
        {
          heading: "Planning the haveli",
          body: [
            "The paper plan maps rooms, locked doors, stairs, keys and return paths before the engine pass. A hybrid flow map then layers objectives, blocked routes, storytelling beats and scare intent over the same structure."
          ],
          images: [
            { src: "assets/projects/promised-night/layout-pencil-plan.jpg", alt: "Hand-drawn floor plan for the Promised Night haveli", caption: "Paper plan: rooms, doors, stairs and key placements." },
            { src: "assets/projects/promised-night/layout-hybrid-map.jpg", alt: "Promised Night objective and route-flow map", caption: "Hybrid map: objectives, blocked paths, storytelling beats and return routes." }
          ]
        },
        {
          heading: "Light-led composition",
          body: [
            "The study uses moonlight, warm focal points and hard shadow to create intended reads inside a looping haveli. The images show composition intent, not validated wayfinding outcomes."
          ],
          images: [
            { src: "assets/projects/promised-night/blockout-floorplan.jpg", alt: "Top-down UE5 blockout of the Promised Night haveli", caption: "UE5 floor-plan blockout translated from the paper layout." }
          ]
        }
      ],
      credits: {
        "My work": "Paper plan, objective flow, blockout and lighting/composition intent.",
        "Team work": "Solo Level Design study; no team-production claim.",
        "Third-party / marketplace assets": "Any final visual assets are contextual and not claimed as Advitiya's 3D art work.",
        "Client or brief context": "Self-directed personal project with no commercial client."
      }
    },
    {
      slug: "babys-first-tower-defence",
      tier: "archive",
      badge: "Further work · two-week Abertay game jam",
      title: "Baby's First Tower Defence",
      subtitle: "A short team-jam arena study, retained as early process evidence",
      description: "Earlier two-week UE5 team-jam project showing a 2D arena plan, terrain funnel intent and landmark-based readability.",
      hero: "assets/projects/babys-first-tower-defence/layout-2d-plan.jpg",
      heroAlt: "Annotated 2D snow-arena plan for Baby's First Tower Defence",
      video: "-KdVIYtmypk",
      summary: {
        Context: "Abertay MProf two-week team game jam",
        Role: "Level Designer",
        Team: "6 people",
        Engine: "Unreal Engine 5",
        Ownership: "2D arena layout and blockout intent",
        Focus: "Terrain funnel, elevation and a central landmark",
        "Evidence gap": "No balance telemetry, structured test result or encounter data is supplied"
      },
      skills: ["Rapid layout", "Terrain funnel intent", "Landmarks", "Team jam scope"],
      links: [
        { label: "Play the team prototype on itch.io", url: "https://colranestudios.itch.io/babys-first-tower-defense" }
      ],
      sections: [
        {
          heading: "Design intent",
          body: [
            "The top-down plan uses terrain elevation, an outer tree/mountain ring and a central structure to organise an open arena. This page preserves the project as early rapid-layout evidence rather than presenting it as a lead case study."
          ],
          images: [
            { src: "assets/projects/babys-first-tower-defence/layout-2d-plan.jpg", alt: "Annotated 2D plan for the snow arena", caption: "2D intent: arena boundary, enemy paths, landmarks and elevation." },
            { src: "assets/projects/babys-first-tower-defence/v2-blockout-ground.jpg", alt: "Ground-level snow arena blockout", caption: "Ground-level blockout: terrain and props break the open field into approaches." },
            { src: "assets/projects/babys-first-tower-defence/v2-arena-overview.jpg", alt: "Aerial overview of the snow arena", caption: "Arena overview: central landmark and contained terrain bowl." }
          ]
        },
        {
          heading: "Evidence boundary",
          body: [
            "The images support rapid 2D-to-3D prototyping and landmark intent. They do not demonstrate strong encounter balance, aim-range fairness or tested lane coverage, so those claims are deliberately omitted."
          ]
        }
      ],
      credits: {
        "My work": "2D arena layout and Level Design blockout intent.",
        "Team work": "Gameplay, art, systems, audio and the final team prototype were shared work.",
        "Third-party / marketplace assets": "Final-build art is not claimed as Advitiya's work.",
        "Client or brief context": "Two-week Abertay academic game jam; no external client or commercial-employment claim."
      }
    },
    {
      slug: "tlou-dam-level",
      tier: "archive",
      badge: "Further work · personal blockout study",
      title: "The Dam",
      subtitle: "A two-week singleplayer greybox exercise in beat order and environmental framing",
      description: "Earlier solo UE5 blockout study showing a bubble diagram, fast greybox production and environmental framing without unsupported encounter claims.",
      hero: "assets/projects/tlou-dam-level/bubble-diagram.jpg",
      heroAlt: "Bubble diagram for The Dam route and beats",
      video: "b7awn57DIU8",
      summary: {
        Context: "Personal, TLoU-inspired spatial study",
        Role: "Level Designer · solo",
        Engine: "Unreal Engine 5",
        Duration: "2 weeks; first greybox pass in 7 days",
        Ownership: "Beat diagram, route, blockout and environmental framing",
        Focus: "Fast iteration, traversal rhythm and destination readability",
        "Evidence gap": "No enemy setup, cover map, playable proof or external test evidence is supplied"
      },
      skills: ["Beat mapping", "Rapid greybox", "Environmental framing", "Traversal rhythm"],
      links: [],
      sections: [
        {
          heading: "Constraint and plan",
          body: [
            "The exercise set a two-week limit and aimed to establish the main greybox scale in seven days. The bubble diagram sequences introduction, traversal, detour and escalation before geometry."
          ],
          images: [
            { src: "assets/projects/tlou-dam-level/bubble-diagram.jpg", alt: "Bubble diagram for The Dam route and beats", caption: "Beat diagram made before the UE5 blockout." }
          ]
        },
        {
          heading: "Environmental framing study",
          body: [
            "Fence openings, contrast and street geometry are used as intended route frames. With no external test or implemented encounter evidence, the page does not claim proven stealth, combat or encounter design."
          ],
          images: [
            { src: "assets/projects/tlou-dam-level/street-canyon.jpg", alt: "UE5 greybox street forming a visual channel toward the next area in The Dam", caption: "Street geometry narrows the view and frames the next destination before the player reaches the turn." },
            { src: "assets/projects/tlou-dam-level/fence-framing.jpg", alt: "UE5 greybox fence opening used to frame the route in The Dam", caption: "The fence opening creates a controlled view of the route beyond without claiming a tested encounter outcome." },
            { src: "assets/projects/tlou-dam-level/sunset-approach.jpg", alt: "UE5 greybox approach using warm sky contrast to frame the destination in The Dam", caption: "The approach uses the skyline and warm background contrast to make the destination easier to pick out." }
          ]
        }
      ],
      credits: {
        "My work": "Beat diagram, route, UE5 blockout and environmental framing.",
        "Team work": "Solo Level Design study; no team-production claim.",
        "Third-party / marketplace assets": "The Last of Us is referenced only as genre inspiration; no affiliation is claimed. Contextual visual assets are not claimed as Advitiya's art work.",
        "Client or brief context": "Self-directed personal project with no commercial client."
      }
    }
  ]
};
