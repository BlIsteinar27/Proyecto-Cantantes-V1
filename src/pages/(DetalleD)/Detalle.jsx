import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PlayerPrueba from '../../components/AudioPlayer'
import CardD from '../../components/detalleC/CardD';

import { supabase } from "../../libs/supabase";

const Detalle = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [discografia, setDiscografia] = useState({});
    const [canciones, setCanciones] = useState([]);
    const [discografias, setDiscografias] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchDiscografia() {
        setLoading(true);
        const { data, error } = await supabase
            .from('discografias')
            .select('*')
            .eq('id', params.id)
            .single();

        if (error) {
            console.error('Error al obtener la discografia:', error);
        } else {
            setDiscografia(data); // Guarda la discografía
            fetchCanciones(data.id); // Llama a fetchCanciones con el ID correcto
            fetchOtrasDiscografias(data.idcantante); // Llama a fetchOtrasDiscografias con el ID del cantante
        }
        setLoading(false);
    }

    async function fetchCanciones(discografiaId) {
        if (!discografiaId) return;
        const { data, error } = await supabase
            .from('canciones_discografia')
            .select('*')
            .eq('iddiscografia', discografiaId);

        if (error) {
            console.error('Error al obtener las canciones:', error);
        } else {
            setCanciones(data || []);
        }
    }

    async function fetchOtrasDiscografias(cantanteId) {
        if (!cantanteId) {
            console.error("No se puede obtener discografías. ID del cantante es undefined.");
            return;
        }

        const { data, error } = await supabase
            .from('discografias')
            .select('*')
            .eq('idcantante', cantanteId)
            .neq('id', params.id); // Excluye la discografía actual

        if (error) {
            console.error("Error al obtener otras discografías:", error);
        } else {
            setDiscografias(data || []);
        }
    }

    useEffect(() => {
        fetchDiscografia();
    }, [params.id]); // Agregar params.id como dependencia para recargar cuando cambia

    if (loading) return <h1 className='text-center py-4'>Cargando...</h1>;
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6 ">
                        <h3 className=" py-4 mt-5">Detalles de la discografia: <b>{discografia.titulo}</b></h3>
                        <img src={`https://zdwvswsddzfuazzvtifv.supabase.co/storage/v1/object/public/img/discografias/${discografia.id}.png`} alt="" className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <PlayerPrueba canciones={canciones} />
                    </div>
                </div>
                <hr />
                <h2><b>Nombre: {discografia.titulo}.</b></h2>
                <h5>
                    <b>Año de lanzamiento:</b> {discografia.anio}<br />
                </h5>
                <hr />
                <a href="#" className="btn btn-light btn-sm me-2" onClick={() => navigate(-1)}>
                    Volver
                </a>

                <hr />
            </div>
            <div className='container text-center'>
                <div className='row'>
                    <h3><b>Otras discografias del mismo cantante</b></h3><br />
                    {discografias.map((item) => (
                        <CardD key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Detalle