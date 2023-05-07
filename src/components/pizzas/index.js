import Pizza from "./Pizza";
import {useEffect, useState} from "react";
import Skeleton from "./Skeleton";
const Pizzas = ({categoryId, sortType, orderBy}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://64527fefa2860c9ed40e0249.mockapi.io/items?${categoryId === 0 ? '' : `&category=${categoryId}`}&sortBy=${sortType.sortProperty}&order=${orderBy}`)
            .then(value => (value.json()))
            .then(json => {
                setItems(json);
                setIsLoading(false);
            });
        window.scrollTo(0,0)
    }, [categoryId, sortType, orderBy]);

    let skeletonComponents = [...new Array(6)].map((_, index) => (<Skeleton key={index} />))
    let pizzas = items.map((pizza) => {
        return <Pizza key={pizza.id} {...pizza} />
    })
    return (
        <div className="content__items">
            {isLoading ? skeletonComponents : pizzas}
        </div>
    )
}

export default Pizzas;