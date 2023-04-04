export default function randomColor() {

    const pastelColors = [
        '#FFC8C8', // light red
        '#FFE6C8', // light orange
        '#FFFFC8', // light yellow
        '#E6FFC8', // light green
        '#C8FFE6', // light blue-green
        '#C8E6FF', // light blue
        '#E6C8FF', // light purple
        '#FFC8F8', // light pink
        '#F8C8FF', // light lavender
        '#FFD8C8', // light peach
        '#FFECC8', // light gold
        '#C8FFED', // light seafoam
        '#C8E2FF', // light sky blue
        '#FFC8E2', // light rose
        '#C8FFF8', // light mint green
        '#F8FFC8', // light chartreuse
        '#D8C8FF', // light violet
        '#C8FFC8', // light lime green
        '#FFF8C8', // light beige
        '#FFC8A8', // light salmon
        '#C8A8FF', // light orchid
        '#A8FFC8', // light aqua
        '#A8C8FF', // light cerulean
        '#FFA8C8', // light mauve
        '#C8FFA8', // light spring green
        '#FFC8D8', // light coral
        '#C8D8FF', // light periwinkle
        '#D8FFC8', // light lime
        '#FFC8B0', // light apricot
        '#C8B0FF' // light lavender-blue
    ];

    return (pastelColors[Math.floor(Math.random() * 29)])
}