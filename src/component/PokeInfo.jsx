import React from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const PokeInfo = ({ data }) => {

    return (
        <div className='min-h-screen bg-black text-white lg:hidden'>{
            (!data) ? " " :
                (<>
                    <nav className='w-full bg-red-500 rounded-b-2xl '>
                        <div className='h-[50px] px-4 flex   justify-between items-center text-white '>
                            <div className='flex gap-x-10'>
                                <Link to='/'><BiLeftArrowAlt size={30} /></Link>
                                <h1 className=' text-2xl font-bold  text-center'>PokeDex</h1>
                            </div>
                            <h1 className=' font-semibold text-2xl font-Kalam pl-1'>#{data.id}</h1>
                        </div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" className=' mx-auto h-64 w-64 py-6' />
                    </nav>

                    <div >
                        {/* <h1 className='absolute left-2 top-2 font-semibold text-xl'>#{data.id}</h1> */}
                        {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" className=' mx-auto h-64 w-64' /> */}
                        <h1 className=' text-center font-bold py-3 text-3xl capitalize  font-Merriweather tracking-wide'>{data.name}</h1>
                        <div className=' w-[350px] mx-auto'>
                            <div className=' flex flex-row justify-evenly py-3'>
                                {data.types.map((val) => {
                                    {/* { console.log(val.type.name) } */ }
                                    return (
                                        <button className=' w-[120px] py-1 rounded-full bg-violet-400 text-white font-semibold capitalize'>{val.type.name}</button>
                                    )
                                })}
                            </div>

                            <div className='flex justify-evenly pt-2'>
                                <div className='flex justify-center items-center flex-col '>
                                    <h2 className='text-2xl font-semibold '>{data.weight} KG</h2>
                                    <p className=' text-gray-600 text-sm font-Kalam tracking-wide'>Weight</p>
                                </div>
                                <div className='flex justify-center items-center flex-col'>
                                    <h2 className='text-2xl font-semibold '>{data.height} M</h2>
                                    <p className=' text-gray-600 text-sm font-Kalam tracking-wide'>Height</p>
                                </div>
                            </div>
                        </div>

                        <div className='font-semibold w-[350px] sm:w-[400px] mx-auto font-Kalam tracking-wide'>
                            <h1 className=' text-center text-2xl py-3'>Base States</h1>
                            {
                                data.stats.map((val) => {
                                    return (<>
                                        <div className=' flex items-center justify-between pb-1.5'>
                                            <h1 className=' capitalize text-sm font-bold'>{val.stat.name}</h1>
                                            <div className='w-[230px]  sm:w-[270px] rounded-full h-3.5 bg-slate-200 relative shadow-inner' >
                                                <p className=' absolute top-[1px] left-[50%] z-10 text-[10px] font-semibold text-gray-600'>{val.base_stat} / 270</p>
                                                <div className={`h-3.5 absolute top-0 left-0 bg-red-500 rounded-full`} style={{ width: `${val.base_stat}px` }} ></div>
                                            </div>
                                        </div>
                                    </>)
                                })
                            }
                        </div>
                    </div>
                </>
                )
        }
        </div >
    )
}

export default PokeInfo