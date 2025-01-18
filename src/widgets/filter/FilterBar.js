import { useState } from 'react';
import CategoryBtn from '../../shared/components/categoryBtn/CategoryBtn'
import styles from './FilterBar.module.css'

const categoriesArray = [
    {id: 6, title: "All"},
    {id: 1, title: "Fruits"},
    {id: 2, title: "Vegetables"},
    {id: 3, title: "Coffee and Tea"},
    {id: 4, title: "Juices and Cocktails"},
    {id: 5, title: "Food"},
    {id: 7, title: "Favorites"}
]

const FilterBar = ({ onSearch, onCategoryChange }) => {
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        onSearch(e.target.value);
    };

    const handleCategoryChange = (text) => {
        setSelectedCategory(text);
        onCategoryChange(text);
      };

    return(
        <div className={styles.filterBar}>
            <input 
                className={styles.input} 
                placeholder='Search by name' 
                value={searchText} 
                onChange={handleSearchChange}/>
            <div className={styles.categories}>
                {categoriesArray.map(item => <CategoryBtn 
                    key={item.id} 
                    text={item.title} 
                    selectedCategory={selectedCategory} 
                    handleCategoryChange={handleCategoryChange}/>)}
            </div>
        </div>
    )
}

export default FilterBar