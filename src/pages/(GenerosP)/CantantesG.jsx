import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/cantantesG/Card'
import Botonera from '../../components/cantantesG/Botonera'

import { supabase } from "../../libs/supabase";

const CantantesG = () => {

    const params = useParams()
    const [cantantes, setCantantes] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [genero, setGenero] = useState(null); // Cambiado a null
    const [loading, setLoading] = useState(true);

    const idgenero = decodeURIComponent(params.id);

    async function fetchCantantes() {
        setLoading(true);
        const { data, error } = await supabase
            .from('r_genero_cantante') // Cambiar a la tabla de relación
            .select(`
                cantantes (
                    id,
                    nombre,
                    pais_origen,
                    fecha_nacimiento,
                    notas,
                    foto
                )
            `)
            .eq('idgenero', idgenero); // Filtra por el id del género

        if (error) {
            console.error('Error al obtener los cantantes:', error);
        } else {
            // Extraer solo los cantantes del resultado
            setCantantes(data.map(item => item.cantantes));
        }

        setLoading(false);
    }

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

    async function fetchGenero() {
        setLoading(true);
        const { data, error } = await supabase.from('generos').select('nombre').eq('id', idgenero);

        if (error) {
            console.error('Error al obtener el nombre del genero:', error);
        } else if (data.length > 0) { // Asegurarse de que hay datos
            setGenero(data[0]); // Guardar solo el primer elemento
        }

        setLoading(false);
    }

    // useEffect para cargar géneros al montar el componente
    useEffect(() => {
        fetchGeneros();
    }, []);

    // useEffect para cargar cantantes cuando cambia el ID del género
    useEffect(() => {
        if (idgenero) {
            fetchCantantes(); // Cargar cantantes según el ID del género
            fetchGenero()
        }
    }, [idgenero]); // Dependencia en params.id

    if (loading) return <h1 className='text-center py-4'>Cargando...</h1>;

    return (
        <>
            <div className="container">
                <div className='text-center '>
                    <h1 className='text-center mt-3' style={{ textTransform: 'capitalize' }}>Cantantes de {genero ? genero.nombre : 'Cargando...'} ({cantantes.length})</h1>
                    <div className="py-3">
                        {generos && generos.map((item) => (
                            <Botonera key={item.id} item={item} />
                        ))}
                    </div>
                </div>
                <div className="row">
                    {cantantes && cantantes.map((item) => (
                            <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default CantantesG