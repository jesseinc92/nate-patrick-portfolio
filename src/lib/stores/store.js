import { writable } from "svelte/store";


export default writable({
    theme: 'light',
    palette: {
        background: '#E0E0E0',
        stroke: '#0E0E0E',
        text: 'black',
        scrollDots: '#0E0E0E'
    }
})