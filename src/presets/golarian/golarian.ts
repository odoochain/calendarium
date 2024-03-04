import { CalendarType, type PresetCalendar } from "src/schemas";

export const GolarionPreset: PresetCalendar = {
    type: CalendarType.Preset,
    version: 1,
    id: "GOLARIAN_PRESET",
    name: "Calendar of Golarion",
    description: "Calendar for the world of Pathfinder.",
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
                name: "Moonday",
                id: "ID_db8af8f85b8a",
            },
            {
                type: "day",
                name: "Toilday",
                id: "ID_f87a094b2849",
            },
            {
                type: "day",
                name: "Wealday",
                id: "ID_2a5bb88b3ae8",
            },
            {
                type: "day",
                name: "Oathday",
                id: "ID_c93a0be8981b",
            },
            {
                type: "day",
                name: "Fireday",
                id: "ID_2b7b59794a0b",
            },
            {
                type: "day",
                name: "Starday",
                id: "ID_baaa6a89ca1b",
            },
            {
                type: "day",
                name: "Sunday",
                id: "ID_f9baca088b28",
            },
        ],
        months: [
            {
                name: "Abadius",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_dad9da89f818",
            },
            {
                name: "Calistril",
                type: "month",
                length: 28,
                interval: 1,
                offset: 0,
                id: "ID_980a88cb9b68",
            },
            {
                name: "Pharast",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_a9c96ac80908",
            },
            {
                name: "Gozran",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_a99a697b9abb",
            },
            {
                name: "Desnus",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_8bcad9a8f84a",
            },
            {
                name: "Sarenith",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_484a49a998db",
            },
            {
                name: "Erastus",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_9a48e9b96938",
            },
            {
                name: "Arodus",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_bbe99b2afaea",
            },
            {
                name: "Rova",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_ba39fbe8c8b8",
            },
            {
                name: "Lamashan",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_69d93ba9dba8",
            },
            {
                name: "Neth",
                type: "month",
                length: 30,
                interval: 1,
                offset: 0,
                id: "ID_4ad8fb79eb6a",
            },
            {
                name: "Kuthona",
                type: "month",
                length: 31,
                interval: 1,
                offset: 0,
                id: "ID_9a3a8b388939",
            },
        ],
        moons: [
            {
                name: "Somal",
                cycle: 29.5,
                offset: 9.5,
                faceColor: "#ffffff",
                shadowColor: "#292b4a",
                id: "ID_b87ab959cac9",
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
                        interval: 8,
                    },
                ],
                offset: 0,
                timespan: 1,
                intercalary: false,
                id: "ID_88c8da3b8b2b",
            },
        ],
        eras: [
            {
                name: "Age of Serpents",
                format: "Year {{year}} - {{era_name}}",
                start: {
                    year: 4720,
                    month: 8,
                    day: 15,
                },
                id: "ID_eb4af87babaa",
                restart: false,
                endsYear: false,
                event: false,
            },
            {
                name: "Age of Darkness",
                format: "Year {{abs_year}} - {{era_name}}",
                start: {
                    year: -5300,
                    month: 0,
                    day: 1,
                },
                id: "ID_58e99a8b9b9a",
                restart: false,
                endsYear: false,
                event: false,
            },
            {
                name: "Age of Anguish",
                format: "Year {{year}} - {{era_name}}",
                start: {
                    year: -4500,
                    month: 8,
                    day: 1,
                },
                id: "ID_3af84ada898a",
                restart: false,
                endsYear: false,
                event: false,
            },
            {
                name: "Age of Destiny",
                format: "Year {{year}} - {{era_name}}",
                start: {
                    year: -3500,
                    month: 8,
                    day: 1,
                },
                id: "ID_abc87ad9fbfb",
                restart: false,
                endsYear: false,
                event: false,
            },
            {
                name: "Age of Enthronement",
                format: "Year {{year}} AR - {{era_name}}",
                start: {
                    year: 1,
                    month: 8,
                    day: 1,
                },
                id: "ID_19197be9dac8",
                restart: false,
                endsYear: false,
                event: false,
            },
            {
                name: "Age of Lost Omens",
                format: "Year {{year}} AR - {{era_name}}",
                start: {
                    year: 4606,
                    month: 8,
                    day: 1,
                },
                id: "ID_7b585b5bd9ea",
                restart: false,
                endsYear: false,
                event: false,
            },
        ],
    },
    current: {
        year: 4720,
        day: 15,
        month: 0,
    },
    events: [
        {
            name: "Summer Solstice",
            description:
                "At the summer solstice, the Sun travels the longest path through the sky, and that day therefore has the most daylight.",
            id: "824492",
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
            id: "824493",
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
            id: "824494",
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
            id: "824495",
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
            name: "Eternal Kiss",
            description:
                "Zon-Kuthon\n\nCulminating on the first new moon of the new year, the Eternal Kiss is an 11 day ceremony honoring Zon-Kuthon. On the final day, a living sacrifice is made to the Dark Prince, after the victim is pampered and pleasured for the ten days prior. The sacrifice can either be an enemy or a great devotee of the church, and is kept alive for as long as possible during the torture using magic. This holiday often involves fortune-telling as a part of the torture, using the victim's entrails or their cries of pain to determine the Midnight Lord's will. Occasionally it is believed that the sacrifice will prophesy with the voice of Zon-Kuthon himself.",
            id: "824496",
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
            name: "Longnight",
            description:
                "Longnight is a holiday celebrated on the full moon in the winter month of Abadius. During the festival, revelers stay up all night to greet the dawn to defy the long winter months. It is even celebrated in Irrisen, where there are no natural seasons.",
            id: "824497",
            note: null,
            date: {
                day: null,
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
            name: "Foundation Day",
            description:
                "Absalom, Milani\n\nFoundation Day is a civil holiday celebrated on the New Year (1 Abadius) in Absalom to commemorate the city's founding by the god Aroden in 1 AR.",
            id: "824498",
            note: null,
            date: {
                day: 1,
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
            name: "Pjallarane Day",
            description:
                "Irrisen\n\nPjallarane Day is an ancient holiday in Irrisen celebrated on 1 Abadius (New Year's Day). Every 100 years, Baba Yaga returns to Golarion to remove her daughter from the throne of Irrisen, and put another daughter on the throne instead. In 3713 AR the third Queen of Irrisen, Pjallarane, and her children chose to resist. Baba Yaga ruthlessly crushed the rebellion in a single day, which is now celebrated as a holiday. The festival includes feasting and the burning of effigies of tar and straw. This is a reminder of the fate of Pjallarane's followers, who were burned alive as a warning to all those who would oppose Baba Yaga.",
            id: "824499",
            note: null,
            date: {
                day: 1,
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
            name: "Vault Day",
            description:
                "Abadar\n\nVault Day is a holiday held on 6 Abadius in honor of Abadar, Master of the First Vault.",
            id: "824500",
            note: null,
            date: {
                day: 6,
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
            name: "Ruby Prince's Birthday",
            description:
                "Osirion\n\nThe Ruby Prince's Birthday is a national holiday in Osirion in honor of the birthday of Khemet III, the Ruby Prince. It is celebrated annually on the 20 Abadius.",
            id: "824501",
            note: null,
            date: {
                day: 20,
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
            name: "Merrymead",
            description:
                "Druma, Cayden Cailean\n\nA holiday occurring on 2 Calistril, Merrymead was started in Druma and is supposed to be a time to share of the last of the previous year's mead with the rest of the community.\n\nIn current times, most people just use it as an excuse to drink excessively. The poor travel from bar to bar drinking whatever alcohol they can afford, while the wealthy will set aside specific vintages for this day. A known consequence of this day are 'mead riots' that happen when there are more celebrants than there is alcohol to serve them. This leads to a violent, destructive group of people in a crowded bar. If this is a common occurrence for particular cities, they may reinforce their guard force for the inevitably eventful night.",
            id: "824502",
            note: null,
            date: {
                day: 2,
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
            name: "King Eodred II's Birthday",
            description:
                "Korvosa\n\nKing Eodred II's Birthday was a local holiday in the Varisian city-state of Korvosa and was celebrated on 16 Calistril. It commemorated the birthday of its former ruler, King Eodred Arabasti II, who decreed that on the day, scantily clad women would dance and serve free wine to celebrants.",
            id: "824503",
            note: null,
            date: {
                day: 16,
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
            name: "Loyalty Day",
            description:
                "Cheliax, Asmodeus\n\nLoyalty Day is a holiday in the nation of Cheliax commemorating the date on Calistril 19, 4640 AR when House Thrune signed the Treaty of Egorian, declaring it the victor in the Chelish Civil War and ruler of the empire. Because of House Thrune's well-known ties to the infernal, this holiday is also observed by the Church of Asmodeus who consider it a feast day. The church along with local governments provide a free meal to all citizens to remind them of the benefits House Thrune provides them with.",
            id: "824504",
            note: null,
            date: {
                day: 19,
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
            name: "Fateless Day",
            description:
                "Mahathallah\n\nFollowers of Mahathallah mark each leap day as Fateless Day, when the River of Souls temporarily stops and souls can escape Pharasma's judgment. They perform many sacrificial and suicidal rituals on Fateless Day.",
            id: "824505",
            note: null,
            date: {
                day: 29,
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
            name: "Golemwalk Parade",
            description:
                "Magnimar, Varisia\n\nThe Golemwalk Parade is a parade of golems created by amateurs hoping to win a monetary grant, or even a job, from the Golemworks in Magnimar. At the end of the parade along the Avenue of Honors, the constructs are judged.",
            id: "824506",
            note: null,
            date: {
                day: null,
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
            name: "Day of Bones",
            description:
                "Pharasma\n\nPriests and worshipers of the Lady of Graves parade the bodies of the recently dead on this holiday, holding free burials afterwards.",
            id: "824507",
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
            name: "Sable Company Founding Day",
            description:
                "Korvosa\n\nSable Company Founding Day is a holiday marking the founding of the Sable Company of the Varisian city-state of Korvosa. Celebrated on 6 Pharast, the day is marked by somber military parades that generally preclude the consumption of alcohol, a staple on most other holidays.",
            id: "824508",
            note: null,
            date: {
                day: 6,
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
            name: "Night of Tears",
            description:
                "Solku\n\nThe Night of Tears held annually on 7 Pharast in the Katapeshi town of Solku. It is a solemn vigil commemorating those lost in the Battle of Red Hail in 4701 AR.",
            id: "824509",
            note: null,
            date: {
                day: 7,
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
            name: "Kaliashahrim",
            description:
                "Qadira\n\nKaliashahrim is a national holiday celebrated on Pharast 13 in Qadira that celebrates the Padishah Emperor of distant Katheer, and Qadira's loyalty to him.",
            id: "824510",
            note: null,
            date: {
                day: 13,
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
            name: "Conquest Day",
            description:
                "Nex\n\nEvery year, on the 26th of Pharast, Elder Architect Oblosk — oldest member of Nex's Council of Three and Nine — ascends to the highest balconies of the Bandeshar in Quantium. In a voice made thunderous by the platform's magic, the wizened pech councilman spends the hours from dusk to just past noon enumerating the atrocities committed by the necromancers of Geb upon the people of Nex, culminating with the disappearance of the archwizard Nex himself. At the conclusion of this record of national wounds, the country's eleven other council members join Oblosk in renewing their yearly vow to neither forget nor forgive the Gebbites' atrocities and to again swear in their lost ruler's name to endlessly wage war against their ancient enemies.\n\nOn this day, known as Conquest Day, all the people of Nex are expected to share in their leaders' oaths, to celebrate the shared patriotism of their wondrous nation, and to remember the sacrifices of heroes past. This also makes it a day for many Nexian wizards to reveal deadly new spells, gigantic constructs, and audacious arcane masterworks—which many creators promise to be the doom of their foes. Even throughout the rest of the Inner Sea region, many crusaders, rebels, and zealots observe Conquest Day as a day to renew blood oaths, launch long-planned battles, and finally take revenge. It is a day for words of honor, a day for battle cries, and a day where glory most favors the bold.",
            id: "824511",
            note: null,
            date: {
                day: 26,
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
            name: "Days of Wrath",
            description:
                "Asmodeus, Cheliax\n\nThe Days of Wrath, or Dies Irae, are a holiday celebrated on both solstices and equinoxes in the nation of Cheliax and wherever Asmodeus is worshiped. They are primarily a national holiday and not truly a religious one, but the two are often confused due to Cheliax's current political climate. Various contests and blood sports are held on these days, promoting those elites who can clearly demonstrate their superiority over others. Some believe that these competitions are watched and judged by devils themselves. In the parts of the world where the Prince of Darkness is not openly venerated, these holidays take on a different tone: they are used to settle old grievances and also to end contracts.\n\nIn these days, bloodsports are organized into cities' stadiums. Slaves and servants of any master may choose to enter the arena for one-on-one bloody battles to the death. Free men and women of all classes are free to enter the arena as well. The entrants fight in rounds until at last one stands alone. The winner is granted freedom from slavery or servitude, erasure of all debts, and a purse of gold.\n\nThe winter solstice sees the culmination of the Dies Irae, with all the winners of the three previous bouts summoned to Egorian to fight to the death for the amusement of the nobles. The winner is given a title of baronet and a plot of land.",
            id: "824512",
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
            name: "Firstbloom",
            description:
                "Gozreh\n\nFirstbloom is a holiday celebrating the first planting of the agricultural season, and generally associated with the weather god Gozreh. It falls on the vernal equinox. Many farming communities see it as the beginning of the year, even though conventional calendars begin two months earlier. Despite weariness after a full day planting, many farming communities hold celebrations come the night: feasting, dancing and courtship feature showing the cycle of nature.",
            id: "824513",
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
            name: "First Cut",
            description:
                "Falcon's Hollow\n\nThe First Cut celebration in Falcon's Hollow used to mark the start of the work in the woods each spring. Now, however, it is a meaningless ramshackle ceremony as Thuldrin Kreed forces the lumber crews to work through even during the coldest months in the winter. Still, First Cut brings people out to celebrate the start of the spring.",
            id: "824514",
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
            name: "Currentseve",
            description:
                "Gozreh\n\nOn this religious holiday, all who travel on the water make offerings to Gozreh in the hopes of safe passage for the coming year.",
            id: "824515",
            note: null,
            date: {
                day: 7,
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
            name: "Taxfest",
            description:
                "Abadar\n\nNo one enjoys paying taxes but the collection of fair taxes is considered an integral part of the maintenance of society, and is therefore holy to the god Abadar. Every year on the 15th of Gozran, priests of the church of Abadar spend the day walking city streets, doing what they can to make the bitter pill of annual taxes a bit easier to swallow.\n\nThe Business of the Day\n\nFrom dawn to dusk, clerics of Abadar attend the tax collectors of sizeable communities as the tax wagons roll from door to door. The church officials monitor these activities to make sure that the process is conducted respectfully and justly, and that citizens know that the process is monitored. More than just aiding in the yearly errand, the faithful personally thank every citizen for contributing to the improvement of their city, extol the public works funded by their contributions, and foretell the grandeur of civic projects to come. The disenfranchised and destitute they attempt to comfort as best they can, quoting from their god's dogma on work and worthiness, but this is not a day for discounts or deferrals. The citizens are able to voice their concerns and ideas as to where the monies levied should best be applied. Citizens are free to speak their mind on any issue here without fear of repercussion.\n\nThe Celebrations of the Day\n\nAt dusk, the Abadarans host several celebrations in parks, plazas, and other communal areas about the city, organizing donations and contributions from local vendors to feed and entertain all-comers. Having already preached to most of the city over the course of the day, the clerics perform only a brief opening ceremony, dedicating the feast to Abadar, the city, and its great people. These celebrations are often quite distinct from neighbourhood to neighbourhood and are almost always divided along economic boundaries.\n\nThe festivities involving the wealthiest citizens usually happen on the steps of city hall or other grand civic buildings and feature the best music and food, but often little more than polite card and guessing games. These galas usually wrap up by midnight.\n\nFor the common folk, the parks and marketplaces take on a carnival atmosphere, with simple but good food, local ales, performances by talented citizens, and games of chance going on well into the night. A prevailing superstition through these festivals is that, during the celebration, it is lucky to kiss—or in some regions, pinch—a cleric of Abadar, leading to many a rosy-cheeked cleric.\n\nEven the city's poor are given reason to celebrate, as the local temple of Abadar hosts a cheery but unabashedly religious gathering on its steps, feeding all comers, doling out a hearty ration of wine, singing hymns of the faith, and providing tokens for a second wine ration for any who return to attend a service within the month.\n\nFor a holiday that revolves around paying taxes, this Abadaran festival is not as reviled as one might expect.",
            id: "824516",
            note: null,
            date: {
                day: 15,
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
            name: "Wrights of Augustana",
            description:
                "Andoran, Brigh\n\nThis local festival in the Andoran port city of Augustana is held to honor and celebrate the local shipbuilding industry as well as the navy. The mathematics and engineering required for the building of the ships is praised by Brigh's faithful.",
            id: "824517",
            note: null,
            date: {
                day: 16,
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
            name: "Gala of Sails",
            description:
                "Absalom\n\nOne of two local festivals where kite-battlers compete.",
            id: "824518",
            note: null,
            date: {
                day: 27,
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
            name: "Remembrance Moon",
            description:
                "Iomedae, Lastwall, Ustalav\n\nA national holiday to commemorate those who died in the Shining Crusade against the Whispering Tyrant. Although not strictly a religious holiday, Iomedae's name is heavily invoked, due to her many military accomplishments during the war.",
            id: "824519",
            note: null,
            date: {
                day: null,
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
            name: "Angel Day",
            description:
                "Magnimar, Varisia\n\nAngel Day is a local Magnimarian holiday celebrated on 31 Desnus. The annual celebration marks the founding of the city, and its founders' flight from Korvosa. It also honors the presence and popular worship of the empyreal lords, which predates the city by centuries. During the festival, nearly all local businesses shut their doors and the citizens take part in countless feasts, masquerade balls dressed as angels, and the burning of devil effigies meant to symbolize infernally-influenced Korvosa.",
            id: "824520",
            note: null,
            date: {
                day: 31,
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
            name: "Old-Mage Day",
            description:
                "Holiday celebrating Old-Mage Jatembe, the father of Garundi magic.",
            id: "824521",
            note: null,
            date: {
                day: 13,
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
            name: "Multiple Events",
            description:
                "Festival of the Ruling Sun\n\nShizuru\n\nCelebrates the longest day.\n\nFounder's FollyUlar Kel\n\nAdventurers and children follow a hallucinatory red stripe along zigzagging paths, amusing residents.\n\nHarvest Bounty Festival\n\nSegada\n\nMarking the beginning of the harvest season, this festival involves sporting tournaments, dancing, storytelling, and feasts. Celebrants give thanks and eliminate grudges.\n\nLongwalk\n\nGrandmother Spider, Nurvatchta; southern hemisphere winter solstice\n\nCelebrates the escape of Nurvatchta's anadi people from bondage, in part thanks to Grandmother Spider lengthening their cover of darkness in their escape.\n\nRitual of Stardust\n\nDesna\n\nFestival held in the evening and through the night, where Desna's faithful sing songs and throw sand and powdered gems into bonfires.\n\nRunefeast\n\nMagrim\n\nDay marking the day dwarves learnt the first runes and the proper way to pray.\n\nSunwrought FestivalSarenrae, Brigh\n\nDay commemorating the defeat of Rovagug by Sarenrae, celebrated with the flying of kites, fireworks, and gift giving.",
            id: "824522",
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
            name: "Burning Blades",
            description:
                "Sarenrae\n\nThe holy, month-long festival ends on this day, featuring dances with flaming blades.",
            id: "824523",
            note: null,
            date: {
                day: 10,
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
            name: "Liberty Day",
            description:
                "Andoran, Milani\n\nHoliday celebrating Andoran's independence. Milanites celebrate that very little violence occurred.",
            id: "824524",
            note: null,
            date: {
                day: 3,
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
            name: "Talon Tag",
            description:
                "Andoran\n\nThe Eagle Knights perform aerial displays in Almas on this day.",
            id: "824525",
            note: null,
            date: {
                day: 21,
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
            name: "Riverwind Festival",
            description:
                "Korvosa\n\nAn early summer holiday that honors a cooling shift in the winds, celebrated with much drinking.",
            id: "824526",
            note: null,
            date: {
                day: 22,
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
            name: "Inheritor's Ascendance ",
            description:
                "Iomedae\n\nInheritor's Ascendance, originally called 'Herald's Day', honours the day that Iomedae was chosen by the god Aroden to become his herald (thus replacing Arazni), thus boosting her power beyond that of a fledgling goddess. This holiday was renamed after the demise of Aroden.",
            id: "824527",
            note: null,
            date: {
                day: 1,
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
            name: "First Crusader Day",
            description:
                "Mendev\n\nHoliday in celebration of the continuing crusade against the demons of the Worldwound.",
            id: "824528",
            note: null,
            date: {
                day: 6,
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
            name: "Day of Silenced Whispers",
            description:
                "Ustalav\n\nThe Day of Silenced Whispers is an Ustalavic holiday celebrated every 9 Arodus marking the defeat of the Whispering Tyrant in 3827 AR by the coalition forces of the Shining Crusade and the liberation of the country after centuries of undead domination.",
            id: "824529",
            note: null,
            date: {
                day: 9,
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
            name: "Founding Day",
            description:
                "Ilsurian, Varisia\n\nFestival celebrating the founding by Ilsur of the town of Ilsurian in 4631 AR.",
            id: "824530",
            note: null,
            date: {
                day: 10,
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
            name: "Armasse",
            description:
                "Aroden, Iomedae, Milani\n\nThe raucous, week-long festival known as Armasse is held each year beginning on 16 Arodus. The celebration — once dedicated to the god Aroden — is still important to the faithful of Iomedae, who use it to train commoners in combat, ordain apprentice clergy, pick squires for knights, and teach military history, hoping to prevent the mistakes of the past from being repeated. Among those not dedicated to the Inheritor the holiday has lost most of its religious significance since Aroden's death, tending now only toward wild partying, a fact that has precluded the diabolist authorities of Cheliax from prohibiting Armasse outright. Nevertheless, in places where the church of Asmodeus is openly allowed, it hosts special activities for its parishioners during the same week in an effort to counter the influence of the holiday. The city of Corentyn is especially known for its extravagant Armasse festivities.",
            id: "824531",
            note: null,
            date: {
                day: 16,
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
            name: "Saint Alika's Birthday",
            description:
                "Korvosa\n\nQuiet holiday honoring the birth of Saint Alika the Martyr.",
            id: "824532",
            note: null,
            date: {
                day: 31,
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
            name: "Archerfeast",
            description:
                "Erastil\n\nArcher's Day or Archerfeast is a holiday of the god Erastil held annually on the 3rd of Erastus. Despite the holiday's origins in the worship of Erastil, common country folk from the Lands of the Linnorm Kings to Taldor celebrate the height of summer with a day set aside for establishing new relationships, enjoying current camaraderie, and celebrating the gifts of the gods. Archery competitions are held frequently in which the men test their skill with the bow through progressively harder trials. The exact form of competition is different from place to place, and the winner is awarded a rack of elk horns and a quiver of blessed arrows. He is also given the title of \"Protector\", which he holds until the next year.\n\nWhile the festival's traditions emphasize contests of marksmanship, most have expanded to exhibit talents of all types, from baking and storytelling to racing and mock combat. Aside from encouraging a fair-like atmosphere, many of the displays and competitions serve one of two secondary purposes: either as a way for merchants to show off their superior livestock and wares, or (more popularly) as a way for eligible men and women to show off to each other.\n\nWhile the day's events at most Archerfeast fairs are filled with games, food, and crafts, the night brings dancing, drinking, pranks, and the crowning of the princes and princesses of spring and summer for the two single youths and two single adults who fared best in the day's events. The festivities continue late into the evening, but end promptly at midnight, so that in true Erastilian fashion the next day's responsibilities are not overly impeded. For those not of Erastil's flock, however, private parties, drinking, and trysting carry on long into the next morning.",
            id: "824533",
            note: null,
            date: {
                day: 3,
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
            name: "Founding Festival",
            description:
                "Korvosa\n\nFounding Festival is a local Korvosan celebration marking the establishment of the city in 4407 AR. Held annually on 14 Erastus, the festival is a chance for the citizens to let off some steam, drink copiously, and watch magical light shows late into the night.",
            id: "824534",
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
            name: "Burning Night",
            description:
                "Razmiran\n\nItems or people who have transgressed against the god-king of Razmiran are burned on this day.",
            id: "824535",
            note: null,
            date: {
                day: 17,
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
            name: "Kianidi Festival",
            description:
                "Garundi\n\nThe Kianidi Festival is a week long event held annually between 15 and 21 Erastus by Garundi people everywhere. The Garundi have a powerful belief in belonging to a specific location in this world, with clans or tribes sometimes traveling for years in search of their true home. In these travels each individual will collect small mementos of the places she or he has visited in order to remember them and maintain a spiritual connection. During the Kianidi, a tribe will gather and display these mementos to the group. The best ones are chosen and made part of the clan or tribal history, something which Garundi feel is a great honor.",
            id: "824536",
            note: null,
            date: {
                day: 15,
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
            name: "Harvest Moon",
            description: null,
            id: "824537",
            note: null,
            date: {
                day: null,
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
            name: "Multiple Events",
            description:
                "Festival of Night's Return\n\nNidal\n\nCelebrated throughout Nidal, this holiday involves the burning of effigies and self-flagellation.\n\nSwallowtail Festival\n\nDesna\n\nHoliday celebrated with storytelling, feasting, and the release of butterflies.\n\nWaning Light Festival\n\nSegada\n\nAlso called Blessing of the Sun and Night of Spirits, participants bid farewell to the long days of sunshine with feasting, dancing, and music.",
            id: "824538",
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
            name: "Signing Day",
            description:
                "Andoran, Cheliax, Galt, Isger\n\nSigning Day is a Chelish holiday, dating back to the height of the empire. Observed on the second Oathday of Rova, this is the day on which new laws in the empire took effect. The significance of this day expanded over many years until imperial marriages, significant business arrangements and oaths of fealty were all conducted on this day.\n\nOriginally, the holiday began as a celebration of the mutual-defense pact between Cheliax, Isger, Galt and Andoran when the united nations threw off the shackles of Taldor, declaring themselves independent from the empire. Observances of the holiday vary, but often include firework displays, feats of strength, and public debates to showcase speaking and rhetorical skills.\n\nAs Cheliax degenerated to civil war and diabolism after 4606 AR, blood pacts and infernal contracts also began to be signed on this day. As a result of Cheliax's new affiliation, Andoran and Galt began to distance themselves from Cheliax and the original interpretation of the holiday. In Andoran it continues to be the day that most national laws take effect as well as being a traditional day of marriage, and the date on which new Steel Falcons are inducted.",
            id: "824539",
            note: null,
            date: {
                day: null,
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
            name: "Crabfest",
            description:
                "Korvosa\n\nCrabfest is a Korvosan holiday held on the first Wealday of Rova. It celebrates the return of the crabs from the cooler waters of the Jeggare River to their winter habitat in Conqueror's Bay, and is marked by crab boil feasts held throughout the city and its surrounding communities.",
            id: "824540",
            note: null,
            date: {
                day: null,
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
            name: "Feast of Szurpade",
            description:
                'Irrisen\n\nThis "celebration of plenty" festival mocks the traditional harvest festivals celebrated in the region before Baba Yaga and her eternal winter descended upon the land.',
            id: "824541",
            note: null,
            date: {
                day: 26,
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
            name: "Day of Sundering",
            description:
                "Ydersius\n\nOnce many holidays were celebrated by the faith of Ydersius, but today only this date has much significance.",
            id: "824542",
            note: null,
            date: {
                day: 29,
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
            name: "Admani Upastuti",
            description:
                "Jalmeri\n\nAdmani Upastuti is a Jalmeri holiday celebrated on the first full moon of Lamashan that marks the founding of Jalmeray as a Vudran colony.",
            id: "824543",
            note: null,
            date: {
                day: null,
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
            name: "Ascendance Day",
            description:
                "Iomedae\n\nAscendance Day is an Iomedaean holiday, held on the 6th of Lamashan. The day marks the anniversary of the day Iomedae took the Test of the Starstone in the autumn of 3832 AR and ascended to godhood.\n\nCelebration\n\nThe day is a joyous celebration for the faithful, with singing, pledging of friendships, and forgiving of old grudges.\n\nTo many, the Test of the Starstone represents the greatest of all challenges, yet for Iomedae it was one of three storied promotions in her rise from Aroden's herald to a goddess in her own right. On the 6th of Lamashan, the Inheritor's faithful observe the heroism of Iomedae's life before her moment of ascension and celebrate the anniversary of the apotheosis itself.\n\nThe celebration takes place in several stages. Early in the day, troupes of performers—as often passionate amateurs as professionals—stage morality plays featuring the Eleven Acts of Iomedae, the heroic near-miracles and sacrifices she made leading up to her trials in the Starstone Cathedral. Scripts vary by region, city, and even neighborhood, but despite differences in setting, performance medium, and word choice, the themes and morals are all the same.\n\nAs the day continues, the priests organize jousts and mock battles, allowing anyone to participate so long as she can demonstrate enough skill to not be a risk to herself or others. The winners of these contests then face tests of mental acuity such as solving riddles, deciphering philosophical quandaries, and answering questions of honor and justice. Those who prove themselves in both contests are awarded a white cloak—representing the Inheritor at peace—styled after Iomedae's own red garment to wear for the rest of the celebration. Feasting and singing follow the competitions, mirroring the jubilation that followed Iomedae's ascension. This is occasion for making pledges of friendship and forgiving enemies, and priests circulate about the crowd offering the Inheritor's blessing to those who do and providing a moment's counsel or mediation for those who need an extra nudge.\n\nThe celebration typically ends before midnight, and the following day the priests and previous day's champions gather up the blunted swords from the mock battles, sharpen them, and distribute them among the church's armory and those of like-minded organizations so that all may remain vigilant against evil and prepared to strike it down.",
            id: "824544",
            note: null,
            date: {
                day: 6,
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
            name: "Bastion Day",
            description:
                "Solku\n\nBastion Day is a two-day festival held annually on 19 and 20 Lamashan in the Katapeshi town of Solku honoring the founding of the town, when it is traditional to host a stranger from one noon until the next.",
            id: "824545",
            note: null,
            date: {
                day: 19,
                year: 4712,
                month: 9,
            },
            category: null,
            sort: {
                timestamp: Number.MIN_VALUE,
                order: "",
            },
        },
        {
            name: "Jestercap",
            description:
                "Andoran, Druma, Taldor\n\nJestercap occurs at the end of the month of Lamashan, traditionally on the 27th (although a few regions have taken to moving the exact day around slightly so it always falls on the last Starday of the month, allowing people who wish to celebrate in excess to have the following day of rest to recover).\n\nHistory\n\nWhile Jestercap has been embraced with excited open arms by the gnome communities of the Inner Sea region, its original genesis is said to have been in one of Taldor's coastal cities not long after King Aspex the Even-Tongued broke from the nation, significantly weakening Taldor's power and beginning that nation's long decline. The holiday was originally intended to distract the distraught Taldan populace with a night of revelry and comedic entertainment, but the antics of jesters were simply not enough.\n\nOver the course of the first few years, Jestercap evolved from a holiday of observation to a holiday of participation. Today, the holiday is a time where anyone can pull pranks or jokes or japes on companions, on neighbors, and (most typically) on rivals, with the understanding that provided no lasting harm is done, any humiliations inflicted before midnight are to be taken in stride. Of course, come morning the day after, there are inevitably jokes that went too far, and grudges and feuds borne from Jestercap antics have a way of lingering for months to follow.\n\nIn Religion\n\nFollowers of Chaldira Zuzaristan, a halfling deity of mischief, treat Jestercap as a holy day and their pranks — often elaborate and extravagant in nature and plotted for months in advance — as displays of their faith.",
            id: "824546",
            note: null,
            date: {
                day: 27,
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
            name: "Feast of the Survivors",
            description:
                "Zon-Kuthon, Nidal\n\nA harvest festival signifying the centuries of Nidalese ancestors protected by Zon-Kuthon. The ceremonial tables are made of human bones of community members from past generations.",
            id: "824547",
            note: null,
            date: {
                day: null,
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
            name: "Kraken Carnival",
            description:
                "Absalom\n\nThe second of two local festivals where kite-battlers compete.",
            id: "824548",
            note: null,
            date: {
                day: 15,
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
            name: "Independence Day",
            description: "Galt\n\nMarks the beginning of the Red Revolution.",
            id: "824549",
            note: null,
            date: {
                day: 5,
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
            name: "Seven Veils",
            description:
                "Sivanah\n\nThe holiday known as Seven Veils, which takes place on the 23rd of Neth in most realms of the Inner Sea region, is a celebration of the region's diversity — a time when social boundaries break down even further in a day-long event filled with dancing, feasting, and courting. The evening traditionally closes out with the Seven Veil masquerade, a ball wherein the participants wear disguises that hide their race or gender (often using minor magical trinkets and spells) or disguise these features as entirely new characteristics. At the end of the ball, the participants remove their disguises to their partners, often with unpredictable and sometimes delightfully awkward results. Traditionalists and conservative minds often find the Seven Veils masquerades to be scandalous or off-putting, yet they remain particularly popular in most of the larger cities of the land.\n\nHistorians note that the original \"Dance of the Seven Veils\" has a much different genesis than one promoting diversity — the mysterious cult of Sivanah, goddess of illusions, mystery, and reflections, is generally cited as the source of this festival, and indeed, worshippers of the goddess (herself known as the Seventh Veil) count the 23rd of Neth as one of their most sacred of days. What rituals the church of Sivanah performs on this date, however, are unknown to outsiders, for the cult enjoys its secrets. This secrecy has, unsurprisingly, given rise to all manner of sinister rumour, yet when Seven Veils rolls around each year, its eager participants are quick to set aside rumour in preference for the night's fun and games.",
            id: "824550",
            note: null,
            date: {
                day: 23,
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
            name: "Abjurant Day",
            description:
                "Nethys\n\nAbjurant Day occurs on 8 Neth and is known as a day of cooperation between neighbors to shore up mutual defenses and train allies in magic. Potential apprentices are often tested on the day.",
            id: "824551",
            note: null,
            date: {
                day: 8,
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
            name: "Great Fire Remembrance",
            description:
                "Korvosa\n\nGreat Fire Remembrance is a holiday celebrated on each 13 Neth in the Varisian city of Korvosa. It commemorates the Great Fire of 4429 AR, which devastated the then still fledgling Chelish colony of Fort Korvosa. On this somber day, most of the city shuts down and people generally remain at home. It has become tradition not to light any fires (not even cooking fires) on Great Fire Remembrance.",
            id: "824552",
            note: null,
            date: {
                day: 13,
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
            name: "Even-Tongued Day",
            description:
                "Cheliax, Asmodeus, Milani\n\nObserved on 14 of Neth, Even-Tongued Day was once a day of joy and celebration in Cheliax, but has become instead one of mourning.\n\nOriginally, the date marked the conquest of Aspex the Even-Tongued, who brought the nations of Galt, Andoran and Isger under Chelish control. Since the death of Aroden and the loss of these nations, the holiday instead marks the loss of territory and glory once held by Cheliax. Oaths are sometimes made, typically to Asmodeus, and rarely of a pleasant nature (such as the reclaiming of the lost empire and vengeance against treacherous former allies).\n\nCitizens wear black on this day, public speaking is forbidden, and old feuds and vendettas are rekindled.",
            id: "824553",
            note: null,
            date: {
                day: 14,
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
            name: "Evoking Day",
            description:
                "Nethys\n\nA holy day to followers of Nethys, Evoking Day is full of vibrant explosions, skillful wielding of spells, and much dancing. Evoking Day is observed on the 18th of Neth, and while this holiday is mostly celebrated in Garund, temples dedicated to Nethys host celebrations throughout the Inner Sea region. Traditional celebrations of Evoking Day have changed over the thousands of years since its first incarnation, but to this day every occurrence of Evoking Day still features a grand meal shared by celebrants during the afternoon and a wondrous exhibition of brilliant and explosive magic once the sun sets. These days, such colorful magical displays are augmented with fireworks of a dozen different colors and patterns.\n\nIn temples of Nethys dedicated to revering evocation magic, priests and prominent arcanists participate in spell duels where each contestant stands on a raised platform and takes turns trying to incapacitate her opponent. The magic wielded in theses duels favors the flashy over the dangerous, but clerics of Nethys are on hand to treat any injuries. These duels gather large crowds eager to lend their applause to their favorite contestant.\n\nIt is also during this festival when wizards who worship Nethys open their spellbooks to others who share their craft. Wizards normally guard their spellbooks with their lives and covet the eldritch information therein, but on Evoking Day these wizards meet with one another prior to the afternoon feast to share their spells just as they prepare to share a grand meal.\n\nThough Evoking Day is primarily a day of grand magic, those with no spellcasting talent still flock to local temples of Nethys to partake in the shared feast and flashy evening displays of magic and fireworks. Between the meal and into the night, celebrants wear black-and-white robes and perform joyous dances meant to give thanks to the wonders Nethys brought to humankind. These dances are grand affairs involving dozens of dancers all spinning and clapping to the accompanying music as their black-and-white robes fan out around them with each spin. As night descends and the fireworks and magical displays begin, the dancing rises to a climax erupting in shouts and calls to Nethys with each thunderous boom.",
            id: "824554",
            note: null,
            date: {
                day: 18,
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
            name: "Baptism of Ice",
            description:
                "Irrisen\n\nIn the Irriseni Baptism of Ice, an annual fertility festival held from the 24th to the 30th of Neth, locals parade all children born during the year through the town in fine clothes. In most towns, the festival ends with a symbolic sacrifice of a child to the cold. However, in Whitethrone and Irrisen's provincial capitals, a peasant child is killed through exposure.",
            id: "824555",
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
            name: "Transmutatum",
            description:
                "Nethys\n\nTransmutatum is one of the three major holidays of the church of Nethys, on 28th of Neth. It is a day of reflection and self-improvement. Many followers of Nethys begin research and crafting projects on this day.",
            id: "824556",
            note: null,
            date: {
                day: 28,
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
            name: "Winter Week",
            description:
                "Traditional feast; time for courting and spending time with friends.",
            id: "824557",
            note: null,
            date: {
                day: null,
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
            name: "The Shadowchaining",
            description:
                "Zon-Kuthon, Nidal\n\nCommemorating the Midnight Lord's gift of shadow animals.",
            id: "824558",
            note: null,
            date: {
                day: 1,
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
            name: "Pseudodragon Festival",
            description:
                "Korvosa\n\nKorvosa's Pseudodragon Festival, a holiday celebrated annually on 7 Kuthona, marks the winter migration of wild pseudodragons from the Mindspin Mountains to Conqueror's Bay, which inspires the creatures already in the city—even those domesticated—to play with their wild kin in the skies over the city. Locals mark the day with a joyous inebriation.",
            id: "824559",
            note: null,
            date: {
                day: 7,
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
            name: "Ascension Day",
            description:
                "Cayden Cailean\n\nMuch like the god to whom it is dedicated, the Caydenite holiday of Ascension Day is generally celebrated in a very informal style. Occurring annually on 11 Kuthona, it commemorates the day Cayden Cailean passed the Test of the Starstone and ascended to godhood in 2765 AR. In all likelihood, the 11th of Kuthona is not the exact date on which it actually happened, but since the god was dead drunk when it happened, it will probably be never known.",
            id: "824560",
            note: null,
            date: {
                day: 11,
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
            name: "Winterbloom",
            description:
                "Naderi\n\nHoliday celebrating Naderi's ascension. Celebrations are typically understated but include readings of The Lay of Arden and Lysena.",
            id: "824561",
            note: null,
            date: {
                day: 15,
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
            name: "Final Day",
            description:
                "Groetus\n\nCultists of Groetus perform an hour's silence at dusk on the last day of the year and seek guidance from their god about the End Time.",
            id: "824562",
            note: null,
            date: {
                day: 31,
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
            name: "Night of the Pale",
            description:
                "Not all of Golarion's holidays and festivals are times of rejoicing and delight. Holidays worshiped by dark and sinister cults and religions tend to be hidden affairs, their rituals and ceremonies involving cruelties and vile practices that send shivers of fear through gentler society. Scholars suspect that the Night of the Pale—a holiday that traditionally takes place on the last day of the year, the 31st of Kuthona—has links to several sinister religions, but today no one church has specific association with the event. Nonetheless, the Night of the Pale is an event that many look forward to all year, whether in fear or excitement.\n\nOn the Night of the Pale, it is said that the ghosts of those who died during the previous year manifest upon the world and come to visit the homes they lived in during life. Although some might think that the chance of seeing even the shade of a dearly departed one might be a blessing, the Night of the Pale is not a time for tearful reunions, for these ghosts, tradition says, do not return out of love for those they left behind but out of darker compulsions. Lingering jealousy, unfinished arguments, or the simmering need for revenge are said to be what compels the dead to return to torment the living on the Night of the Pale.\n\nThe evening of this night in many communities is celebrated by a morbid feast, the food prepared with themes revolving around graveyards, the dead, and other spooky traditions. This feast, on one level, helps the celebrants to make light of their fears while sharing good company with similarly nervous neighbors, but at another level is believed to placate vengeful spirits as toasts are raised to the memories of the recently departed. These feasts include retellings of favorite memories of the departed, in hopes of reminding the approaching ghosts of brighter and kinder memories than those that compel them to return. The feast always ends at least an hour before midnight in order to give participants time to return home, decorate doors and windows with salt and other trinkets taken from the feasting table (salted bread baked into crook-like shapes are a favorite, as these can be hung from doorknobs and eaves) to ward off evil spirits, and hide in their bedrooms until dawn. Brave youths and adventurers often deliberately stay out after midnight, either to dare the ghosts to challenge them or simply for the thrill of bucking tradition. Every Night of the Pale, it seems, there are disappearances among those who stay out after midnight, although whether these vanishings are the result of dissatisfied locals taking the opportunity to run away from home, murderers or wild animals or other mundane dangers, or the vengeful spirits carrying off their victims depends upon the circumstances.\n\nThe morning after a Night of the Pale is also the first day of the new year—a time that many celebrate more as a relief for surviving the night before than in anticipation of what the new year might bring, although regional preferences for how this day is celebrated vary enough that no single tradition holds over the other. Save, of course, the lingering fears of what dread spirits might come knocking upon warded doors one year away...",
            id: "824563",
            note: null,
            date: {
                day: 31,
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
            name: "Turning Day",
            description:
                "Alseta\n\nThe changing of the year is celebrated with the forgiveness of old debts and grudges, and embracing new opportunities.",
            id: "824564",
            note: null,
            date: {
                day: 31,
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
            name: "Ritual of Stardust",
            description:
                "Desna\n\nThe Ritual of Stardust is one of the few formal religious holidays in honor of the goddess Desna. It is held on both the summer and winter solstices.\n\nFollowers of the Song of Spheres gather at dusk and light enormous bonfires and hold feasts, watching the sparks and embers float out into the darkening sky. After it is fully dark, the celebrants chant and sing songs as they watch the fires burn low. When only embers remain, sand mixed with ground star gems (either star rubies, star sapphires, or rose quartz) is thrown on them or into the air downwind. At this point it is common to make proclamations of love and friendship and of promised journeys to come. The twinkling of the sand is thought to mirror the night sky and demonstrate Desna's witnessing of these pronouncements.",
            id: "824565",
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
            name: "Planting Week",
            description:
                "Erastil\n\nThis holy week to the god Erastil is a time of heavy work in the fields for farmers.",
            id: "824566",
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
            name: "Ascendance Night",
            description:
                "Norgorber\n\nDay marking the apotheosis of the Reaper of Reputation.",
            id: "824567",
            note: null,
            date: {
                day: 2,
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
            name: "Azvadeva Dejal",
            description:
                "Gruhastha\n\nCelebration of the revelation of the Azvadeva Pujila, with gifts of books, celebrations of knowledge, blessing of animals, and a vegetarian feast.",
            id: "824568",
            note: null,
            date: {
                day: 3,
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
            name: "Goblin Flea Market",
            description:
                "Andoran\n\nA market day that focuses on unusual crafts and offers games to children who dress up for the occasion.",
            id: "824569",
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
            name: "Breaching Festival",
            description:
                "Korvosa\n\nYearly festival in which contestants try to break through the magical wards protecting the Academae.",
            id: "824570",
            note: null,
            date: {
                day: null,
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
            name: "Silverglazer Sunday",
            description:
                "Andoran\n\nSilverglazer Sunday is a two-part Andoren national festival that is held on the last Sunday of Arodus and the first Sunday of Rova every year. Celebrants spend the two Sundays fishing, holding swimming competitions, and making enormous puppets.",
            id: "824571",
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
            name: "Batul al-Alim",
            description:
                "Qadira\n\nBatul al-Alim is a holiday celebrated on the last Oathday of Calistril in Qadira. It commemorates the birthday of the popular romantic poet of the same name.",
            id: "824572",
            note: null,
            date: {
                day: null,
                year: null,
                month: 1,
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
