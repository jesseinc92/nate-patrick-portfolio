<script>
    import '../lib/stylesheets/global.css'
    import LinkedInIcon from '../lib/components/icons/LinkedInIcon.svelte';
    import MailIcon from '../lib/components/icons/MailIcon.svelte';
    import MobileArrowIcon from '../lib/components/icons/MobileArrowIcon.svelte';
    import Footer from '../lib/components/Footer.svelte';
    import ProjectCard from '../lib/components/cards/ProjectCard.svelte';
    import BackgroundShape from '../lib/components/BackgroundShape.svelte';
    import Header from '../lib/components/header/Header.svelte';
    import DesktopArrowIcon from '../lib/components/icons/DesktopArrowIcon.svelte';

    const projects = [
        {
            image: '/assets/homepage/cas-mockup.png',
            imageWidth: '83.5%',
            desktopWidth: '381px',
            imageAlt: '',
            padding: false,
            name: 'CAS',
            text: 'Creating great search experiences and tools for scientific information and improving people’s lives through the power of chemistry and biology.',
            tags: ['product design', 'ux/ui', 'prototyping', 'strategy', 'user research', 'leadership']
        },
        {
            image: '/assets/homepage/daybase-mockup.png',
            imageWidth: '53.1%',
            imageAlt: '',
            padding: false,
            name: 'Daybase',
            text: 'A start up that sought to revolutionize the workday by helping you work where you live.',
            tags: ['product design', 'wireframing', 'prototyping', 'branding', 'strategy', 'user research', 'project management'],
        },
        {
            image: '/assets/homepage/books-mockup.png',
            imageWidth: '90%',
            imageAlt: '',
            padding: true,
            name: 'Clog X',
            text: 'A book series which explores, from multiple viewpoints and through a variety of means, a single subject particularly relevant to now.',
            tags: ['editorial design', 'content', 'writing', 'research', 'interviews', 'distribution']
        }
    ]

    let i = 0;
    function handleScroll() {
        console.log('scroll')
    }
</script>

<main class='homepage'>
    <div class='foreground'>
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
                        <DesktopArrowIcon />
                    </div>
                </div>
        
                <div class='mobile-scroll-arrow-container'>
                    <MobileArrowIcon />
                </div>
            </section>

            <section class='desktop-project-section' on:scroll|preventDefault={handleScroll}>
                <ProjectCard 
                    image={projects[i].image}
                    imageWidth={projects[i].desktopWidth}
                    imageAlt={projects[i].imageAlt}
                    extraImagePadding={projects[i].padding}
                    name={projects[i].name}
                    text={projects[i].text}
                    tags={projects[i].tags}
                />

                <div class='desktop-scroll-control'>
                    <div class='circle one'></div>
                    <div class='circle two'></div>
                    <div class='circle three'></div>
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
    </div>
</main>

<style>
    .foreground {
        padding: 37px 20px 89px;
    }

    .homepage {
        overflow: hidden;
        background-color: #E0E0E0;
        min-height: 100vh;
        /* background: no-repeat #E0E0E0 url('/assets/homepage/gradient.svg');
        background-size: contain;
        background-position-y: 50%; */
    }

    .hero-section {
        margin-bottom: 248px;
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

    @media screen and (min-width: 768px) {
        .mobile-project-section {
            display: none;
        }

        .foreground {
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
            margin-top: 25px;
            width: 583px;
            position: relative;
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
            background-color: #0E0E0E;
            opacity: 0.3;
        }
    }
</style>