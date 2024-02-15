import { useEffect, useState } from "react";
import Cards from "../Content/Cards";
import "./ItemListContainer.scss";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const { categoryId } = useParams();
  const search = searchParams.get("search");

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "producto")
    const q = categoryId  
      ? query(productosRef, where("id_categoria","==",categoryId), limit(20))
      : productosRef

    getDocs(q)
    .then((resp) => {
        const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))

        setProductos(items)

    })
    .catch(e => console.log(e))
    .finally(()=> setLoading(false))


    // pedirDatos()
    // .then((res)=>{

    //     if(!categoryId){
    //         setProductos(res)
    //     }{
    //         setProductos(res.filter((item) => item.categoria === categoryId))
    //     }
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })
    // .finally(()=> setLoading(false))
  }, [categoryId]);

//   const listado = search
//     ? productos.filter((prod) => prod.nombre.includes(search))
//     : productos;



  return (
    <div className="container border border-1 rounded my-5">
      {
         loading
         ? <h2>Cargando....</h2>
         :<ItemList  items={productos} />
      }
    </div>
  );
};

export default ItemListContainer;
