import Pizza from "./Pizza";
import { useEffect, useState} from "react";
import Skeleton from "./Skeleton";
import {useSelector, useDispatch} from "react-redux";
import {setCategoryId} from "../../redux/slices/filterSlice";

const Pizzas = ({currentPage}) => {

    const categoryId = useSelector((state) => state.filter.caregoryId);
    const orderBy = useSelector((state) => state.filter.orderBy);
    const sortType = useSelector((state) => state.filter.sortType);
    const searchValue = useSelector((state) => state.filter.searchValue);

    const dispatch = useDispatch();

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        const search = searchValue ? `&_like=${searchValue}` : '';
        if (searchValue) {
            dispatch(setCategoryId(0))
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