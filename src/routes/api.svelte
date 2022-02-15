<script lang="ts">
   export let users;
</script>

<svelte:head>
    <title>Users</title>
</svelte:head>

<main>
    <form method="post" action="/api">
        <label for="name">Name</label>
        <input type="name" name="name">
         <label for="email">Email</label>
        <input type="email" name="email">
         <label for="password">Password</label>
        <input type="password" name="password">
        <input type="submit" value="submit">
    </form>
</main>

{#each users as user}
<p>{user.name}</p>
<p>{user.email}</p>
<p>{user.id}</p>
<p>{user.createdAt}</p>
{/each}

<style lang="scss">
    main{
        padding: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input{
        margin-top: 3px;
        margin-bottom: 2rem;
        display: block;
    }
    input[type="submit"]{
        cursor: pointer;
        padding: 0.15rem;
        text-transform: uppercase;
    }
</style>