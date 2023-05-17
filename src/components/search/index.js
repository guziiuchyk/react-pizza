import styles from './search.module.scss'
import searchLogo from '../../assets/img/search-icon.svg'
import closeIcon from '../../assets/img/close-icon.svg'
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../redux/slices/filterSlice";

const Search = () => {
    const searchValue = useSelector((state) => state.filter.searchValue);
    const dispatch = useDispatch();

    return (
        <div className={styles.root}>
            <img className={styles.searchLogo} src={searchLogo} alt='search logo'/>
            <input value={searchValue} onChange={(event) => {dispatch(setSearchValue(event.target.value))}} className={styles.input} placeholder='Пошук піци...'/>
            {searchValue && (<img onClick={() => {dispatch(setSearchValue(''))}} className={styles.closeLogo} src={closeIcon} alt='close icon'/>)}
        </div>
    )
}

export default Search;
