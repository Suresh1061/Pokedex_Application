import React from 'react'
import InitialPokeDetails from './InitialPokeDetails'

const PokeDetails = ({ data }) => {
  return (
    <div className='max-[1024px]:hidden'>
      {
        (!data) ?
          <InitialPokeDetails /> :
          (<>
            <div className=' relative'>
              <h1 className=' absolute right-24 top-0 font-smibold text-2xl font-Kalam'>#{data.id}</h1>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" className=' mx-auto h-64 pb-4' />
              <h1 className=' text-center font-[800] pb-3 text-3xl capitalize font-Merriweather tracking-wide'>{data.name}</h1>
            </div>
            <div className=' w-[350px] mx-auto'>
              <div className=' flex flex-row justify-evenly py-3'>
                {data.types.map((val) => {
                  return (
                    <button className=' w-[120px] py-1 rounded-full bg-violet-400 text-white font-semibold capitalize '>{val.type.name}</button>
                  )
                })}
              </div>

              <div className='flex justify-evenly '>
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

            <div className='font-semibold w-[375px] mx-auto'>
              <h1 className=' text-center text-2xl py-2 font-Kalam tracking-wide'>Base States</h1>
              {
                data.stats.map((val) => {
                  return (<>
                    <div className=' flex items-center justify-between pb-1.5'>
                      <h1 className=' capitalize text-sm font-bold font-Kalam tracking-wide'>{val.stat.name}</h1>
                      <div className='w-[270px] rounded-full h-3.5 bg-slate-300 relative shadow-inner' >
                        <p className=' absolute top-[1px] left-[50%] z-10 text-[10px] font-semibold text-gray-600 font-Kalam tracking-wide'>{val.base_stat} / 270</p>
                        <div className={`h-3.5 absolute top-0 left-0 bg-red-500 rounded-full`} style={{ width: `${val.base_stat}px` }} ></div>
                      </div>
                    </div>
                  </>)
                })
              }
            </div>
          </>
          )
      }
    </div >
  )
}

export default PokeDetails;