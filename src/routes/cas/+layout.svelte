<script>
    import ProjectHeader from "../../lib/components/header/ProjectHeader.svelte";
    import Footer from "../../lib/components/Footer.svelte";
</script>

<ProjectHeader />
<div class='contents'>
    <slot />
</div>
<Footer />

<style>
    @media screen and (min-width: 768px) {
        .contents {
            display: flex;
            justify-content: space-between;
        }
    }
</style>