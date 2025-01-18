import { useContext } from 'react';
import styles from './ProductCard.module.css'
import FavoritesContext from '../../app/context/FavoritesContext';
import heart from '../../shared/assets/heart.png'
import filled_heart from '../../shared/assets/filled_heart.png'


const ProductCard = ({product}) => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.includes(product.id);

    return(
        <div className={styles.productCard}>
            <img className={styles.img} src={product.img} />
            <div className={styles.titlePrice} >
                <p className={styles.title} >{product.title}</p>
                <p className={styles.price} >{product.price}</p>
            </div>
            <p className={styles.category} >{product.category}</p>

            <img className={styles.heart} src={isFavorite ? filled_heart : heart} onClick={() => toggleFavorite(product.id)}/>
        </div>
    )
}

export default ProductCard