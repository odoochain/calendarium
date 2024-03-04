import { CalendarType, type PresetCalendar } from "src/schemas";

export const GalifarPreset: PresetCalendar = {
    type: CalendarType.Preset,
    version: 1,
    id: "GALIFAR_PRESET",
    name: "Calendar of Galifar",
    description: "Calendar of the world of Eberron.",
    autoParse: false,
    path: ["/"],
    supportInlineEvents: false,
    inlineEventTag: "inline-events",
    showIntercalarySeparately: true,
    static: {
        displayDayNumber: false,
        firstWeekDay: 0,
        incrementDay: false,
        displayMoons: true,
        overflow: false,
        padDays: 2,
        padMonths: 2,
        weekdays: [
            {
                type: "day",
                name: "Sul",
                id: "ID_598a7bd9b8b9",
            },
            {
                type: "day",
                name: "Mol",
                id: "ID_69088ac8f818",
            },
            {
                type: "day",
                name: "Zol",
                id: "ID_a8c85a98f8fa",
            },
            {
                type: "day",
                name: "Wir",
                id: "ID_fa4b687aaba9",
            },
            {
                type: "day",
                name: "Zor",
                id: "ID_58e9a82a6bc8",
            },
            {
                type: "day",
                name: "Far",
                id: "ID_9a18cb889ada",
            },
            {
                type: "day",
                name: "Sar",
                id: "ID_3b9bfa38c979",
            },
        ],
        months: [
            {
                name: "Zarantyr",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_7a8afb09aa6a",
            },
            {
                name: "Olarune",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_386b188b2a89",
            },
            {
                name: "Therendor",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_599a0ad859c8",
            },
            {
                name: "Eyre",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_98a95869e90b",
            },
            {
                name: "Dravago",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_eb5a194bcbf8",
            },
            {
                name: "Nymm",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_bb596aa9ca5b",
            },
            {
                name: "Lharvion",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_fb1bb9dabb88",
            },
            {
                name: "Barrakas",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_8bcb19c8f90a",
            },
            {
                name: "Rhaan",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_0a09eb5b7b9b",
            },
            {
                name: "Sypheros",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_3b98ab1a29e8",
            },
            {
                name: "Aryth",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_899b59faaba9",
            },
            {
                name: "Vult",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_8a286b78aac9",
            },
        ],
        moons: [
            {
                name: "Nymm",
                cycle: 28,
                offset: -14,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_a8b88988a94a",
            },
            {
                name: "Sypheros",
                cycle: 35,
                offset: -11,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_5ba80b4b096a",
            },
            {
                name: "Therendor",
                cycle: 42,
                offset: 21,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_c999085a499b",
            },
            {
                name: "Rhaan",
                cycle: 49,
                offset: 9,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_39f91ab8a85a",
            },
            {
                name: "Olarune",
                cycle: 56,
                offset: 27,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_2ada8b99788b",
            },
            {
                name: "Eyre",
                cycle: 63,
                offset: 10,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_49285b79d988",
            },
            {
                name: "Vult",
                cycle: 70,
                offset: 6,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_eaebb94a9acb",
            },
            {
                name: "Zarantyr",
                cycle: 77,
                offset: 31,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_98d86aabcbb9",
            },
            {
                name: "Aryth",
                cycle: 84,
                offset: 41,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_d989b809d97b",
            },
            {
                name: "Dravago",
                cycle: 91,
                offset: 31,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_1a293959eaab",
            },
            {
                name: "Lharvion",
                cycle: 98,
                offset: 34,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_cbf919491a5b",
            },
            {
                name: "Barrakas",
                cycle: 105,
                offset: -11,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_4a1a2a6b589b",
            },
        ],
        leapDays: [],
        eras: [],
    },
    current: {
        year: 998,
        day: 1,
        month: 0,
    },
    events: [
        {
            name: "The Tain Gala - Sharn",
            description:
                "The Tain Gala is a notable event held on the first Far of each month in Sharn.",
            id: "824461",
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
            name: "Revelation Day - Blood of Vol",
            description:
                "Meditation ceremony for Seekers (also called Ascension Day).",
            id: "824462",
            note: null,
            date: {
                day: 13,
                year: null,
                month: 0,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Winter Solstice",
            description: "The longest night of the year.",
            id: "824463",
            note: null,
            date: {
                day: 14,
                year: null,
                month: 0,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Rebirth Eve - The Silver Flame",
            description:
                "The Purified new year; a night for spiritual vigil and guarding against evil. ",
            id: "824464",
            note: null,
            date: {
                day: 14,
                year: null,
                month: 0,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Crystalfall - Sharn",
            description:
                "A day of remembrance; Ice sculptures are created (and destroyed) to commemorate the destruction of the Glass Tower on 9 Olarune in 918 by abjurers. ",
            id: "824465",
            note: null,
            date: {
                day: 9,
                year: 998,
                month: 1,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Bright Souls' Day - The Silver Flame",
            description:
                "On this day each year, the Purified celebrate the lives and sacrifice of all followers of the Flame who died while fighting evil and protecting the faithful. ",
            id: "824466",
            note: null,
            date: {
                day: 18,
                year: null,
                month: 1,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "The Day of Mourning - Sharn",
            description:
                "In commemoration of the destruction of the nation of Cyre, those who survived gather to remember the loss of their kingdom on this date in the year 994. ",
            id: "824467",
            note: null,
            date: {
                day: 20,
                year: 995,
                month: 1,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Tirasday - The Silver Flame",
            description:
                "On this day, the Silver Flame work, give gifts, and partake in joyous celebration out of thankfulness for the new planting season and the birth of Tira Miron - the Voice of the Silver Flame.",
            id: "824468",
            note: null,
            date: {
                day: 5,
                year: null,
                month: 2,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Sun's Blessing - The Sovereign Host",
            description:
                "The Sovereign Host enjoys this festival of peace, and of setting aside differences, in the name of Dol Arrah.",
            id: "824469",
            note: null,
            date: {
                day: 15,
                year: null,
                month: 2,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Initiation Day - The Silver Flame",
            description:
                "Seminary graduations and breaking grounds for new churches are common on this day as the Silver Flame recalls their declarations of independent faith and the construction of their first cathedral on this special day each year. ",
            id: "824470",
            note: null,
            date: {
                day: 11,
                year: null,
                month: 3,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Baker's Night - The Silver Flame",
            description:
                "An old and misunderstood, yet immensely popular, holiday wherein followers of the Silver Flame gather to share pastries and treats created by bakers within their fold. ",
            id: "824471",
            note: null,
            date: {
                day: 6,
                year: null,
                month: 4,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Aureon's Crown - Sharn and The Sovereign Host",
            description:
                "The Sovereign Host celebrate knowledge on this day with lectures and sermons.Secular institutions hold graduation and commencement ceremonies on this date, as do the monastic schools of the Silver Flame.In Sharn this has become a common secular holiday, wherein even non-devout members of the Five Nations attend lectures and sermons held by the priests of Aureon on philosophical, historical, and a range of other topics - including discussions on the nature of the gods.\n\n",
            id: "824472",
            note: null,
            date: {
                day: 26,
                year: null,
                month: 4,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Promisetide - The Silver Flame",
            description:
                "A controversial holiday outside of the Silver Flame faith, on this day the Purified honor the Silver Flame for the promise of paradise. They also honor (without worship) the Sovereign Host for having created the world, before stepping aside to allow the Flame its rightful place as the last god of Eberron.  ",
            id: "824473",
            note: null,
            date: {
                day: 28,
                year: null,
                month: 4,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Brightblade - Sharn and The Sovereign Host",
            description:
                "This Sovereign Host festival, dedicated to Dol Dorn, is marked by gladiatorial and athletic contests. \n\nIn Sharn, festival celebrations occur throughout the temple districts with events culminating in a combined contest of champions at the Cornerstone Arena. ",
            id: "824474",
            note: null,
            date: {
                day: 12,
                year: null,
                month: 5,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "First Dawn - The Silver Flame",
            description:
                "On this day in 914, the Church of the Silver Flame officially assumed control of the government of Thrane. On each anniversary, the Purified give thanks for their just rule, while also honoring the memory of King Thalin, whose death paved the way for their governance.",
            id: "824475",
            note: null,
            date: {
                day: 21,
                year: 915,
                month: 5,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Silvertide - The Silver Flame",
            description:
                "Commemoration of both the couatl sacrifice and the entry, thousands of years ago, of the Silver Flame into Eberron mark this highest of holy days. The vast majority of Purified spend this day in prayer and observance.  ",
            id: "824476",
            note: null,
            date: {
                day: 14,
                year: null,
                month: 6,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "The Race of Eight Winds - Sharn",
            description:
                "Legend tells of King Galifar II's fascination with aerial scouts and cavalry. The evolution of this annual contest took centuries, but has given Sharn an exotic and well anticipated event involving beasts and their riders in a symbiotic quest for glory* over a course that finds them weaving through the spires of the city. \n\n\n\n*the winner also receives 500gp and a land grant located elsewhere in Breland.",
            id: "824477",
            note: null,
            date: {
                day: 21,
                year: 201,
                month: 6,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "The Hunt - Sharn and The Sovereign Host",
            description:
                "The Sovereign Host celebrate Balinor with communal hunts of dangerous creatures. \n\nIn Sharn, a dangerous beast*, whose transport to the city was arranged by the priests of Balinor, is released into the Depths of the Lower-City. Open to any who would participate (and pay an entry fee in the form of a 5gp donation), the victor must return with the beast's head to receive a 500gp purse, local fame, and the blessing of Balinor. \n\n\n\n*often a singular beast, it can be several - which then requires the victor to return with the most skins. ",
            id: "824478",
            note: null,
            date: {
                day: 4,
                year: null,
                month: 7,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Victory Day - The Silver Flame",
            description:
                "Commemorating the conclusion of the lycanthropic purge (832 YK - 880 YK), on Victory Day the adult faithful of the Silver Flame attend sermons on triumph, defeat, and the somewhat questionable methods utilized by the templars during the purge - while the children of the faithful act out great battles with toy swords. ",
            id: "824479",
            note: null,
            date: {
                day: 9,
                year: 881,
                month: 7,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Fathen's Fall - Sharn",
            description:
                "Honoring the memory of Fathen, a great hero of the Silver Crusade (832 YK - 880 YK), who, in the last days of the purge, was torn apart by wererats on the streets of North Market. Faithful gather on this day at the Shrine of Fathen the Martyr to listen to a sermon from the priest of High Hope. This holiday is often uncomfortable and tense for shifter communities in Sharn. ",
            id: "824480",
            note: null,
            date: {
                day: 25,
                year: 881,
                month: 7,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Boldrei's Feast - Sharn and The Sovereign Host",
            description:
                "A feast of community in the name of Boldrei, extravagant parties are often held on this holiday and it has also become the traditional day for elections. \n\nIn Sharn, a great feast is held at the Pavilion of the Host with goods and services donated  from local merchants, as well as House Ghallanda. Many grand parties, some quite astonishing in their opulence, are hosted by the wealthiest members of varying districts - often in competition with one another for social standing. ",
            id: "824481",
            note: null,
            date: {
                day: 9,
                year: null,
                month: 8,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "The Ascension - Sharn",
            description:
                "Each year on The Ascension, followers reaffirm their faith and give thanks as well as attend blessing ceremonies at temples throughout the city - the grandest of which occurs at the Cathedral of the Cleansing Flame. All of this is to honor the sacrifice of Tira Miron, the Voice of the Flame, without which there would be no Church of the Silver Flame. Contributions to their community on this day are a high priority for the faithful.",
            id: "824482",
            note: null,
            date: {
                day: 1,
                year: null,
                month: 9,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Wildnight - Sharn",
            description:
                "With the The Fury (the Sovereign of Passion and Madness) reaching the height of her power on this night, people find it difficult to control or restrain their impulses - once the sun sets, public revelry in the streets climbs to joyous or, all too often, dangerous levels, calming only as the sun rises on the following morning. ",
            id: "824483",
            note: null,
            date: {
                day: 18,
                year: null,
                month: 9,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Saint Voltros's Day - The Silver Flame",
            description:
                "Though one of the least high holy days, it is marked by brief prayers and church services in the honor of the birth of Saint Voltros - the first paladin called to only serve the Silver Flame.",
            id: "824484",
            note: null,
            date: {
                day: 25,
                year: null,
                month: 9,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Thronehold - Sharn",
            description:
                "On this day in 996, the Treaty of Thronehold was signed, formally ending the Last War. Annual celebratory feasts are held throughout the Five Nations to mark this auspicious and long-awaited event. ",
            id: "824485",
            note: null,
            date: {
                day: 11,
                year: 997,
                month: 10,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Rampartide - The Silver Flame",
            description:
                "In accordance with scripture, on this day the Purified steel themselves against wickedness, both without and within, through repentance and fasting. Children, elderly, and the sick are required only to give up their favorite foods for the day. ",
            id: "824486",
            note: null,
            date: {
                day: 24,
                year: null,
                month: 10,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Long Shadows - Sharn",
            description:
                "As dark magic dominates over these three days of the Long Shadows, the myth of Sovereign Lord Aureon's stolen shadow is forefront in the minds of the people. Most will spend these days indoors huddled around the warmth of a fire, but those few who worship the dark deity use this time to prey upon the weak and the foolish. ",
            id: "824487",
            note: null,
            date: {
                day: 26,
                year: null,
                month: 11,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Khybersef - The Silver Flame",
            description:
                'Originally called Khyber\'s Eve, the Purified spend the night in intense prayer and spiritual vigilance against the, according to scripture, "thinning of the bonds that hold the demon lords in Khyber" between now (the beginning of winter) and the solstice. Quests and crusades often begin on Khybersef. ',
            id: "824488",
            note: null,
            date: {
                day: 27,
                year: null,
                month: 11,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Spring Equinox",
            description:
                "The spring equinox is when the day and the night are equally as long, and are getting longer.",
            id: "824489",
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
            id: "824490",
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
            id: "824491",
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
    ],
    categories: [],
};
