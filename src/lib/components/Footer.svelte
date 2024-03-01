<script>
    import { page } from '$app/stores'
    import LinkedInIcon from './icons/LinkedInIcon.svelte';
    import MailIcon from './icons/MailIcon.svelte';
    import store from '../stores/store.js'
</script>

<footer class='footer {$page.url.pathname.includes('cas') ? 'marginless' : ''}'>
    <div class='footer-icons'>
        <LinkedInIcon color={$store.palette.stroke} />
        <MailIcon color={$store.palette.stroke} />
    </div>
    {#if !$page.url.pathname.includes('cas')}
        <p class='footer-text'>Proudly made in Columbus, Ohio</p>
    {/if}
</footer>

<style>
    .footer {
        margin-top: 90px;
        margin-bottom: 50px;
        text-align: center;
    }

    .footer-icons {
        display: flex;
        gap: 24px;
        width: fit-content;
        margin:auto;
        margin-bottom: 20px;
    }

    .marginless {
        margin-bottom: 0;
    }

    @media screen and (min-width: 768px) {
        .footer-text {
            display: none;
        }

        .footer {
            position: absolute;
            bottom: 0;
            left: 100px;
        }
    }
</style>