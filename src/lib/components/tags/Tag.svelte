<script>
    export let value = 'tag'
</script>

<div class='tag'>
    <p>{value}</p>
</div>

<style>
    .tag {
        width: fit-content;
        padding: 10px 20px;
        border: 1px solid var(--gold);
        border-radius: 30px;

        & p {
            font: 12px 'Outfit Bold', sans-serif;
            text-transform: uppercase;
            color: var(--gold);
        }
    }
</style>