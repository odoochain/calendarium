import type {
    CalendariumData,
    CustomCalendar,
    PresetCalendar,
} from "src/@types";
import { CalendarType, SyncBehavior } from "../schemas";

export const DEFAULT_CALENDAR: CustomCalendar = {
    type: CalendarType.Custom,
    name: "",
    id: "",
    description: "",
    showIntercalarySeparately: true,
    autoParse: false,
    path: ["/"],
    supportInlineEvents: false,
    inlineEventTag: "#inline-events",
    static: {
        incrementDay: false,
        firstWeekDay: 0,
        overflow: true,
        weekdays: [],
        months: [],

        moons: [],
        displayMoons: true,
        displayDayNumber: false,
        leapDays: [],
        eras: [],
    },
    current: {
        year: 0,
        month: 0,
        day: 0,
    },
    events: [],
    categories: [],
};

export const DEFAULT_DATA: CalendariumData = {
    addToDefaultIfMissing: true,
    calendars: [],
    configDirectory: null,
    dailyNotes: false,
    dateFormat: "YYYY-MM-DD",
    defaultCalendar: null,
    eventPreview: false,
    exit: {
        saving: false,
        event: false,
        calendar: false,
    },
    eventFrontmatter: false,
    parseDates: false,
    version: {
        major: null,
        minor: null,
        patch: null,
        beta: null,
    },
    debug: false,
    askedToMoveFC: false,
    askedAboutSync: false,
    syncBehavior: SyncBehavior.Ask,
    inlineEventsTag: null,
    paths: [],
};
