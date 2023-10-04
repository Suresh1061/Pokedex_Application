import React from 'react'

const Card = ({ pokemon, pokeinfo }) => {
    return (
        <div className='grid min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 min-[1200px]:grid-cols-3  justify-items-center  gap-4  sm:mx-auto cursor-pointer '>
            {
                pokemon.map((data) => {
                    return <>
                        <div className='h-44 w-[170px] bg-gray-300 rounded-md overflow-hidden shadow-lg relative font-Kalam' key={data.id} onClick={() => pokeinfo(data)} >
                            <h1 className=' absolute top-2 left-2'>#{data.id}</h1>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" className='h-[75%] w-[60%]  mx-auto py-2 object-contain' />
                            <h3 className=' text-center py-2 text-xl font-semibold bg-red-400 text-white font-Merriweather capitalize tracking-wide'>{data.name}</h3>
                        </div>
                    </>
                })
            }
        </div>
    )
}

export default Card