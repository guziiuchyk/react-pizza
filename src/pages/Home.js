import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Pizzas from "../components/pizzas";
import Search from "../components/search";
import Pagination from "../components/pagination";
import React from "react";

const Home = () => {
    return (
        <div className="container">
            <Search />
            <div className="content__top">
                <Categories  />
                <Sort/>
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <Pizzas />
            <Pagination/>
        </div>
    )
}

export default Home;