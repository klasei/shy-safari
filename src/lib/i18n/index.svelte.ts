/**
 * Every word the teacher or the class reads, in each language on offer.
 *
 * English is the source: its keys are the type every other language must
 * fill, so a missing translation is a type error rather than a blank button.
 * The choice is remembered on this computer, like the rest of the settings.
 */

import { browser } from "$app/environment";
import type { SceneId } from "$lib/scenes/types";

export type LanguageCode = "lt" | "en" | "es" | "fr";

const en = {
  name: "English",
  locale: "en",
  ui: {
    "language.change": "Change language",
    "app.name": "Shy Safari",
    "app.pageTitle": "Shy Safari — free classroom noise level monitor",
    "app.description":
      "A free classroom noise monitor for the projector. Shy savanna and coral reef animals come out the longer the room stays quiet. No sign-up, nothing recorded.",
    "brand.title": "Built by teacher.dev",
    "common.builtBy": "Built by teacher.dev",
    "common.about": "about",
    "common.privacy": "privacy",
    "common.howItWorks": "how it works",
    "preview.alt":
      "A calm savanna with an elephant, zebras, a lion, a giraffe and a meerkat, beside the words Shy Safari, a free classroom noise monitor",
    "common.back": "← Back to Shy Safari",
    "common.close": "Close",
    "common.cancel": "Cancel",
    "common.done": "Done",
    "fullScreen.enter": "Full screen",
    "fullScreen.exit": "Exit full screen",
    "float.open": "Float over other tabs",
    "float.openHint":
      "Float the scene in a small window over your slides or other tabs",
    "float.failed": "The floating window could not be opened.",
    "floating.title": "Shy Safari is floating",
    "floating.instructions":
      "The scene is in its own window over your other tabs, and keeps listening to the room. Keep this tab open: the window's back-to-tab button brings it back here.",
    "floating.return": "Bring Shy Safari back here",
    "start.shy": "Shh… these animals are shy!",
    "start.explain":
      "If it gets too loud, they stay hidden. When the room is calm again, they'll start coming out.",
    "start.button": "Start",
    "start.micNote":
      "Your browser will ask to use the microphone. Audio is measured on this computer and never recorded or sent anywhere.",
    "scene.label": "Scene",
    "scene.change": "Change scene",
    "scene.new": "New",
    "scene.newScenes": "New scenes",
    "scene.savanna.name": "Savanna",
    "scene.savanna.hint": "Zebras, giraffes and lions",
    "scene.reef.name": "Coral reef",
    "scene.reef.hint": "Fish, turtles and sharks",
    "scene.space.name": "Deep space",
    "scene.space.hint": "Satellites, comets and galaxies",
    "scene.prehistoric.name": "Prehistoric",
    "scene.prehistoric.hint": "T. rex, Triceratops and raptors",
    "scene.forest.name": "Forest",
    "scene.forest.hint": "Squirrels, foxes and deer",
    "scene.jungle.name": "Jungle",
    "scene.jungle.hint": "Sloths, toucans and jaguars",
    "scene.arctic.name": "Arctic",
    "scene.arctic.hint": "Polar bears, seals and narwhals",
    "scene.halloween.name": "Halloween",
    "scene.halloween.hint": "Bats, ghosts and jack-o'-lanterns",
    "hollow.limited": "Limited time",
    "hollow.daily": "A new animal every school day",
    "hollow.closesIn": "Leaves in {days} days",
    "hollow.lastDay": "Last day!",
    "hollow.newToday": "Someone new is in the pumpkin patch today…",
    "hollow.signClosesIn": "The pumpkin patch closes in {days} days",
    "hollow.signLastDay": "Last day in the pumpkin patch",
    "collection.unlocksInDays": "Unlocks in {days}\u00a0days",
    "collection.unlocksIn": "Unlocks in {time}",
    "collection.comingSoon": "Coming soon",
    "collection.newToday": "New today",
    "collection.toCome": "{count} still to come",
    "controls.reset": "Reset",
    "controls.confirmReset": "Confirm reset",
    "controls.resetQuestion": "Empty this scene and start over?",
    "controls.resetYes": "Yes, reset",
    "controls.keepGoing": "Keep going",
    "controls.settings": "Settings",
    "controls.animals": "Animals",
    "controls.timer": "Timer",
    "timer.label": "Timer",
    "timer.minutes": "Minutes",
    "timer.seconds": "Seconds",
    "timer.start": "Start",
    "timer.pause": "Pause",
    "timer.resume": "Resume",
    "timer.reset": "Reset",
    "timer.done": "Time’s up!",
    "timer.close": "Close timer",
    "timer.move": "Move timer: drag its edge, or use the arrow keys",
    "timer.resize": "Resize timer: drag a corner, or use the arrow keys",
    "timer.style": "How the time is shown",
    "timer.style.digits": "Numbers",
    "timer.style.circle": "Circle",
    "timer.style.hourglass": "Hourglass",
    "controls.addText": "Add text",
    "controls.addTextHint": "Put words or a drawing on the scene",
    "notes.label": "Text on the scene",
    "notes.text": "Words",
    "notes.placeholder": "Type here…",
    "notes.drawing": "Drawing",
    "notes.tools": "Text tools",
    "notes.mode": "Type or draw",
    "notes.type": "Type",
    "notes.draw": "Draw",
    "notes.ink": "Colour",
    "notes.ink.dark": "Dark",
    "notes.ink.red": "Red",
    "notes.ink.blue": "Blue",
    "notes.ink.green": "Green",
    "notes.undo": "Undo",
    "notes.clear": "Clear drawing",
    "notes.delete": "Delete",
    "controls.pause": "Pause",
    "controls.pauseHint":
      "Stop listening for a moment, so you can talk to the class",
    "controls.resume": "Resume",
    "paused.status": "Noise meter paused",
    "classes.change": "Change class",
    "classes.unnamed": "My class",
    "classes.edit": "Edit classes",
    "classes.hint": "Each class keeps its own animals and its own collection.",
    "classes.storage":
      "Your classes are saved in this browser, on this computer only. They will not show up on another computer or browser, and clearing your browser data deletes them.",
    "classes.current": "On screen",
    "classes.rename": "Rename",
    "classes.renameLabel": "New name for {name}",
    "classes.save": "Save",
    "classes.delete": "Delete",
    "classes.deleteLabel": "Delete {name}",
    "classes.addLabel": "New class name",
    "classes.addPlaceholder": "e.g. 2nd period",
    "classes.add": "Add class",
    "classes.deleteTitle": "Are you sure?",
    "classes.deleteBody":
      "Delete {name}? The animals it has out in every scene and everything in its collection will be gone for good.",
    "classes.deleteOnly":
      "It's your only class, so a new, empty one will take its place.",
    "classes.deleteYes": "Yes, delete",
    "settings.title": "Settings",
    "settings.microphone": "Microphone",
    "settings.meter": "Noise Meter",
    "settings.showMeter": "Show on screen",
    "settings.showMeterHint":
      "Keep the noise meter up over the scene while the class works",
    "start.explainFlee":
      "If it gets too loud, they'll run away! Keep the room calm and they'll come out and stay.",
    "settings.tooLoud": "When it's too loud",
    "loud.flee.label": "Animals run away",
    "loud.flee.hint":
      "Everyone freezes, and some run off every 5 seconds until it's calm",
    "loud.pause.label": "Pause the scene",
    "loud.pause.hint": "Animals hold still and no new ones come out",
    "settings.arrival": "How often animals arrive",
    "settings.aboutEvery": "About one animal every",
    "settings.minutes": "minutes",
    "settings.showCounter": "Count animals as they arrive",
    "counter.label": "Animals arrived: {count}",
    "settings.tryIt": "Try it out",
    "settings.summon": "Bring out every animal",
    "settings.advanced": "Advanced",
    "settings.previewHalloween": "Preview Halloween characters",
    "preview.title": "Halloween characters",
    "preview.opening": "Out from the start",
    "preview.unlocks": "Unlocks {date}",
    "settings.savedNote":
      "Settings are saved on this computer only. Microphone audio never leaves the device.",
    "goal.silent.label": "Silent",
    "goal.silent.hint": "No talking at all",
    "goal.independent.label": "Independent",
    "goal.independent.hint": "Quiet whispers only",
    "goal.partner.label": "Partner work",
    "goal.partner.hint": "Conversation voices",
    "rate.relaxed": "Relaxed",
    "rate.normal": "Normal",
    "rate.lively": "Lively",
    "rate.hint": "about one animal every {minutes} minutes",
    "mic.default": "Default microphone",
    "mic.numbered": "Microphone {number}",
    "mic.connecting": "Connecting…",
    "mic.connect": "Connect microphone",
    "meter.current": "Current volume",
    "meter.paused": "Paused — too loud",
    "meter.arriving": "Animals are arriving",
    "meter.goal":
      "Animals arrive while the room stays left of the line ({goal}%)",
    "calibration.title": "Calibration",
    "calibration.needMic": "Connect a microphone first",
    "calibration.calibrated": "✓ Calibrated",
    "calibration.fit": "Fit the meter to your microphone",
    "calibration.calibrate": "Calibrate",
    "calibration.recalibrate": "Recalibrate",
    "calibration.dialogTitle": "Calibrate this room",
    "calibration.progress": "Progress",
    "calibration.stepQuiet": "Quiet room",
    "calibration.stepTalking": "Normal talking",
    "calibration.stepDone": "Done",
    "calibration.introLead": "Step 1:",
    "calibration.intro":
      "ask the class to be completely silent. When ready, we will sample for {seconds} seconds.",
    "calibration.quietButton": "The room is quiet!",
    "calibration.listening": "Listening:",
    "calibration.quietLeft": "keep the room silent for {seconds} more seconds…",
    "calibration.readyLead": "Step 2:",
    "calibration.ready": "ask the class to talk at a normal working volume.",
    "calibration.talkingButton": "The class is talking!",
    "calibration.talkingLeft":
      "keep talking normally for {seconds} more seconds…",
    "calibration.doneLead": "Calibrated.",
    "calibration.done":
      "The meter now reads on this room's scale — check that the goal line still sits where you want it.",
    "calibration.retryLead": "Let's try that again.",
    "calibration.retry":
      "Those two samples were too close together to tell apart — the room may not have been quiet, or the microphone may not be picking up the class.",
    "calibration.startAgain": "Start again",
    "calibration.hears": "What the microphone hears",
    "collection.title": "Animals",
    "collection.spotted": "{class}: {seen} of {total} spotted",
    "collection.notSeen": "Not seen yet",
    "collection.seen": "Seen {count}×",
    "tier.common": "Common",
    "tier.uncommon": "Uncommon",
    "tier.rare": "Rare",
    "chance.common.label": "Chance of common animals",
    "chance.uncommon.label": "Chance of uncommon animals",
    "chance.rare.label": "Chance of rare animals",
    "chance.common": "{percent}% of arrivals are common",
    "chance.uncommon": "{percent}% of arrivals are uncommon",
    "chance.rare": "{percent}% of arrivals are rare",
    "blocked.title": "The animals need to hear the room",
    "blocked.denied":
      "This browser blocked access to the microphone. Click the padlock or camera icon in the address bar, allow the microphone, then try again.",
    "blocked.missing":
      "That microphone is no longer available. Choose a different one below and try again.",
    "blocked.unsupported":
      "This browser cannot use a microphone. Chrome, Edge and Safari all work.",
    "blocked.tryAgain": "Try again",
    "about.pageTitle": "About — Shy Safari",
    "about.meta":
      "Shy Safari is a free classroom noise tool made at the EdTech-a-thon and run by teacher.dev. No ads, no accounts.",
    "about.title": "About",
    "about.lede":
      "Put it on the projector. The quieter the room, the more animals come out.",
    "about.originTitle": "Where it came from",
    "about.origin.beforeEvent":
      "Shy Safari started as a three-day project at the ",
    "about.origin.afterEvent":
      ", an event where people get together to build free tools for classrooms. It's now run by ",
    "about.origin.afterTeacher": ", where you can find our other tools.",
    "about.photoAlt": "Participants of the 2026 EdTech-a-thon",
    "about.purposeTitle": "What it does",
    "about.purpose":
      "Put the savanna, the coral reef, deep space, the age of dinosaurs, the forest, the jungle or the Arctic up on the board and press Start. While the class stays under the volume goal, animals come out one at a time. If it gets too loud, they run away. You can change that in Settings so the scene just pauses until it's quiet again. Most animals are common, a few are rare, and the class can look back at every one they've spotted.",
    "about.promiseTitle": "No catch",
    "about.promise":
      "It's free. There's no paid version and no ads, and we don't collect personal information about you or your students.",
    "about.feedbackTitle": "Get in touch",
    "about.feedback":
      "If something isn't working, or you have an idea for Shy Safari or for another tool you'd use in class, send us an email.",
    "about.email": "Email support@teacher.dev",
    "privacy.pageTitle": "Privacy — Shy Safari",
    "privacy.meta": "What Shy Safari collects, what it doesn't, and why.",
    "privacy.title": "Privacy",
    "privacy.lede": "What we collect, what we don't, and why.",
    "privacy.microphone":
      "Shy Safari listens through your microphone only to measure how loud the room is. The sound is turned into a single volume level on this computer, moment by moment; it is never recorded, never saved, and never sent anywhere.",
    "privacy.local":
      "There are no accounts, and we do not collect personal information from teachers or students. Your settings, your calibration and the animals each of your classes has spotted are kept in this browser's local storage on this computer only, and clearing your browser data removes them.",
    "privacy.analytics.beforeLink":
      "We use Cloudflare Web Analytics to anonymously count visits, which helps us understand how Shy Safari is being used in classrooms. Cloudflare Web Analytics is cookieless, does not fingerprint visitors, and does not track users across other sites; see Cloudflare's ",
    "privacy.analytics.link": "privacy policy",
    "privacy.analytics.afterLink":
      " for details. We do not share, sell, or otherwise transfer any visitor data to third parties.",
    "privacy.contact": "Questions or concerns? Email ",
    "guide.title": "How Shy Safari works",
    "guide.lede":
      "A free classroom noise level monitor that rewards quiet instead of punishing noise.",
    "guide.whatTitle": "What it is",
    "guide.what":
      "Shy Safari is a classroom noise monitor that runs in a web browser. Put it on the projector or interactive whiteboard and it shows a calm savanna, coral reef, night sky in deep space, Cretaceous floodplain, woodland clearing, rainforest jungle or Arctic sea ice. It listens to how loud the room is through the computer's microphone, and while the class stays under the volume goal, shy animals come out one at a time. It is the opposite of a bouncing noise meter: there is no score, no needle and no red warning light, so nothing makes being loud more interesting than being quiet.",
    "guide.useTitle": "Using it in class",
    "guide.use.open":
      "Open shysafari.com on the computer connected to your projector, pick the savanna, the coral reef, deep space, the prehistoric scene, the forest, the jungle or the Arctic, and press Start. The browser asks to use the microphone.",
    "guide.use.goal":
      "Set the volume goal for the activity: Silent, Independent (quiet whispers) or Partner work (conversation voices), or drag the line on the meter to anywhere in between.",
    "guide.use.rate":
      "Let the class work. The first animal appears after 10 to 20 quiet seconds, and after that about one every five minutes of quiet work. Choose Relaxed, Normal or Lively in Settings, or type any number of minutes.",
    "guide.loudTitle": "How it decides the room is too loud",
    "guide.loud":
      "Short noises, like a knock at the door or a dropped book, don't count. The room has to stay over the goal for a bit first: about six seconds if it's just over, or about one second if it's much louder. Once it quiets down, the scene clears within three seconds.",
    "guide.calibrate":
      "Calibration is optional. Five seconds of silence and five seconds of normal talking teach the app what your room and your microphone sound like.",
    "guide.tooLoudTitle": "What happens when it gets too loud",
    "guide.tooLoud":
      "The scene clouds over, with a dusty haze on the savanna, murky water on the reef, interference in deep space, mist off the river in the prehistoric scene, fog between the trees in the forest, a tropical downpour in the jungle and a whiteout of blowing snow in the Arctic, and no new animals come out. What happens next is your choice:",
    "guide.tooLoud.flee":
      "Animals run away (the default). The scene freezes and, while the room stays too loud, one animal and then a few more every five seconds run off the edge of the screen. In deep space, they fade out into static instead.",
    "guide.tooLoud.pause":
      "Pause the scene. The animals hold still, nothing is taken away, and progress toward the next animal waits until the room is calm again.",
    "guide.animalsTitle": "The animals",
    "guide.animals":
      "The savanna has 17 animals, from meerkats and zebras to giraffes, hippos and rhinos, with lions, leopards and elephants as the rare ones. The coral reef has 18, from clownfish and seahorses to sea turtles and octopuses, with hammerhead sharks, manta rays and whale sharks as the rare ones. Deep space has 17 sightings for older students, from satellites, asteroids and astronauts to the space station, comets and Saturn-like planets, with a spiral galaxy, a black hole, a pulsar and a ring nebula as the rare ones. The prehistoric scene has 17 animals from the very end of the age of dinosaurs, drawn with up-to-date science, from small mammals, lizards and feathered raptors to Triceratops and Ankylosaurus, with Tyrannosaurus, Quetzalcoatlus and the giant Alamosaurus as the rare ones. The forest has 17 woodland animals, from chipmunks, robins and hedgehogs to raccoons, foxes and deer, with a gray wolf, a black bear and a moose as the rare ones. The jungle has 17 rainforest animals, from poison dart frogs, toucans and capuchin monkeys to sloths, macaws and orangutans, with jaguars, gorillas and tigers as the rare ones. The Arctic has 17 animals, from lemmings, puffins and arctic foxes to caribou, walruses and belugas, with polar bears, narwhals and bowhead whales as the rare ones. Common animals turn up often and rare ones are a real event that many sessions will not see at all. Each scene keeps its own animals, and the collection remembers every animal the class has spotted.",
    "guide.forTitle": "Who it is for",
    "guide.for":
      "Teachers of any grade who want a calm, visual cue for voice levels during independent work, reading time, tests, centers or group work. The whole class shares one screen, and students need nothing at all.",
    "guide.faqTitle": "Questions teachers ask",
    "guide.faq.free.q": "Is Shy Safari free?",
    "guide.faq.free.a":
      "Yes. There are no paywalls, no ads and no premium version. It came out of the EdTech-a-thon, a community of builders making free tools for classrooms, and is maintained by teacher.dev.",
    "guide.faq.record.q": "Does it record the classroom?",
    "guide.faq.record.a":
      "No. The microphone is used only to measure how loud the room is, as a single number, moment by moment, on your computer. Nothing is recorded, saved or sent anywhere.",
    "guide.faq.accounts.q": "Do I or my students need an account?",
    "guide.faq.accounts.a":
      "No. There is no sign-up, no login and nothing to install. Settings are saved in the browser on that computer.",
    "guide.faq.devices.q": "What do I need to run it?",
    "guide.faq.devices.a":
      "A computer with a microphone and an up-to-date web browser such as Chrome, Edge, Firefox or Safari. Laptops, Chromebooks and interactive whiteboards all work. It is designed for a projector or large screen, but it runs on a tablet or phone too.",
    "guide.faq.languages.q": "Which languages does it support?",
    "guide.faq.languages.a":
      "English, Spanish and French. It follows the browser's language, and you can change it from the menu at the top of the screen.",
    "guide.faq.meter.q": "How is it different from a noise meter?",
    "guide.faq.meter.a":
      "A noise meter shows the class how loud they are, which can turn getting louder into a game. Shy Safari shows only a peaceful scene that slowly fills with animals, so the reward for quiet work is what the class sees, and there is no score to beat.",
  },
  creatures: {
    meerkat: "Meerkat",
    warthog: "Warthog",
    zebra: "Zebra",
    gazelle: "Thomson's gazelle",
    ostrich: "Ostrich",
    "guinea-fowl": "Guinea fowl",
    tortoise: "Tortoise",
    hornbill: "Hornbill",
    giraffe: "Giraffe",
    hippo: "Hippo",
    rhino: "Rhino",
    cheetah: "Cheetah",
    flamingo: "Flamingo",
    vulture: "Vulture",
    lion: "Lion",
    leopard: "Leopard",
    elephant: "Elephant",
    clownfish: "Clownfish",
    "blue-tang": "Blue tang",
    angelfish: "Angelfish",
    seahorse: "Seahorse",
    starfish: "Starfish",
    crab: "Crab",
    shrimp: "Shrimp",
    parrotfish: "Parrotfish",
    pufferfish: "Pufferfish",
    octopus: "Octopus",
    "sea-turtle": "Sea turtle",
    "moray-eel": "Moray eel",
    stingray: "Stingray",
    "jellyfish-bloom": "Jellyfish bloom",
    cuttlefish: "Cuttlefish",
    "hammerhead-shark": "Hammerhead shark",
    "manta-ray": "Manta ray",
    "whale-shark": "Whale shark",
    satellite: "Satellite",
    asteroid: "Asteroid",
    meteor: "Meteor",
    "space-probe": "Space probe",
    "space-capsule": "Space capsule",
    astronaut: "Astronaut",
    "space-shuttle": "Space shuttle",
    iss: "Space station",
    comet: "Comet",
    "ringed-planet": "Ringed planet",
    moon: "Moon",
    "space-telescope": "Space telescope",
    "gas-giant": "Gas giant",
    "spiral-galaxy": "Spiral galaxy",
    "black-hole": "Black hole",
    pulsar: "Pulsar",
    "ring-nebula": "Ring nebula",
    // Soft hyphens (\u00AD) mark where a long name may break in the collection.
    didelphodon: "Didelphodon",
    palaeosaniwa: "Palaeosaniwa",
    basilemys: "Basilemys",
    avisaurus: "Avisaurus",
    pectinodon: "Pectinodon",
    acheroraptor: "Achero\u00ADraptor",
    thescelosaurus: "Thescelo\u00ADsaurus",
    struthiomimus: "Struthio\u00ADmimus",
    anzu: "Anzu",
    pachycephalosaurus: "Pachy\u00ADcephalo\u00ADsaurus",
    dakotaraptor: "Dakota\u00ADraptor",
    ankylosaurus: "Ankylo\u00ADsaurus",
    triceratops: "Triceratops",
    edmontosaurus: "Edmonto\u00ADsaurus",
    tyrannosaurus: "Tyranno\u00ADsaurus",
    quetzalcoatlus: "Quetzal\u00ADcoatlus",
    alamosaurus: "Alamosaurus",
    chipmunk: "Chipmunk",
    "gray-squirrel": "Gray squirrel",
    robin: "Robin",
    hedgehog: "Hedgehog",
    cottontail: "Cottontail rabbit",
    woodpecker: "Woodpecker",
    skunk: "Skunk",
    raccoon: "Raccoon",
    "great-horned-owl": "Great horned owl",
    porcupine: "Porcupine",
    badger: "Badger",
    beaver: "Beaver",
    "red-fox": "Red fox",
    "white-tailed-deer": "White-tailed deer",
    "gray-wolf": "Gray wolf",
    "black-bear": "Black bear",
    moose: "Moose",
    "poison-dart-frog": "Poison dart frog",
    "tree-frog": "Red-eyed tree frog",
    butterfly: "Blue morpho",
    hummingbird: "Hummingbird",
    toucan: "Toucan",
    capuchin: "Capuchin monkey",
    iguana: "Green iguana",
    capybara: "Capybara",
    chameleon: "Chameleon",
    sloth: "Sloth",
    macaw: "Scarlet macaw",
    orangutan: "Orangutan",
    okapi: "Okapi",
    tapir: "Malayan tapir",
    jaguar: "Jaguar",
    gorilla: "Gorilla",
    tiger: "Tiger",
    lemming: "Lemming",
    "arctic-hare": "Arctic hare",
    ptarmigan: "Ptarmigan",
    puffin: "Puffin",
    "arctic-tern": "Arctic tern",
    "arctic-fox": "Arctic fox",
    "harp-seal": "Harp seal",
    eider: "King eider",
    "snowy-owl": "Snowy owl",
    caribou: "Caribou",
    "musk-ox": "Musk ox",
    "arctic-wolf": "Arctic wolf",
    walrus: "Walrus",
    beluga: "Beluga",
    "polar-bear": "Polar bear",
    narwhal: "Narwhal",
    "bowhead-whale": "Bowhead whale",
    "harvest-mouse": "Harvest mouse",
    "garden-spider": "Garden spider",
    toad: "Toad",
    "brown-bat": "Little brown bat",
    crow: "Crow",
    "barn-owl": "Barn owl",
    "black-cat": "Black cat",
    "little-ghost": "Little ghost",
    "cloudy-moon": "Cloudy moon",
    gourdling: "Gourdling",
    scarecrow: "Scarecrow",
    mummy: "Mummy",
    vampire: "Vampire",
    gargoyle: "Gargoyle",
    "howling-wolf": "Howling wolf",
    "great-boo": "The Great Boo",
    "jack-o-lantern": "Jack O. Lantern",
  },
  // One line about each prehistoric Creature, shown in the collection.
  facts: {
    didelphodon:
      "A marsupial relative with the strongest bite, for its size, of any mammal known.",
    palaeosaniwa:
      "A big hunting lizard, a relative of today's monitor lizards.",
    basilemys:
      "A land turtle with a low, broad shell covered in a rough, pitted texture.",
    avisaurus:
      "An “opposite bird”, the most common kind of bird in the age of dinosaurs. They all died out with them.",
    pectinodon:
      "Its name means “comb tooth”, for the big serrations on its teeth, which are nearly all that has been found of it.",
    acheroraptor:
      "A feathered raptor named after the Acheron, a river of the underworld in Greek myth.",
    thescelosaurus:
      "Its name means “wondrous lizard”. A stocky plant-eater with a beak and cheeks.",
    struthiomimus:
      "Its name means “ostrich mimic”: a toothless beak, long legs and feathered wings.",
    anzu: "Named after a feathered demon of Mesopotamian myth. It had a tall crest on its head, like a cassowary.",
    pachycephalosaurus: "The bony dome on its head was up to 25 cm thick.",
    dakotaraptor:
      "Bumps on its forearm bones show where big wing feathers were anchored.",
    ankylosaurus:
      "Its tail ended in a club of fused bone, on a tail stiffened to swing it.",
    triceratops: "The commonest big dinosaur in the rocks of Hell Creek.",
    edmontosaurus:
      "Mummified skin shows a fleshy crest along its back, spikes on its tail and hooves on its toes.",
    tyrannosaurus:
      "One of the strongest bites of any land animal ever. Lips probably covered its teeth, as in lizards.",
    quetzalcoatlus:
      "A pterosaur with a wingspan of about 10 m, as tall as a giraffe when it stood on all fours.",
    alamosaurus:
      "One of the last sauropods, and at 26 m or more, one of the biggest animals of its time.",
    // The arctic animals.
    lemming:
      "It doesn't hibernate: all winter it lives in tunnels under the snow, where it stays warmer.",
    "arctic-hare":
      "It can run at 60 km/h, and sometimes hops along on just its back legs, like a kangaroo.",
    ptarmigan:
      "Feathers on its feet work like snowshoes, and in winter it turns white all over except its tail.",
    puffin:
      "Its beak is only this bright in summer, and it can carry more than ten small fish in it at once.",
    "arctic-tern":
      "Every year it flies from the Arctic to the Antarctic and back, the longest journey of any animal.",
    "arctic-fox":
      "Its thick fur keeps it warm at −50 °C, and it curls its bushy tail round itself like a blanket.",
    "harp-seal":
      "Pups are born with fluffy white fur, and swap it for a grey, spotted coat a few weeks later.",
    eider:
      "Eiders line their nests with soft down from their own chests, some of the warmest feathers there are.",
    "snowy-owl":
      "Unlike most owls it hunts by day: in the Arctic summer, the sun never sets.",
    caribou:
      "Males and females both grow antlers, and herds travel farther each year than any other land mammal.",
    "musk-ox":
      "When danger comes, the herd stands in a ring, horns out, with the calves safe in the middle.",
    "arctic-wolf":
      "It lives so far north that some packs have hardly ever met people.",
    walrus:
      "It uses its long tusks to haul itself out of the water and onto the ice.",
    beluga:
      "Called the canary of the sea for its whistles and chirps. Unlike most whales, it can turn its head.",
    "polar-bear":
      "Under its thick white fur its skin is black, to soak up the warmth of the sun.",
    narwhal:
      "Its tusk is a tooth that grows through its upper lip, spiralling, up to 3 m long.",
    "bowhead-whale":
      "It can break through ice with its huge head, and can live for more than 200 years.",
    "harvest-mouse":
      "One of the smallest mice in the world, it can wrap its tail round a stalk like an extra hand.",
    "garden-spider":
      "It spins a brand new web almost every night, and often eats the old one.",
    toad: "You can’t catch warts from a toad: its bumps are just the way its skin grows.",
    "brown-bat":
      "It finds insects in the dark by their echoes, and can catch hundreds in an hour.",
    crow: "Crows can recognise human faces, and remember them for years.",
    "barn-owl":
      "Its heart-shaped face gathers sound like a dish, so it can hunt in total darkness.",
    "black-cat":
      "In Scotland and Japan, a black cat crossing your path is said to bring good luck.",
    "little-ghost":
      "A ghost in a sheet is one of the oldest Halloween costumes there is.",
    "cloudy-moon":
      "The Moon always shows Earth the same face; nobody saw its far side until 1959.",
    gourdling:
      "Pumpkins are fruit, not vegetables: they grow from flowers and are full of seeds.",
    scarecrow:
      "Farmers have been making scarecrows to keep birds off their crops for thousands of years.",
    mummy:
      "Ancient Egyptians wrapped a mummy in hundreds of metres of linen bandages.",
    vampire:
      "Real vampire bats live in Central and South America, and share their food with friends who go hungry.",
    gargoyle:
      "Real gargoyles are rain spouts: water runs out of their mouths, away from the walls.",
    "howling-wolf":
      "Wolves howl to call their pack together, and a howl can carry for miles.",
    "great-boo":
      "People have been shouting “Boo!” to make each other jump since at least the 1700s.",
    "jack-o-lantern":
      "The first jack-o’-lanterns were carved from turnips in Ireland; in America, pumpkins took over.",
  },
} as const;

