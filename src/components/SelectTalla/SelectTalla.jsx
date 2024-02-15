import { useEffect } from "react"

const SelectTalla = ({setSelect, options}) => {

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }

    useEffect(() => {
        setSelect(options[0].value)
    },[])

    return (
        <div>
              <select  onChange={handleSelect}>
               {
                options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)
               }
            </select>
        </div>
    )
}

export default SelectTalla