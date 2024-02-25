<script>
    import MobileArrowIcon from '../lib/components/icons/MobileArrowIcon.svelte';
    import Footer from '../lib/components/Footer.svelte';
    import ProjectCard from '../lib/components/cards/ProjectCard.svelte';
    import BackgroundShape from '../lib/components/BackgroundShape.svelte';
    import Header from '../lib/components/header/Header.svelte';
    import DesktopArrowIcon from '../lib/components/icons/DesktopArrowIcon.svelte';
    import store from '../lib/stores/store.js'

    const projects = [
        {
            image: '/assets/homepage/cas-mockup.png',
            imageWidth: '83.5%',
            desktopWidth: '381px',
            imageAlt: 'computer mockup',
            padding: false,
            name: 'CAS',
            text: 'Creating great search experiences and tools for scientific information and improving people’s lives through the power of chemistry and biology.',
            tags: ['product design', 'ux/ui', 'prototyping', 'strategy', 'user research', 'leadership']
        },
        {
            image: '/assets/homepage/daybase-mockup.png',
            imageWidth: '53.1%',
            desktopWidth: '130px',
            imageAlt: 'daybase app view mockup',
            padding: false,
            name: 'Daybase',
            text: 'A start up that sought to revolutionize the workday by helping you work where you live.',
            tags: ['product design', 'wireframing', 'prototyping', 'branding', 'strategy', 'user research', 'project management'],
        },
        {
            image: '/assets/homepage/books-mockup.png',
            imageWidth: '90%',
            desktopWidth: '300px',
            imageAlt: 'a selection of book covers',
            padding: true,
            name: 'Clog X',
            text: 'A book series which explores, from multiple viewpoints and through a variety of means, a single subject particularly relevant to now.',
            tags: ['editorial design', 'content', 'writing', 'research', 'interviews', 'distribution']
        }
    ]

    let projectsElement, circleOne, circleTwo, circleThree
    let scrollTimeout, i = 1, oldScroll = 0, newScroll = 0, intermediate;
    function handleScroll() {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
            let topValue = projectsElement.scrollTop
            if (topValue >= 0 && topValue <= 50) {
                console.log(topValue, 'first')
                circleOne.style.opacity = 1
                circleTwo.style.opacity = 0.3
                circleThree.style.opacity = 0.3
            } else if (topValue >= 600 && topValue <= 650) {
                console.log(topValue, 'second')
                circleOne.style.opacity = 0.3
                circleTwo.style.opacity = 1
                circleThree.style.opacity = 0.3
            } else if (topValue >= 1200 && topValue <= 1275) {
                console.log(topValue, 'third')
                circleOne.style.opacity = 0.3
                circleTwo.style.opacity = 0.3
                circleThree.style.opacity = 1
            }        
        }, 50)
    }
</script>

<Header />

<div class='homepage-contents'>
    <section class='hero-section'>
        <div class='hero-image'>
            <img src='/assets/homepage/headshot.jpeg' alt="Nate headshot">
        </div>

        <div class='hero-text'>
            <h1>Nate Patrick</h1>
    
            <p>
                is a product designer who is fascinated with the intersection of technology, 
                science, and art. A unique combination of elements, he specializes in design 
                thinking, <strong>leadership</strong>, <strong>strategy</strong>, <strong>user experiences</strong>, 
                interfaces, service design, books, and, occasionally, physical spaces. 
            </p>
    
            <div class='desktop-scroll-arrow-container'>
                <p class='hero-arrow-text'>Here is some of his work</p>
                <div class='desktop-scroll-arrow'>
                    <DesktopArrowIcon />
                </div>
            </div>
        </div>

        <div class='mobile-scroll-arrow-container'>
            <MobileArrowIcon />
        </div>
    </section>

    <section class='desktop-project-section'>
        <div class='projects' on:scroll={handleScroll} bind:this={projectsElement}>
            {#each projects as project}
                <ProjectCard 
                    image={project.image}
                    imageWidth={project.desktopWidth}
                    imageAlt={project.imageAlt}
                    extraImagePadding={project.padding}
                    name={project.name}
                    text={project.text}
                    tags={project.tags}
                />
            {/each}
        </div>
        
        <div class='desktop-scroll-control'>
            <div style={`background-color: ${$store.palette.scrollDots};`} class='circle one' bind:this={circleOne}></div>
            <div style={`background-color: ${$store.palette.scrollDots};`} class='circle' bind:this={circleTwo}></div>
            <div style={`background-color: ${$store.palette.scrollDots};`} class='circle' bind:this={circleThree}></div>
        </div>
    </section>

    <section class='mobile-project-section'>
        {#each projects as project}
            <ProjectCard 
                image={project.image}
                imageWidth={project.imageWidth}
                imageAlt={project.imageAlt}
                extraImagePadding={project.padding}
                name={project.name}
                text={project.text}
                tags={project.tags}
            />
        {/each}
    </section>
</div>

<Footer />

<style>
    .hero-section {
        margin-bottom: 248px;
        pointer-events: none;
    }

    .hero-image {
        width: 126px;
        height: 126px;
        border-radius: 50%;
        margin: auto;
        
        & img {
            width: 100%;
            height: auto;
            border-radius: 50%;
        }
    }

    .hero-text {
        margin: 57px auto;
        display: flex;
        flex-direction: column;
        gap: 20px;

        & h1 {
            font: 30px 'Outfit Bold';
            text-transform: uppercase;
            letter-spacing: 3px;
        }

        & strong {
            font-family: 'Soleil Bold', sans-serif;
        }
    }

    .desktop-scroll-arrow-container {
        display: none;
    }

    .mobile-scroll-arrow-container {
        width: fit-content;
        margin: auto;
        margin-top: 75px;
    }

    .mobile-project-section {
        display: flex;
        flex-direction: column;
        gap: 80px;
    }

    .desktop-project-section {
        display: none;
    }

    @media screen and (min-width: 768px) {
        .mobile-project-section {
            display: none;
        }

        .foreground {
            max-width: 1300px;
            margin: auto;
            padding: 58px 100px;
            min-height: calc(100vh - 116px);
            position: relative;
        }

        .homepage-contents {
            display: flex;
            justify-content: space-between;
        }

        .hero-section {
            width: 50%;
            max-width: 490px;
            margin-top: 86px;
            margin-bottom: unset;
        }

        .hero-image {
            width: 171px;
            height: 171px;
            margin: unset;
        }

        .hero-text {
            margin: 26px auto;
        }

        .mobile-scroll-arrow-container {
            display: none;
        }

        .desktop-scroll-arrow-container {
            display: flex;
            align-items: center;
        }

        .hero-arrow-text {
            margin-right: 30px;
        }

        .desktop-project-section {
            display: block;
            margin-top: 45px;
            width: 583px;
            position: relative;
            overscroll-behavior: none;
        }

        .projects {
            max-height: 500px;
            overflow: scroll;
            scrollbar-width: none;
            scroll-snap-type: y mandatory;
        }

        .projects::-webkit-scrollbar {
            display: none;
        }

        .desktop-scroll-control {
            height: 30px;
            width: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: absolute;
            right: -41px;
            top: 50%;
        }

        .circle {
            height: 5px;
            width: 5px;
            border-radius: 50%;
            opacity: 0.3;
        }

        .one {
            opacity: 1;
        }
    }
</style>