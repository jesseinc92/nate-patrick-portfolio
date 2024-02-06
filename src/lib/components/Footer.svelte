<script>
    import LinkedInIcon from './icons/LinkedInIcon.svelte';
    import MailIcon from './icons/MailIcon.svelte';
</script>

<footer class='footer'>
    <div class='footer-icons'>
        <LinkedInIcon color='#0E0E0E' />
        <MailIcon color='#0E0E0E' />
    </div>
    <p class='footer-text'>Proudly made in Columbus, Ohio</p>
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