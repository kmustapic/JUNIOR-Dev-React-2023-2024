// example 15
// function component, props

function Pozdrav5(props) {
    const godRod = () => {
        let rez = new Date().getFullYear() - props.god
        return rez
    }
    return (
        <>
        <h3>Pozdrav od React funkcijske komponente.</h3>
        <p>Dobar dan, {props.ime}</p>
        <p>Imaš {props.god} godina.</p>
        <p>Vjerojatno si rođen(a) {godRod()}. godine</p>
        </>
    )
}

export default Pozdrav5