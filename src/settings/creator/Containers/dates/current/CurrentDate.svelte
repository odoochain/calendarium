<script lang="ts">
    import { dateString } from "src/utils/functions";
    import { getContext } from "svelte";
    import DateWithValidation from "../../../Utilities/DateWithValidation.svelte";
    import Details from "../../../Utilities/Details.svelte";

    const calendar = getContext("store");
    const { validDate, currentStore } = calendar;
    $: desc = $validDate
        ? dateString($currentStore, $calendar)
        : "Invalid date";
</script>


<Details
    name={"Current date"}
    warn={!$validDate}
    label={"Invalid current date specified"}
    {desc}
>
    <DateWithValidation date={currentStore} />
</Details>
