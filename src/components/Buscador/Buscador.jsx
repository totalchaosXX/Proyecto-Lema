import { useRef } from "react";
import { useSearchParams } from "react-router-dom";


const Buscador = () => {
    const [searchParams, SetSearchParams] = useSearchParams()
    const ref = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();
    const value = ref.current.value;

    if(value === ''){
        SetSearchParams({})
        return
    }


    SetSearchParams({
        search:value
    })
  };


  return (
    <form className="col-4" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Buscador;
