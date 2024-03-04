import { CalendarType, type PresetCalendar } from "src/schemas";

export const ExandrianPreset: PresetCalendar = {
    type: CalendarType.Preset,
    version: 1,
    id: "EXANDRIAN_PRESET",
    name: "Exandrian Calendar",
    description: "Calendar of the world of Wildemount.",
    autoParse: false,
    path: ["/"],
    supportInlineEvents: false,
    inlineEventTag: "inline-events",
    showIntercalarySeparately: true,
    static: {
        displayDayNumber: false,
        firstWeekDay: 2,
        incrementDay: false,
        displayMoons: true,
        overflow: true,
        padDays: 2,
        padMonths: 2,
        weekdays: [
            {
                type: "day",
                name: "Miresen",
                id: "ID_3b38aaa81bca",
            },
            {
                type: "day",
                name: "Grissen",
                id: "ID_da6b19882baa",
            },
            {
                type: "day",
                name: "Whelsen",
                id: "ID_a9cae8f88b98",
            },
            {
                type: "day",
                name: "Conthsen",
                id: "ID_e87859eb5aaa",
            },
            {
                type: "day",
                name: "Folsen",
                id: "ID_59180abbea8a",
            },
            {
                type: "day",
                name: "Yulisen",
                id: "ID_98082bd8d8ca",
            },
            {
                type: "day",
                name: "Da'leysen",
                id: "ID_da4ba92b299a",
            },
        ],
        months: [
            {
                name: "Horisal",
                type: "month",
                length: 29,
                interval: 1,
                offset: 0,
                id: "ID_e89a4ab9995b",
            },
            {
                name: "Misuthar",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_18b8894bab7b",
            },
            {
                name: "Dualahei",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_0a9b29f8f8db",
            },
            {
                name: "Thunsheer",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_6a8a8a5bea5b",
            },
            {
                name: "Unndilar",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_b8295bdbcafa",
            },
            {
                name: "Brussendar",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_c92a489bb909",
            },
            {
                name: "Sydenstar",
                type: "month",
                length: 32,
                interval: 1,
                offset: 0,
                id: "ID_7b48bb1b0a4a",
            },
            {
                name: "Fessuran",
                type: "month",
                length: 29,
                interval: 1,
                offset: 0,
                id: "ID_289858c97849",
            },
            {
                name: "Quen'pillar",
                type: "month",
                length: 27,
                interval: 1,
                offset: 0,
                id: "ID_f8abd9a86aa9",
            },
            {
                name: "Cuersaar",
                type: "month",
                length: 29,
                interval: 1,
                offset: 0,
                id: "ID_7aba59fa2b69",
            },
            {
                name: "Duscar",
                type: "month",
                length: 32,
                interval: 1,
                offset: 0,
                id: "ID_5819f86b99cb",
            },
        ],
        moons: [
            {
                name: "Catha",
                cycle: 33,
                offset: 7,
                faceColor: "#ffffff",
                shadowColor: "#292b4a",
                id: "ID_0ab929092b5b",
            },
            {
                name: "Ruidus",
                cycle: 328,
                offset: 80,
                faceColor: "#ff6161",
                shadowColor: "#1f1f1f",
                id: "ID_b9783ac818e9",
            },
        ],
        leapDays: [],
        eras: [
            {
                name: "The Founding",
                format: "Year {{year}} - {{era_name}}",
                start: {
                    year: 1,
                    month: 0,
                    day: 1,
                },
                id: "ID_cb9baaabab7a",
                restart: false,
                endsYear: false,
                event: false,
            },
            {
                name: "Age of Arcanum",
                format: "Year {{year}} - {{era_name}}",
                start: {
                    year: -1500,
                    month: 0,
                    day: 1,
                },
                id: "ID_499b3ae8c868",
                restart: false,
                endsYear: false,
                event: false,
            },
            {
                name: "The Calamity",
                format: "Year {{year}} - {{era_name}}",
                start: {
                    year: -665,
                    month: 0,
                    day: 1,
                },
                id: "ID_7ac8c9590999",
                restart: false,
                endsYear: false,
                event: false,
            },
            {
                name: "Post-Divergence",
                format: "Year {{year}} P.D.",
                start: {
                    year: 1,
                    month: 0,
                    day: 1,
                },
                id: "ID_58aad97ac84b",
                restart: false,
                endsYear: false,
                event: false,
            },
        ],
    },
    current: {
        day: 1,
        month: 0,
        year: 836,
    },
    events: [
        {
            name: "Spring Equinox",
            description:
                "The spring equinox is when the day and the night are equally as long, and are getting longer.",
            id: "824430",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Summer Solstice",
            description:
                "\tAt the summer solstice, the Sun travels the longest path through the sky, and that day therefore has the most daylight.",
            id: "824431",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Autumn Equinox",
            description:
                "The autumn equinox is when the day and the night are equally as long, and are getting shorter.",
            id: "824432",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Winter Solstice",
            description:
                "The winter solstice marks the shortest day and longest night of the year, when the sun is at its lowest arc in the sky.",
            id: "824433",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "New Dawn",
            description:
                "The first day of the new year is also the holy day of the Changebringer, as the old year gives way to a new path.\n\nIn Tal'Dorei, Emon celebrates New Dawn with a grand midnight feast, which commonly features a short play celebrating the changes witnessed in the past year.\n\nOn the Menagerie Coast, people celebrate by having a feast on the shore at dusk to watch the sunset. They feast and discuss their hopes for the new year until the sun rises.",
            id: "824434",
            note: null,
            date: {
                day: 1,
                year: null,
                month: 0,
            },
            category: "religious-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Hillsgold",
            description:
                "This holiday is up to the calendar owner to decide what it is for! :)",
            id: "824435",
            note: null,
            date: {
                day: 27,
                year: null,
                month: 0,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Day of Challenging",
            description:
                "The holy day of the Stormlord is one of the most raucous holidays in Emon. Thousands of spectators attend the annual Godsbrawl, which is held in the fighting ring within the Temple of the Stormlord. The people root for their deity's favored champion, and there is a fierce (yet friendly) rivalry between the Champion of the Stormlord and the Champion of the Platinum Dragon. The winner earns the title of \"Supreme Champion\" for an entire year.\n\nThe Day of Challenging is one of the most raucous holidays in Port Damali, and thousands of spectators attend the annual Godsbrawl held in the Temple of Kord to root for their favored deity's champion, particularly the chosen champions of the Storm Lord and the All-Hammer. ",
            id: "824436",
            note: null,
            date: {
                day: 7,
                year: null,
                month: 1,
            },
            category: "religious-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Renewal Festival",
            description:
                "Spring begins early in the month of Dualahei, officially starting on the 13th with the Renewal Festival.",
            id: "824437",
            note: null,
            date: {
                day: 13,
                year: null,
                month: 2,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Wild's Grandeur",
            description:
                "Though the Archeart is the god of spring, the peak of the spring season is the holy day of the Wildmother.\n\nThe people in the southern wilds of Tal'Dorei celebrate the Wildmother's strength by journeying to a place of great natural beauty. This could be the top of a mountainous waterfall, the center of a desert, or even an old and peaceful city park (such as Azalea Street Park in Emon). Though Emon rarely celebrates Wild's Grandeur, the few who do will plant trees in observance of the holiday.\n\nThe people of the Menagerie Coast set aside this day to sail for no reason other than the pleasure of observing the natural beauty of their surroundings. Those who still partake in elements of Ki'Nau culture take this day to appreciate the fruits and foods granted by the sea, leaving offerings of delicacies and small handmade crafts at temporary altars of twisted roots and grasses.",
            id: "824438",
            note: null,
            date: {
                day: 20,
                year: null,
                month: 2,
            },
            category: "religious-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Harvest's Rise",
            description:
                "This holiday is up to the calendar owner to decide what it is for! :)",
            id: "824439",
            note: null,
            date: {
                day: 11,
                year: null,
                month: 3,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Merryfrond's Day",
            description:
                "This holiday is up to the calendar owner to decide what it is for! :)",
            id: "824440",
            note: null,
            date: {
                day: 31,
                year: null,
                month: 3,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Deep Solace",
            description:
                "Moradin's holy day is Deep Solace, which is celebrated on the eighteenth day of the fifth month. Especially devout followers of the All-Hammer spend the day in isolation, meditating on the meaning of family and how they may be better mothers, fathers, siblings, and children.\n\nThe dwarven communities across Exandria, such as the ones in Grimgolir and Kraghammer, celebrate with a full day of feasting and drinking. ",
            id: "824441",
            note: null,
            date: {
                day: 18,
                year: null,
                month: 4,
            },
            category: "religious-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Zenith",
            description:
                "Summer begins in the middle of Unndilar, officially starting at noon on the 26th day known as the Zenith.",
            id: "824442",
            note: null,
            date: {
                day: 26,
                year: null,
                month: 4,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Artisan's Faire",
            description:
                "This holiday is up to the calendar owner to decide what it is for! :)",
            id: "824443",
            note: null,
            date: {
                day: 15,
                year: null,
                month: 5,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Elvendawn",
            description:
                "Corellon's holy day is called Elvendawn,\nor Midsummer. It is celebrated on the twentieth day\nof the sixth month, and commemorates the elves' first\nemergence from the Feywild.\n\nIn Syngorn, the Elves open small doorways into the Feywild and celebrate alongside the wild fey with uncharacteristic vigor.\n\nThough the Dwendalian\nEmpire doesn't promote the worship of the Arch Heart,\nthe elves of Bysaes Tyl quietly celebrate in private by\nopening small doors to the Feywild and having a little\nmore wine than usual. ",
            id: "824444",
            note: null,
            date: {
                day: 20,
                year: null,
                month: 5,
            },
            category: "religious-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Highsummer",
            description:
                "The holy day of the Dawnfather is the peak of the summer season.\n\nEmon celebrates with an entire week of gift-giving and feasting, ending at midnight on the 21st of Sydenstar (the anniversary of the Battle of the Umbra Hills, where Zan Tal'Dorei dethroned Trist Drassig).\n\nWhitestone (where the Dawnfather is the city's patron god) celebrates with gift-giving and a festival of lights around the Sun Tree. Due to the Briarwood occupation, money is thin, so most Whitestone folk choose to recount the small things they are thankful for, rather than buy gifts.\n\nWhile other parts of Exandria feast, the Dwendalian\nEmpire uses this day as an opportunity to enlist more\nsoldiers in its army. The military holds great feasts and\nhands out toy soldiers and other propaganda, encouraging people to enlist and help fight against the evil that\nthreatens the king. ",
            id: "824445",
            note: null,
            date: {
                day: 7,
                year: null,
                month: 6,
            },
            category: "religious-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Morn of Largesse",
            description:
                "This holiday is up to the calendar owner to decide what it is for! :)",
            id: "824446",
            note: null,
            date: {
                day: 14,
                year: null,
                month: 6,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Harvest's Close",
            description:
                "Autumn begins on the 3rd of Fessuran and is typically celebrated with feasting in rural regions and with carnivals in the cities. ",
            id: "824447",
            note: null,
            date: {
                day: 3,
                year: null,
                month: 7,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "The Hazel Festival",
            description:
                "This holiday is up to the calendar owner to decide what it is for! :)",
            id: "824448",
            note: null,
            date: {
                day: 12,
                year: null,
                month: 8,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Civilization's Dawn",
            description:
                "The Law Bearer's holy day is Civilization's\nDawn, which is celebrated on the autumnal equinox,\nusually the twenty-second day of the ninth month.\n\nEmon celebrates with a great bonfire in the square of each neighborhood, around which each community dances and gives gifts.\n\nIn the\nDwendalian Empire, people celebrate by having feasts \nin honor of the laws of the Dwendal bloodline. One seat\nat every table is left open for the king, who eats in spirit\nwith the people he rules. ",
            id: "824449",
            note: null,
            date: {
                day: 22,
                year: null,
                month: 8,
            },
            category: "religious-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Night of Ascension",
            description:
                "The Raven Queen's holy day is called the Night of Ascension, celebrating her apotheosis. The actual date of the her rise to divinity is unclear, but the Night of Ascension is celebrated on the thirteenth day of the tenth month.\n\nThough most in Emon see this celebration of the dead as unnerving and macabre, the followers of the Matron of Ravens believe that the honored dead would prefer to be venerated with cheer, not misery.\n\nWhat was once a night of cheery celebration of the dead in the Dwendalian Empire has recently become an occasion to burn effigies and decry the Kryn Dynasty for their unnatural relationship with death.",
            id: "824450",
            note: null,
            date: {
                day: 13,
                year: null,
                month: 9,
            },
            category: "religious-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Zan's Cup",
            description:
                "This holiday is up to the calendar owner to decide what it is for! :)",
            id: "824451",
            note: null,
            date: {
                day: 21,
                year: null,
                month: 9,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Barren Eve",
            description:
                "Winter begins on the 2nd day of Duscar, the Barren Eve, which is a nighttime celebration and remembrance of those who fell in battle.",
            id: "824452",
            note: null,
            date: {
                day: 2,
                year: null,
                month: 10,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Embertide",
            description:
                "Bahamut's holy day is called Embertide, and is celebrated on the fifth day of Duscar. This is a day of remembrance, solemnity, and respect for those who have fallen in the defense of others.",
            id: "824453",
            note: null,
            date: {
                day: 5,
                year: null,
                month: 10,
            },
            category: "religious-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Winter's Crest",
            description:
                "This day celebrates the freedom of Tal'Dorei from Errevon the Rimelord. It is the peak of the winter season, so devout followers of the Matron of Ravens (as the goddess of winter) consider it to be one of her holy days.\n\nHowever, in most of the land, people see Winter's Crest as a secular holiday, often celebrated with omnipresent music in public areas, lavish gift-giving to relatives and loved ones, and the cutting and decorating of trees placed indoors. The Sun Tree in Whitestone is often decorated with lights and other baubles for Winter's Crest.",
            id: "824454",
            note: null,
            date: {
                day: 20,
                year: null,
                month: 10,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
    ],
    categories: [
        {
            name: "Religious Holidays",
            id: "religious-holidays",
            color: "#0D47A1",
        },
        {
            name: "Secular Holidays",
            id: "secular-holidays",
            color: "#4A148C",
        },
    ],
};
