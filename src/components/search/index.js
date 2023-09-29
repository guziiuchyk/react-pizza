import styles from './search.module.scss'
import searchLogo from '../../assets/img/search-icon.svg'
import closeIcon from '../../assets/img/close-icon.svg'
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../redux/slices/filterSlice";
import {useRef} from "react";
import debounce from "lodash.debounce";

const Search = () => {
    const searchValue = useSelector((state) => state.filter.searchValue);
    const dispatch = useDispatch();

    const inputRef = useRef();
    const clearInput = () => {
        dispatch(setSearchValue(''));
        inputRef.current.focus()
    }

    return (
        <div className={styles.root}>
            <img className={styles.searchLogo} src={searchLogo} alt='search logo'/>
            <input ref={inputRef} value={searchValue} onChange={(event) => {dispatch(setSearchValue(event.target.value))}} className={styles.input} placeholder='Пошук піци...'/>
            {searchValue && (<img onClick={clearInput} className={styles.closeLogo} src={closeIcon} alt='close icon'/>)}
        </div>
    )
}

export default Search;
