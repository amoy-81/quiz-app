import click from './click.mp3'
const touch = () => {
    const tm = new Audio(click)
    tm.play()
}

export { touch };