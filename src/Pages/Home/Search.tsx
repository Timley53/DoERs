import React from 'react'


interface props {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

function Search({searchValue, setSearchValue}: props) {
  return (
    <div className='w-[40%] md:min-w-[300px]  mx-5 flex'>
        <input type="text" placeholder='input task title' value={searchValue} onChange={(e)=> {
            
            setSearchValue(e.target.value)
        
        }} 
        className='bg-slate-200 p-2 px-3 text-sm rounded-lg w-full focus-within:outline-none'/>
        {/* <button className=''><ImSearch/></button> */}
        {/* <button className=''><RxCross2/></button> */}
    </div>
  )
}

export default Search