import { CalendarType, type PresetCalendar } from "src/schemas";

export const BarovianPreset: PresetCalendar = {
    type: CalendarType.Preset,
    version: 1,
    id: "BAROVIAN_PRESET",
    name: "Barovian Calendar",
    description: "Calendar of the realm of Barovia, home of Strahd.",
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
        overflow: true,
        padDays: 2,
        padMonths: 2,
        weekdays: [
            {
                type: "day",
                name: "Monday",
                id: "ID_6a183b08c8eb",
            },
            {
                type: "day",
                name: "Tuesday",
                id: "ID_892b7b7a5ae9",
            },
            {
                type: "day",
                name: "Wednesday",
                id: "ID_6bb98899ba68",
            },
            {
                type: "day",
                name: "Thursday",
                id: "ID_4a7b683aea19",
            },
            {
                type: "day",
                name: "Friday",
                id: "ID_78690a099b89",
            },
            {
                type: "day",
                name: "Saturday",
                id: "ID_ba5b09ba5a89",
            },
            {
                type: "day",
                name: "Sunday",
                id: "ID_29b90acaead9",
            },
        ],
        months: [
            {
                name: "1st Moon",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_7b4978ab581a",
            },
            {
                name: "2nd Moon",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_cb99fbb9395b",
            },
            {
                name: "3rd Moon",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_79881a89cb18",
            },
            {
                name: "4th Moon",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_5b9a8a397908",
            },
            {
                name: "5th Moon",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_f8399ab80818",
            },
            {
                name: "6th Moon",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_3ac84a7bc869",
            },
            {
                name: "7th Moon",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_e98bc86bc809",
            },
            {
                name: "8th Moon",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_89ea78ca5988",
            },
            {
                name: "9th Moon",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_798a3b990a4b",
            },
            {
                name: "10th Moon",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_3a9999e8eb59",
            },
            {
                name: "11th Moon",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_db39383b990a",
            },
            {
                name: "12th Moon",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_1bfa3b180a48",
            },
        ],
        moons: [
            {
                name: "Moon",
                cycle: 29.530588853,
                offset: 10.24953,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_e98b3a8ab8da",
            },
        ],
        leapDays: [
            {
                name: "Leap Day",
                type: "leapday",

                interval: [
                    {
                        ignore: false,
                        exclusive: false,
                        interval: 400,
                    },
                    {
                        ignore: false,
                        exclusive: true,
                        interval: 100,
                    },
                    {
                        ignore: false,
                        exclusive: false,
                        interval: 4,
                    },
                ],
                offset: 0,
                timespan: 1,
                intercalary: false,
                id: "ID_6a28dbb81a48",
            },
        ],
        eras: [
            {
                name: "Before Christ",
                format: "Year {{year}} - {{era_name}}",
                start: {
                    year: -9000,
                    month: 0,
                    day: 0,
                },
                id: "ID_897bba588a98",
                restart: false,
                endsYear: false,
                event: false,
            },
            {
                name: "Anno Domini",
                format: "Year {{year}} - {{era_name}}",
                start: {
                    year: 1,
                    month: 0,
                    day: 1,
                },
                id: "ID_185ab9b8b95a",
                restart: false,
                endsYear: false,
                event: false,
            },
        ],
    },
    current: {
        year: 735,
        day: 1,
        month: 0,
    },
    events: [
        {
            name: "Winter Solstice",
            description:
                "The Winter Solstice is the day of the year with the least time between sunrise and sunset. Many western cultures consider it the official start of winter.",
            id: "824455",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: "natural-event",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Summer Solstice",
            description:
                "The Summer Solstice is the day of the year with the most time between \nsunrise and sunset. Many western cultures consider it the official start\n of summer.",
            id: "824456",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: "natural-event",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Spring Equinox",
            description:
                "The Spring Equinox,\nalso called the Vernal Equinox, is the day between the winter and\nsummer solstices where the day is the exact same length as the night.\nMany western cultures consider it the official start of Spring.\n",
            id: "824457",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: "natural-event",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Autumnal Equinox",
            description:
                "The Autumnal Equinox,\nalso called the Fall Equinox, is the midpoint between the summer and\nwinter solstices, where the day is the exact same length as the night.\nMany western cultures consider it the official start of Autumn.\n",
            id: "824458",
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
            name: "New Year's Day",
            description: "New Year's day marks the start of a new year.",
            id: "824459",
            note: null,
            date: {
                day: 1,
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
            name: "Paschal Full Moon",
            description:
                "The first full moon after march 21st, which is considered the fixed date for the spring equinox.",
            id: "824460",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: "natural-event",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
    ],
    categories: [
        {
            name: "Natural Event",
            id: "natural-event",
            color: "#9e9d24",
        },
    ],
};
