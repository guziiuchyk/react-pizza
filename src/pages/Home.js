import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzas from "../components/pizzas";
import {useState} from "react";

const Home = () => {

    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState(0);

    return (
        <div className="container">
            <div className="content__top">
                <Categories id={categoryId} setId={setCategoryId} />
                <Sort type={sortType} setType={setSortType}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Pizzas />
        </div>
    )
}

export default Home;