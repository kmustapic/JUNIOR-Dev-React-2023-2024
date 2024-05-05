// example 13
// function component, props

function Pozdrav3(props) {
    return (
        <>
            <h3>Pozdrav od React funkcijske komponente</h3>
            <p>Dobar dan, {props.ime}</p>
            <p>Imaš {props.god} godina.</p>
        </>
    )
}

export default Pozdrav3