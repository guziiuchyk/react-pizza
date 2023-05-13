import styles from './search.module.scss'
import searchLogo from '../../assets/img/search-icon.svg'
import closeIcon from '../../assets/img/close-icon.svg'
import {useContext} from "react";
import {SearchContext} from "../../App";

const Search = () => {

    const {setSearchValue, searchValue} = useContext(SearchContext)

    return (
        <div className={styles.root}>
            <img className={styles.searchLogo} src={searchLogo} alt='search logo'/>
            <input value={searchValue} onChange={(event) => {setSearchValue(event.target.value)}} className={styles.input} placeholder='Пошук піци...'/>
            {searchValue && (<img onClick={() => {setSearchValue('')}} className={styles.closeLogo} src={closeIcon} alt='close icon'/>)}
        </div>
    )
}

export default Search;
