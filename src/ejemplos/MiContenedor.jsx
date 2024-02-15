const MiContenedor = ({children}) => {

    const estilos ={
        backgroundColor:'white',
        color: 'black',
        maxWidth:'1100px',
        margin: '0 auto',
        padding:'30px',
    }

    return (
        <div style={estilos}>
            {children}
        </div>
    )
}

export default MiContenedor