export type UiKey = keyof typeof en.ui;
type CreatureSlug = keyof typeof en.creatures;

/**
 * Wording a Scene puts its own way, over the shared text. Deep space is an
 * observatory: what the class earns are sightings picked up by a telescope,
 * and noise is interference, not something that scares animals. A Scene with
 * nothing here uses the shared text as it is. English is the source again:
 * every key it rewords must be a real key, and every language must reword
 * the same ones.
 */
const enScenes = {
  space: {
    "start.shy": "A quiet room keeps the signal clear.",
    "start.explain":
      "Noise shows up as interference. While the room is calm, the telescope picks up new sightings; if it gets too loud, it waits for the signal to clear.",
    "start.explainFlee":
      "Noise shows up as interference. When the room gets too loud, sightings break up into static and are lost; while it stays calm, new ones come into view.",
    "controls.animals": "Sightings",
    "loud.flee.label": "Sightings fade out",
    "loud.flee.hint":
      "Everything freezes, and some fade into static every 5 seconds until it's calm",
    "loud.pause.hint": "Everything holds still and no new signals come in",
    "settings.arrival": "How often new sightings come in",
    "settings.aboutEvery": "About one sighting every",
    "settings.summon": "Bring in every sighting",
    "rate.hint": "about one sighting every {minutes} minutes",
    "settings.showCounter": "Count sightings as they come in",
    "counter.label": "Sightings so far: {count}",
    "meter.paused": "Paused — too much interference",
    "meter.arriving": "Signals are coming in",
    "meter.goal":
      "New sightings come in while the room stays left of the line ({goal}%)",
    "collection.title": "Sightings",
    "collection.spotted": "{class}: {seen} of {total} observed",
    "collection.notSeen": "Not observed yet",
    "collection.seen": "Observed {count}×",
    "chance.common.label": "Chance of common sightings",
    "chance.uncommon.label": "Chance of uncommon sightings",
    "chance.rare.label": "Chance of rare sightings",
    "blocked.title": "The telescope needs to hear the room",
    "notes.ink.dark": "White",
  },
} as const satisfies { [S in SceneId]?: Partial<Record<UiKey, string>> };

type SceneWording = {
  readonly [S in keyof typeof enScenes]: Record<
    keyof (typeof enScenes)[S],
    string
  >;
};

type FactSlug = keyof typeof en.facts;
type Language = {
  readonly name: string;
  readonly locale: string;
  readonly ui: Record<UiKey, string>;
  readonly scenes: SceneWording;
  readonly creatures: Record<CreatureSlug, string>;
  readonly facts: Record<FactSlug, string>;
};

