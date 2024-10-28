<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		onclick: () => void;
		children: Snippet;
	}

	let { onclick, children }: Props = $props();
</script>

<button class="rounded-full bg-gray-200 px-3 py-1 text-xl font-bold hover:bg-gray-400" {onclick}>
	{@render children()}
</button>
