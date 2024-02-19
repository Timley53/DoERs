import React from 'react'
import { inputstyle } from '../../AllStyles';
import { useSelector } from 'react-redux';
import { Roostate } from '../../Store/GlobalStore';


interface props {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    showSearchFxn: () => void
}

function Search({searchValue, setSearchValue, showSearchFxn}: props) {
  const darkMode = useSelector((state: Roostate) => state.user.darkMode)



  return (
    <div className={`md:w-[40%] md:min-w-[300px] sm:w-full  mx-3  flex`}>
        <input type="text" placeholder='input task title' value={searchValue} onChange={(e)=> {    
            setSearchValue(e.target.value)
        }} 
        onFocus={()=>{
          showSearchFxn()

        }}
        className={` p-[12px] px-3  bg-borderColor rounded-lg w-full ${inputstyle.general} ${darkMode ? inputstyle.dark : inputstyle.light} `}/>
    </div>
  )
}

export default Search