const es = {
  name: "Español",
  locale: "es",
  ui: {
    "language.change": "Cambiar idioma",
    "app.name": "Shy Safari",
    "app.pageTitle": "Shy Safari — medidor de ruido gratuito para el aula",
    "app.description":
      "Un medidor de ruido gratuito para el proyector del aula. Animales tímidos de la sabana y del arrecife aparecen mientras la clase está en silencio. Sin registro, sin grabaciones.",
    "brand.title": "Creado por teacher.dev",
    "common.builtBy": "Creado por teacher.dev",
    "common.about": "acerca de",
    "common.privacy": "privacidad",
    "common.howItWorks": "cómo funciona",
    "preview.alt":
      "Una sabana tranquila con un elefante, cebras, un león, una jirafa y un suricata, junto a las palabras Shy Safari, un medidor de ruido gratuito para el aula",
    "common.back": "← Volver a Shy Safari",
    "common.close": "Cerrar",
    "common.cancel": "Cancelar",
    "common.done": "Listo",
    "fullScreen.enter": "Pantalla completa",
    "fullScreen.exit": "Salir de pantalla completa",
    "float.open": "Flotar sobre otras pestañas",
    "float.openHint":
      "Mostrar la escena en una ventana pequeña sobre tus diapositivas u otras pestañas",
    "float.failed": "No se pudo abrir la ventana flotante.",
    "floating.title": "Shy Safari está flotando",
    "floating.instructions":
      "La escena está en su propia ventana sobre tus otras pestañas y sigue escuchando el aula. Deja esta pestaña abierta: el botón de la ventana para volver a la pestaña la trae de vuelta aquí.",
    "floating.return": "Traer Shy Safari de vuelta aquí",
    "start.shy": "Shh… ¡estos animales son tímidos!",
    "start.explain":
      "Si hay demasiado ruido, se quedan escondidos. Cuando el aula vuelva a estar tranquila, empezarán a salir.",
    "start.button": "Empezar",
    "start.micNote":
      "El navegador pedirá permiso para usar el micrófono. El sonido se mide en esta computadora y nunca se graba ni se envía a ningún sitio.",
    "scene.label": "Escena",
    "scene.change": "Cambiar escena",
    "scene.new": "Nuevo",
    "scene.newScenes": "Escenas nuevas",
    "scene.savanna.name": "Sabana",
    "scene.savanna.hint": "Cebras, jirafas y leones",
    "scene.reef.name": "Arrecife de coral",
    "scene.reef.hint": "Peces, tortugas y tiburones",
    "scene.space.name": "Espacio profundo",
    "scene.space.hint": "Satélites, cometas y galaxias",
    "scene.prehistoric.name": "Prehistoria",
    "scene.prehistoric.hint": "T. rex, Triceratops y raptores",
    "scene.forest.name": "Bosque",
    "scene.forest.hint": "Ardillas, zorros y ciervos",
    "scene.jungle.name": "Selva",
    "scene.jungle.hint": "Perezosos, tucanes y jaguares",
    "scene.arctic.name": "Ártico",
    "scene.arctic.hint": "Osos polares, focas y narvales",
    "scene.halloween.name": "Halloween",
    "scene.halloween.hint": "Murciélagos, fantasmas y calabazas",
    "hollow.limited": "Por tiempo limitado",
    "hollow.daily": "Un animal nuevo cada día de clase",
    "hollow.closesIn": "Se va en {days} días",
    "hollow.lastDay": "¡Último día!",
    "hollow.newToday": "Hoy hay alguien nuevo entre las calabazas…",
    "hollow.signClosesIn": "Las calabazas se despiden en {days} días",
    "hollow.signLastDay": "Último día entre las calabazas",
    "collection.unlocksInDays": "Se desbloquea en {days}\u00a0días",
    "collection.unlocksIn": "Se desbloquea en {time}",
    "collection.comingSoon": "Muy pronto",
    "collection.newToday": "Nuevo hoy",
    "collection.toCome": "faltan {count}",
    "controls.reset": "Reiniciar",
    "controls.confirmReset": "Confirmar reinicio",
    "controls.resetQuestion": "¿Vaciar esta escena y empezar de nuevo?",
    "controls.resetYes": "Sí, reiniciar",
    "controls.keepGoing": "Seguir",
    "controls.settings": "Ajustes",
    "controls.animals": "Animales",
    "controls.timer": "Temporizador",
    "timer.label": "Temporizador",
    "timer.minutes": "Minutos",
    "timer.seconds": "Segundos",
    "timer.start": "Iniciar",
    "timer.pause": "Pausar",
    "timer.resume": "Reanudar",
    "timer.reset": "Reiniciar",
    "timer.done": "¡Se acabó el tiempo!",
    "timer.close": "Cerrar el temporizador",
    "timer.move": "Mover el temporizador: arrastra su borde o usa las flechas",
    "timer.resize":
      "Cambiar el tamaño del temporizador: arrastra una esquina o usa las flechas",
    "timer.style": "Cómo se muestra el tiempo",
    "timer.style.digits": "Números",
    "timer.style.circle": "Círculo",
    "timer.style.hourglass": "Reloj de arena",
    "controls.addText": "Añadir texto",
    "controls.addTextHint": "Poner palabras o un dibujo en la escena",
    "notes.label": "Texto en la escena",
    "notes.text": "Palabras",
    "notes.placeholder": "Escribe aquí…",
    "notes.drawing": "Dibujo",
    "notes.tools": "Herramientas de texto",
    "notes.mode": "Escribir o dibujar",
    "notes.type": "Escribir",
    "notes.draw": "Dibujar",
    "notes.ink": "Color",
    "notes.ink.dark": "Oscuro",
    "notes.ink.red": "Rojo",
    "notes.ink.blue": "Azul",
    "notes.ink.green": "Verde",
    "notes.undo": "Deshacer",
    "notes.clear": "Borrar dibujo",
    "notes.delete": "Eliminar",
    "controls.pause": "Pausar",
    "controls.pauseHint":
      "Dejar de escuchar un momento, para poder hablar con la clase",
    "controls.resume": "Reanudar",
    "paused.status": "Medidor de ruido en pausa",
    "classes.change": "Cambiar de clase",
    "classes.unnamed": "Mi clase",
    "classes.edit": "Editar clases",
    "classes.hint":
      "Cada clase guarda sus propios animales y su propia colección.",
    "classes.storage":
      "Tus clases se guardan en este navegador, solo en esta computadora. No aparecerán en otra computadora ni en otro navegador, y al borrar los datos del navegador se eliminan.",
    "classes.current": "En pantalla",
    "classes.rename": "Renombrar",
    "classes.renameLabel": "Nuevo nombre para {name}",
    "classes.save": "Guardar",
    "classes.delete": "Eliminar",
    "classes.deleteLabel": "Eliminar {name}",
    "classes.addLabel": "Nombre de la nueva clase",
    "classes.addPlaceholder": "p. ej., 2.º periodo",
    "classes.add": "Añadir clase",
    "classes.deleteTitle": "¿Seguro?",
    "classes.deleteBody":
      "¿Eliminar {name}? Los animales que tiene en cada escena y todo lo de su colección desaparecerán para siempre.",
    "classes.deleteOnly":
      "Es tu única clase, así que una nueva y vacía ocupará su lugar.",
    "classes.deleteYes": "Sí, eliminar",
    "settings.title": "Ajustes",
    "settings.microphone": "Micrófono",
    "settings.meter": "Medidor de ruido",
    "settings.showMeter": "Mostrar en pantalla",
    "settings.showMeterHint":
      "Dejar el medidor de ruido sobre la escena mientras la clase trabaja",
    "start.explainFlee":
      "¡Si hay demasiado ruido, se escaparán! Mantengan el aula tranquila y saldrán y se quedarán.",
    "settings.tooLoud": "Cuando hay demasiado ruido",
    "loud.flee.label": "Los animales se escapan",
    "loud.flee.hint":
      "Todos se quedan quietos y algunos se escapan cada 5 segundos hasta que vuelva la calma",
    "loud.pause.label": "Pausar la escena",
    "loud.pause.hint": "Los animales se quedan quietos y no sale ninguno nuevo",
    "settings.arrival": "Con qué frecuencia llegan animales",
    "settings.aboutEvery": "Más o menos un animal cada",
    "settings.minutes": "minutos",
    "settings.showCounter": "Contar los animales a medida que llegan",
    "counter.label": "Animales que han llegado: {count}",
    "settings.tryIt": "Pruébalo",
    "settings.summon": "Sacar a todos los animales",
    "settings.advanced": "Avanzado",
    "settings.previewHalloween": "Ver los personajes de Halloween",
    "preview.title": "Personajes de Halloween",
    "preview.opening": "Desde el principio",
    "preview.unlocks": "Se desbloquea el {date}",
    "settings.savedNote":
      "Los ajustes se guardan solo en esta computadora. El sonido del micrófono nunca sale del dispositivo.",
    "goal.silent.label": "Silencio",
    "goal.silent.hint": "Nada de hablar",
    "goal.independent.label": "Individual",
    "goal.independent.hint": "Solo susurros",
    "goal.partner.label": "En parejas",
    "goal.partner.hint": "Voz de conversación",
    "rate.relaxed": "Tranquilo",
    "rate.normal": "Normal",
    "rate.lively": "Animado",
    "rate.hint": "más o menos un animal cada {minutes} minutos",
    "mic.default": "Micrófono predeterminado",
    "mic.numbered": "Micrófono {number}",
    "mic.connecting": "Conectando…",
    "mic.connect": "Conectar el micrófono",
    "meter.current": "Volumen actual",
    "meter.paused": "En pausa — demasiado ruido",
    "meter.arriving": "Están llegando animales",
    "meter.goal":
      "Los animales llegan mientras el aula se mantiene a la izquierda de la línea ({goal}%)",
    "calibration.title": "Calibración",
    "calibration.needMic": "Primero conecta un micrófono",
    "calibration.calibrated": "✓ Calibrado",
    "calibration.fit": "Ajusta el medidor a tu micrófono",
    "calibration.calibrate": "Calibrar",
    "calibration.recalibrate": "Volver a calibrar",
    "calibration.dialogTitle": "Calibrar esta aula",
    "calibration.progress": "Progreso",
    "calibration.stepQuiet": "Aula en silencio",
    "calibration.stepTalking": "Conversación normal",
    "calibration.stepDone": "Listo",
    "calibration.introLead": "Paso 1:",
    "calibration.intro":
      "pide a la clase que guarde silencio total. Cuando estén listos, escucharemos durante {seconds} segundos.",
    "calibration.quietButton": "¡El aula está en silencio!",
    "calibration.listening": "Escuchando:",
    "calibration.quietLeft": "mantengan el silencio {seconds} segundos más…",
    "calibration.readyLead": "Paso 2:",
    "calibration.ready":
      "pide a la clase que hable al volumen normal de trabajo.",
    "calibration.talkingButton": "¡La clase está hablando!",
    "calibration.talkingLeft":
      "sigan hablando con normalidad {seconds} segundos más…",
    "calibration.doneLead": "Calibrado.",
    "calibration.done":
      "El medidor ya usa la escala de esta aula: comprueba que la línea del objetivo sigue donde la quieres.",
    "calibration.retryLead": "Probemos otra vez.",
    "calibration.retry":
      "Las dos muestras eran demasiado parecidas para distinguirlas: puede que el aula no estuviera en silencio o que el micrófono no capte a la clase.",
    "calibration.startAgain": "Empezar de nuevo",
    "calibration.hears": "Lo que oye el micrófono",
    "collection.title": "Animales",
    "collection.spotted": "{class}: {seen} de {total} vistos",
    "collection.notSeen": "Aún no visto",
    "collection.seen": "Visto {count}×",
    "tier.common": "Comunes",
    "tier.uncommon": "Poco comunes",
    "tier.rare": "Raros",
    "chance.common.label": "Probabilidad de animales comunes",
    "chance.uncommon.label": "Probabilidad de animales poco comunes",
    "chance.rare.label": "Probabilidad de animales raros",
    "chance.common": "El {percent}% de las llegadas son comunes",
    "chance.uncommon": "El {percent}% de las llegadas son poco comunes",
    "chance.rare": "El {percent}% de las llegadas son raras",
    "blocked.title": "Los animales necesitan oír el aula",
    "blocked.denied":
      "Este navegador bloqueó el acceso al micrófono. Haz clic en el candado o en el icono de la cámara de la barra de direcciones, permite el micrófono y vuelve a intentarlo.",
    "blocked.missing":
      "Ese micrófono ya no está disponible. Elige otro abajo y vuelve a intentarlo.",
    "blocked.unsupported":
      "Este navegador no puede usar un micrófono. Chrome, Edge y Safari funcionan.",
    "blocked.tryAgain": "Volver a intentarlo",
    "about.pageTitle": "Acerca de — Shy Safari",
    "about.meta":
      "Shy Safari es una herramienta gratuita para el ruido en el aula, creada en el EdTech-a-thon y gestionada por teacher.dev. Sin anuncios ni cuentas.",
    "about.title": "Acerca de",
    "about.lede":
      "Ponlo en el proyector. Cuanto más silencio haya, más animales salen.",
    "about.originTitle": "De dónde viene",
    "about.origin.beforeEvent":
      "Shy Safari empezó como un proyecto de tres días en el ",
    "about.origin.afterEvent":
      ", un evento donde la gente se reúne para crear herramientas gratuitas para las aulas. Ahora lo gestiona ",
    "about.origin.afterTeacher":
      ", donde también puedes encontrar nuestras otras herramientas.",
    "about.photoAlt": "Participantes del EdTech-a-thon 2026",
    "about.purposeTitle": "Qué hace",
    "about.purpose":
      "Proyecta la sabana, el arrecife de coral, el espacio profundo, la era de los dinosaurios, el bosque, la selva o el Ártico y pulsa Empezar. Mientras la clase no pase del límite de volumen, los animales van saliendo de uno en uno. Si hay demasiado ruido, huyen. Puedes cambiarlo en Ajustes para que la escena solo se pause hasta que vuelva el silencio. La mayoría de los animales son comunes, unos pocos son raros, y la clase puede volver a ver todos los que ha encontrado.",
    "about.promiseTitle": "Sin trampa",
    "about.promise":
      "Es gratis. No hay versión de pago ni anuncios, y no recopilamos datos personales tuyos ni de tus alumnos.",
    "about.feedbackTitle": "Escríbenos",
    "about.feedback":
      "Si algo no funciona, o tienes una idea para Shy Safari o para otra herramienta que usarías en clase, mándanos un correo.",
    "about.email": "Escribir a support@teacher.dev",
    "privacy.pageTitle": "Privacidad — Shy Safari",
    "privacy.meta": "Qué recopila Shy Safari, qué no y por qué.",
    "privacy.title": "Privacidad",
    "privacy.lede": "Qué recopilamos, qué no y por qué.",
    "privacy.microphone":
      "Shy Safari escucha por el micrófono solo para medir cuánto ruido hay en el aula. El sonido se convierte en un único nivel de volumen en esta computadora, momento a momento; nunca se graba, nunca se guarda y nunca se envía a ningún sitio.",
    "privacy.local":
      "No hay cuentas y no recopilamos información personal de docentes ni estudiantes. Tus ajustes, tu calibración y los animales que ha visto cada una de tus clases se guardan en el almacenamiento local de este navegador, solo en esta computadora; al borrar los datos del navegador se eliminan.",
    "privacy.analytics.beforeLink":
      "Usamos Cloudflare Web Analytics para contar las visitas de forma anónima, lo que nos ayuda a entender cómo se usa Shy Safari en las aulas. Cloudflare Web Analytics no usa cookies, no crea huellas digitales de los visitantes y no los rastrea en otros sitios; consulta la ",
    "privacy.analytics.link": "política de privacidad",
    "privacy.analytics.afterLink":
      " de Cloudflare para más detalles. No compartimos, vendemos ni transferimos de ningún otro modo los datos de los visitantes a terceros.",
    "privacy.contact": "¿Tienes preguntas o dudas? Escribe a ",
    "guide.title": "Cómo funciona Shy Safari",
    "guide.lede":
      "Un medidor de ruido gratuito para el aula que premia el silencio en lugar de castigar el ruido.",
    "guide.whatTitle": "Qué es",
    "guide.what":
      "Shy Safari es un medidor de ruido para el aula que funciona en el navegador. Ponlo en el proyector o en la pizarra digital y muestra una sabana, un arrecife de coral, un cielo del espacio profundo, una llanura del Cretácico, un claro del bosque, una selva tropical o el hielo ártico tranquilos. Escucha lo fuerte que suena la clase a través del micrófono del ordenador y, mientras la clase se mantiene por debajo del límite de volumen, van apareciendo animales tímidos uno a uno. Es lo contrario de un medidor de ruido que salta: no hay puntuación, ni aguja, ni luz roja de aviso, así que hacer ruido nunca resulta más interesante que estar en silencio.",
    "guide.useTitle": "Cómo usarlo en clase",
    "guide.use.open":
      "Abre shysafari.com en el ordenador conectado al proyector, elige la sabana, el arrecife de coral, el espacio profundo, la prehistoria, el bosque, la selva o el Ártico y pulsa Empezar. El navegador pedirá permiso para usar el micrófono.",
    "guide.use.goal":
      "Elige el límite de volumen para la actividad: Silencio, Individual (solo susurros) o En parejas (voz de conversación), o arrastra la línea del medidor a cualquier punto intermedio.",
    "guide.use.rate":
      "Deja trabajar a la clase. El primer animal aparece tras 10 a 20 segundos de silencio y, después, más o menos uno cada cinco minutos de trabajo en silencio. Elige Tranquilo, Normal o Animado en Ajustes, o escribe cualquier número de minutos.",
    "guide.loudTitle": "Cómo decide que hay demasiado ruido",
    "guide.loud":
      "Los ruidos cortos, como un golpe en la puerta o un libro que se cae, no cuentan. La clase tiene que pasarse del límite durante un rato: unos seis segundos si se pasa un poco, o alrededor de un segundo si hay mucho más ruido. Cuando vuelve la calma, la escena se aclara en tres segundos.",
    "guide.calibrate":
      "La calibración es opcional. Cinco segundos de silencio y cinco segundos de conversación normal le enseñan a la aplicación cómo suenan tu aula y tu micrófono.",
    "guide.tooLoudTitle": "Qué pasa cuando hay demasiado ruido",
    "guide.tooLoud":
      "La escena se nubla, con una neblina de polvo en la sabana, agua turbia en el arrecife, interferencias en el espacio profundo, niebla del río en la prehistoria, niebla entre los árboles en el bosque, un aguacero tropical en la selva y una ventisca que lo deja todo blanco en el Ártico, y no aparecen animales nuevos. Lo que pasa después lo eliges tú:",
    "guide.tooLoud.flee":
      "Los animales huyen (la opción por defecto). La escena se congela y, mientras siga habiendo demasiado ruido, un animal y luego unos cuantos más cada cinco segundos salen corriendo de la pantalla. En el espacio profundo, en cambio, se desvanecen entre la estática.",
    "guide.tooLoud.pause":
      "Pausar la escena. Los animales se quedan quietos, no se pierde nada y el progreso hacia el siguiente animal espera a que la clase vuelva a estar en calma.",
    "guide.animalsTitle": "Los animales",
    "guide.animals":
      "La sabana tiene 17 animales, desde suricatas y cebras hasta jirafas, hipopótamos y rinocerontes, con leones, leopardos y elefantes como los más raros. El arrecife de coral tiene 18, desde peces payaso y caballitos de mar hasta tortugas marinas y pulpos, con tiburones martillo, mantarrayas y tiburones ballena como los más raros. El espacio profundo tiene 17 avistamientos pensados para estudiantes mayores, desde satélites, asteroides y astronautas hasta la estación espacial, cometas y planetas como Saturno, con una galaxia espiral, un agujero negro, un púlsar y una nebulosa anular como los más raros. La prehistoria tiene 17 animales del final de la era de los dinosaurios, dibujados según la ciencia actual, desde pequeños mamíferos, lagartos y raptores con plumas hasta Triceratops y Ankylosaurus, con Tyrannosaurus, Quetzalcoatlus y el gigantesco Alamosaurus como los más raros. El bosque tiene 17 animales, desde ardillas listadas, petirrojos y erizos hasta mapaches, zorros y ciervos, con un lobo gris, un oso negro y un alce como los más raros. La selva tiene 17 animales de la selva tropical, desde ranas venenosas, tucanes y monos capuchinos hasta perezosos, guacamayos y orangutanes, con jaguares, gorilas y tigres como los más raros. El Ártico tiene 17 animales, desde lemmings, frailecillos y zorros árticos hasta caribúes, morsas y belugas, con osos polares, narvales y ballenas de Groenlandia como los más raros. Los animales comunes aparecen a menudo y los raros son todo un acontecimiento que muchas sesiones no llegan a ver. Cada escena guarda sus propios animales, y la colección recuerda todos los que la clase ha visto.",
    "guide.forTitle": "Para quién es",
    "guide.for":
      "Para docentes de cualquier etapa que quieren una señal visual y tranquila del nivel de voz durante el trabajo individual, la lectura, los exámenes, los rincones o el trabajo en grupo. Toda la clase comparte una pantalla y el alumnado no necesita nada.",
    "guide.faqTitle": "Preguntas frecuentes",
    "guide.faq.free.q": "¿Shy Safari es gratis?",
    "guide.faq.free.a":
      "Sí. No hay muros de pago, ni anuncios, ni versión premium. Nació en el EdTech-a-thon, una comunidad que crea herramientas gratuitas para las aulas, y lo mantiene teacher.dev.",
    "guide.faq.record.q": "¿Graba lo que pasa en el aula?",
    "guide.faq.record.a":
      "No. El micrófono solo se usa para medir lo fuerte que suena la clase, como un único número, momento a momento, en tu ordenador. No se graba, no se guarda y no se envía nada a ningún sitio.",
    "guide.faq.accounts.q": "¿Necesitamos una cuenta mis alumnos o yo?",
    "guide.faq.accounts.a":
      "No. No hay registro, ni inicio de sesión, ni nada que instalar. Los ajustes se guardan en el navegador de ese ordenador.",
    "guide.faq.devices.q": "¿Qué necesito para usarlo?",
    "guide.faq.devices.a":
      "Un ordenador con micrófono y un navegador actualizado, como Chrome, Edge, Firefox o Safari. Funciona en portátiles, Chromebooks y pizarras digitales. Está pensado para un proyector o una pantalla grande, pero también funciona en una tableta o un móvil.",
    "guide.faq.languages.q": "¿En qué idiomas está?",
    "guide.faq.languages.a":
      "En inglés, español y francés. Sigue el idioma del navegador, y puedes cambiarlo desde el menú de la parte superior de la pantalla.",
    "guide.faq.meter.q": "¿En qué se diferencia de un medidor de ruido?",
    "guide.faq.meter.a":
      "Un medidor de ruido le muestra a la clase lo fuerte que está hablando, y eso puede convertir el hacer ruido en un juego. Shy Safari solo muestra una escena tranquila que se va llenando de animales, así que lo que la clase ve es la recompensa por trabajar en silencio, y no hay ninguna puntuación que batir.",
  },
  scenes: {
    space: {
      "start.shy": "Un aula tranquila mantiene la señal limpia.",
      "start.explain":
        "El ruido llega como interferencias. Mientras el aula esté tranquila, el telescopio capta nuevos avistamientos; si hay demasiado ruido, espera a que la señal se aclare.",
      "start.explainFlee":
        "El ruido llega como interferencias. Si hay demasiado ruido, los avistamientos se deshacen en estática y se pierden; mientras el aula esté tranquila, aparecen otros nuevos.",
      "controls.animals": "Avistamientos",
      "loud.flee.label": "Los avistamientos se desvanecen",
      "loud.flee.hint":
        "Todo se congela y algunos se desvanecen entre la estática cada 5 segundos hasta que vuelva la calma",
      "loud.pause.hint": "Todo se queda quieto y no llegan señales nuevas",
      "settings.arrival": "Con qué frecuencia llegan avistamientos",
      "settings.aboutEvery": "Más o menos un avistamiento cada",
      "settings.summon": "Traer todos los avistamientos",
      "rate.hint": "más o menos un avistamiento cada {minutes} minutos",
      "settings.showCounter": "Contar los avistamientos a medida que llegan",
      "counter.label": "Avistamientos hasta ahora: {count}",
      "meter.paused": "En pausa — demasiadas interferencias",
      "meter.arriving": "Están llegando señales",
      "meter.goal":
        "Llegan nuevos avistamientos mientras el aula se mantiene a la izquierda de la línea ({goal}%)",
      "collection.title": "Avistamientos",
      "collection.spotted": "{class}: {seen} de {total} observados",
      "collection.notSeen": "Aún no observado",
      "collection.seen": "Observado {count}×",
      "chance.common.label": "Probabilidad de avistamientos comunes",
      "chance.uncommon.label": "Probabilidad de avistamientos poco comunes",
      "chance.rare.label": "Probabilidad de avistamientos raros",
      "blocked.title": "El telescopio necesita oír el aula",
      "notes.ink.dark": "Blanco",
    },
  },
  creatures: {
    meerkat: "Suricata",
    warthog: "Facóquero",
    zebra: "Cebra",
    gazelle: "Gacela de Thomson",
    ostrich: "Avestruz",
    "guinea-fowl": "Pintada",
    tortoise: "Tortuga",
    hornbill: "Cálao",
    giraffe: "Jirafa",
    hippo: "Hipopótamo",
    rhino: "Rinoceronte",
    cheetah: "Guepardo",
    flamingo: "Flamenco",
    vulture: "Buitre",
    lion: "León",
    leopard: "Leopardo",
    elephant: "Elefante",
    clownfish: "Pez payaso",
    "blue-tang": "Cirujano azul",
    angelfish: "Pez ángel",
    seahorse: "Caballito de mar",
    starfish: "Estrella de mar",
    crab: "Cangrejo",
    shrimp: "Camarón",
    parrotfish: "Pez loro",
    pufferfish: "Pez globo",
    octopus: "Pulpo",
    "sea-turtle": "Tortuga marina",
    "moray-eel": "Morena",
    stingray: "Raya",
    "jellyfish-bloom": "Banco de medusas",
    cuttlefish: "Sepia",
    "hammerhead-shark": "Tiburón martillo",
    "manta-ray": "Mantarraya",
    "whale-shark": "Tiburón ballena",
    satellite: "Satélite",
    asteroid: "Asteroide",
    meteor: "Meteoro",
    "space-probe": "Sonda espacial",
    "space-capsule": "Cápsula espacial",
    astronaut: "Astronauta",
    "space-shuttle": "Transbordador espacial",
    iss: "Estación espacial",
    comet: "Cometa",
    "ringed-planet": "Planeta con anillos",
    moon: "Luna",
    "space-telescope": "Telescopio espacial",
    "gas-giant": "Gigante gaseoso",
    "spiral-galaxy": "Galaxia espiral",
    "black-hole": "Agujero negro",
    pulsar: "Púlsar",
    "ring-nebula": "Nebulosa anular",
    didelphodon: "Didelphodon",
    palaeosaniwa: "Palaeosaniwa",
    basilemys: "Basilemys",
    avisaurus: "Avisaurus",
    pectinodon: "Pectinodon",
    acheroraptor: "Achero\u00ADraptor",
    thescelosaurus: "Thescelo\u00ADsaurus",
    struthiomimus: "Struthio\u00ADmimus",
    anzu: "Anzu",
    pachycephalosaurus: "Pachy\u00ADcephalo\u00ADsaurus",
    dakotaraptor: "Dakota\u00ADraptor",
    ankylosaurus: "Ankylo\u00ADsaurus",
    triceratops: "Triceratops",
    edmontosaurus: "Edmonto\u00ADsaurus",
    tyrannosaurus: "Tyranno\u00ADsaurus",
    quetzalcoatlus: "Quetzal\u00ADcoatlus",
    alamosaurus: "Alamosaurus",
    chipmunk: "Ardilla listada",
    "gray-squirrel": "Ardilla gris",
    robin: "Petirrojo",
    hedgehog: "Erizo",
    cottontail: "Conejo de cola blanca",
    woodpecker: "Pájaro carpintero",
    skunk: "Mofeta",
    raccoon: "Mapache",
    "great-horned-owl": "Búho cornudo",
    porcupine: "Puercoespín",
    badger: "Tejón",
    beaver: "Castor",
    "red-fox": "Zorro rojo",
    "white-tailed-deer": "Ciervo de cola blanca",
    "gray-wolf": "Lobo gris",
    "black-bear": "Oso negro",
    moose: "Alce",
    "poison-dart-frog": "Rana venenosa",
    "tree-frog": "Rana de ojos rojos",
    butterfly: "Mariposa morfo",
    hummingbird: "Colibrí",
    toucan: "Tucán",
    capuchin: "Mono capuchino",
    iguana: "Iguana verde",
    capybara: "Capibara",
    chameleon: "Camaleón",
    sloth: "Perezoso",
    macaw: "Guacamayo rojo",
    orangutan: "Orangután",
    okapi: "Okapi",
    tapir: "Tapir malayo",
    jaguar: "Jaguar",
    gorilla: "Gorila",
    tiger: "Tigre",
    lemming: "Lemming",
    "arctic-hare": "Liebre ártica",
    ptarmigan: "Perdiz nival",
    puffin: "Frailecillo",
    "arctic-tern": "Charrán ártico",
    "arctic-fox": "Zorro ártico",
    "harp-seal": "Foca arpa",
    eider: "Eider real",
    "snowy-owl": "Búho nival",
    caribou: "Caribú",
    "musk-ox": "Buey almizclero",
    "arctic-wolf": "Lobo ártico",
    walrus: "Morsa",
    beluga: "Beluga",
    "polar-bear": "Oso polar",
    narwhal: "Narval",
    "bowhead-whale": "Ballena de Groenlandia",
    "harvest-mouse": "Ratón espiguero",
    "garden-spider": "Araña de jardín",
    toad: "Sapo",
    "brown-bat": "Murciélago marrón",
    crow: "Cuervo",
    "barn-owl": "Lechuza",
    "black-cat": "Gato negro",
    "little-ghost": "Fantasmita",
    "cloudy-moon": "Luna nublada",
    gourdling: "Calabacito",
    scarecrow: "Espantapájaros",
    mummy: "Momia",
    vampire: "Vampiro",
    gargoyle: "Gárgola",
    "howling-wolf": "Lobo aullador",
    "great-boo": "El Gran Bu",
    "jack-o-lantern": "Jack O. Lantern",
  },
  facts: {
    didelphodon:
      "Un pariente de los marsupiales con la mordida más fuerte, para su tamaño, de todos los mamíferos conocidos.",
    palaeosaniwa: "Un gran lagarto cazador, pariente de los varanos actuales.",
    basilemys:
      "Una tortuga terrestre de caparazón bajo y ancho, con una textura rugosa y picada.",
    avisaurus:
      "Un “ave opuesta”, el tipo de ave más común en la era de los dinosaurios. Todas se extinguieron con ellos.",
    pectinodon:
      "Su nombre significa “diente de peine”, por las grandes sierras de sus dientes, casi lo único que se ha encontrado de él.",
    acheroraptor:
      "Un raptor con plumas que debe su nombre al Aqueronte, un río del inframundo en la mitología griega.",
    thescelosaurus:
      "Su nombre significa “lagarto maravilloso”. Un herbívoro robusto con pico y mejillas.",
    struthiomimus:
      "Su nombre significa “imitador de avestruz”: pico sin dientes, patas largas y alas con plumas.",
    anzu: "Debe su nombre a un demonio con plumas de la mitología mesopotámica. Tenía una cresta alta en la cabeza, como un casuario.",
    pachycephalosaurus:
      "La cúpula de hueso de su cabeza medía hasta 25 cm de grosor.",
    dakotaraptor:
      "Unas protuberancias en los huesos de su antebrazo muestran dónde se anclaban grandes plumas de las alas.",
    ankylosaurus:
      "Su cola acababa en una maza de hueso soldado, sobre una cola rígida para blandirla.",
    triceratops: "El dinosaurio grande más común en las rocas de Hell Creek.",
    edmontosaurus:
      "Su piel momificada muestra una cresta carnosa en el lomo, púas en la cola y pezuñas en los dedos.",
    tyrannosaurus:
      "Una de las mordidas más fuertes de cualquier animal terrestre. Seguramente unos labios le cubrían los dientes, como a los lagartos.",
    quetzalcoatlus:
      "Un pterosaurio de unos 10 m de envergadura, tan alto como una jirafa cuando se apoyaba en las cuatro patas.",
    alamosaurus:
      "Uno de los últimos saurópodos y, con 26 m o más, uno de los animales más grandes de su época.",
    // The arctic animals.
    lemming:
      "No hiberna: pasa todo el invierno en túneles bajo la nieve, donde hace menos frío.",
    "arctic-hare":
      "Puede correr a 60 km/h y a veces avanza a saltos solo con las patas traseras, como un canguro.",
    ptarmigan:
      "Las plumas de sus patas funcionan como raquetas de nieve, y en invierno se vuelve toda blanca menos la cola.",
    puffin:
      "Su pico solo tiene estos colores en verano, y puede llevar en él más de diez peces pequeños a la vez.",
    "arctic-tern":
      "Cada año vuela del Ártico a la Antártida y vuelta, el viaje más largo de cualquier animal.",
    "arctic-fox":
      "Su pelaje espeso lo abriga a −50 °C, y se envuelve con su cola peluda como si fuera una manta.",
    "harp-seal":
      "Las crías nacen con un pelo blanco y esponjoso, que cambian por uno gris y moteado unas semanas después.",
    eider:
      "Los eideres forran el nido con el plumón de su propio pecho, una de las plumas más calentitas que existen.",
    "snowy-owl":
      "A diferencia de casi todos los búhos, caza de día: en el verano ártico el sol nunca se pone.",
    caribou:
      "Tanto los machos como las hembras tienen cuernos, y sus manadas recorren cada año más distancia que ningún otro mamífero terrestre.",
    "musk-ox":
      "Ante un peligro, la manada forma un círculo con los cuernos hacia fuera y las crías a salvo en el centro.",
    "arctic-wolf":
      "Vive tan al norte que algunas manadas casi nunca se han cruzado con personas.",
    walrus: "Usa sus largos colmillos para salir del agua y subirse al hielo.",
    beluga:
      "La llaman el canario del mar por sus silbidos y chirridos. A diferencia de casi todas las ballenas, puede girar la cabeza.",
    "polar-bear":
      "Bajo su espeso pelaje blanco tiene la piel negra, para absorber el calor del sol.",
    narwhal:
      "Su colmillo es un diente en espiral que le atraviesa el labio superior y mide hasta 3 m.",
    "bowhead-whale":
      "Puede romper el hielo con su enorme cabeza y vivir más de 200 años.",
    "harvest-mouse":
      "Es uno de los ratones más pequeños del mundo y puede enrollar la cola en un tallo como si fuera otra mano.",
    "garden-spider":
      "Teje una tela nueva casi cada noche, y a menudo se come la vieja.",
    toad: "Tocar un sapo no te da verrugas: sus bultos son simplemente su piel.",
    "brown-bat":
      "Encuentra insectos en la oscuridad por el eco, y puede cazar cientos en una hora.",
    crow: "Los cuervos reconocen caras humanas y las recuerdan durante años.",
    "barn-owl":
      "Su cara en forma de corazón recoge el sonido como una antena, y así caza a oscuras.",
    "black-cat":
      "En Escocia y en Japón se dice que un gato negro que se cruza en tu camino trae buena suerte.",
    "little-ghost":
      "Un fantasma con una sábana es uno de los disfraces de Halloween más antiguos que hay.",
    "cloudy-moon":
      "La Luna siempre muestra la misma cara a la Tierra; nadie vio su cara oculta hasta 1959.",
    gourdling:
      "Las calabazas son frutos, no verduras: nacen de una flor y están llenas de semillas.",
    scarecrow:
      "Los agricultores llevan miles de años haciendo espantapájaros para proteger sus cultivos.",
    mummy:
      "Los antiguos egipcios envolvían una momia en cientos de metros de vendas de lino.",
    vampire:
      "Los murciélagos vampiro de verdad viven en América Central y del Sur, y comparten su comida con los amigos que pasan hambre.",
    gargoyle:
      "Las gárgolas de verdad son desagües: el agua de lluvia sale por su boca, lejos de las paredes.",
    "howling-wolf":
      "Los lobos aúllan para reunir a su manada, y un aullido se oye a kilómetros.",
    "great-boo":
      "La gente lleva gritando «¡Bu!» para asustarse desde por lo menos el siglo XVIII.",
    "jack-o-lantern":
      "Las primeras linternas de Halloween se tallaban en nabos en Irlanda; en América las sustituyeron las calabazas.",
  },
} satisfies Language;

