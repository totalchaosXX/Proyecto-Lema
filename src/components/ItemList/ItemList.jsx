import Buscador from "../Buscador/Buscador";
import ItemCard from "../ItemCard/ItemCard";

const ItemnList = ({ items }) => {

  return (
    <div className="container my-5">
      <h1>Listado de productos</h1>

      <hr />

    
      {/* <Buscador/> */}
      

      {/* {
                productos.length===0
                ? "No hay productos aún"
                : "Ya se cargaron los productos"
            } */}

      <div className="row">
        {items.map((prenda) => (
          <ItemCard key={prenda.id} {...prenda} />
        ))}
      </div>


    </div>
  );
};

export default ItemnList;
