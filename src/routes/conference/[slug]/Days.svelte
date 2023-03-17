<script lang='ts'>
	import type { Day } from '../../../lib/types';

	export let days: Day[];
</script>

{#each days as day}
	<h2>
		{day.title}
	</h2>
	<h3>Talare</h3>
	{#each day.speakers as speaker}
		<p>{speaker.title} {speaker.name} <img src={speaker.imageUrl}/></p>
	{/each}
	<h3>Föredrag</h3>
	{#each day.talks as talk}
		<p>{talk.title}</p>
	{/each}
{/each}

<style>
	img {
			width: 100px
	}
</style>