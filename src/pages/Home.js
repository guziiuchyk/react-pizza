import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzas from "../components/pizzas";
import {useState} from "react";
import Search from "../components/search";
import Pagination from "../components/pagination";
import React from "react";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [orderBy, setOrderBy] = useState('desc');



    const [sortType, setSortType] = useState({
        name:'Популярності',
        sortProperty: 'rating'
    });

    return (
        <div className="container">
            <Search />
            <div className="content__top">
                <Categories  />
                <Sort orderBy={orderBy} setOrderBy={setOrderBy} type={sortType} setType={setSortType}/>
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <Pizzas setCurrentPage={setCurrentPage} currentPage={currentPage} orderBy={orderBy} sortType={sortType}/>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}

export default Home;