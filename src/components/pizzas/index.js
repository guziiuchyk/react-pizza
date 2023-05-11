import Pizza from "./Pizza";
import {useEffect, useState} from "react";
import Skeleton from "./Skeleton";
const Pizzas = ({categoryId, sortType, orderBy, searchValue, setCategoryId}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const search = searchValue ? `&search=${searchValue}` : '';
            if (searchValue){
                setCategoryId(0);
            }
        const category = categoryId === 0 ? '' : `&category=${categoryId}`;
        const sort = `&sortBy=${sortType.sortProperty}`;
        const order = `&order=${orderBy}`;

        fetch(`https://64527fefa2860c9ed40e0249.mockapi.io/items?${category}${sort}${order}${search}`)
            .then(value => (value.json()))
            .then(json => {
                setItems(json);
                setIsLoading(false);
            });
        window.scrollTo(0,0)
    }, [categoryId, sortType, orderBy, searchValue, setCategoryId]);

    const skeletonComponents = [...new Array(6)].map((_, index) => (<Skeleton key={index} />))
    const pizzas = items.map((pizza) => {
        return <Pizza key={pizza.id} {...pizza} />
    })
    return (
        <div className="content__items">
            {isLoading ? skeletonComponents : pizzas}
        </div>
    )
}

export default Pizzas;