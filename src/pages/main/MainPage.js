import { useState } from 'react'
import { FavoritesProvider } from '../../app/context/FavoritesContext'
import data from '../../data.json'
import FilterBar from '../../widgets/filter/FilterBar'
import ProductsList from '../../widgets/productsList/ProductsList'
import styles from './MainPage.module.css'  

const MainPage = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    return(
        <FavoritesProvider>
            <div className={styles.mainPage}>
                <FilterBar onSearch={setSearchText} onCategoryChange={setSelectedCategory}/>
                <ProductsList products={data} searchText={searchText} selectedCategory={selectedCategory}/>
            </div>
        </FavoritesProvider>
    )
}

export default MainPage