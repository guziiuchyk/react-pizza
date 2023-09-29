import ReactPaginate from "react-paginate";
import styles from './pagination.module.scss'
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../../redux/slices/paginationSlice";

const Pagination = () => {

    const dispatch = useDispatch();

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => dispatch(setCurrentPage(event.selected+1))}
            pageRangeDisplayed={8}
            pageCount={3}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className={styles.pagination}
            activeClassName={styles.active}
            marginPagesDisplayed={8}
        />
    )
}

export default Pagination;