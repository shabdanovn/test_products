import styles from './CategoryBtn.module.css'

const CategoryBtn = ({text, handleCategoryChange, selectedCategory}) => {
    return(
        <button className={selectedCategory === text ? styles.active : styles.categoryBtn} onClick={() => handleCategoryChange(text)}>
            <p className={styles.text}>{text}</p>
        </button>
    )
}

export default CategoryBtn