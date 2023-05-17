import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzas from "../components/pizzas";
import {useState} from "react";
import Search from "../components/search";
import Pagination from "../components/pagination";
import React from "react";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="container">
            <Search />
            <div className="content__top">
                <Categories  />
                <Sort/>
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <Pizzas setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}

export default Home;