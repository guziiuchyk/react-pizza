import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzas from "../components/pizzas";
import {useState} from "react";

const Home = () => {

    const [categoryId, setCategoryId] = useState(0);
    const [orderBy, setOrderBy] = useState('desc');
    const [sortType, setSortType] = useState({
        name:'Популярності',
        sortProperty: 'rating'
    });

    console.log(orderBy)
    return (
        <div className="container">
            <div className="content__top">
                <Categories id={categoryId} setId={setCategoryId} />
                <Sort orderBy={orderBy} setOrderBy={setOrderBy} type={sortType} setType={setSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Pizzas orderBy={orderBy} sortType={sortType} categoryId={categoryId} />
        </div>
    )
}

export default Home;