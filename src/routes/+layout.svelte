<script>
    import '../lib/stylesheets/global.css'
    import store from '../lib/stores/store.js'
</script>

<main class='homepage' style={`background-color: ${$store.palette.background}; color: ${$store.palette.text}`}>
    <div class='foreground'>
        <slot />
    </div>
</main>

<style>
    .foreground {
        padding: 37px 20px 89px;
    }

    .homepage {
        /* overflow: hiddden; */
        min-height: 100vh;
        /* background: no-repeat #E0E0E0 url('/assets/homepage/gradient.svg');
        background-size: contain;
        background-position-y: 50%; */
    }

    @media screen and (min-width: 768px) {
        .foreground {
            max-width: 1300px;
            margin: auto;
            padding: 58px 100px;
            min-height: calc(100vh - 116px);
            position: relative;
        }
    }
</style>