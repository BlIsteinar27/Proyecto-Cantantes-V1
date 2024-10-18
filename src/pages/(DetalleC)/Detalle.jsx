import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import Card from '../../components/cantantesG/Card';
import CardD from '../../components/detalleC/CardD';

import { supabase } from "../../libs/supabase";

const Detalle = () => {

    const params = useParams()
    const navigate = useNavigate();

    const [cantante, setCantante] = useState([]);
    const [cantantes, setCantantes] = useState([]);
    const [discografias, setDiscografias] = useState([]);
    const [loading, setLoading] = useState(true);

    const idcantante = decodeURIComponent(params.id);

    async function fetchCantante() {
        setLoading(true);

        const { data, error } = await supabase.from('cantantes').select('*').eq('id', idcantante);

        if (error) {
            console.error('Error al obtener el cantante:', error);
        } else {
            if (data.length > 0) {
                setCantante(data[0]);
                // Llama a la función para obtener el ID del género después de establecer el cantante
                fetchGeneroDelCantante(data[0].id); // Cambia aquí para usar el ID del cantante
            } else {
                console.error('No se encontró el cantante con id:', idcantante);
            }
        }
        setLoading(false);
    }

    async function fetchGeneroDelCantante(idCantante) {
        // Obtener el ID del género del cantante actual
        const { data, error } = await supabase
            .from('r_genero_cantante')
            .select('idgenero')
            .eq('idcantante', idCantante);

        if (error) {
            console.error('Error al obtener el género del cantante:', error);
        } else if (data.length > 0) {
            // Si se encuentra un género, llama a la función para obtener otros cantantes
            fetchOtrosCantantes(data[0].idgenero); // Usar el ID del género encontrado
        } else {
            console.error('No se encontró un género para el cantante con id:', idCantante);
        }
    }

    async function fetchDiscografias() {
        setLoading(true);
        const { data, error } = await supabase.from('discografias').select('*').eq('idcantante', idcantante);

        if (error) {
            console.error('Error al obtener las discografías:', error);
        } else {
            setDiscografias(data);
        }

        setLoading(false);
    }

    async function fetchOtrosCantantes(idGenero) {
        if (!idGenero) {
            console.error('ID de género no definido');
            return; // Salir si el ID no está definido
        }

        const { data, error } = await supabase
            .from('r_genero_cantante')
            .select(`
                cantantes (
                    id,
                    nombre,
                    foto
                )
            `)
            .eq('idgenero', idGenero) // Filtra por el ID del género
            .neq('idcantante', idcantante); // Excluye al cantante actual

        if (error) {
            console.error('Error al obtener otros cantantes:', error);
        } else {
            setCantantes(data.map(item => item.cantantes)); // Extrae solo los cantantes
        }
    }

    useEffect(() => {
        fetchCantante();
        fetchDiscografias();
    }, [params.id]);

    if (loading) return <h1 className='text-center py-4'>Cargando...</h1>;

    return (
        <>
            <h3 className="text-center py-4"><b>Detalles de {cantante.nombre} </b></h3>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ">
                        <img src={`https://zdwvswsddzfuazzvtifv.supabase.co/storage/v1/object/public/img/cantantes/${cantante.foto}`} alt="" className="img-fluid img-thumbnail" />
                    </div>
                    <div className="col-md-8">
                        <h2><b>Nombre: {cantante.nombre}.</b></h2>
                        <h3>{cantante.notas}</h3><br />
                        <hr />
                        <p>
                            <b>Fecha de nacimiento:</b> {cantante.fecha_nacimiento}<br />
                            <b>Pais de origen:</b> {cantante.pais_origen}
                        </p>
                        <hr />
                        <a href="#" className="btn btn-light btn-sm me-2" onClick={() => navigate(-1)}>
                            Volver
                        </a>
                        
                        <hr />
                    </div>
                    <hr />
                    <div className='container text-center py-3'>
                        <h3><b>Discografias ({discografias.length})</b></h3><br />
                        <div className="row">
                            {discografias && discografias.map((item) => (
                                <CardD key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <hr />
                <div className='container'>
                    <h3><b>Otros cantantes del mismo genero</b></h3><br />
                    <div className='row'>
                        {cantantes && cantantes.map((item) => (
                                <Card key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detalle