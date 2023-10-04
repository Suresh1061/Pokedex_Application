import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

const Navbar = ({ searchdata }) => {
    const [search, setSearch] = useState('')

    const handlekeydown = (event) => {
        if (event.key === 'Enter') {
            searchdata(search);
            setSearch('')
        }
    }

    return (
        <nav className='w-full fixed top-0 z-10'>
            <div className='h-[70px] px-12 flex sm:justify-between justify-center items-center bg-red-500 '>
                <h1 className=' text-4xl font-bold text-white text-center'>PokeDex</h1>
                <div className=' relative hidden sm:flex'>
                    <BiSearch size={20} className=' absolute  top-[7px] left-2 text-gray-500' />
                    <input type="text" className='w-[300px] md:w-[350px] lg:w-[400px] py-1 px-2 pl-8 rounded-md outline-none lowercase'
                        placeholder='Search for Pokemon'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={handlekeydown} />
                </div>
            </div>
            <div className=' relative sm:hidden bg-white p-2 shadow-sm'>
                <BiSearch size={20} className=' absolute  top-[16px] left-4 text-gray-500' />
                <input type="text" className='w-full py-1 px-2 pl-8 text-center rounded-md bg-gray-100 outline-none lowercase'
                    placeholder='Search for Pokemon'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handlekeydown}
                />
            </div>
        </nav>
    )
}

export default Navbar