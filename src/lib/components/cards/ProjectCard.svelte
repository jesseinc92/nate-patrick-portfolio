<script>
    import Tag from "../tags/Tag.svelte";

    export let image,
            imageWidth = '100%',
            imageAlt,
            extraImagePadding = false,
            name,
            text,
            tags = []
</script>

<div class='project-card'>
    <div class='project-image' style={`width: ${imageWidth}`}>
        <img src={image} alt={imageAlt} width={imageWidth}>
    </div>

    <div class={`project-text ${extraImagePadding ? 'extra-padding' : ''}`}>
        <h2>{name}</h2>
        <p>{text}</p>
    </div>

    <div class='tag-area'>
        {#each tags as tag}
            <Tag value={tag} />
        {/each}
    </div>
</div>

<style>
    .project-card {
        margin: 20px 0;
    }

    .project-image {
        max-width: 500px;
        margin: auto;

        & img {
            width: 100%;
            height: auto;
        }
    }

    .project-text {
        margin-top: 38px;
    }

    .project-text h2 {
        font: 30px 'Outfit Bold', sans-serif;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .tag-area {
        margin-top: 22px;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .extra-padding {
        margin-top: 86px;
    }

    @media screen and (min-width: 768px) {
        .project-card {
            scroll-snap-align: center;
            margin-bottom: 150px;
        }

        .project-text p {
            font-size: 14px;
        }

        .tag-area {
            margin-top: 17px;
        }

        .extra-padding {
            margin-top: 50px;
        }
    }
</style>