import { CalendarType, type PresetCalendar } from "src/schemas";

export const GreyhawkPreset: PresetCalendar = {
    type: CalendarType.Preset,
    version: 1,
    id: "GREYHAWK_PRESET",
    name: "Calendar of Greyhawk",
    description: "Create the calendar of Oerth",
    autoParse: false,
    path: ["/"],
    supportInlineEvents: false,
    inlineEventTag: "inline-events",
    showIntercalarySeparately: true,
    static: {
        displayDayNumber: false,
        incrementDay: false,
        displayMoons: true,
        firstWeekDay: 0,
        overflow: false,
        padDays: 2,
        padMonths: 2,
        weekdays: [
            {
                type: "day",
                name: "Starday",
                id: "ID_a8e979984938",
            },
            {
                type: "day",
                name: "Sunday",
                id: "ID_1b68bb78ca1b",
            },
            {
                type: "day",
                name: "Moonday",
                id: "ID_c8b86aea0998",
            },
            {
                type: "day",
                name: "Godsday",
                id: "ID_b8097a18e95b",
            },
            {
                type: "day",
                name: "Waterday",
                id: "ID_1918c99949ca",
            },
            {
                type: "day",
                name: "Earthday",
                id: "ID_fa295a1bab89",
            },
            {
                type: "day",
                name: "Freeday",
                id: "ID_6a485ada3ae8",
            },
        ],
        months: [
            {
                name: "Needfest",
                type: "month",
                length: 7,
                interval: 1,
                offset: 0,
                id: "ID_b8a9e9da8a48",
            },
            {
                name: "Fireseek",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_39b90bd8189a",
            },
            {
                name: "Readying",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_48a9081ad839",
            },
            {
                name: "Coldeven",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_5a7b6beadb68",
            },
            {
                name: "Growfest",
                type: "month",
                length: 7,
                interval: 1,
                offset: 0,
                id: "ID_48c8d82b1908",
            },
            {
                name: "Planting",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_081a793a49da",
            },
            {
                name: "Flocktime",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_eb68a89a0a2a",
            },
            {
                name: "Wealsun",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_9b3a098ae908",
            },
            {
                name: "Richfest",
                type: "month",
                length: 7,
                interval: 1,
                offset: 0,
                id: "ID_f99b4b3a08b8",
            },
            {
                name: "Reaping",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_ebe9eb68ea39",
            },
            {
                name: "Goodmonth",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_fb3b6af9895b",
            },
            {
                name: "Harvester",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_395bcb399b8a",
            },
            {
                name: "Brewfest",
                type: "month",
                length: 7,
                interval: 1,
                offset: 0,
                id: "ID_e8b908181afa",
            },
            {
                name: "Patchwall",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_cbda3b399969",
            },
            {
                name: "Ready'reat",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_592a2a690bf8",
            },
            {
                name: "Sunsebb",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_39e8faf8e9b8",
            },
        ],
        moons: [
            {
                name: "Luna",
                cycle: 28,
                offset: 3,
                faceColor: "#ffffff",
                shadowColor: "#292b4a",
                id: "ID_f8997b39b8b8",
            },
            {
                name: "Celene",
                cycle: 91,
                offset: 46,
                faceColor: "#ffffff",
                shadowColor: "#292b4a",
                id: "ID_7afbb9b88be8",
            },
        ],
        leapDays: [],
        eras: [
            {
                name: "Common Year",
                format: "Year {{year}} CY",
                start: {
                    year: 1,
                    month: 0,
                    day: 1,
                },
                id: "ID_db994869db7b",
                restart: false,
                endsYear: false,
                event: false,
            },
        ],
    },
    current: {
        year: 591,
        day: 1,
        month: 0,
    },
    events: [
        {
            name: "Winter Solstice",
            description:
                "The winter solstice marks the shortest day and longest night of the year, when the sun is at its lowest arc in the sky.",
            id: "824573",
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
                "The 4th of Growfest is the first day of Low Summer in Oerth's Calendar. This is the point where the sun crosses Oerth's equator. Holidays celebrated on this date include Saint Cuthbert's Day, the Feast of Edoira, the Spring Feast, and Raxivort's Orgy. This is also the day on which the priests of Tlaloc ritually sacrifice and eat the flesh of human children or babies in their patron's honor. Worshippers of Rillifane Rallathil celebrate the Budding on this day, a joyful celebration of new life celebrated through dance and song in oak groves in the heart of the forest. A ritual hunt of a noble heart is held on this day, after which the venison is eaten in celebration of Rillifane's bounty.\n\nAlso celebrated on this date is the Sanctification of Renewal, a sacred holiday to the followers of Garyx.",
            id: "824574",
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
            id: "824575",
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
                "The 4th of Brewfest is the Autumnal Equinox, when the sun crosses the equator from north to south. This date is the official end of high summer and the beginning of autumn on the Greyhawk Calendar. This date is holy to Wenta and is sometimes regarded as an unofficial holy day of Velnius. Among the xvarts, it also marks the celebration of Raxivort's Orgy. The worshippers of Rillifane Rallathil celebrate the Transformation on this day, a time of dancing and spiritual rebirth marking the beginning of autumn and the promise that spring will come again.",
            id: "824576",
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
            name: "Great Moons Glory",
            description:
                "The night of Great Moon's Glory on Readying 11th, when Luna is full but Celene is new. It is holy to Celestian, and a time when offerings are left to Atroa to beg her to come early and to Telchur to request that he peacefully leave. Druids of the Old Faith are known to also hold this night as auspicious, but few outside their circles know the details.",
            id: "824577",
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
            name: "Dark Night",
            description:
                "Dark Night, also called Black Night, Star Night, and the Night of Hopeful Dawn, is observed on Goodmonth 11. It is a holy night for the church of Celestian because the stars are so easy to observe without the light of one of the moons getting in the way.\n\nIt is also a holy night for the church of Rao, who refer to it as the Night of Hopeful Judgment. They believe that Rao chooses this time to separate the sinful from the righteous in the afterworld. There is also a prophecy in the Raoan holy text, the Book of Incarum, that claims that Rao will cleanse the world of evil on this night, sometime in the future.\n\nThe priesthood of Kurell consider it holy, too, calling it Kurell's Night, requiring the faithful to undertake special missions on this night to prove their cleverness and skill. Kurell smiles particularly on acts of theft or vengeance performed on his holy night, blessing those who do so successfully. Donations to Kurell's church are encouraged afterwards, for Kurell may take vengeance against those who do not properly thank him for his aid.\n\nMost other people regard Dark Night as a time of ill omen, fearing it as much as the night of the Blood Moon Festival. Bonfires are burned from dusk till dawn, particularly in small villages and in Elmshire and Narwell. Orc and goblin religions view it as an excellent night for raiding settlements. Certain evil cults perform kidnappings, murders, and vile rites during this period. On the other hand, lycanthropic activity is at its lowest.\n\nIggwilv and Tuerny attempted to summon a demonic army to Luna on this night in 585 CY.",
            id: "824578",
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
            name: "Agelong",
            description:
                "Agelong, observed on the 4th of Richfest (the Summer Solstice), is the celebration of the legendary creation of the elves. According to myth, after Corellon Larethian spilled his blood during the battle with Gruumsh, the rest of the Seldarine gathered this sacred blood and mingled it with the tears shed during the same battle by Sehanine Moonbow. The Seldarine then infused these divine fluids into vessels they had created to be the bodies of the elven race.\n\nThis day is, among the elves, mostly an excuse to go orc-hunting. Elven warriors cut themselves with daggers carved from volcanic glass to remind themselves of Corellon's own wound from Gruumsh's spear, then strive to slaughter as many orcs as possible during the night.",
            id: "824579",
            note: null,
            date: {
                day: 4,
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
            name: "Blood Moon Festival",
            description:
                "The Blood Moon Festival is celebrated on Coldeven 11, the night when Luna is full just before the Spring Equinox. On this night, curses are said to be twice as powerful and the forces of evil are at their strongest. Fiends roam the lands, and human sacrifice is common. This night is held especially sacred by cultists of Nerull, but worshipers of Kurell also mark this night as especially auspicious for acts of vengeance. Goodly folk superstitiously guard their homes with horseshoes, holy water, bottles of milk, and iron filings.\n\nDemonic forces sent by Iuz destroyed the leadership of the Horned Society during the Blood Moon Festival of 583 CY.\n\nIt's possible that this is also the night the elves celebrate as Faerieluck.",
            id: "824580",
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
            name: "Breadgiving Day",
            description:
                "Celebrated on on the Winter Solstice (Needfest 4), Breadgiving Day, is a day of charity observed in the Free City of Greyhawk by the faiths of Pelor, Rao, and Saint Cuthbert.\n\nThis was not originally a religious holiday as such. It is a new practice that began after the Greyhawk Wars to feed the refugees that flooded the city during that time. Since of Old City who line up by the hundreds along the Processional from the Black Gate. The booths are worked by low-ranking priests from all three religions, with armed priests of St. Cuthbert providing security. A smaller event is held simultaneously below Wharfgate in Greyhawk City's Shacktown.\n\nThe clergies of Heironeous, Pholtus, and Trithereon do not participate, but they compete with one another to perform good deeds the whole week of Needfest. The rivalries between Trithereon and Pholtus, Trithereon and Heironeous, and Pholtus and St. Cuthbert are such that the faiths sometimes fall into arguments and even blows if their \"good deeds\" conflict with each other. Greyhawk's rowdy citizens often cheer and place bets on the outcomes of these quarrels.\n\nThe priests of Pelor hold a morning ceremony on this day with a sermon, singing, and music.",
            id: "824581",
            note: null,
            date: {
                day: 4,
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
            name: "Brewfest",
            description:
                "Also called Drunken Days or the Feast of Brewers, Brewfest, the fourth festival week of Oerth's calendar, is a rowdy period unsurprisingly claimed as a holy time by the churches of Olidammara and Wenta. The Free City of Greyhawk does not celebrate the entire week, but Brewfest 1 and Brewfest 7 are both set aside as public holidays. In Elmshire, the week is spent in restful, carefree music, drinking, and dancing. In Hardby it is spent with fistfights, riots, and ensuing hangovers. In Narwell it is celebrated with ale-brewing contests, horse races, beatings, and robbery. In Safeton it is celebrated with nervous violence and nightly orc hunts. The week is also sacred to the Old Faith.\n\nThe elves call this week Fallrite, and use it to contemplate the spirits of their ancestors, the passage to the afterworld, and the fragility of life. They believe other races make merry during Brewfest because they are \"hiding\" to avoid facing death's reality. In contrast, the olvenfolk strive to fulfill the most important of their duties and reach the most crucial of their decisions during this time of year. The elven kings and queens traditionally judge capital cases during Fallrite.",
            id: "824582",
            note: null,
            date: {
                day: 4,
                year: null,
                month: 12,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Faerieluck",
            description:
                "Faerieluck is a holiday celebrated by the elves in early spring, when the power of Faerie runs high and they celebrate with their fey cousins: the sprites, buckawns, pixies, nymphs and so forth. The point of the festival is to remind the elves of their ancient kinship with these creatures. The day is spent playing practical jokes, engaging in battles of wit, and general merriment.",
            id: "824583",
            note: null,
            date: {
                day: 11,
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
            name: "Feast of Edoira",
            description:
                "The Feast of Edoira is a holiday celebrated in the Domain of Greyhawk on Growfest 4, during the Spring Equinox. It is named after Edoira, a priest of Rao who centuries ago established the Edoiran Compact, a pact by which many of the lawful good-aligned faiths and people of the Domain could agree to cooperate. The Compact was later extended to non-lawful good and neutral faiths.\n\nEdoira was never deified but was revered by many good faiths in the Domain. The holiday was marked by religious services on Godsday of Growfest led by the clerics of the good faiths who partook of the Compact, and secular festivals by the ordinary citizenry. Observance of the holiday has declined over the years, though the clergies of Rao and Pelor still hold their traditional interfaith services, with occasional participation by the priesthoods of Heironeous and Mayaheine. Since the end of the Greyhawk Wars most of the Domain's outlying communities no longer observe the holiday. Only one church in Safeton still does so.",
            id: "824584",
            note: null,
            date: {
                day: 4,
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
            name: "Desportium of Magic",
            description:
                "The highlight of Growfest is the Desportium of Magic. During this day torchlight only, no magic illumination is supposed to be used. Wizards and Sorcerers then perform feats of illusion and magic trying to outdo one another with their displays. Usually there is a panel of judges to decide, in the larger cities there is usually a limit of 5-person teams competing. Each performance during the Desportium of Magic uses a long established theme, that of an attack on the town by various monsters and Dark Elves, repelled by brave warriors and spellcasters. The displays, made up of any number of spells cast without the use of magic devices, cannot actually cause any harm to property or people, but must be as wonderful, striking, detailed, and lifelike as possible.\n\nThis motif is based on actual attacks through the years from the Uttermost War to the most recent Great Slave Raids. The idea is to make the attackers as dreadful as possible and the defenders as heroic as possible, secondary is to make sure that people will always remember the terror of the Uttermost War. In large cities like the CSIO and CSWE and Tarantis, these performances last all night and are amazing to watch. In smaller villages without spellcasters, puppet plays are often done in its stead.",
            id: "824585",
            note: null,
            date: {
                day: 7,
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
            name: "Holy Day of Pelor",
            description:
                "The Holy Day of Pelor, also known as Giving Day and Midsummer's Day, is celebrated on the Summer Solstice.\n\nBecause Pelor is widely loved by the commoners, this day is set aside as a day of rest in the Free City of Greyhawk. Only essential work is done on this day. Many merchants close their shops on Giving Day as well out of respect for the Sun Father and his teachings. Gambling houses are closed, but not hostelries, for Giving Day is a day of feasting and goodwill, a time for enjoying the fruits of the Oerth.\n\nPublic services are held from dawn until noon by Pelor's priests, outdoors if the weather permits (which if almost always does, as the clerics use weather-controlling magic for maximum sunlight). Even Greyhawk City's large temple of Pelor is not big enough to hold the throngs who come to celebrate on this day, so throngs of the faithful fill the temple grounds in the Garden Quarter, spilling out from the Millstream to the Nobles' Wall, and to the road leading toward Greyhawk's Grand Theater. Many come, of course, for the free meal the priests provide after the service. The Pelorian priests are well aware of this, but believe that for the needy, a full stomach must come before wisdom and learning. Members of Greyhawk's Guild of Thieves and Beggar's Union, many of whom remember Midsummer's Day fondly from their orphaned childhoods, both protect priests of Pelor on this day, and woe onto those who attempt to test them on this matter.\n\nPriests of Pelor, bedecked in yellow and gold, parade about the streets, demanding donations for their charitable works, freely using guilt to squeeze more from stingy purses. Free healings are given out, particularly to children. Most Greyhawkers wear at least one item of yellow cloth on this day out of respect.\n\nSome crusading Pelorians crusade against evil lycanthropes on this night, since both Celene and Luna are full.",
            id: "824586",
            note: null,
            date: {
                day: 4,
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
            name: "Holy Day of Serenity",
            description:
                "The Holy Day of Serenity, on Reaping 10, is celebrated in Veluna as a holy day of Rao, though it's actually the anniversary of Veluna's secession from Furyondy in 476 CY. It is celebrated with religious singing and worship.",
            id: "824587",
            note: null,
            date: {
                day: 10,
                year: null,
                month: 9,
            },
            category: null,
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
            name: "Religious Holidays",
            id: "religious-holidays",
            color: "#FFEB3B",
        },
        {
            name: "Secular Holidays",
            id: "secular-holidays",
            color: "#0D47A1",
        },
        {
            name: "Magical Events",
            id: "magical-events",
            color: "#311B92",
        },
        {
            name: "Miscellaneous Events",
            id: "miscellaneous-events",
            color: "#0288D1",
        },
    ],
};
