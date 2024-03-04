<script lang="ts">
    import { Setting } from "obsidian";
    import type Calendarium from "src/main";
    import { getContext } from "svelte";
    import { getPresetCalendar, resolvePreset } from "src/settings/preset";

    const calendar = getContext("store");
    const plugin = getContext<Calendarium>("plugin");

    const preset = (node: HTMLElement) => {
        const presetEl = node.createDiv("calendarium-apply-preset");
        new Setting(presetEl)
            .setName("Apply preset")
            .setDesc("Apply a common Calendarium as a preset.")
            .addButton((b) => {
                b.setCta()
                    .setButtonText("Choose preset")
                    .onClick(async () => {
                        const preset = await getPresetCalendar(
                            plugin,
                            $calendar.name,
                        );
                        if (!preset) return;

                        $calendar = resolvePreset(preset, preset.id);
                    });
            });
    };
</script>

<div use:preset />
