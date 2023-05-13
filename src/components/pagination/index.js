import ReactPaginate from "react-paginate";
import styles from './pagination.module.scss'

const Pagination = ({setCurrentPage}) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => setCurrentPage(event.selected+1)}
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