<script>
    import CASCard from "../../lib/components/cards/CASCard.svelte";

    let casProjects = [
        {
            image: '/assets/cas/biofinder.svg',
            description: 'An all new tool to curate and connect biological information for powerful drug discovery insights.',
            url: '/cas/biofinder'
        },
        {
            image: '/assets/cas/SFDP.svg',
            description: 'Designing the best-in-class R&D search solution, including: SciFinder, Formulus, and Analytical Methods.',
            url: '/cas/scifinder'
        }
    ]

    $: innerWidth = 0
</script>

<svelte:window bind:innerWidth />

<section class='cas-hero'>
    <h1>CAS</h1>

    <p>
        As a division of the American Chemical Society, 
        <a class='cas-link' href='https://www.cas.org/'>CAS</a> is a scientific information company dedicated 
        to advancing scientific progress. Its solutions are 
        fueled by curated, connected, and analyzed published 
        scientific research and patents.
    </p>

    {#if innerWidth < 768}
        <p>
            During my time there, I was responsible for the discovery, 
            ideation, and development for the product portfolio for 
            CAS SciFinder, the preeminent chemistry discovery tool on 
            the market, the design of three other products within the 
            SciFinder Discovery Platform, and the invention of a new 
            biological and drug-discovery tool named CAS BioFinder.
        </p>
    {:else}
        <p>During my time there, I was responsible for:</p>
        <ul>
            <li>The discovery, ideation, and development for the product portfolio for CAS SciFinder, the preeminent chemistry discovery tool on the market.</li>
            <li>The design of three other products within the SciFinder Discovery Platform.</li>
            <li>Design of an entirely new iconography system for the products. </li>
            <li>The investigation, benchmarking, design, architecture, and commercial launch of a new biological and drug-discovery tool named CAS BioFinder.</li>
        </ul>
    {/if}
</section>

<section class='cas-cards'>
    {#each casProjects as project}
        <CASCard
            image={project.image}
            description={project.description}
            url={project.url}
        />
    {/each}
</section>

<style>
    .cas-hero {
        margin-top: 88px;
        display: flex;
        flex-direction: column;
        gap: 16px;

        & h1 {
            font: 30px 'Outfit Bold';
        }

        & p {
            font-size: 14px;
        }

        & li {
            font-size: 14px;
            margin-bottom: 16px;;
        }
    }

    .cas-link {
        font-size: 14px;
    }

    .cas-cards {
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    @media screen and (min-width: 768px) {
        .cas-hero {
            width: 394px;
        }

        ul {
            margin-left: 18px;
        }

        .cas-cards {
            margin-top: 140px;
            flex-direction: row;
            gap: 82px;
        }
    }
</style>