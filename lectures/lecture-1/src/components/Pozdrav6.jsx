// example 16
// function component, destructing props

//function Pozdrav6(props)
function Pozdrav6({ime, god}) {
    //const ime = props.ime
    //const god = props.god
    const godRod = () => {
        let rez = new Date().getUTCFullYear() - god
        return rez
    }
    return (
        <>
            <h3>Pozdrav od React funkcijske komponente.</h3>
            <p>Dobar dan, {ime}.</p>
            <p>Imaš {god} godina.</p>
            <p>Vjerojatno si rođen(a) {godRod()}. godine.</p>
        </>
    )
}

export default Pozdrav6