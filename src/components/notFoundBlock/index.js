import styles from './notFoundBlock.module.scss'

const NotFoundBlock = () => {
    console.log(styles)
    return (
        <div className="container">
            <h1 className={styles.root}>
                <span>😕</span>
                <br/>
                Нічого не знайдено
                <div className={styles.description}>Ця сторінка відсутня</div>
            </h1>
        </div>
    )
}

export default NotFoundBlock;