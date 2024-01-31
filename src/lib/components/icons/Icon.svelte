<script>
    export let width = 22, 
            height = 22,
            fill = 'none'
</script>


<svg
    {width}
    {height}
    viewBox={`0 0 ${width} ${height}`}
    {fill}
>
    <slot />
</svg>