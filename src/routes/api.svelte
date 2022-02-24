<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Users</title>
</svelte:head>

<main>
	<form method="post">
		<input name="name" />
		<input name="email"/>
		<input name="password" />
		<input type="submit" value="submit" />
	</form>
</main>

{#each data as project}
	<p>{project.user}</p>
{/each}

<style lang="scss">
	main {
		padding: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	input {
		margin-top: 3px;
		margin-bottom: 2rem;
		display: block;
	}
	input[type='submit'] {
		cursor: pointer;
		padding: 0.15rem;
		text-transform: uppercase;
	}
</style>
