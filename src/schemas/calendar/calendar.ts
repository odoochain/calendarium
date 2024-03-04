import type { CalEventDate, CalEvent, CalEventCategory } from "../events";
import type { Moon } from "./moons";
import type { Week, Month, LeapDay, Era, Year } from "./timespans";

export type CalDate = {
    year: number;
    month: number;
    day: number;
};
/**
 * Static
 */
export type StaticCalendarData = {
    firstWeekDay: number;
    overflow: boolean;
    weekdays: Week;
    months: Month[];
    leapDays: LeapDay[];
    moons: Moon[];
    displayMoons: boolean;
    displayDayNumber: boolean;
    eras: Era[];
    offset?: number;
    incrementDay: boolean;
    useCustomYears?: boolean;
    years?: Year[];
    padMonths?: number;
    padDays?: number;
};

/**
 * Calendar
 */

export enum CalendarType {
    Custom,
    Preset,
    Derived,
}
type BaseCalendar = {
    type: CalendarType;
    id: string;
    name: string;
    description: string;
    displayWeeks?: boolean;
    autoParse: boolean;
    path: string[];
    supportInlineEvents: boolean;
    inlineEventTag?: string | null;
    dateFormat?: string;
    showIntercalarySeparately: boolean;
    static: StaticCalendarData;
    current: CalDate;
    events: CalEvent[];
    categories: CalEventCategory[];
};

export type CustomCalendar = BaseCalendar & {
    type: CalendarType.Custom;
    id: string;
    name: string;
    description: string;
    current: CalDate;
};
export type PresetCalendar = BaseCalendar & {
    type: CalendarType.Preset;
    name: string;
    current: CalEventDate;
    version: number;
};
export type DerivedCalendar = Omit<BaseCalendar, "static"> & {
    type: CalendarType.Derived;
    preset: string;
};
export type Calendar = CustomCalendar | PresetCalendar | DerivedCalendar;