const fr = {
  name: "Français",
  locale: "fr",
  ui: {
    "language.change": "Changer de langue",
    "app.name": "Shy Safari",
    "app.pageTitle": "Shy Safari — sonomètre gratuit pour la classe",
    "app.description":
      "Un sonomètre gratuit pour le vidéoprojecteur de la classe. Des animaux timides de la savane et du récif sortent tant que la classe reste calme. Sans inscription, sans enregistrement.",
    "brand.title": "Créé par teacher.dev",
    "common.builtBy": "Créé par teacher.dev",
    "common.about": "à propos",
    "common.privacy": "confidentialité",
    "common.howItWorks": "comment ça marche",
    "preview.alt":
      "Une savane paisible avec un éléphant, des zèbres, un lion, une girafe et un suricate, à côté des mots Shy Safari, un sonomètre gratuit pour la classe",
    "common.back": "← Retour à Shy Safari",
    "common.close": "Fermer",
    "common.cancel": "Annuler",
    "common.done": "Terminé",
    "fullScreen.enter": "Plein écran",
    "fullScreen.exit": "Quitter le plein écran",
    "float.open": "Détacher au-dessus des autres onglets",
    "float.openHint":
      "Afficher la scène dans une petite fenêtre au-dessus de vos diapositives ou d’autres onglets",
    "float.failed": "Impossible d’ouvrir la fenêtre flottante.",
    "floating.title": "Shy Safari est dans une fenêtre flottante",
    "floating.instructions":
      "La scène est dans sa propre fenêtre au-dessus de vos autres onglets et continue d’écouter la classe. Gardez cet onglet ouvert : le bouton de retour à l’onglet de la fenêtre la ramène ici.",
    "floating.return": "Ramener Shy Safari ici",
    "start.shy": "Chut… ces animaux sont timides !",
    "start.explain":
      "S’il y a trop de bruit, ils restent cachés. Quand la classe redevient calme, ils commencent à sortir.",
    "start.button": "Commencer",
    "start.micNote":
      "Le navigateur va demander l’accès au micro. Le son est mesuré sur cet ordinateur ; il n’est jamais enregistré ni envoyé nulle part.",
    "scene.label": "Décor",
    "scene.change": "Changer de décor",
    "scene.new": "Nouveau",
    "scene.newScenes": "Nouveaux décors",
    "scene.savanna.name": "Savane",
    "scene.savanna.hint": "Zèbres, girafes et lions",
    "scene.reef.name": "Récif de corail",
    "scene.reef.hint": "Poissons, tortues et requins",
    "scene.space.name": "Espace profond",
    "scene.space.hint": "Satellites, comètes et galaxies",
    "scene.prehistoric.name": "Préhistoire",
    "scene.prehistoric.hint": "T. rex, tricératops et raptors",
    "scene.forest.name": "Forêt",
    "scene.forest.hint": "Écureuils, renards et cerfs",
    "scene.jungle.name": "Jungle",
    "scene.jungle.hint": "Paresseux, toucans et jaguars",
    "scene.arctic.name": "Arctique",
    "scene.arctic.hint": "Ours polaires, phoques et narvals",
    "scene.halloween.name": "Halloween",
    "scene.halloween.hint": "Chauves-souris, fantômes et citrouilles",
    "hollow.limited": "Édition limitée",
    "hollow.daily": "Un nouvel animal chaque jour d’école",
    "hollow.closesIn": "Part dans {days} jours",
    "hollow.lastDay": "Dernier jour !",
    "hollow.newToday": "Quelqu’un de nouveau est arrivé parmi les citrouilles…",
    "hollow.signClosesIn": "Les citrouilles s’en vont dans {days} jours",
    "hollow.signLastDay": "Dernier jour parmi les citrouilles",
    "collection.unlocksInDays": "Débloqué dans {days}\u00a0jours",
    "collection.unlocksIn": "Débloqué dans {time}",
    "collection.comingSoon": "Bientôt",
    "collection.newToday": "Nouveau aujourd’hui",
    "collection.toCome": "encore {count} à venir",
    "controls.reset": "Réinitialiser",
    "controls.confirmReset": "Confirmer la réinitialisation",
    "controls.resetQuestion": "Vider ce décor et tout recommencer ?",
    "controls.resetYes": "Oui, réinitialiser",
    "controls.keepGoing": "Continuer",
    "controls.settings": "Réglages",
    "controls.animals": "Animaux",
    "controls.timer": "Minuteur",
    "timer.label": "Minuteur",
    "timer.minutes": "Minutes",
    "timer.seconds": "Secondes",
    "timer.start": "Démarrer",
    "timer.pause": "Pause",
    "timer.resume": "Reprendre",
    "timer.reset": "Réinitialiser",
    "timer.done": "Temps écoulé !",
    "timer.close": "Fermer le minuteur",
    "timer.move":
      "Déplacer le minuteur : faites glisser son bord ou utilisez les flèches",
    "timer.resize":
      "Redimensionner le minuteur : faites glisser un coin ou utilisez les flèches",
    "timer.style": "Affichage du temps",
    "timer.style.digits": "Chiffres",
    "timer.style.circle": "Cercle",
    "timer.style.hourglass": "Sablier",
    "controls.addText": "Ajouter du texte",
    "controls.addTextHint": "Mettre des mots ou un dessin sur la scène",
    "notes.label": "Texte sur la scène",
    "notes.text": "Mots",
    "notes.placeholder": "Écrivez ici…",
    "notes.drawing": "Dessin",
    "notes.tools": "Outils de texte",
    "notes.mode": "Écrire ou dessiner",
    "notes.type": "Écrire",
    "notes.draw": "Dessiner",
    "notes.ink": "Couleur",
    "notes.ink.dark": "Foncé",
    "notes.ink.red": "Rouge",
    "notes.ink.blue": "Bleu",
    "notes.ink.green": "Vert",
    "notes.undo": "Annuler",
    "notes.clear": "Effacer le dessin",
    "notes.delete": "Supprimer",
    "controls.pause": "Pause",
    "controls.pauseHint":
      "Arrêter d’écouter un moment, pour pouvoir parler à la classe",
    "controls.resume": "Reprendre",
    "paused.status": "Sonomètre en pause",
    "classes.change": "Changer de classe",
    "classes.unnamed": "Ma classe",
    "classes.edit": "Modifier les classes",
    "classes.hint":
      "Chaque classe garde ses propres animaux et sa propre collection.",
    "classes.storage":
      "Vos classes sont enregistrées dans ce navigateur, sur cet ordinateur uniquement. Elles n’apparaîtront pas sur un autre ordinateur ou navigateur, et effacer les données du navigateur les supprime.",
    "classes.current": "À l’écran",
    "classes.rename": "Renommer",
    "classes.renameLabel": "Nouveau nom pour {name}",
    "classes.save": "Enregistrer",
    "classes.delete": "Supprimer",
    "classes.deleteLabel": "Supprimer {name}",
    "classes.addLabel": "Nom de la nouvelle classe",
    "classes.addPlaceholder": "p. ex. 2e heure",
    "classes.add": "Ajouter une classe",
    "classes.deleteTitle": "Vous confirmez ?",
    "classes.deleteBody":
      "Supprimer {name} ? Les animaux sortis dans chaque décor et toute sa collection disparaîtront pour de bon.",
    "classes.deleteOnly":
      "C’est votre seule classe : une nouvelle classe vide la remplacera.",
    "classes.deleteYes": "Oui, supprimer",
    "settings.title": "Réglages",
    "settings.microphone": "Micro",
    "settings.meter": "Sonomètre",
    "settings.showMeter": "Afficher à l’écran",
    "settings.showMeterHint":
      "Garder le sonomètre au-dessus de la scène pendant que la classe travaille",
    "start.explainFlee":
      "S’il y a trop de bruit, ils s’enfuient ! Gardez la classe calme et ils sortiront et resteront.",
    "settings.tooLoud": "Quand il y a trop de bruit",
    "loud.flee.label": "Les animaux s’enfuient",
    "loud.flee.hint":
      "Tout le monde se fige, et certains s’enfuient toutes les 5 secondes jusqu’au retour du calme",
    "loud.pause.label": "Mettre la scène en pause",
    "loud.pause.hint": "Les animaux restent immobiles et aucun nouveau ne sort",
    "settings.arrival": "Fréquence d’arrivée des animaux",
    "settings.aboutEvery": "Environ un animal toutes les",
    "settings.minutes": "minutes",
    "settings.showCounter": "Compter les animaux à mesure qu’ils arrivent",
    "counter.label": "Animaux arrivés : {count}",
    "settings.tryIt": "Essayer",
    "settings.summon": "Faire sortir tous les animaux",
    "settings.advanced": "Avancé",
    "settings.previewHalloween": "Voir les personnages d’Halloween",
    "preview.title": "Personnages d’Halloween",
    "preview.opening": "Là dès le début",
    "preview.unlocks": "Débloqué le {date}",
    "settings.savedNote":
      "Les réglages sont enregistrés sur cet ordinateur uniquement. Le son du micro ne quitte jamais l’appareil.",
    "goal.silent.label": "Silence",
    "goal.silent.hint": "Personne ne parle",
    "goal.independent.label": "Travail seul",
    "goal.independent.hint": "Chuchotements seulement",
    "goal.partner.label": "En binôme",
    "goal.partner.hint": "Voix de conversation",
    "rate.relaxed": "Tranquille",
    "rate.normal": "Normal",
    "rate.lively": "Animé",
    "rate.hint": "environ un animal toutes les {minutes} minutes",
    "mic.default": "Micro par défaut",
    "mic.numbered": "Micro {number}",
    "mic.connecting": "Connexion…",
    "mic.connect": "Connecter le micro",
    "meter.current": "Volume actuel",
    "meter.paused": "En pause — trop de bruit",
    "meter.arriving": "Les animaux arrivent",
    "meter.goal":
      "Les animaux arrivent tant que la classe reste à gauche de la ligne ({goal} %)",
    "calibration.title": "Étalonnage",
    "calibration.needMic": "Connectez d’abord un micro",
    "calibration.calibrated": "✓ Étalonné",
    "calibration.fit": "Adapter le sonomètre à votre micro",
    "calibration.calibrate": "Étalonner",
    "calibration.recalibrate": "Réétalonner",
    "calibration.dialogTitle": "Étalonner cette salle",
    "calibration.progress": "Progression",
    "calibration.stepQuiet": "Salle silencieuse",
    "calibration.stepTalking": "Conversation normale",
    "calibration.stepDone": "Terminé",
    "calibration.introLead": "Étape 1 :",
    "calibration.intro":
      "demandez à la classe de faire un silence complet. Quand c’est prêt, nous écouterons pendant {seconds} secondes.",
    "calibration.quietButton": "La salle est silencieuse !",
    "calibration.listening": "Écoute :",
    "calibration.quietLeft": "gardez le silence encore {seconds} secondes…",
    "calibration.readyLead": "Étape 2 :",
    "calibration.ready":
      "demandez à la classe de parler au volume habituel du travail.",
    "calibration.talkingButton": "La classe parle !",
    "calibration.talkingLeft":
      "continuez à parler normalement encore {seconds} secondes…",
    "calibration.doneLead": "Étalonné.",
    "calibration.done":
      "Le sonomètre suit maintenant l’échelle de cette salle — vérifiez que la ligne d’objectif est toujours là où vous la voulez.",
    "calibration.retryLead": "Essayons encore une fois.",
    "calibration.retry":
      "Les deux mesures étaient trop proches pour être distinguées — la salle n’était peut-être pas silencieuse, ou le micro ne capte pas la classe.",
    "calibration.startAgain": "Recommencer",
    "calibration.hears": "Ce que le micro entend",
    "collection.title": "Animaux",
    "collection.spotted": "{class} : {seen} sur {total} aperçus",
    "collection.notSeen": "Pas encore vu",
    "collection.seen": "Vu {count}×",
    "tier.common": "Communs",
    "tier.uncommon": "Peu communs",
    "tier.rare": "Rares",
    "chance.common.label": "Probabilité des animaux communs",
    "chance.uncommon.label": "Probabilité des animaux peu communs",
    "chance.rare.label": "Probabilité des animaux rares",
    "chance.common": "{percent} % des arrivées sont communes",
    "chance.uncommon": "{percent} % des arrivées sont peu communes",
    "chance.rare": "{percent} % des arrivées sont rares",
    "blocked.title": "Les animaux ont besoin d’entendre la classe",
    "blocked.denied":
      "Ce navigateur a bloqué l’accès au micro. Cliquez sur le cadenas ou l’icône de caméra dans la barre d’adresse, autorisez le micro, puis réessayez.",
    "blocked.missing":
      "Ce micro n’est plus disponible. Choisissez-en un autre ci-dessous et réessayez.",
    "blocked.unsupported":
      "Ce navigateur ne peut pas utiliser de micro. Chrome, Edge et Safari fonctionnent tous.",
    "blocked.tryAgain": "Réessayer",
    "about.pageTitle": "À propos — Shy Safari",
    "about.meta":
      "Shy Safari est un outil gratuit pour le bruit en classe, créé à l’EdTech-a-thon et géré par teacher.dev. Sans publicité ni compte.",
    "about.title": "À propos",
    "about.lede":
      "Affichez-le au tableau. Plus la classe est calme, plus il y a d’animaux.",
    "about.originTitle": "D’où ça vient",
    "about.origin.beforeEvent":
      "Shy Safari a commencé comme un projet de trois jours à l’",
    "about.origin.afterEvent":
      ", un événement où l’on se réunit pour créer des outils gratuits pour les classes. Il est maintenant géré par ",
    "about.origin.afterTeacher": ", où vous trouverez aussi nos autres outils.",
    "about.photoAlt": "Participants de l’EdTech-a-thon 2026",
    "about.purposeTitle": "Ce qu’il fait",
    "about.purpose":
      "Affichez la savane, le récif de corail, l’espace profond, l’ère des dinosaures, la forêt, la jungle ou l’Arctique au tableau et appuyez sur Commencer. Tant que la classe reste sous l’objectif de volume, les animaux sortent un par un. S’il y a trop de bruit, ils s’enfuient. Vous pouvez changer ça dans les réglages pour que la scène se mette simplement en pause jusqu’au retour du calme. La plupart des animaux sont communs, quelques-uns sont rares, et la classe peut revoir tous ceux qu’elle a aperçus.",
    "about.promiseTitle": "Gratuit, vraiment",
    "about.promise":
      "C’est gratuit. Il n’y a ni version payante ni publicité, et nous ne collectons aucune donnée personnelle sur vous ou vos élèves.",
    "about.feedbackTitle": "Nous écrire",
    "about.feedback":
      "Si quelque chose ne marche pas, ou si vous avez une idée pour Shy Safari ou pour un autre outil que vous utiliseriez en classe, envoyez-nous un e-mail.",
    "about.email": "Écrire à support@teacher.dev",
    "privacy.pageTitle": "Confidentialité — Shy Safari",
    "privacy.meta":
      "Ce que Shy Safari collecte, ce qu’il ne collecte pas, et pourquoi.",
    "privacy.title": "Confidentialité",
    "privacy.lede":
      "Ce que nous collectons, ce que nous ne collectons pas, et pourquoi.",
    "privacy.microphone":
      "Shy Safari écoute par le micro uniquement pour mesurer le niveau sonore de la classe. Le son est transformé en un simple niveau de volume sur cet ordinateur, instant après instant ; il n’est jamais enregistré, jamais conservé et jamais envoyé nulle part.",
    "privacy.local":
      "Il n’y a pas de compte, et nous ne collectons aucune information personnelle sur les enseignants ou les élèves. Vos réglages, votre étalonnage et les animaux aperçus par chacune de vos classes sont conservés dans le stockage local de ce navigateur, sur cet ordinateur uniquement ; effacer les données du navigateur les supprime.",
    "privacy.analytics.beforeLink":
      "Nous utilisons Cloudflare Web Analytics pour compter les visites de façon anonyme, ce qui nous aide à comprendre comment Shy Safari est utilisé en classe. Cloudflare Web Analytics n’utilise pas de cookies, ne crée pas d’empreinte des visiteurs et ne les suit pas sur d’autres sites ; consultez la ",
    "privacy.analytics.link": "politique de confidentialité",
    "privacy.analytics.afterLink":
      " de Cloudflare pour en savoir plus. Nous ne partageons, ne vendons ni ne transférons d’aucune autre manière les données des visiteurs à des tiers.",
    "privacy.contact": "Des questions ou des inquiétudes ? Écrivez à ",
    "guide.title": "Comment fonctionne Shy Safari",
    "guide.lede":
      "Un sonomètre gratuit pour la classe qui récompense le calme au lieu de punir le bruit.",
    "guide.whatTitle": "Ce que c'est",
    "guide.what":
      "Shy Safari est un sonomètre pour la classe qui fonctionne dans le navigateur. Affichez-le au vidéoprojecteur ou sur le tableau interactif : il montre une savane, un récif de corail, un ciel de l'espace profond, une plaine du Crétacé, une clairière en forêt, une jungle tropicale ou une banquise arctique paisibles. Il écoute le niveau sonore de la salle grâce au micro de l'ordinateur et, tant que la classe reste sous l'objectif de volume, des animaux timides sortent un par un. C'est le contraire d'un sonomètre qui s'agite : pas de score, pas d'aiguille, pas de voyant rouge, donc rien ne rend le bruit plus intéressant que le calme.",
    "guide.useTitle": "L'utiliser en classe",
    "guide.use.open":
      "Ouvrez shysafari.com sur l'ordinateur relié au vidéoprojecteur, choisissez la savane, le récif de corail, l'espace profond, la préhistoire, la forêt, la jungle ou l'Arctique, puis appuyez sur Commencer. Le navigateur demande l'accès au micro.",
    "guide.use.goal":
      "Réglez l'objectif de volume pour l'activité : Silence, Travail seul (chuchotements) ou En binôme (voix de conversation), ou faites glisser la ligne du sonomètre n'importe où entre les deux.",
    "guide.use.rate":
      "Laissez la classe travailler. Le premier animal arrive après 10 à 20 secondes de calme, puis environ un toutes les cinq minutes de travail silencieux. Choisissez Tranquille, Normal ou Animé dans les réglages, ou saisissez le nombre de minutes de votre choix.",
    "guide.loudTitle": "Comment il décide que c'est trop bruyant",
    "guide.loud":
      "Les bruits brefs, comme un coup à la porte ou un livre qui tombe, ne comptent pas. La classe doit dépasser l'objectif un petit moment : environ six secondes si elle le dépasse à peine, ou environ une seconde si c'est beaucoup plus fort. Une fois le calme revenu, la scène s'éclaircit en trois secondes.",
    "guide.calibrate":
      "L'étalonnage est facultatif. Cinq secondes de silence et cinq secondes de conversation normale apprennent à l'application comment sonnent votre salle et votre micro.",
    "guide.tooLoudTitle": "Ce qui se passe quand c'est trop bruyant",
    "guide.tooLoud":
      "La scène se trouble, avec une brume de poussière sur la savane, une eau trouble sur le récif, des interférences dans l'espace profond, de la brume sur la rivière à la préhistoire, du brouillard entre les arbres en forêt, une averse tropicale dans la jungle et un blizzard tout blanc dans l'Arctique, et aucun nouvel animal ne sort. La suite dépend de votre choix :",
    "guide.tooLoud.flee":
      "Les animaux s'enfuient (par défaut). La scène se fige et, tant que la salle reste trop bruyante, un animal puis quelques autres toutes les cinq secondes s'enfuient hors de l'écran. Dans l'espace profond, ils se dissolvent plutôt dans les parasites.",
    "guide.tooLoud.pause":
      "Mettre la scène en pause. Les animaux restent immobiles, rien n'est perdu, et la progression vers le prochain animal attend que la classe se calme.",
    "guide.animalsTitle": "Les animaux",
    "guide.animals":
      "La savane compte 17 animaux, des suricates et des zèbres aux girafes, hippopotames et rhinocéros, avec les lions, les léopards et les éléphants parmi les plus rares. Le récif de corail en compte 18, des poissons-clowns et hippocampes aux tortues marines et pieuvres, avec les requins-marteaux, les raies manta et les requins-baleines parmi les plus rares. L'espace profond compte 17 observations pour les plus grands, des satellites, astéroïdes et astronautes à la station spatiale, aux comètes et aux planètes comme Saturne, avec une galaxie spirale, un trou noir, un pulsar et une nébuleuse annulaire parmi les plus rares. La préhistoire compte 17 animaux de la toute fin de l'ère des dinosaures, dessinés d'après la science actuelle, des petits mammifères, lézards et raptors à plumes aux Triceratops et Ankylosaurus, avec Tyrannosaurus, Quetzalcoatlus et le géant Alamosaurus parmi les plus rares. La forêt compte 17 animaux, des tamias, rouges-gorges et hérissons aux ratons laveurs, renards et cerfs, avec un loup gris, un ours noir et un élan parmi les plus rares. La jungle compte 17 animaux de la forêt tropicale, des grenouilles venimeuses, toucans et capucins aux paresseux, aras et orangs-outans, avec les jaguars, les gorilles et les tigres parmi les plus rares. L'Arctique compte 17 animaux, des lemmings, macareux et renards arctiques aux caribous, morses et bélugas, avec les ours polaires, les narvals et les baleines boréales parmi les plus rares. Les animaux communs arrivent souvent et les plus rares sont un vrai événement que beaucoup de séances ne verront pas. Chaque scène garde ses propres animaux, et la collection se souvient de tous ceux que la classe a aperçus.",
    "guide.forTitle": "Pour qui",
    "guide.for":
      "Pour les enseignants de tous niveaux qui veulent un repère visuel et apaisant du niveau de voix pendant le travail autonome, la lecture, les évaluations, les ateliers ou le travail de groupe. Toute la classe partage un seul écran et les élèves n'ont besoin de rien.",
    "guide.faqTitle": "Questions fréquentes",
    "guide.faq.free.q": "Shy Safari est-il gratuit ?",
    "guide.faq.free.a":
      "Oui. Pas de paiement, pas de publicité, pas de version premium. Il est né de l'EdTech-a-thon, une communauté qui crée des outils gratuits pour les classes, et il est maintenu par teacher.dev.",
    "guide.faq.record.q": "Est-ce qu'il enregistre la classe ?",
    "guide.faq.record.a":
      "Non. Le micro sert uniquement à mesurer le niveau sonore de la salle, sous la forme d'un seul nombre, instant après instant, sur votre ordinateur. Rien n'est enregistré, conservé ni envoyé nulle part.",
    "guide.faq.accounts.q": "Mes élèves ou moi avons-nous besoin d'un compte ?",
    "guide.faq.accounts.a":
      "Non. Pas d'inscription, pas de connexion, rien à installer. Les réglages sont conservés dans le navigateur de cet ordinateur.",
    "guide.faq.devices.q": "De quoi ai-je besoin pour l'utiliser ?",
    "guide.faq.devices.a":
      "D'un ordinateur avec un micro et d'un navigateur à jour comme Chrome, Edge, Firefox ou Safari. Il fonctionne sur les ordinateurs portables, les Chromebooks et les tableaux interactifs. Il est pensé pour un vidéoprojecteur ou un grand écran, mais fonctionne aussi sur tablette ou téléphone.",
    "guide.faq.languages.q": "Quelles langues sont disponibles ?",
    "guide.faq.languages.a":
      "L'anglais, l'espagnol et le français. Il suit la langue du navigateur, et vous pouvez la changer depuis le menu en haut de l'écran.",
    "guide.faq.meter.q": "En quoi est-ce différent d'un sonomètre ?",
    "guide.faq.meter.a":
      "Un sonomètre montre à la classe à quel point elle est bruyante, ce qui peut transformer le bruit en jeu. Shy Safari ne montre qu'une scène paisible qui se remplit peu à peu d'animaux : ce que la classe voit, c'est la récompense du travail silencieux, et il n'y a aucun score à battre.",
  },
  scenes: {
    space: {
      "start.shy": "Une salle calme garde le signal clair.",
      "start.explain":
        "Le bruit devient des interférences. Tant que la classe reste calme, le télescope capte de nouvelles observations ; s’il y a trop de bruit, il attend que le signal redevienne clair.",
      "start.explainFlee":
        "Le bruit devient des interférences. S’il y a trop de bruit, les observations se dissolvent dans les parasites et sont perdues ; tant que la classe reste calme, de nouvelles apparaissent.",
      "controls.animals": "Observations",
      "loud.flee.label": "Les observations s’effacent",
      "loud.flee.hint":
        "Tout se fige, et certaines se perdent dans les parasites toutes les 5 secondes jusqu’au retour du calme",
      "loud.pause.hint": "Tout reste immobile et aucun nouveau signal n’arrive",
      "settings.arrival": "Fréquence des nouvelles observations",
      "settings.aboutEvery": "Environ une observation toutes les",
      "settings.summon": "Faire apparaître toutes les observations",
      "rate.hint": "environ une observation toutes les {minutes} minutes",
      "settings.showCounter":
        "Compter les observations à mesure qu’elles arrivent",
      "counter.label": "Observations jusqu’ici : {count}",
      "meter.paused": "En pause — trop d’interférences",
      "meter.arriving": "Des signaux arrivent",
      "meter.goal":
        "De nouvelles observations arrivent tant que la classe reste à gauche de la ligne ({goal} %)",
      "collection.title": "Observations",
      "collection.spotted": "{class} : {seen} sur {total} observés",
      "collection.notSeen": "Pas encore observé",
      "collection.seen": "Observé {count}×",
      "chance.common.label": "Probabilité des observations communes",
      "chance.uncommon.label": "Probabilité des observations peu communes",
      "chance.rare.label": "Probabilité des observations rares",
      "blocked.title": "Le télescope a besoin d’entendre la classe",
      "notes.ink.dark": "Blanc",
    },
  },
  creatures: {
    meerkat: "Suricate",
    warthog: "Phacochère",
    zebra: "Zèbre",
    gazelle: "Gazelle de Thomson",
    ostrich: "Autruche",
    "guinea-fowl": "Pintade",
    tortoise: "Tortue",
    hornbill: "Calao",
    giraffe: "Girafe",
    hippo: "Hippopotame",
    rhino: "Rhinocéros",
    cheetah: "Guépard",
    flamingo: "Flamant rose",
    vulture: "Vautour",
    lion: "Lion",
    leopard: "Léopard",
    elephant: "Éléphant",
    clownfish: "Poisson-clown",
    "blue-tang": "Chirurgien bleu",
    angelfish: "Poisson-ange",
    seahorse: "Hippocampe",
    starfish: "Étoile de mer",
    crab: "Crabe",
    shrimp: "Crevette",
    parrotfish: "Poisson-perroquet",
    pufferfish: "Poisson-globe",
    octopus: "Pieuvre",
    "sea-turtle": "Tortue marine",
    "moray-eel": "Murène",
    stingray: "Raie",
    "jellyfish-bloom": "Banc de méduses",
    cuttlefish: "Seiche",
    "hammerhead-shark": "Requin-marteau",
    "manta-ray": "Raie manta",
    "whale-shark": "Requin-baleine",
    satellite: "Satellite",
    asteroid: "Astéroïde",
    meteor: "Météore",
    "space-probe": "Sonde spatiale",
    "space-capsule": "Capsule spatiale",
    astronaut: "Astronaute",
    "space-shuttle": "Navette spatiale",
    iss: "Station spatiale",
    comet: "Comète",
    "ringed-planet": "Planète à anneaux",
    moon: "Lune",
    "space-telescope": "Télescope spatial",
    "gas-giant": "Géante gazeuse",
    "spiral-galaxy": "Galaxie spirale",
    "black-hole": "Trou noir",
    pulsar: "Pulsar",
    "ring-nebula": "Nébuleuse annulaire",
    didelphodon: "Didelphodon",
    palaeosaniwa: "Palaeosaniwa",
    basilemys: "Basilemys",
    avisaurus: "Avisaurus",
    pectinodon: "Pectinodon",
    acheroraptor: "Achero\u00ADraptor",
    thescelosaurus: "Thescelo\u00ADsaurus",
    struthiomimus: "Struthio\u00ADmimus",
    anzu: "Anzu",
    pachycephalosaurus: "Pachy\u00ADcephalo\u00ADsaurus",
    dakotaraptor: "Dakota\u00ADraptor",
    ankylosaurus: "Ankylo\u00ADsaurus",
    triceratops: "Triceratops",
    edmontosaurus: "Edmonto\u00ADsaurus",
    tyrannosaurus: "Tyranno\u00ADsaurus",
    quetzalcoatlus: "Quetzal\u00ADcoatlus",
    alamosaurus: "Alamosaurus",
    chipmunk: "Tamia",
    "gray-squirrel": "Écureuil gris",
    robin: "Rouge-gorge",
    hedgehog: "Hérisson",
    cottontail: "Lapin à queue blanche",
    woodpecker: "Pic épeiche",
    skunk: "Mouffette",
    raccoon: "Raton laveur",
    "great-horned-owl": "Grand-duc d’Amérique",
    porcupine: "Porc-épic",
    badger: "Blaireau",
    beaver: "Castor",
    "red-fox": "Renard roux",
    "white-tailed-deer": "Cerf de Virginie",
    "gray-wolf": "Loup gris",
    "black-bear": "Ours noir",
    moose: "Élan",
    "poison-dart-frog": "Dendrobate",
    "tree-frog": "Rainette aux yeux rouges",
    butterfly: "Morpho bleu",
    hummingbird: "Colibri",
    toucan: "Toucan",
    capuchin: "Capucin",
    iguana: "Iguane vert",
    capybara: "Capybara",
    chameleon: "Caméléon",
    sloth: "Paresseux",
    macaw: "Ara rouge",
    orangutan: "Orang-outan",
    okapi: "Okapi",
    tapir: "Tapir de Malaisie",
    jaguar: "Jaguar",
    gorilla: "Gorille",
    tiger: "Tigre",
    lemming: "Lemming",
    "arctic-hare": "Lièvre arctique",
    ptarmigan: "Lagopède alpin",
    puffin: "Macareux moine",
    "arctic-tern": "Sterne arctique",
    "arctic-fox": "Renard arctique",
    "harp-seal": "Phoque du Groenland",
    eider: "Eider à tête grise",
    "snowy-owl": "Harfang des neiges",
    caribou: "Caribou",
    "musk-ox": "Bœuf musqué",
    "arctic-wolf": "Loup arctique",
    walrus: "Morse",
    beluga: "Béluga",
    "polar-bear": "Ours polaire",
    narwhal: "Narval",
    "bowhead-whale": "Baleine boréale",
    "harvest-mouse": "Rat des moissons",
    "garden-spider": "Épeire des jardins",
    toad: "Crapaud",
    "brown-bat": "Petite chauve-souris brune",
    crow: "Corneille",
    "barn-owl": "Chouette effraie",
    "black-cat": "Chat noir",
    "little-ghost": "Petit fantôme",
    "cloudy-moon": "Lune voilée",
    gourdling: "Citrouillon",
    scarecrow: "Épouvantail",
    mummy: "Momie",
    vampire: "Vampire",
    gargoyle: "Gargouille",
    "howling-wolf": "Loup hurleur",
    "great-boo": "Le Grand Bouh",
    "jack-o-lantern": "Jack O. Lantern",
  },
  facts: {
    didelphodon:
      "Un cousin des marsupiaux doté de la morsure la plus puissante, pour sa taille, de tous les mammifères connus.",
    palaeosaniwa: "Un grand lézard chasseur, parent des varans actuels.",
    basilemys:
      "Une tortue terrestre à la carapace basse et large, couverte d’une texture rugueuse et criblée.",
    avisaurus:
      "Un « oiseau opposé », le type d’oiseau le plus répandu à l’époque des dinosaures. Tous ont disparu avec eux.",
    pectinodon:
      "Son nom signifie « dent en peigne », pour les grosses dentelures de ses dents, presque tout ce qu’on a retrouvé de lui.",
    acheroraptor:
      "Un raptor à plumes nommé d’après l’Achéron, un fleuve des Enfers dans la mythologie grecque.",
    thescelosaurus:
      "Son nom signifie « lézard merveilleux ». Un herbivore trapu, avec un bec et des joues.",
    struthiomimus:
      "Son nom signifie « imitateur d’autruche » : bec sans dents, longues pattes et ailes à plumes.",
    anzu: "Nommé d’après un démon à plumes de la mythologie mésopotamienne. Il portait une haute crête sur la tête, comme un casoar.",
    pachycephalosaurus:
      "Le dôme osseux de son crâne atteignait 25 cm d’épaisseur.",
    dakotaraptor:
      "Des bosses sur les os de son avant-bras montrent où s’ancraient de grandes plumes d’aile.",
    ankylosaurus:
      "Sa queue se terminait par une massue d’os soudés, portée par une queue raidie pour la balancer.",
    triceratops:
      "Le grand dinosaure le plus courant dans les roches de Hell Creek.",
    edmontosaurus:
      "Sa peau momifiée montre une crête charnue sur le dos, des pointes sur la queue et des sabots aux orteils.",
    tyrannosaurus:
      "L’une des morsures les plus puissantes de tous les animaux terrestres. Des lèvres couvraient sans doute ses dents, comme chez les lézards.",
    quetzalcoatlus:
      "Un ptérosaure d’environ 10 m d’envergure, aussi grand qu’une girafe quand il se tenait sur ses quatre membres.",
    alamosaurus:
      "L’un des derniers sauropodes et, avec 26 m ou plus, l’un des plus grands animaux de son époque.",
    // The arctic animals.
    lemming:
      "Il n’hiberne pas : tout l’hiver, il vit dans des tunnels sous la neige, où il fait moins froid.",
    "arctic-hare":
      "Il peut courir à 60 km/h et se déplace parfois en sautant sur ses seules pattes arrière, comme un kangourou.",
    ptarmigan:
      "Les plumes de ses pattes font office de raquettes, et en hiver il devient tout blanc, sauf la queue.",
    puffin:
      "Son bec n’a ces couleurs qu’en été, et il peut y tenir plus de dix petits poissons à la fois.",
    "arctic-tern":
      "Chaque année, elle vole de l’Arctique à l’Antarctique et revient : le plus long voyage de tous les animaux.",
    "arctic-fox":
      "Sa fourrure épaisse le garde au chaud à −50 °C, et il s’enroule dans sa queue touffue comme dans une couverture.",
    "harp-seal":
      "Les petits naissent avec une fourrure blanche et duveteuse, qu’ils changent quelques semaines plus tard pour un pelage gris tacheté.",
    eider:
      "Les eiders garnissent leur nid du duvet de leur propre poitrine, l’une des plumes les plus chaudes qui soient.",
    "snowy-owl":
      "Contrairement à la plupart des chouettes, il chasse le jour : en été, dans l’Arctique, le soleil ne se couche jamais.",
    caribou:
      "Les mâles comme les femelles portent des bois, et les hardes parcourent chaque année plus de chemin que tout autre mammifère terrestre.",
    "musk-ox":
      "Face au danger, le troupeau forme un cercle, cornes vers l’extérieur, avec les petits à l’abri au milieu.",
    "arctic-wolf":
      "Il vit si loin au nord que certaines meutes n’ont presque jamais croisé d’humains.",
    walrus:
      "Il se sert de ses longues défenses pour se hisser hors de l’eau, sur la glace.",
    beluga:
      "On l’appelle le canari des mers pour ses sifflements et ses gazouillis. Contrairement à la plupart des baleines, il peut tourner la tête.",
    "polar-bear":
      "Sous son épaisse fourrure blanche, sa peau est noire, pour absorber la chaleur du soleil.",
    narwhal:
      "Sa défense est une dent en spirale qui traverse sa lèvre supérieure et mesure jusqu’à 3 m.",
    "bowhead-whale":
      "Elle peut briser la glace avec son énorme tête, et vivre plus de 200 ans.",
    "harvest-mouse":
      "C’est l’une des plus petites souris du monde, et sa queue s’enroule autour d’une tige comme une main de plus.",
    "garden-spider":
      "Elle tisse une toile toute neuve presque chaque nuit, et mange souvent l’ancienne.",
    toad: "On n’attrape pas de verrues en touchant un crapaud : ses bosses sont simplement sa peau.",
    "brown-bat":
      "Elle trouve les insectes dans le noir grâce à l’écho, et peut en attraper des centaines en une heure.",
    crow: "Les corneilles reconnaissent les visages humains, et s’en souviennent pendant des années.",
    "barn-owl":
      "Son visage en forme de cœur capte les sons comme une antenne, pour chasser dans le noir complet.",
    "black-cat":
      "En Écosse et au Japon, croiser un chat noir porterait bonheur.",
    "little-ghost":
      "Le fantôme en drap est l’un des plus vieux déguisements d’Halloween.",
    "cloudy-moon":
      "La Lune montre toujours la même face à la Terre ; personne n’a vu sa face cachée avant 1959.",
    gourdling:
      "Les citrouilles sont des fruits, pas des légumes : elles naissent d’une fleur et sont pleines de graines.",
    scarecrow:
      "Les paysans fabriquent des épouvantails pour protéger leurs récoltes depuis des milliers d’années.",
    mummy:
      "Les anciens Égyptiens enveloppaient une momie dans des centaines de mètres de bandelettes de lin.",
    vampire:
      "Les vraies chauves-souris vampires vivent en Amérique centrale et du Sud, et partagent leur repas avec leurs amies affamées.",
    gargoyle:
      "Les vraies gargouilles sont des gouttières : l’eau de pluie sort par leur bouche, loin des murs.",
    "howling-wolf":
      "Les loups hurlent pour rassembler leur meute, et un hurlement s’entend à des kilomètres.",
    "great-boo":
      "On crie « Bouh ! » pour se faire sursauter depuis au moins le XVIIIe siècle.",
    "jack-o-lantern":
      "Les premières lanternes d’Halloween étaient taillées dans des navets en Irlande ; en Amérique, la citrouille les a remplacés.",
  },
} satisfies Language;

