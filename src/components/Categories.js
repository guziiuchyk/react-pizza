import { useSelector, useDispatch } from 'react-redux'
import {setCategoryId} from "../redux/slices/filterSlice";
const Categories = () => {
    const id = useSelector((state) => state.filter.caregoryId);
    const dispatch = useDispatch()

    const categoriesList = ['Всі',"М'ясні","Вaгетер'яські",'Гриль','Гострі','Закриті',];



    const categoriesListComponents = categoriesList.map((item,i) => {
        return <li key={i} onClick={() => {dispatch(setCategoryId(i))}} className={id === i ? 'active' : ''}>{item}</li>
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