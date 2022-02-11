<script lang="ts">
   export let users;
</script>

<svelte:head>
    <title>Users</title>
</svelte:head>

{#each users as user}
<p>{user.name}</p>
<p>{user.email}</p>
{/each}