const lt = {
  name: "Lietuvių",
  locale: "lt",
  ui: {
    "language.change": "Keisti kalbą",
    "app.name": "Drovus safaris",
    "app.pageTitle": "Drovus safaris — nemokamas klasės triukšmo lygio matuoklis",
    "app.description":
      "Nemokamas klasės triukšmo matuoklis projektoriaus ekrane. Drovūs savanos ir koralų rifo gyvūnėliai pasirodo, kol klasė tyli. Be registracijos, nieko neįrašoma.",
    "brand.title": "Sukurė teacher.dev",
    "common.builtBy": "Sukurė teacher.dev",
    "common.about": "apie",
    "common.privacy": "privatumas",
    "common.howItWorks": "kaip veikia",
    "preview.alt":
      "Rami savana su drambliu, zebrais, liūtu, žirafa ir surikata, šalia užrašo „Drovus safaris“ — nemokamas klasės triukšmo matuoklis",
    "common.back": "← Grįžti: Drovus safaris",
    "common.close": "Uždaryti",
    "common.cancel": "Atšaukti",
    "common.done": "Atlikta",
    "fullScreen.enter": "Visas ekranas",
    "fullScreen.exit": "Išeiti iš viso ekrano",
    "float.open": "Plaukioti virš kitų skirtukų",
    "float.openHint":
      "Perkelti sceną į mažą langelį virš skaidrių ar kitų skirtukų",
    "float.failed": "Nepavyko atidaryti plaukiojančio lango.",
    "floating.title": "Drovus safaris plaukioja",
    "floating.instructions":
      "Scena yra savo lango, virš kitų skirtukų, ir toliau klausosi klasės. Palikite šį skirtuką atidarytą: lango grįžimo mygtukas ją atneš atgal.",
    "floating.return": "Atnešti Drovą safarį atgal",
    "start.shy": "Ššš… šie gyvūnėliai yra drovūs!",
    "start.explain":
      "Jei per garsu, jie lieka pasislėpę. Kai klasė vėl tyla, jie pradės pasirodyti.",
    "start.button": "Pradėti",
    "start.micNote":
      "Jūsų naršyklė paprašys leisti naudoti mikrofoną. Garsas matuojamas šiame kompiuteryje ir niekada neįrašomas nei siunčiamas niekur.",
    "scene.label": "Scena",
    "scene.change": "Keisti sceną",
    "scene.new": "Nauja",
    "scene.newScenes": "Naujos scenos",
    "scene.savanna.name": "Savana",
    "scene.savanna.hint": "Zebrai, žirafos ir liūtai",
    "scene.reef.name": "Koralų rifas",
    "scene.reef.hint": "Žuvys, vėžliai ir rykliai",
    "scene.space.name": "Gili erdvė",
    "scene.space.hint": "Palydovai, kometai ir galaktikos",
    "scene.prehistoric.name": "Priešistorė",
    "scene.prehistoric.hint": "Tyrannosaurus, triceratopsai ir raptoriai",
    "scene.forest.name": "Miškas",
    "scene.forest.hint": "Voverės, lapės ir elniai",
    "scene.jungle.name": "Džiunglės",
    "scene.jungle.hint": "Tinginiai, tukantai ir jaguarai",
    "scene.arctic.name": "Arktika",
    "scene.arctic.hint": "Snieginiai lokiai, ruoniai ir narvalai",
    "scene.halloween.name": "Vėliniai",
    "scene.halloween.hint": "Varklynai, vaiduokliai ir moliūgai",
    "hollow.limited": "Riboto laiko",
    "hollow.daily": "Kiekvieną mokyklinę dieną naujas gyvūnas",
    "hollow.closesIn": "Išeina po {days} d.",
    "hollow.lastDay": "Paskutinė diena!",
    "hollow.newToday": "Šiandien moliūgų lauke kažkas naujo…",
    "hollow.signClosesIn": "Moliūgų laukas uždarys po {days} d.",
    "hollow.signLastDay": "Paskutinė diena moliūgų lauke",
    "collection.unlocksInDays": "Atsirums per {days} d.",
    "collection.unlocksIn": "Atsirums per {time}",
    "collection.comingSoon": "Artimiausiu laiku",
    "collection.newToday": "Nauja šiandien",
    "collection.toCome": "Laukia dar {count}",
    "controls.reset": "Atstatyti",
    "controls.confirmReset": "Patvirtinti atstatymą",
    "controls.resetQuestion": "Ištuštinti šią sceną ir pradėti iš naujo?",
    "controls.resetYes": "Taip, atstatyti",
    "controls.keepGoing": "Tęsti",
    "controls.settings": "Nustatymai",
    "controls.animals": "Gyvūnai",
    "controls.timer": "Laikmatis",
    "timer.label": "Laikmatis",
    "timer.minutes": "Minutės",
    "timer.seconds": "Sekundės",
    "timer.start": "Pradėti",
    "timer.pause": "Pristabdyti",
    "timer.resume": "Tęsti",
    "timer.reset": "Atstatyti",
    "timer.done": "Laikas baigėsi!",
    "timer.close": "Uždaryti laikmatį",
    "timer.move":
      "Perkelti laikmatį: vilkite jo kraštą arba naudokite rodykles",
    "timer.resize":
      "Keisti laikmačio dydį: vilkite kampelį arba naudokite rodykles",
    "timer.style": "Kaip rodomas laikas",
    "timer.style.digits": "Skaičiai",
    "timer.style.circle": "Apskritis",
    "timer.style.hourglass": "Smėlio laikas",
    "controls.addText": "Pridėti tekstą",
    "controls.addTextHint": "Įdėti žodžių ar piešinį į sceną",
    "notes.label": "Tekstas scenoje",
    "notes.text": "Žodžiai",
    "notes.placeholder": "Rašykite čia…",
    "notes.drawing": "Piešinys",
    "notes.tools": "Teksto įrankiai",
    "notes.mode": "Rašyti arba piešti",
    "notes.type": "Rašyti",
    "notes.draw": "Piešti",
    "notes.ink": "Spalva",
    "notes.ink.dark": "Tamsi",
    "notes.ink.red": "Raudona",
    "notes.ink.blue": "Mėlyna",
    "notes.ink.green": "Žalia",
    "notes.undo": "Atšaukti",
    "notes.clear": "Išvalyti piešinį",
    "notes.delete": "Ištrinti",
    "controls.pause": "Pristabdyti",
    "controls.pauseHint":
      "Užtildykite garso stebėjimą, kad galėtumėte pasikalbėti su klase",
    "controls.resume": "Tęsti",
    "paused.status": "Triukšmo matuoklis pristabdytas",
    "classes.change": "Keisti klasę",
    "classes.unnamed": "Mano klasė",
    "classes.edit": "Redaguoti klases",
    "classes.hint":
      "Kiekviena klasė turi savo gyvūnus ir savo rinkinį.",
    "classes.storage":
      "Jūsų klasės išsaugomos šioje naršyklėje, tik šiame kompiuteryje. Jos neatsiras kitame kompiuteryje ar naršyklėje, o išvalius naršyklės duomenis jos bus ištrintos.",
    "classes.current": "Ekrane",
    "classes.rename": "Pervadinti",
    "classes.renameLabel": "Naujas {name} pavadinimas",
    "classes.save": "Išsaugoti",
    "classes.delete": "Ištrinti",
    "classes.deleteLabel": "Ištrinti {name}",
    "classes.addLabel": "Naujos klasės pavadinimas",
    "classes.addPlaceholder": "pvz., 2 pamoka",
    "classes.add": "Pridėti klasę",
    "classes.deleteTitle": "Ar tikrai?",
    "classes.deleteBody":
      "Ištrinti {name}? Visi jos gyvūnai visose scenose ir visas jos rinkinys bus prarasti.",
    "classes.deleteOnly":
      "Tai jūsų vienintelė klasė, todėl jos vietoje atsiras nauja, tuščia klasė.",
    "classes.deleteYes": "Taip, ištrinti",
    "settings.title": "Nustatymai",
    "settings.microphone": "Mikrofonas",
    "settings.meter": "Triukšmo matuoklis",
    "settings.showMeter": "Rodyti ekrane",
    "settings.showMeterHint":
      "Palikti triukšmo matuoklį virš scenos, kol klasė dirba",
    "start.explainFlee":
      "Jei per garsu, jie bėgs! Palikite klasę tylia ir jie pasirodys bei liks.",
    "settings.tooLoud": "Kai per garsu",
    "loud.flee.label": "Gyvūnai bėga",
    "loud.flee.hint":
      "Visi sustingsta, o kas 5 sek. ekrano kraštu bėga gyvūnai, kol nebus rami",
    "loud.pause.label": "Pristabdyti sceną",
    "loud.pause.hint": "Gyvūnai stovi, o naujų niekas nepasirodo",
    "settings.arrival": "Kaip dažnai atvyksta gyvūnai",
    "settings.aboutEvery": "Apie vieną gyvūną kas",
    "settings.minutes": "minutės",
    "settings.showCounter": "Skaičiuoti gyvūnus, kai jie atvyksta",
    "counter.label": "Atvyko gyvūnų: {count}",
    "settings.tryIt": "Išbandykite",
    "settings.summon": "Iškviesti visus gyvūnus",
    "settings.advanced": "Išplėstiniai",
    "settings.previewHalloween": "Peržiūrėti Vėlinių persona",
    "preview.title": "Vėlinių persona",
    "preview.opening": "Iškart išėjęs",
    "preview.unlocks": "Atsiranda {date}",
    "settings.savedNote":
      "Nustatymai išsaugomi tik šiame kompiuteryje. Mikrofonas niekada neišeina iš įrenginio.",
    "goal.silent.label": "Tyli",
    "goal.silent.hint": "Visiška tyla",
    "goal.independent.label": "Individualus",
    "goal.independent.hint": "Tik tyli šnabždesys",
    "goal.partner.label": "Darbas poromis",
    "goal.partner.hint": "Pokalbio balsai",
    "rate.relaxed": "Rami",
    "rate.normal": "Normali",
    "rate.lively": "Judesinga",
    "rate.hint": "apie vieną gyvūną kas {minutes} min.",
    "mic.default": "Numatytasis mikrofonas",
    "mic.numbered": "Mikrofonas {number}",
    "mic.connecting": "Jungiamas…",
    "mic.connect": "Jungti mikrofoną",
    "meter.current": "Dabartinis garsumas",
    "meter.paused": "Pristabdyta — per garsu",
    "meter.arriving": "Gyvūnai atvyksta",
    "meter.goal":
      "Gyvūnai atvyksta, kol klasė yra kairėje linijos ({goal}%)",
    "calibration.title": "Kalibracija",
    "calibration.needMic": "Pirmiausia įjunkite mikrofoną",
    "calibration.calibrated": "✓ Sukalibruota",
    "calibration.fit": "Pritaikyti matuoklį prie jūsų mikrofono",
    "calibration.calibrate": "Kalibruoti",
    "calibration.recalibrate": "Perkalibruoti",
    "calibration.dialogTitle": "Sukalibruoti šią klasę",
    "calibration.progress": "Progresas",
    "calibration.stepQuiet": "Tyli klasė",
    "calibration.stepTalking": "Normalus pokalbis",
    "calibration.stepDone": "Atlikta",
    "calibration.introLead": "1 žingsnis:",
    "calibration.intro":
      "paprašykite klasės būti visiškai tyloje. Kai bus paruošta, imsime {seconds} sek. mėginį.",
    "calibration.quietButton": "Klasė tyli!",
    "calibration.listening": "Klausausi:",
    "calibration.quietLeft": "laikykite klasę tyloje dar {seconds} sek…",
    "calibration.readyLead": "2 žingsnis:",
    "calibration.ready":
      "paprašykite klasės kalbėti normaliu darbiniu garsu.",
    "calibration.talkingButton": "Klasė kalba!",
    "calibration.talkingLeft":
      "tęskite kalbą dar {seconds} sek…",
    "calibration.doneLead": "Sukalibruota.",
    "calibration.done":
      "Matuoklis dabar rodo pagal šios klasės skalę — patikrinkite, ar tikslinė linija vis dar ten, kur norite.",
    "calibration.retryLead": "Pabandykime dar kartą.",
    "calibration.retry":
      "Šie du mėginiai per arti vienas kito, kad būtų galima juos atskirti — klasė gal nebuvo tyli, arba mikrofonas gal negirdi klasės.",
    "calibration.startAgain": "Pradėti iš naujo",
    "calibration.hears": "Ką girdi mikrofonas",
    "collection.title": "Gyvūnai",
    "collection.spotted": "{class}: matyti {seen} iš {total}",
    "collection.notSeen": "Dar nematytas",
    "collection.seen": "Matytas {count}×",
    "tier.common": "Dažnas",
    "tier.uncommon": "Nedažnas",
    "tier.rare": "Retas",
    "chance.common.label": "Dažnų gyvūnų tikimybė",
    "chance.uncommon.label": "Nedažnų gyvūnų tikimybė",
    "chance.rare.label": "Retų gyvūnų tikimybė",
    "chance.common": "{percent}% atvykusių yra dažni",
    "chance.uncommon": "{percent}% atvykusių yra nedažni",
    "chance.rare": "{percent}% atvykusių yra reti",
    "blocked.title": "Gyvūnams reikia girdėti klasę",
    "blocked.denied":
      "Ši naršyklė uždraudė prieigą prie mikrofono. Paspauskite raktelio ar fotoaparato piktogramę adresų laukelyje, leiskite mikrofoną ir bandykite dar kartą.",
    "blocked.missing":
      "To mikrofono nėra. Pasirinkite kitą žemiau ir bandykite dar kartą.",
    "blocked.unsupported":
      "Ši naršyklė negali naudoti mikrofono. Veikia Chrome, Edge ir Safari.",
    "blocked.tryAgain": "Bandyti dar kartą",
    "about.pageTitle": "Apie — Drovus safaris",
    "about.meta":
      "Drovus safaris — nemokamas klasės triukšmo įrankis, sukurtas EdTech-a-thon renginyje ir vedamas teacher.dev. Be reklamų, be paskyrų.",
    "about.title": "Apie",
    "about.lede":
      "Įjunkite projektoriuje. Kuo tyli klasė, tuo daugiau gyvūnų pasirodo.",
    "about.originTitle": "Kur jis kilo",
    "about.origin.beforeEvent":
      "Drovus safaris prasidėjo kaip trijų dienų projektas ",
    "about.origin.afterEvent":
      ", renginyje, kur žmonės susirenka kurti nemokamus įrankius klasėms. Dabar jį vedžia ",
    "about.origin.afterTeacher":
      ", kur rasite ir kitus mūsų įrankius.",
    "about.photoAlt": "2026 m. EdTech-a-thon dalyviai",
    "about.purposeTitle": "Ką jis daro",
    "about.purpose": "Įjunkite savaną, koralų rifo, gilią erdvę, dinosauropo amžių, mišką, džiunglės ar Arktiką ant lentos ir paspauskite „Pradėti“. Kol klasė lieka žemiau garsumo tikslo, gyvūnai pasirodo po vieną. Jei per garsu, jie bėga. Tai galite pakeisti nustatymuose, kad scena tik sustotų, kol vėl nebus tylu. Dauguma gyvūnų dažni, keli reti, o klasė gali peržiūrėti visus matytus.",
    "about.promiseTitle": "Be paslėptų sąlygų",
    "about.promise":
      "Nemokama. Nėra mokamo varianto ir reklamų, o mes nerenkame jokių asmeninių duomenų apie jus ar jūsų mokinius.",
    "about.feedbackTitle": "Susisiekite",
    "about.feedback":
      "Jei kas neveikia, arba turite idėjų Drovam safarui ar kitam įrankiui, kurį naudotumėte klasėje, parašykite mums el. paštu.",
    "about.email": "Parašykite į support@teacher.dev",
    "privacy.pageTitle": "Privatumas — Drovus safaris",
    "privacy.meta": "Ką Drovus safaris renkasi, ko — ne, ir kodėl.",
    "privacy.title": "Privatumas",
    "privacy.lede": "Ką renkame, ko ne, ir kodėl.",
    "privacy.microphone":
      "Drovus safaris klausosi per jūsų mikrofoną tik tam, kad išmatuotų, kiek garsu klasėje. Garsas virsta vienu garsumo lygiu šiame kompiuteryje, sekundės per sekundę; jis niekada neįrašomas, nesaugomas ir niekur nesiunčiamas.",
    "privacy.local":
      "Nėra paskyrų, o mes nerenkame mokytojų ar mokinių asmeninių duomenų. Jūsų nustatymai, kalibracija ir gyvūnai, kuriuos matė kiekviena jūsų klasė, saugomi šios naršyklės vietinėje saugykloje tik šiame kompiuteryje, o išvalius naršyklės duomenis jie ištrynami.",
    "privacy.analytics.beforeLink":
      "Mes naudojame Cloudflare Web Analytics anonimiškai skaičiuoti lankytojus, kas padeda suprasti, kaip Drovus safaris naudojamas klasėse. Cloudflare Web Analytics nenaudoja slapukų, nefiksuoja lankytojų pėdsakų ir nestebi vartotojų kitose svetainėse; žr. Cloudflare ",
    "privacy.analytics.link": "privatumo politiką",
    "privacy.analytics.afterLink":
      " dėl detalių. Nesidalijame, neparduodame ir kitaip neišsiunčiame jokių lankytojų duomenų trečiosioms šalims.",
    "privacy.contact": "Klausimų ar nerimo? Parašykite į ",
    "guide.title": "Kaip veikia Drovus safaris",
    "guide.lede":
      "Nemokamas klasės triukšmo lygio matuoklis, kuris skatina tylią, o ne baudžia triukšmą.",
    "guide.whatTitle": "Kas tai",
    "guide.what":
      "Drovus safaris — klasės triukšmo matuoklis, veikiantis naršyklėje. Įjunkite jį projektoriuje ar interaktyvioje lentelėje, ir jis parodo ramias savanos, koralų rifo, giliojo kosmoso nakties dangų, kredos amžiaus pelkės, medžių, džiunglių ar Arktikos ledo. Jis klausosi, kiek garsu klasėje, per kompiuterio mikrofoną, ir kol klasė lieka žemiau garsumo tikslo, drovūs gyvūnai pasirodo po vieną. Tai priešingybė triukšmingam matuokliui: nėra balų, rodyklės ir raudono įspėjimo, todėl niekas neverta triukšmą įdomesniu nei tylią.",
    "guide.useTitle": "Naudojimas klasėje",
    "guide.use.open":
      "Atidarykite shysafari.com kompiuteryje, prijungtame prie projektojo, pasirinkite savaną, koralų rifo, gilią erdvę, priešistorinę sceną, mišką, džiunglės ar Arktiką ir paspauskite „Pradėti“. Naršyklė paprašys naudoti mikrofoną.",
    "guide.use.goal":
      "Nustatykite garsumo tikslą veiklai: Tyli, Individualus (tyli šnabždesys) arba Darbas poromis (pokalbio balsai), arba ištempkite liniją matuoklyje į bet kurį tarpinį tašką.",
    "guide.use.rate":
      "Leiskite klasei dirbti. Pirmasis gyvūnas pasirodo po 10–20 tylių sekundžių, o toliau apie vieną kas penkias tylos minutes. Nustatymuose pasirinkite Rami, Normali arba Judesinga, arba įveskite bet kokį minučių skaičių.",
    "guide.loudTitle": "Kaip jis nusprendžia, kad klasė per garsi",
    "guide.loud":
      "Trumpi garsai, pavyzdžiui, pabudėjimas į duris ar kritusi knyga, nesiskaito. Klasė turi išbūti virš tikslo ilgesnį laiką: apie šešias sekundes, jei tikrai viršija, arba apie vieną sekundę, jei gerokai garsiau. Kai tyla grįžta, scena atsinaujina per tris sekundes.",
    "guide.calibrate":
      "Kalibracija — ne privaloma. Penkios tylos ir penkios normalaus pokalbio sekundės moko programą, kaip skamba jūsų klasė ir mikrofonas.",
    "guide.tooLoudTitle": "Kas nutinka, kai per garsu",
    "guide.tooLoud":
      "Scena apšyla: savanoje dulkių migla, rifo tamsi vanduo, giliame kosmose trikdžiai, priešistorinėje scenoje rūkas virš upės, miške rūkas tarp medžių, džiunglėse tropinis lietus ir Arktikoje balta sniego migla, ir naujų gyvūnų nebesirodo. Kas toliau — jūsų pasirinkimas:",
    "guide.tooLoud.flee":
      "Gyvūnai bėga (numatyta). Scena sustingsta, ir kol klasė lieka per garsi, kas penkias sekundes ekrano kraštu išbėga vienas, o tada ir daugiau gyvūnų. Giliame kosmose jie išnyksta trikdžiuose.",
    "guide.tooLoud.pause":
      "Pristabdyti sceną. Gyvūnai stovi, niekas nima, ir progresas link kito gyvūno laukia, kol klasė vėl nurims.",
    "guide.animalsTitle": "Gyvūnai",
    "guide.animals":
      "Savanoje 17 gyvūnų, nuo surikatų ir zebrov iki žirafų, hipopotamų ir ragabėdžių, su liūtais, leopardais ir drambliomis kaip retiausiais. Koralų rifo turi 18, nuo klouninių žuvų ir jūrškių iki jūrinių vėžlių ir aštakojų, su kirminėmis ryklėmis, mantomis ir ryklių ryklėmis kaip retiausiomis. Giliame kosmose 17 stebėjimų vyresniems mokiniams, nuo palydovų, asteroidų ir astronautų iki kosminės stoties, kometų ir Saturno panašių planetų, su spiraline galaktika, juodąja skylute, pulsaru ir žiedine nebulioze kaip retiausiais. Priešistorinėje scenoje 17 gyvūnų nuo labai vėlyvo dinosauropo amžiaus, su mažuosiais žinduoliais, vėžliais ir plunksnotais raptorius iki Triceratops ir Ankylosaurus, su Tyrannosaurus, Quetzalcoatlus ir milžinišku Alamosaurus kaip retiausiais. Miške 17 medžių gyvūnų, nuo čiapklų, liepsnelių ir ežių iki meškėnų, lapės ir elnio, su pilkasis vilkas, juodasis lokys ir briedis kaip retiausiais. Džiunglėse 17 džiunglių gyvūnų, nuo nuodingų varlių, tukantų ir kapucinus iki tinginių, makavų ir orangutanų, su jaguarais, gorilomis ir tigrų kaip retiausiais. Arktikoje 17 gyvūnų, nuo lemingų, mormonų ir poliarinių lapės iki karibu, vėplius ir baltuosius banginius, su snieginiais lokiais, narvalais ir grenlandiniais banginiais kaip retiausiais. Dažni gyvūnai pasirodo dažnai, o reti — tikras įvykimas, kurio daug sesijų nebeįžiūrės. Kiekviena scena turi savo gyvūnus, ir rinkinys atsimena visus, kuriuos matė klasė.",
    "guide.forTitle": "Kam skirta",
    "guide.for":
      "Mokytojų bet kokio lygio, kurie nori ramią, vizualią signalo balsui lygiui dirbant individualiai, skaitymo metu, testuose, centruose ar grupiniame darbe. Visa klasė dalijasi vienu ekranu, o mokiniams nieko nereikia.",
    "guide.faqTitle": "Mokytojų klausimai",
    "guide.faq.free.q": "Ar Drovus safaris nemokamas?",
    "guide.faq.free.a":
      "Taip. Nėra mokėjimo barjerų, reklamų ir premiumo versijos. Jis kilo iš EdTech-a-thon, bendruomenės, kuri kuria nemokamus įrankius klasėms, ir jį prižiūri teacher.dev.",
    "guide.faq.record.q": "Ar jis įrašo klasę?",
    "guide.faq.record.a":
      "Ne. Mikrofonas naudojamas tik tam, kad išmatuotų, kiek garsu klasėje, kaip viena skaičius, sekundės per sekundę, jūsų kompiuteryje. Nieko neįrašoma, nesaugoma ir niekur nesiunčiama.",
    "guide.faq.accounts.q": "Ar man ar mokiniams reikia paskyros?",
    "guide.faq.accounts.a":
      "Ne. Nėra registracijos, prisijungimo ir nieko nereikia įdiegti. Nustatymai saugomi naršyklėje tame kompiuteryje.",
    "guide.faq.devices.q": "Ko reikia, kad veiktų?",
    "guide.faq.devices.a":
      "Kompiuteris su mikrofonu ir naujausia naršykle, pavyzdžiui, Chrome, Edge, Firefox arba Safari. Veikia nešiojamieji, Chromebook ir interaktyvios lentelės. Jis sukurta projektoriaus ar dideliam ekranui, bet veikia ir planšetėje ar telefone.",
    "guide.faq.languages.q": "Kokias kalbas palaiko?",
    "guide.faq.languages.a":
      "Lietuvių, anglų, ispanų ir prancūzų. Jis seka naršyklės kalbą, o ją galima pakeisti meniu virš ekrano.",
    "guide.faq.meter.q": "Kuo jis skiriasi nuo triukšmo matuoklio?",
    "guide.faq.meter.a":
      "Triukšmo matuoklis rodo klasei, kiek jie garsūs, o tai gali paversti garsėjimu žaidimu. Drovus safaris rodo tik ramų sceną, kuri lėtai pilna gyvūnų, todėl tylios darbo įvertinimas yra tai, ką mato klasė, ir nėra jokių balų, kuriuos reikėtų įveikti.",
  },
  scenes: {
    space: {
      "start.shy": "Tyli klasė laiko signalą aiškų.",
      "start.explain":
        "Triukšmas pasirodo kaip trikdžiai. Kol klasė rami, teleskopas sugauna naujus stebėjimus; jei per garsu, jis laukia, kol signalas aiškės.",
      "start.explainFlee":
        "Triukšmas pasirodo kaip trikdžiai. Kai klasė per garsi, stebėjimai išsisklaido trikdžiuose ir prarandami; kol rami, atsiranda nauji.",
      "controls.animals": "Stebėjimai",
      "loud.flee.label": "Stebėjimai išblėsta",
      "loud.flee.hint":
        "Viskas sustingsta, o kas 5 sek. keli išnyksta trikdžiuose, kol nebus rami",
      "loud.pause.hint":
        "Viskas stovi ir niekas naujas signalas neįsijungia",
      "settings.arrival": "Kaip dažnai ateina nauji stebėjimai",
      "settings.aboutEvery": "Apie vienas stebėjimas kas",
      "settings.summon": "Iškviesti visus stebėjimus",
      "rate.hint": "apie vienas stebėjimas kas {minutes} min.",
      "settings.showCounter": "Skaičiuoti stebėjimus, kai jie ateina",
      "counter.label": "Stebėjimai iki šiol: {count}",
      "meter.paused": "Pristabdyta — per daug trikdžių",
      "meter.arriving": "Signalai ateina",
      "meter.goal":
        "Nauji stebėjimai ateina, kol klasė yra kairėje linijos ({goal}%)",
      "collection.title": "Stebėjimai",
      "collection.spotted": "{class}: {seen} iš {total} stebėtų",
      "collection.notSeen": "Dar nebematytas",
      "collection.seen": "Stebėtas {count}×",
      "chance.common.label": "Dažnų stebėjimų tikimybė",
      "chance.uncommon.label": "Nedažnų stebėjimų tikimybė",
      "chance.rare.label": "Retų stebėjimų tikimybė",
      "blocked.title": "Teleskopas turi girdėti klasę",
      "notes.ink.dark": "Balta",
    },
  },
  creatures: {
    meerkat: "Surikata",
    warthog: "Dikšlys",
    zebra: "Zebras",
    gazelle: "Tomsono gazelė",
    ostrich: "Strutis",
    "guinea-fowl": "Naminė patarška",
    tortoise: "Žemės vėžlys",
    hornbill: "Jaučiaragis",
    giraffe: "Žirafa",
    hippo: "Hipopotamas",
    rhino: "Ragabėdis",
    cheetah: "Gyvūnas",
    flamingo: "Flamingas",
    vulture: "Grifas",
    lion: "Liūtas",
    leopard: "Leopardas",
    elephant: "Dramblys",
    clownfish: "Klouninė žuvis",
    "blue-tang": "Mėlynoji žuvis",
    angelfish: "Anglų žuvis",
    seahorse: "Eskaras",
    starfish: "Jūrinė žvaigždė",
    crab: "Šrautas",
    shrimp: "Kreve",
    parrotfish: "Papūgų žuvis",
    pufferfish: "Pučiamoji žuvis",
    octopus: "Aštakoja",
    "sea-turtle": "Jūrinis vėžlys",
    "moray-eel": "Mūreelė",
    stingray: "Dulkina",
    "jellyfish-bloom": "Medūzų žiedas",
    cuttlefish: "Sepija",
    "hammerhead-shark": "Kirminė ryklė",
    "manta-ray": "Manta",
    "whale-shark": "Ryklių ryklė",
    satellite: "Palydovas",
    asteroid: "Asteroidas",
    meteor: "Meteoras",
    "space-probe": "Kosminė probe",
    "space-capsule": "Kosminė kapsulė",
    astronaut: "Astronautas",
    "space-shuttle": "Kosminis šatlis",
    iss: "Kosminė stotis",
    comet: "Kometa",
    "ringed-planet": "Planeta su žiedais",
    moon: "Mėnulis",
    "space-telescope": "Kosminis teleskopas",
    "gas-giant": "Dujinis milžinas",
    "spiral-galaxy": "Spiralinė galaktika",
    "black-hole": "Juodoji skylė",
    pulsar: "Pulsaras",
    "ring-nebula": "Žiedinė nebuliozė",
    didelphodon: "Didelphodontas",
    palaeosaniwa: "Paleosaniva",
    basilemys: "Bazilemias",
    avisaurus: "Avisauras",
    pectinodon: "Pektinodontas",
    acheroraptor: "Acheroraptorius",
    thescelosaurus: "Teselosauras",
    struthiomimus: "Strutimimas",
    anzu: "Anzu",
    pachycephalosaurus: "Pachicefalosaurusas",
    dakotaraptor: "Dakotaraptorius",
    ankylosaurus: "Ankilosauras",
    triceratops: "Triceratopsas",
    edmontosaurus: "Edmontosauras",
    tyrannosaurus: "Tyrannosaurusas",
    quetzalcoatlus: "Kuetzalcoatlas",
    alamosaurus: "Alamosaurusas",
    chipmunk: "Čiapklas",
    "gray-squirrel": "Pilkoji voverė",
    robin: "Liepsnelė",
    hedgehog: "Ežys",
    cottontail: "Kiškutis",
    woodpecker: "Genys",
    skunk: "Skunksas",
    raccoon: "Meškėnas",
    "great-horned-owl": "Didysis apuokas",
    porcupine: "Ursonas",
    badger: "Barsukas",
    beaver: "Bebras",
    "red-fox": "Rudoji lapė",
    "white-tailed-deer": "Baltuoji elnė",
    "gray-wolf": "Pilkasis vilkas",
    "black-bear": "Juodasis lokys",
    moose: "Briedis",
    "poison-dart-frog": "Lapalaipė varlė",
    "tree-frog": "Medinė varlė",
    butterfly: "Mėlynoji morfa",
    hummingbird: "Kolibris",
    toucan: "Tukanas",
    capuchin: "Kapucinas",
    iguana: "Žalioji iguana",
    capybara: "Kapibara",
    chameleon: "Chameleonas",
    sloth: "Tinginys",
    macaw: "Vėdrynas makavas",
    orangutan: "Orangutanas",
    okapi: "Okapija",
    tapir: "Malaizijos tapyras",
    jaguar: "Jaguaras",
    gorilla: "Goryla",
    tiger: "Tigras",
    lemming: "Lemingas",
    "arctic-hare": "Baltauodegė žvyrė",
    ptarmigan: "Tundrinė žvyrė",
    puffin: "Atlantinis mormonas",
    "arctic-tern": "Poliarinė žuvėdra",
    "arctic-fox": "Poliarinė lapė",
    "harp-seal": "Grenlandinis ruonis",
    eider: "Eiderė",
    "snowy-owl": "Baltoji pelėda",
    caribou: "Karibu",
    "musk-ox": "Avijautis",
    "arctic-wolf": "Arktinis vilkas",
    walrus: "Vėplys",
    beluga: "Baltasis banginis",
    "polar-bear": "Snieginė lokė",
    narwhal: "Narvalas",
    "bowhead-whale": "Grenlandinis banginis",
    "harvest-mouse": "Derliaus pelė",
    "garden-spider": "Daržo voras",
    toad: "Rupūžė",
    "brown-bat": "Rudasis varklys",
    crow: "Varna",
    "barn-owl": "Langinė kregždė",
    "black-cat": "Juodoji katė",
    "little-ghost": "Mažasis vaiduoklis",
    "cloudy-moon": "Debesuotas Mėnulis",
    gourdling: "Gourdlingas",
    scarecrow: "Vilkakojis",
    mummy: "Mumija",
    vampire: "Vampyras",
    gargoyle: "Garso",
    "howling-wolf": "Šaukiantis vilkas",
    "great-boo": "Didysis Bū!",
    "jack-o-lantern": "Moliūgo luktas",
  },
  facts: {
    didelphodon:
      "Vėžiopėškų giminės gyvūnas, turintis stipriausią žandikaulį, atsižvelgiant į dydį, iš visų žinomų žinduolių.",
    palaeosaniwa:
      "Didelis medžioklinis vėlybas, šiandieninių varanų giminaitis.",
    basilemys:
      "Žemės vėžlys su žemu, platu apvalkalu, padengtu šiurkščia, duobėta struktūra.",
    avisaurus:
      "„Priešinis paukštis“, dažniausia paukščių rūšis dinosauropo amžiuje. Jie visi išmirė kartu su jais.",
    pectinodon:
      "Jo pavadinimas reiškia „kamšto dantį“, dėl didelių dantų dantelių, kurie yra beveik viskas, kas apie jį rasta.",
    acheroraptor:
      "Plunksnotas raptorius, pavadintas pagal Acheroną, pasak grikų mitologijos požemių upę.",
    thescelosaurus:
      "Jo pavadinimas reiškia „stebuklingą vėlybą“. Storas augalėdis su snapeliu ir skruostais.",
    struthiomimus:
      "Jo pavadinimas reiškia „strutis imitatoriaus“: be dantų snapelis, ilgos kojos ir plunksnoti sparnai.",
    anzu:
      "Pavadintas pagal Mesoopotamijos mitologijos plunksnotą demoną. Jo galvoje buvo aukštas kailis, kaip kasuaro.",
    pachycephalosaurus:
      "Kaulinis kupolas jo galvoje buvo iki 25 cm storio.",
    dakotaraptor:
      "Kaulų iškilimumai jo priekiniuose rankose rodo, kur buvo pritvirtintos didelės sparno plunksnos.",
    ankylosaurus:
      "Jo uodega baigėsi sujungto kaulo klubelė, o uodega sustiprinta, kad galėtų ja svyruoti.",
    triceratops:
      "Dažniausias didelis dinosaurusas Helo Kroko uolose.",
    edmontosaurus:
      "Iš mumifikuotos odos matyti minkštas kupas nugaroje, spygliai uodegoje ir kojelės ant pirštų.",
    tyrannosaurus:
      "Vienas stipriausių žandikaulių iš visų žemės gyvūnų per visą laiką. Lūpos tikriausiai dengė jo dantis, kaip vėlybams.",
    quetzalcoatlus:
      "Pterosaurus su apie 10 m sparno išrąžomis, aukštas kaip žirafa, kai stovėjo keturimis.",
    alamosaurus:
      "Vienas paskutinių sauropodų, ir su 26 m ar daugiau, vienas didžiausių gyvūnų savo metu.",
    lemming:
      "Jis neguliuoja: visą žiemą gyvena tuneliuose po sniegu, kur yra šilčiau.",
    "arctic-hare":
      "Jis gali bėgti 60 km/val. greičiu, o kartais šokinėja ant galinių kojų, kaip kangaris.",
    ptarmigan:
      "Plunksnos ant kojų veikia kaip rašlai, o žiemą jis balinėja visur, tik ne ant uodegos.",
    puffin:
      "Jo snapelis yra toks ryškus tik vasarą, ir jame gali iš karto nešti daugiau kaip dešimt mažų žuvų.",
    "arctic-tern":
      "Kiekvieną metus jis skrenda iš Arktikos į Antarktiką ir atgal, ilgiausią kelionę iš visų gyvūnų.",
    "arctic-fox":
      "Jo tankus kailis įšyla iki −50 °C, ir jis suvynioja pūkėtą uodegą aplink save, kaip antklodę.",
    "harp-seal":
      "Jauni ruoniai gimsta su pūkuota balta kailiu ir po kelių savaičių jį pakeičia pilka, dėmėta.",
    eider:
      "Eiderės iškloja lizdus minkšta plunksna iš savo krūtinės, kai kurios šilčiausių plunksnų.",
    "snowy-owl":
      "Skirtingai nei dauguma pelėdų, medžioja dieną: Arktikos vasarą saulė niekada neišryškėja.",
    caribou:
      "Tanto ir moterys auga ragai, ir bandomi kas metus keliauja toliau nei kiti žemės žinduoliai.",
    "musk-ox":
      "Kai ateikia pavojus, bandomi stovi apskritime, ragais į išorę, o jaunikliai saugiai viduryje.",
    "arctic-wolf":
      "Jis gyvena taip toli šiaurėje, kad kai kurios bandomos beveik niekada netiko žmones.",
    walrus:
      "Jis naudoja savo ilgas dantis, kad išlipa iš vandens ant ledo.",
    beluga:
      "Vadinama jūros kanarėle dėl svyravimų ir čirpuliavimo. Skirtingai nei dauguma banginių, gali sukti galvą.",
    "polar-bear":
      "Po jo tankiu baltais kailiu oda yra juoda, kad sugertų saulės šilumą.",
    narwhal:
      "Jo dantis yra dantų, augančių per viršutinį lūpą, spiraliniu, iki 3 m ilgio.",
    "bowhead-whale":
      "Jis gali praburti ledą savo dideliu galva ir gali gyventi daugiau kaip 200 metų.",
    "harvest-mouse":
      "Viena mažiausių pasaulio pečių, gali suvynioti uodegą aplink stiebrą, kaip papildomą ranką.",
    "garden-spider":
      "Jis verčia visiškai naują voratinklį beveik kiekvieną naktį, ir dažnai suvaldo senąjį.",
    toad:
      "Nesulipsite šilpų nuo rupūžės: jos iškilimai yra tik oda, kaip ji auga.",
    "brown-bat":
      "Jis tamsieje randa vabzdžius pagal jų atspindžius ir per valandą gali sugauti šimtus.",
    crow:
      "Varanos gali atpažinti žmonių veidus ir prisiminti juos metais.",
    "barn-owl":
      "Jo širdies formos veidas renka garsą kaip indą, todėl gali medžioti visiškai tamsos.",
    "black-cat":
      "Škotijoje ir Japonijoje manoma, kad juoda katė, kerta jūsų kelią, priverčia sėkmę.",
    "little-ghost":
      "Vaiduoklis, dengtas skuduru, yra vienas seniausių Vėlinių kostiumų.",
    "cloudy-moon":
      "Mėnulis visada rodo Žemėi tą pačią pusę; niekas nematė tolimosios pusės iki 1959 m.",
    gourdling:
      "Moliūgai yra vaisiai, ne daržovės: jie auga iš gėlių ir pilni sėklų.",
    scarecrow:
      "Užkariai tūkstančius metų veržiasi paukščius nuo derliaus.",
    mummy:
      "Senieji egiptiečiai suvyniokė mumią šimtus metrų drožlės.",
    vampire:
      "Tikriji vampyrai gyvena Centrinėje ir Pietų Amerikoje ir dalijasi maistu su baduojančiais draugais.",
    gargoyle:
      "Tikrosios gargoyles yra lietaus čiapai: vanduo teka iš jų burnų, nuo sienų.",
    "howling-wolf":
      "Vilkai rėkia, kad susikviestų stądą, o rikimas gali neštis kilometrais.",
    "great-boo":
      "Žmonės šaukia „Bū!“, kad vienas kitą išsigandintų, nuo bent 1700-ųjų.",
    "jack-o-lantern":
      "Pirmieji moliūgų luktai buvo išskusti iš burokėlių Airijoje; Amerikoje juos pakeitė moliūgai.",
  },
} satisfies Language;

