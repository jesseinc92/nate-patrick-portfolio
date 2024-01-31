<script>
    import '../lib/stylesheets/global.css'
    import LinkedInIcon from '../lib/components/icons/LinkedInIcon.svelte';
    import MailIcon from '../lib/components/icons/MailIcon.svelte';
    import MobileArrowIcon from '../lib/components/icons/MobileArrowIcon.svelte';
    import Footer from '../lib/components/Footer.svelte';
    import ProjectCard from '../lib/components/cards/ProjectCard.svelte';
    import BackgroundShape from '../lib/components/BackgroundShape.svelte';

    const projects = [
        {
            image: '/assets/homepage/cas-mockup.png',
            imageWidth: '83.5%',
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
</script>

<main class='homepage'>
    <div class='foreground'>
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
        
                <p>Here is some of his work</p>
            </div>
    
            <div class='social-icons'>
                <LinkedInIcon color='#0E0E0E' />
                <MailIcon color='#0E0E0E' />
            </div>
    
            <div class='scroll-arrow-container'>
                <!-- <div class='stem'></div>
                <div class='head-one'></div>
                <div class='head-two'></div> -->
                <MobileArrowIcon />
            </div>
        </section>
    
        <section class='project-section'>
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
    
        <Footer />
    </div>

    <!-- <BackgroundShape /> -->
</main>

<style>
    .foreground {
        /* position: absolute; */
        padding: 89px 20px;
    }

    .homepage {
        background-color: #E0E0E0;
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

    .social-icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        margin: auto;
    }

    .scroll-arrow-container {
        width: fit-content;
        margin: auto;
        margin-top: 75px;

        /* & .stem {
            height: 150px;
            width: 2px;
            margin: auto;
            background-color: #BE8C0A;
        }

        & .head-one {
            height: 5px;
            width: 2px;
            background-color: #BE8C0A;
        }

        & .head-two {
            height: 5px;
            width: 2px;
            background-color: #BE8C0A;
        } */
    }

    .project-section {
        display: flex;
        flex-direction: column;
        gap: 80px;
    }
</style>