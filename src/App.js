import React, { useEffect, useState } from 'react'
import Card from './component/Card'
import axios from 'axios'
import PokeInfo from './component/PokeInfo'
import { Link } from 'react-router-dom'
import PokeDetails from './component/PokeDetails'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
// import { Jelly } from '@uiball/loaders'               
import { Ring } from '@uiball/loaders'
import SearchFun from './component/SearchFun'


const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokeDex, setPokeDex] = useState();
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [searchData, setSearchData] = useState();


  const fetchPokeApi = async () => {
    const res = await axios.get(url);
    setLoading(true);
    setNext(res.data.next)
    setPrev(res.data.previous)
    getPokemon(res.data.results)
    setLoading(false);
  }

  const getPokemon = async (res) => {
    try {
      res.map(async (item) => {
        const result = await axios.get(item.url)
        setPokeData(state => {
          state = [...state, result.data]
          state.sort((a, b) => a.id > b.id ? 1 : -1)
          return state;
        })
      })
    } catch (error) {
      console.log('error')
    }
  }

  useEffect(() => {
    fetchPokeApi();
  }, [url])

  return (
    <>
      <Routes>
        <Route path='/' element={
          <div>
            <Navbar searchdata={(data) => setSearchData(data)} />
            {loading ?
              <div className=' h-screen flex justify-center items-center'>
                {/* <Jelly size={50} speed={1} color="black" /> */}
                <Ring size={40} lineWeight={5} speed={2} color="#6600cc" />
              </div> :

              <div className='grid lg:grid-cols-2 px-4 pb-8 pt-[150px] sm:pt-[90px]  h-screen'>
                <div className='h-full overflow-y-scroll '>
                  <Link to='/info' className=' lg:hidden '>
                    {searchData ?
                      <SearchFun search={searchData} pokeinfo={(poke) => { setPokeDex(poke) }} /> :
                      <Card val={50} pokemon={pokeData} pokeinfo={(poke) => { setPokeDex(poke) }} />
                    }
                  </Link>
                  <div className=' hidden lg:block'>
                    {
                      searchData ?
                        <SearchFun search={searchData} pokeinfo={(poke) => { setPokeDex(poke) }} /> :
                        <Card val={50} pokemon={pokeData} pokeinfo={(poke) => setPokeDex(poke)} />
                    }

                  </div>
                  {
                    !searchData ?
                      <div className=' sm:w-[500px] mx-auto my-8 flex justify-around px-8'>
                        {prev && <button className='w-[120px] bg-[#663300] text-white font-semibold rounded-full py-2'
                          onClick={() => {
                            setPokeData([]);
                            setUrl(prev);
                          }}
                        >Prev</button>}

                        {next && <button className='w-[120px] bg-[#663300] text-white font-semibold rounded-full py-2'
                          onClick={() => {
                            setPokeData([]);
                            setUrl(next);
                          }}
                        >Next</button>}
                      </div> : null
                  }
                </div>
                
                <PokeDetails data={pokeDex} />
              </div>
            }
          </div>
        } />

        <Route path='/info' element={<PokeInfo data={pokeDex} />} />
        
      </Routes>
    </>
  )
}

export default App