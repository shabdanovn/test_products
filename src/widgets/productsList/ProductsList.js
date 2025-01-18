import { useContext } from 'react';
import ProductCard from '../../entities/product/ProductCard'
import styles from './ProductsList.module.css'  
import FavoritesContext from '../../app/context/FavoritesContext';

const ProductsList = ({ products, searchText="", selectedCategory="" }) => {
    const { favorites } = useContext(FavoritesContext);

    let filteredProducts = products

    if(selectedCategory === "All") {
        filteredProducts = products
        .filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()))
    }else if(selectedCategory === "Favorites") {
        filteredProducts = products
        .filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()))
        .filter((product) => favorites.includes(product.id));
    }else{
        filteredProducts = products
        .filter((product) => (selectedCategory ? product.category.toLowerCase() === selectedCategory.toLowerCase() : true))
        .filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()))
    }

    return(
        <div className={styles.products}>
            {filteredProducts.map(item => <ProductCard key={item.id} product={item}/>)}
        </div>
    )
}

export default ProductsList
