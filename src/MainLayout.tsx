import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import { Roostate } from './Store/GlobalStore'


const style = {
    general: "w-[100%] h-screen min-h-[100vh] flex border-2 relative overflow-hidden",
    dark: "bg-black",
    light: " bg-[aliceblue] "
  }
  

  const mainOutLetSTyle = {
    general: "w-[100%] h-[100%] overflow-y-scroll ",
    dark: "text-white ",
    light: "text-black "
  }

function MainLayout() {
    const darkMode = useSelector((state: Roostate) => state.user.darkMode)

  return (
    <div className={`${style.general} ${darkMode ? style.dark : style.light}`}>
    <Nav/>
    <main className={mainOutLetSTyle.general + (darkMode ?  mainOutLetSTyle.dark : mainOutLetSTyle.light )}>
        <Outlet/>
    </main>
</div>  )
}

export default MainLayout