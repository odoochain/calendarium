import copy from "fast-copy";
import {
    CalendarType,
    type CalDate,
    type Calendar,
    type DerivedCalendar,
    type CustomCalendar,
} from "src/schemas";
import { nanoid } from "src/utils/functions";
import { CalendarPresetModal } from "./modals/preset";
import type Calendarium from "src/main";
import { PRESET_CALENDARS } from "src/presets/presets";

export function getPresetCalendar(
    plugin: Calendarium,
    name?: string | null
): Promise<DerivedCalendar | void> {
    return new Promise((resolve) => {
        const modal = new CalendarPresetModal(plugin.app);
        modal.onClose = () => {
            if (!modal.saved) resolve();
            const current: CalDate = {
                day: modal.preset.current.day!,
                month: modal.preset.current.month!,
                year: modal.preset.current.year!,
            };
            if (modal.preset?.name == "Gregorian Calendar") {
                const today = new Date();

                current.year = today.getFullYear();
                current.month = today.getMonth();
                current.day = today.getDate();
            }

            resolve({
                id: nanoid(8),
                name: name?.length ? name : modal.preset.name!,
                current,
                preset: modal.preset.id,
                description: modal.preset.description,
                autoParse: modal.preset.autoParse,
                categories: modal.preset.categories,
                events: modal.preset.events,
                path: modal.preset.path,
                supportInlineEvents: modal.preset.supportInlineEvents,
                showIntercalarySeparately:
                    modal.preset.showIntercalarySeparately,
                type: CalendarType.Derived,
            });
        };
        modal.open();
    });
}

export function resolvePreset(
    calendar: DerivedCalendar,
    id?: string | null
): CustomCalendar {
    const preset = PRESET_CALENDARS.find(({ id: preset }) => id === preset);
    if (!preset) throw new Error("Invalid preset specified.");

    const custom: CustomCalendar = {
        ...copy(calendar),
        type: CalendarType.Custom,
        static: copy(preset.static),
    };

    for (const event of preset.events) {
        if (!custom.events.find(({ id }) => id != event.id)) {
            custom.events.push(event);
        }
    }
    for (const category of preset.categories) {
        if (!custom.categories.find(({ id }) => id != category.id)) {
            custom.categories.push(category);
        }
    }

    return custom;
}
