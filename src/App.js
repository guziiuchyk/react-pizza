
import './scss/app.scss';
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import Sort from "./components/sort/Sort";
import Pizzas from "./components/pizzas/Pizzas";
import {useEffect, useState} from "react";

function App() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://64527fefa2860c9ed40e0249.mockapi.io/items')
            .then(value => (value.json()))
            .then(json => {setItems(json)});

    }, []);


    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <Pizzas items={items}/>
                </div>
            </div>
        </div>

    );
}

export default App;
