import styles from './search.module.scss'
import searchLogo from '../../assets/img/search-icon.svg'
import closeIcon from '../../assets/img/close-icon.svg'
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../redux/slices/filterSlice";
import {useCallback, useRef, useState} from "react";
import debounce from "lodash.debounce";

const Search = () => {
    const [value, setValue] = useState('');
    const searchValue = useSelector((state) => state.filter.searchValue);
    const dispatch = useDispatch();
    // eslint-disable-next-line
    const inputDebounceCallback = useCallback(
        debounce(
            (value) => {
                dispatch(setSearchValue(value))
            }, 1000), [])
    const inputRef = useRef();
    const clearInput = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current.focus()
    }
    return (
        <div className={styles.root}>
            <img className={styles.searchLogo} src={searchLogo} alt='search logo'/>
            <input ref={inputRef} value={value} onChange={(event) => {
                setValue(event.target.value);
                inputDebounceCallback(event.target.value);
            }} className={styles.input} placeholder='Пошук піци...'/>
            {searchValue && (<img onClick={clearInput} className={styles.closeLogo} src={closeIcon} alt='close icon'/>)}
        </div>
    )
}

export default Search;
