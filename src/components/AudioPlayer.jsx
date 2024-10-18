import React from 'react'
import Player from "@madzadev/audio-player";

const PlayerPrueba = ({ canciones }) => {
  // Filtra las canciones por idcantante
  const tracks = canciones
    .filter(cancion => cancion.idcantante >= 1 && cancion.idcantante <= 10) // Filtra por idcantante
    .map(cancion => {
      if (!cancion.titulo) {
        console.error("Título de canción no definido:", cancion);
        return null; // Maneja el error de otra manera
      }
      return {
        url: `https://zdwvswsddzfuazzvtifv.supabase.co/storage/v1/object/public/aud/${encodeURIComponent(cancion.titulo)}.mp4`,
        title: cancion.titulo,
        tags: ["salsa"],
      };
    })
    .filter(track => track !== null); // Filtra los tracks no válidos
  return (
    <>
      <div className='mt-5'>
        {tracks.length > 0 ? (
          <Player
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlaylist={true}
            sortTracks={false}
            autoPlayNextTrack={true}
          />
        ) : (
          <p>No hay canciones disponibles.</p>
        )}
      </div>
    </>
  )
}

export default PlayerPrueba