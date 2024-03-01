<script>
    export let image,
            description,
            url
</script>

<div class='cas-card'>
    <div class='cas-thumbnail'>
        <img src={image} alt="cas project thumbnail">
    </div>
    <p>{description}</p>
    <a class='cas-link' href={url}>View Project</a>
</div>

<style>
    .cas-card {
        max-width: 500px;
        display: flex;
        flex-direction: column;
        gap: 23px;

        & p {
            font-size: 14px;
        }

        & a {
            font-size: 14px;
        }
    }

    .cas-thumbnail {
        height: fit-content;
        
        & img {
            width: 100%;
            height: auto;
        }
    }

    .cas-link {
        color: var(--gold);
    }

    @media screen and (min-width: 768px) {
        .cas-card {
            max-width: 278px;
        }
    }
</style>