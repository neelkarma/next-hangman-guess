<script lang="ts">
  interface Props {
    char: string;
    onclick: (char: string) => void;
  }

  let { char, onclick }: Props = $props();

  function handleClick() {
    onclick(char);
  }
</script>

<button
  class="rounded-full bg-gray-200 px-3 py-1 text-xl hover:bg-red-300"
  onclick={handleClick}>{char}</button
>
