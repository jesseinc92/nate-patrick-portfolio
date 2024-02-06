<script>
    import LinkedInIcon from "../icons/LinkedInIcon.svelte";
    import MailIcon from "../icons/MailIcon.svelte";
    import NightIcon from "../icons/NightIcon.svelte";


</script>

<header class='header'>
    <NightIcon />

    <div class='socials-icons'>
        <LinkedInIcon color='#0E0E0E' />
        <MailIcon color='#0E0E0E' />
    </div>
</header>

<style>
    .header {
        /* width: 100%; */
        margin: 20px;
        display: flex;
    }

    .socials-icons {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 24px;
    }

    @media screen and (min-width: 768px) {
        .socials-icons {
            display: none;
        }

        .header {
            margin-left: 0;
        }
    }
</style>