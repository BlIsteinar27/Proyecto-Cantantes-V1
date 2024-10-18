import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Botonera from '../../components/discografiasG/Botonera'
import CardD from "../../components/detalleC/CardD";
import { Paginator } from 'primereact/paginator';


import { supabase } from "../../libs/supabase";

const DiscografiasG = () => {

    const params = useParams()
    const [discografias, setDiscografias] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [genero, setGenero] = useState(null); // Cambiado a null
    const [loading, setLoading] = useState(true);

    const idgenero = decodeURIComponent(params.id);

    //paginador
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(12);
    const [totalRecords, setTotalRecords] = useState(0);


    // Función para obtener los datos de la tabla 'cantantes'
    async function fetchDiscografias() {
        setLoading(true);
        const { data, error } = await supabase.from('discografias').select('*').eq('idgenero', idgenero).range(first, first + rows - 1); // Ajusta el rango según la paginación;

        if (error) {
            console.error('Error al obtener los discografias:', error);
        } else {
            setDiscografias(data);
        }

        setLoading(false);
    }

    async function fetchTotalRecords() {
        const { count, error } = await supabase
            .from('discografias')
            .select('*', { count: 'exact' })
            .eq('idgenero', idgenero);

        if (error) {
            console.error('Error al obtener el total de discografías:', error);
        } else {
            setTotalRecords(count);
        }
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
            fetchDiscografias();// Cargar cantantes según el ID del género
            fetchTotalRecords(); // Obtener total de registros
            fetchGenero()
        }
    }, [idgenero, first, rows]); // Dependencia en params.id

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
        fetchDiscografias(); // Cargar nuevos datos basados en la nueva página
    };

    if (loading) return <h1 className='text-center py-4'>Cargando...</h1>;

    return (
        <>
            <div className="container">
                <div className='text-center pb-2'>
                    <h1 className='text-center mt-3' style={{ textTransform: 'capitalize' }}>Discografiass de {genero ? genero.nombre : 'Cargando...'} ({discografias.length})</h1>
                    <div className="py-3">
                        {generos && generos.map((item) => (
                            <Botonera key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="card">
                        <Paginator
                            first={first}
                            rows={rows}
                            totalRecords={totalRecords}
                           
                            onPageChange={onPageChange}
                        />
                    </div>
                </div>
                <div className="row">
                    {discografias && discografias.map((item) => (
                        <CardD key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default DiscografiasG