const languages: Record<LanguageCode, Language> = {
  lt,
  en: { ...en, scenes: enScenes },
  es,
  fr,
};
const STORAGE_KEY = "class-noise-level:language";

export const languageOptions = (Object.keys(languages) as LanguageCode[]).map(
  (code) => ({ code, name: languages[code].name }),
);

export const language = $state<{ code: LanguageCode }>({ code: "lt" });
let initialized = false;

/**
 * The page is prerendered in Lithuanian, which is also the default for visitors
 * with no saved choice; a saved selection always wins.
 */
export function initializeLanguage() {
  if (!browser || initialized) return;
  initialized = true;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved in languages) {
      language.code = saved as LanguageCode;
      return;
    }
  } catch {
    // Private browsing may refuse storage; the language still works this visit.
  }
  language.code = "lt";
}

export function setLanguage(code: string) {
  if (!(code in languages)) return;
  language.code = code as LanguageCode;
  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Keep the in-memory choice when storage is unavailable.
  }
}

export function current(): Language {
  return languages[language.code] ?? en;
}

function fill(text: string, values: Record<string, string | number>) {
  return text.replace(/\{(\w+)\}/g, (match, name) =>
    values[name] === undefined ? match : String(values[name]),
  );
}

export function t(key: UiKey, values: Record<string, string | number> = {}) {
  return fill(current().ui[key] ?? en.ui[key] ?? key, values);
}

/**
 * `t`, in the words of a particular Scene where it has its own: "Sightings"
 * rather than "Animals" when the Scene is deep space.
 */
export function tIn(
  sceneId: SceneId,
  key: UiKey,
  values: Record<string, string | number> = {},
) {
  const own = (scenes: SceneWording) =>
    (scenes as Partial<Record<SceneId, Partial<Record<UiKey, string>>>>)[
      sceneId
    ]?.[key];
  const text = own(current().scenes) ?? own(enScenes);
  return text === undefined ? t(key, values) : fill(text, values);
}

/** A Creature's name, by the slug its artwork is filed under. */
export function creatureName(slug: string): string {
  return current().creatures[slug as CreatureSlug] ?? slug;
}

/** A Class's name, or "My class" in this language if it has none yet. */
export function className(name: string): string {
  return name || t("classes.unnamed");
}

/** A one-line fact about a Creature, where it has one. */
export function creatureFact(slug: string): string | undefined {
  return current().facts[slug as FactSlug];
}
