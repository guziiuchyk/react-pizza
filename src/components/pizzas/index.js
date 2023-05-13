import Pizza from "./Pizza";
import {useContext, useEffect, useState} from "react";
import Skeleton from "./Skeleton";
import {SearchContext} from "../../App";

const Pizzas = ({categoryId, sortType, orderBy, setCategoryId, currentPage}) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {searchValue} = useContext(SearchContext)

    useEffect(() => {
        setIsLoading(true);
        const search = searchValue ? `&_like=${searchValue}` : '';
        if (searchValue) {
            setCategoryId(0);
        }
        const category = categoryId === 0 ? '' : `&category=${categoryId}`;
        const sort = `&_sort=${sortType.sortProperty}`;
        const order = `&_order=${orderBy}`;
        const page = `&_page=${currentPage}`

        fetch(`http://localhost:3001/pizzas?_limit=4&${page}${category}${sort}${order}${search}`)
            .then(value => (value.json()))
            .then(json => {
                setItems(json);
                setIsLoading(false);
            });
        window.scrollTo(0, 0)
    }, [categoryId, sortType, orderBy, searchValue, setCategoryId, currentPage]);

    const skeletonComponents = [...new Array(6)].map((_, index) => (<Skeleton key={index}/>))
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