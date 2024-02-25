<script>
    import NpIcon from '../icons/NpIcon.svelte'
    import NightIcon from '../icons/NightIcon.svelte'
    import DayIcon from '../icons/DayIcon.svelte'
    import LinkedInIcon from '../icons/LinkedInIcon.svelte'
    import MailIcon from '../icons/MailIcon.svelte'
    import store from '../../stores/store.js'

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

<header class='project-header'>
    <a 
        href='/'
        class='np-icon'
    >
        <NpIcon />
    </a>

    <div class='socials-icons'>
        <LinkedInIcon color={$store.palette.stroke} />
        <MailIcon color={$store.palette.stroke} />
        <div class='theme-icon' role='button' tabindex='0' on:click={switchTheme} on:keyup={switchTheme}>
            {#if $store.theme === 'light'}
                <NightIcon />
            {:else}
                <DayIcon />
            {/if}
        </div>
    </div>
</header>

<style>
    .project-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .np-icon {
        padding-left: 30px;
    }

    .socials-icons {
        display: flex;
        align-items: center;
        gap: 24px;
        padding-right: 30px;
        height: fit-content;
    }

    .theme-icon {
        display: inline-block;
        height: fit-content;
    }
</style>