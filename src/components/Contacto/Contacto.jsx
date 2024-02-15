const Contacto = () => {
    return (
        <div className="container my-5 ">
            <h2>Contacto</h2>
            <hr />
            <h4 className="my-3">Ingresa tus datos y te contactaremos</h4>


            <form>
                <input 
                type="text"
                placeholder="Nombre"
                className="form-control my-2"
                />
                <input 
                type="text"
                placeholder="Dirección"
                className="form-control my-2"
                />
                <input 
                type="email"
                placeholder="Email"
                className="form-control my-2"
                />
                <input 
                type="text"
                placeholder="Teléfono"
                className="form-control my-2"
                />
                <textarea  
                type="text"
                placeholder="Comentarios"
                className="form-control my-2"
                rows={5}             
                />
            </form>
        </div>
        
    )
}

export default Contacto