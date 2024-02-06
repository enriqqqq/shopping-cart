import Header from '../components/Header';
import Card from '../components/Card';
import { getData, getFromCategory, getCategories } from '../data';
import { useEffect, useState } from 'react';
import styles from './Shop.module.css';

function Shop() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('all');

    const handleCategoryChange = (value) => {
        setCategory(value);
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            const data = await getData();
            const categories = await getCategories();
            setData(data);
            setCategories(categories);
            setLoading(false);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setLoading(true);
            if (category === 'all') {
                const data = await getData();
                setData(data);
            } else {
                const data = await getFromCategory(category);
                setData(data);
            }
            setLoading(false);
            console.log(category);
        })();
    }, [category]);

    console.log(data)
    return (
        <div className={styles.root}>
            <Header />
            <div className={loading ? styles.loading : styles.body}>
                {
                    loading ? <p>Loading...</p> :
                    <>
                        <div className={styles.sidebar}>
                            <div className={styles.categories}>
                                <h1>Categories</h1>
                                <ul className={styles.list}>
                                    <li className={category === 'all' && styles.selected} onClick={() => handleCategoryChange('all')}>All</li>
                                    {categories.map((ctgr) => {
                                        return (
                                            <li className={ctgr === category && styles.selected} key={ctgr} onClick={() => handleCategoryChange(ctgr)}>{capitalizeFirstLetter(ctgr)}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.content}>
                            <select onChange={(e) => handleCategoryChange(e.target.value)} className={styles.dropdown}>
                                <option value="all">All</option>
                                {categories.map((ctgr) => {
                                    if(ctgr === category) return (
                                        <option key={ctgr} value={ctgr} selected>{capitalizeFirstLetter(ctgr)}</option>
                                    );
                                    return (
                                        <option key={ctgr} value={ctgr}>{capitalizeFirstLetter(ctgr)}</option>
                                    );
                                })}
                            </select>
                            <div className={styles.grid}>
                                {data.map((item) => {     
                                    return (
                                        <Card
                                            key={item.id}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            description={item.description}
                                            category={capitalizeFirstLetter(item.category)}
                                            image={item.image}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </>
                    
                }
            </div>
            {
                !loading && <h1 className={styles.footer}>Footer</h1>
            }
        </div>
    )
}

export default Shop;