import type { PresetCalendar } from "../schemas/calendar/calendar";
import { BarovianPreset } from "./barovian/barovian";
import { ExandrianPreset } from "./exandrian/exandrian";
import { GalifarPreset } from "./galifar/galifar";
import { GolarionPreset } from "./golarian/golarian";
import { GregorianPreset } from "./gregorian/gregorian";
import { GreyhawkPreset } from "./greyhawk/greyhawk";
import { HarptosPreset } from "./harptos/harptos";

export const PRESET_CALENDARS: PresetCalendar[] = [
    GregorianPreset,
    GreyhawkPreset,
    GolarionPreset,
    GalifarPreset,
    BarovianPreset,
    ExandrianPreset,
    HarptosPreset,
];
