<script>
    import LinkedInIcon from './icons/LinkedInIcon.svelte';
    import MailIcon from './icons/MailIcon.svelte';
</script>

<footer class='footer'>
    <div class='footer-icons'>
        <LinkedInIcon color='#0E0E0E' />
        <MailIcon color='#0E0E0E' />
    </div>
    <p>Proudly made in Columbus, Ohio</p>
</footer>

<style>
    .footer {
        margin-top: 90px;
        text-align: center;
    }

    .footer-icons {
        display: flex;
        gap: 24px;
        width: fit-content;
        margin:auto;
        margin-bottom: 20px;
    }
</style>