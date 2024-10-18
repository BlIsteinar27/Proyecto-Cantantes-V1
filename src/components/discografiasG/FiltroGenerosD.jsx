import { useEffect, useState } from "react";
import { supabase } from "../../libs/supabase";
import { Link } from "react-router-dom";

const FiltroGenerosD = () => {
    const [generos, setGeneros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetchGeneros();
  }, []);
  async function fetchGeneros() {
      setLoading(true);
      const { data, error } = await supabase.from('generos').select();
      
      if (error) {
          console.error('Error al obtener los generos:', error);
      } else {
          setGeneros(data);
      }
      
      setLoading(false);
  }
  return (
    <>
        {generos && generos.map((item, index) => (
            <li key={index}><Link to={`/discografiasg/${item.id}`} className="dropdown-item" href="#">{item.nombre}</Link></li>
        ))}
    </>
  )
}

export default FiltroGenerosD