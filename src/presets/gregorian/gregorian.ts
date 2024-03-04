import { CalendarType, type PresetCalendar } from "src/schemas";

export const GregorianPreset: PresetCalendar = {
    type: CalendarType.Preset,
    version: 1,
    id: "GREGORIAN_PRESET",
    name: "Gregorian Calendar",
    description: "A calendar for the real world.",
    autoParse: false,
    path: ["/"],
    supportInlineEvents: false,
    inlineEventTag: "inline-events",
    showIntercalarySeparately: true,
    static: {
        displayDayNumber: false,
        incrementDay: true,
        displayMoons: true,
        firstWeekDay: 1,
        overflow: true,
        weekdays: [
            {
                type: "day",
                name: "Sunday",
                abbreviation: "abc",
                id: "ID_19ea684b4a08",
            },
            {
                type: "day",
                name: "Monday",
                id: "ID_2928b90ab949",
            },
            {
                type: "day",
                name: "Tuesday",
                id: "ID_0ad9a8f9e95b",
            },
            {
                type: "day",
                name: "Wednesday",
                id: "ID_195a4b290bc9",
            },
            {
                type: "day",
                name: "Thursday",
                id: "ID_abe8c89b0999",
            },
            {
                type: "day",
                name: "Friday",
                id: "ID_2b5b8a79fa4a",
            },
            {
                type: "day",
                name: "Saturday",
                id: "ID_1a78cb79c8cb",
            },
        ],
        months: [
            {
                name: "January",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_e9997a780b3a",
            },
            {
                name: "February",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_b8c9ebeb0b89",
            },
            {
                name: "March",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_b83bda2b9be8",
            },
            {
                name: "April",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_29baea7b28ab",
            },
            {
                name: "May",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_6a3899fad909",
            },
            {
                name: "June",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_384aeb1afa8a",
            },
            {
                name: "July",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_48b8cba87b8a",
            },
            {
                name: "August",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_fa0b1a6bab8a",
            },
            {
                name: "September",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_da880b8af849",
            },
            {
                name: "October",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_babba8186968",
            },
            {
                name: "November",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_da582bfaf9b9",
            },
            {
                name: "December",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_ba1bab4a3a28",
            },
        ],
        moons: [
            {
                name: "Moon",
                cycle: 29.530588853,
                offset: 9.24953,
                faceColor: "#ffffff",
                shadowColor: "#000000",
                id: "ID_a9ab186b1819",
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
                id: "ID_b91ad86a887a",
            },
        ],
        eras: [
            {
                name: "Before Christ",
                format: "Year {{abs_year}} - {{era_name}}",
                start: {
                    year: -1,
                    month: 0,
                    day: 31,
                },
                id: "ID_9a2978c92baa",
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
                id: "ID_a8db38899a2b",
                restart: false,
                endsYear: false,
                event: false,
            },
        ],
        offset: 0,
        padDays: 2,
        padMonths: 2,
    },
    current: {
        year: null,
        day: null,
        month: null,
    },
    events: [
        {
            name: "Summer Solstice",
            description:
                "At the summer solstice, the Sun travels the longest path through the sky, and that day therefore has the most daylight.",
            id: "824599",
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
            id: "824600",
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
            name: "Spring Equinox",
            description:
                "The equinox marks the day and the night is equally as long.",
            id: "824601",
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
                "The equinox marks the day and the night is equally as long.",
            id: "824602",
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
            name: "Christmas",
            description:
                "Christmas is a Christian holiday celebrating the birth of Christ. Due to a combination of marketability and long lasting traditions it is popular even among many non-Christians, especially in countries that have a strong Christian tradition.",
            id: "824603",
            note: null,
            date: {
                day: 25,
                year: null,
                month: 11,
            },
            category: "christian-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Paschal Full Moon",
            description:
                "The first full moon after march 21st, which is considered the fixed date for the spring equinox.",
            id: "824604",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: "christian-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Easter",
            description:
                "Easter is considered the most important feast for Christians, celebrating the resurrection of Christ. It is classed as a moveable feast occurring on the first full moon after the spring equinox, which is considered to be fixed at March 21st for the sake of computing the date.",
            id: "824605",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: "christian-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Easter Monday",
            description:
                "The Monday following the Easter Sunday is often considered part of the Easter Celebration and is a day off in many countries with a strong Christian tradition.",
            id: "824606",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: "christian-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Good Friday",
            description:
                "Good Friday is the Friday preceding Easter. It comemmorates the crucifixion of Christ according to the Bible.",
            id: "824607",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: "christian-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Pentecost",
            description:
                "Celebrated exactly 50 days after Easter, Pentecost is the celebration of the Holy Spirit appearing before the Apostles as described in the Bible.",
            id: "824608",
            note: null,
            date: {
                day: null,
                year: null,
                month: null,
            },
            category: "christian-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "New Year's Day",
            description:
                "New Year's Day marks the start of a new year on the Gregorian Calendar. It starts when the clock strikes midnight and is often celebrated with fireworks, champagne and kissing.",
            id: "824609",
            note: null,
            date: {
                day: 1,
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
            name: "Valentine's Day",
            description:
                "Valentine's day is a celebration of love and romance that is popular across the world. Many more cynically minded people mostly consider it an attempt to monetize the expectation of romantic gestures on the holiday through gift cards, flowers, chocolate and dates.",
            id: "824610",
            note: null,
            date: {
                day: 14,
                year: null,
                month: 1,
            },
            category: "secular-holidays",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Halloween",
            description:
                'Halloween is holiday popular in the US, Canada and Ireland that has gradually been adopted by more and more countries. It is often celebrated by people dressing up, usually as something scary. Children will often go from door to door shouting "trick or treat" in the hopes of receiving candy, while adults tend to go to parties.',
            id: "824611",
            note: null,
            date: {
                day: 31,
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
            name: "Introduction of the Gregorian Calendar",
            description:
                "On this day in 1582 the Gregorian calendar was officially introduced, following Thursday October 4th on the Julian Calendar",
            id: "824614",
            note: null,
            date: {
                day: 15,
                year: 1582,
                month: 9,
            },
            category: "historical-events",
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
    ],
    categories: [
        {
            name: "Natural Events",
            id: "natural-events",
            color: "#2E7D32",
        },
        {
            name: "Christian Holidays",
            id: "christian-holidays",
            color: "#9b2c2c",
        },
        {
            name: "Secular Holidays",
            id: "secular-holidays",
            color: "#0D47A1",
        },
        {
            name: "Historical Events",
            id: "historical-events",
            color: "#455A64",
        },
        {
            name: "Miscellaneous Events",
            id: "miscellaneous-events",
            color: "#0288D1",
        },
    ],
};
