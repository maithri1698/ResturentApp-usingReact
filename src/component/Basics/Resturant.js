import React,{useState} from 'react'
import './Style.css'
import Menu from './menuApi'
import MenuCard from "./MenuCard.js"

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const isBreakFast = (category) =>{
        const filterItem = Menu.filter((curele)=>{
            return curele.category === category;
        })
        setMenuData(filterItem)
    }

    const allItem =(category) =>{
        setMenuData(Menu)
    }
    return (
    <>
    <nav className="navbar">
        <div className= "btn-group">
            <button className="btn-group__item" onClick ={() => isBreakFast("breakfast")}>Breakfast</button>
            <button className="btn-group__item" onClick ={() => isBreakFast("lunch")}>lunch</button>
            <button className="btn-group__item" onClick ={() => isBreakFast("evening")}>evening</button>
            <button className="btn-group__item" onClick ={() => isBreakFast("dinner")}>dinner</button>
            <button className="btn-group__item" onClick ={() => allItem("all")}>all</button>
        </div>
    </nav>
    <MenuCard  data = {menuData}/>
     
    </>
    )
        
}

export default Resturant
