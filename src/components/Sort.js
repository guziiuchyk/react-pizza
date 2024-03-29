import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setOrderBy, setSortType} from "../redux/slices/filterSlice";

const Sort = () => {

    const dispatch = useDispatch();
    const {orderBy, sortType} = useSelector(state => state.filter);
    const type = sortType;
    const sort = [
        {name: 'Популярності', sortProperty:'rating'},
        {name: 'Ціні',sortProperty: 'price'},
        {name: 'Алфавіту', sortProperty: 'title'}
    ];
    const [isVisible, setVisible] = useState(false);
    const sortRef = useRef();
    useEffect(() => {
        console.log(123)
        const handleClickOutsdie = (event) => {
            if (!event.composedPath().includes(sortRef.current)){
                setVisible(false)
            }
        }

        document.body.addEventListener('click', handleClickOutsdie)
        return () => {
            document.body.removeEventListener('click', handleClickOutsdie)
        }
    }, []);

    const sortComponents = sort.map((value, i) => <li
        onClick={() => {setVisible(!isVisible); dispatch(setSortType(value))}}
        className={type.sortProperty === value.sortProperty ? 'active' : ''}
        key={i}>{value.name}

    </li>)
    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => {setVisible(!isVisible)}}>{type.name}</span>
            </div>
            {
                isVisible && <div className="sort__popup">
                    <ul>

                        {sortComponents}

                    </ul>
                </div>
            }
            <button onClick={orderBy === 'desc' ? () => {dispatch(setOrderBy('asc'))} : undefined} className={orderBy === 'asc' ? 'active' : ''}> ↑ </button>
            <button onClick={orderBy === 'asc' ? () => {dispatch(setOrderBy('desc'))} : undefined} className={orderBy === 'desc' ? 'active' : ''}> ↓ </button>
        </div>
    )
}

export default Sort;