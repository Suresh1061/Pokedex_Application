import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { message } from 'antd';

const SearchFun = ({ search, pokeinfo }) => {
    const [sdata, setSdata] = useState();
    const searchUrl = `https://pokeapi.co/api/v2/pokemon/${search}`

    const fetchSearchData = async () => {
        try {
            const res = await axios.get(searchUrl);
            setSdata(res.data);
        } catch (error) {
            message.warning('Please enter valid input')
        }
    }

    useEffect(() => {
        if (search !== ' ') {
            fetchSearchData();
        }
    }, [search])
    return (
        <div className='grid min-[400px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 min-[1200px]:grid-cols-3  justify-items-center  gap-4  sm:mx-auto '>
            {(sdata) ?
                <div className='h-44 w-[170px] bg-gray-300 rounded-md overflow-hidden shadow-lg relative font-Kalam' key={sdata.id} onClick={() => pokeinfo(sdata)} >
                    <h1 className=' absolute top-2 left-2'>#{sdata.id}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${sdata.id}.svg`} alt="" className='h-[75%] w-[60%]  mx-auto py-2 object-contain' />
                    <h3 className=' text-center py-2 text-xl font-semibold bg-red-400 text-white font-Merriweather capitalize tracking-wide'>{sdata.name}</h3>
                </div> : null
            }
        </div>
    )
}

export default SearchFun