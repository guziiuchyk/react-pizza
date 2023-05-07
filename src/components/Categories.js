
const Categories = ({id, setId}) => {

    const categoriesList = ['Всі',"М'ясні","Вaгетер'яські",'Гриль','Гострі','Закриті',];



    const categoriesListComponents = categoriesList.map((item,i) => {
        return <li key={i} onClick={() => {setId(i)}} className={id === i ? 'active' : ''}>{item}</li>
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