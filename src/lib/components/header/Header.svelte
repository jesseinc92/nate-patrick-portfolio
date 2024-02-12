<script>
    import LinkedInIcon from "../icons/LinkedInIcon.svelte";
    import MailIcon from "../icons/MailIcon.svelte";
    import DayIcon from '../icons/DayIcon.svelte'
    import NightIcon from "../icons/NightIcon.svelte";
    import store from "../../stores/store";

    function switchTheme() {
        $store.theme = $store.theme === 'dark' ? 'light' : 'dark'

        if ($store.theme === 'dark') {
            $store.palette.background = '#0E0E0E'
            $store.palette.stroke = '#E0E0E0'
            $store.palette.text = 'white'
            $store.palette.scrollDots = '#0E0E0E'
        } else if ($store.theme === 'light') {
            $store.palette.background = '#E0E0E0'
            $store.palette.stroke = '#0E0E0E'
            $store.palette.text = 'black'
            $store.palette.scrollDots = '#D9D9D9'
        }
    }
</script>

<header class='header'>
    <div class='header-icon' role='button' tabindex='0' on:click={switchTheme} on:keyup={switchTheme}>
        {#if $store.theme === 'light'}
            <NightIcon />
        {:else}
            <DayIcon />
        {/if}
    </div>

    <div class='socials-icons'>
        <LinkedInIcon color={$store.palette.stroke} />
        <MailIcon color={$store.palette.stroke} />
    </div>
</header>

<style>
    .header {
        /* width: 100%; */
        margin: 20px;
        display: flex;
    }

    .header-icon {
        cursor: pointer;
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