import Pizza from "./Pizza";
import { useEffect, useState} from "react";
import Skeleton from "./Skeleton";
import {useSelector, useDispatch} from "react-redux";
import {setCategoryId} from "../../redux/slices/filterSlice";
import axios from "axios";

const Pizzas = () => {

    const {categoryId, orderBy, sortType, searchValue} = useSelector((state)=> state.filter)
    const currentPage = useSelector((state) => state.pagination.currentPage)

    const dispatch = useDispatch();

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        const search = searchValue ? `&name=${searchValue}` : '';
        if (searchValue) {
            dispatch(setCategoryId(0))
        }
        const category = categoryId === 0 ? '' : `&category=${categoryId}`;
        const sort = `&_sort=${sortType.sortProperty}`;
        const order = `&_order=${orderBy}`;
        const page = `&_page=${currentPage}`

        axios.get(`http://localhost:3001/pizzas?_limit=4&${page}${category}${sort}${order}${search}`)
            .then(res => {
                setItems(res.data);
                setIsLoading(false);
            })
    }, [categoryId, sortType, orderBy, searchValue, currentPage, dispatch]);

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