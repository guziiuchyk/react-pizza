import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzas from "../components/pizzas";
import {useState} from "react";
import Search from "../components/search";

const Home = ({searchValue,setSearchValue}) => {

    const [categoryId, setCategoryId] = useState(0);
    const [orderBy, setOrderBy] = useState('desc');
    const [sortType, setSortType] = useState({
        name:'Популярності',
        sortProperty: 'rating'
    });

    return (
        <div className="container">
            <Search  setSearchValue={setSearchValue} searchValue={searchValue} />
            <div className="content__top">
                <Categories id={categoryId} setId={setCategoryId} />
                <Sort orderBy={orderBy} setOrderBy={setOrderBy} type={sortType} setType={setSortType}/>
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <Pizzas setCategoryId={setCategoryId} searchValue={searchValue} orderBy={orderBy} sortType={sortType} categoryId={categoryId} />
        </div>
    )
}

export default Home;