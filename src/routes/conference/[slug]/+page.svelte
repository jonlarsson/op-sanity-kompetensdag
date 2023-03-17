<script lang='ts'>
	import Conference from './Conference.svelte';
	import Days from './Days.svelte';

	export let data: { conference: Conference };
	let { conference } = data;
</script>

<Conference {conference} />

<Days days={conference.days} />