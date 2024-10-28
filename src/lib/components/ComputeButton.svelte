<script lang="ts">
  interface Props {
    disabled?: boolean;
    onclick?: () => void;
  }

  let { disabled = false, onclick = () => {} }: Props = $props();
</script>

<button
  class="rounded-full bg-blue-500 px-3 py-1 font-bold text-white hover:bg-blue-700 disabled:bg-blue-400"
  {disabled}
  {onclick}
>
  {#if disabled}
    Getting Word List...
  {:else}
    Compute
  {/if}
</button>
