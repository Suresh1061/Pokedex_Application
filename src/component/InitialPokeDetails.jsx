import React from 'react'

const InitialPokeDetails = () => {
    return (
        <>
            <div className=' relative'>
                <h1 className=' absolute right-24 top-0 font-smibold text-2xl font-Kalam'>#1</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`} alt="" className=' mx-auto h-64 pb-4' />
                <h1 className=' text-center font-bold pb-3 text-3xl capitalize font-Merriweather tracking-wide'>Bulbasaur</h1>
            </div>

            <div className=' w-[350px] mx-auto'>
                <div className=' flex flex-row justify-evenly py-3'>
                    <button className=' w-[120px] py-1 rounded-full bg-violet-400 text-white font-semibold capitalize'>grass</button>
                    <button className=' w-[120px] py-1 rounded-full bg-violet-400 text-white font-semibold capitalize'>poison</button>
                </div>
                <div className='flex justify-evenly'>
                    <div className='flex justify-center items-center flex-col '>
                        <h2 className='text-2xl font-semibold '>69 KG</h2>
                        <p className=' text-gray-600 text-sm font-Kalam tracking-wide'>Weight</p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <h2 className='text-2xl font-semibold '>7 M</h2>
                        <p className=' text-gray-600 text-sm font-Kalam tracking-wide'>Height</p>
                    </div>
                </div>
            </div>

            <div className='font-semibold w-[375px] mx-auto font-Kalam tracking-wide'>
                <h1 className=' text-center text-2xl py-2'>Base States</h1>
                <div>
                    <div className=' flex items-center justify-between pb-1.5'>
                        <h1 className=' capitalize text-sm font-bold'>Hp</h1>
                        <div className='w-[270px] rounded-full h-3.5 bg-slate-300 relative shadow-inner' >
                            <p className=' absolute top-[1px] left-[50%] z-10 text-[10px] font-semibold text-gray-600'>45 / 270</p>
                            <div className={`h-3.5 absolute top-0 left-0 bg-red-400 rounded-full`} style={{ width: `45px` }} ></div>
                        </div>
                    </div>
                    <div className=' flex items-center justify-between pb-1.5'>
                        <h1 className=' capitalize text-sm font-bold'>Attack</h1>
                        <div className='w-[270px] rounded-full h-3.5 bg-slate-300 relative shadow-inner' >
                            <p className=' absolute top-[1px] left-[50%] z-10 text-[10px] font-semibold text-gray-600'>49 / 270</p>
                            <div className={`h-3.5 absolute top-0 left-0 bg-red-400 rounded-full`} style={{ width: `49px` }} ></div>
                        </div>
                    </div>
                    <div className=' flex items-center justify-between pb-1.5'>
                        <h1 className=' capitalize text-sm font-bold'>Defense</h1>
                        <div className='w-[270px] rounded-full h-3.5 bg-slate-300 relative shadow-inner' >
                            <p className=' absolute top-[1px] left-[50%] z-10 text-[10px] font-semibold text-gray-600'>49 / 270</p>
                            <div className={`h-3.5 absolute top-0 left-0 bg-red-400 rounded-full`} style={{ width: `49px` }} ></div>
                        </div>
                    </div>
                    <div className=' flex items-center justify-between pb-1.5'>
                        <h1 className=' capitalize text-sm font-bold'>Special-Attack</h1>
                        <div className='w-[270px] rounded-full h-3.5 bg-slate-300 relative shadow-inner' >
                            <p className=' absolute top-[1px] left-[50%] z-10 text-[10px] font-semibold text-gray-600'>65 / 270</p>
                            <div className={`h-3.5 absolute top-0 left-0 bg-red-400 rounded-full`} style={{ width: `65px` }} ></div>
                        </div>
                    </div>
                    <div className=' flex items-center justify-between pb-1.5'>
                        <h1 className=' capitalize text-sm font-bold'>Special-Defense</h1>
                        <div className='w-[270px] rounded-full h-3.5 bg-slate-300 relative shadow-inner' >
                            <p className=' absolute top-[1px] left-[50%] z-10 text-[10px] font-semibold text-gray-600'>65 / 270</p>
                            <div className={`h-3.5 absolute top-0 left-0 bg-red-400 rounded-full`} style={{ width: `65px` }} ></div>
                        </div>
                    </div>
                    <div className=' flex items-center justify-between pb-1.5'>
                        <h1 className=' capitalize text-sm font-bold'>Speed</h1>
                        <div className='w-[270px] rounded-full h-3.5 bg-slate-300 relative shadow-inner' >
                            <p className=' absolute top-[1px] left-[50%] z-10 text-[10px] font-semibold text-gray-600'>45 / 270</p>
                            <div className={`h-3.5 absolute top-0 left-0 bg-red-400 rounded-full`} style={{ width: `45px` }} ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InitialPokeDetails