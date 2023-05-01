import {useState} from "react";

const Categories = () => {

    const categoriesList = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые',];

    const [activeIndex, setActiveIndex] = useState(0)

    const categoriesListComponents = categoriesList.map((item,index) => {
        return <li onClick={() => {setActiveIndex(index)}} className={activeIndex === index ? 'active' : ''}>{item}</li>
    })

    return (
        <div className="categories">
            <ul>
                {categoriesListComponents}
            </ul>
        </div>
    )
}

export default Categories;