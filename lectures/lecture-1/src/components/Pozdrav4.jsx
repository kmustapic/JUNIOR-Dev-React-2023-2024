// example 14
// function component, props

function Pozdrav4(props) {
    return (
        <>
            <h3>Pozdrav od React funkcijske komponente.</h3>
            <p>Ispod se prikazuje ungiježđeni sadržaj.</p>
            {props.children}
        </>
    )
}

export default Pozdrav4