import styles from './Main.module.css'
import Article from "../../components/Article";
import data from './../../data/data.json'
import Sidebar from '../Sidebar/Sidebar';


function Main(){
    console.log({data});
    
    return (
        <>
        <div className={styles.main}>
            <div className={styles.article}>
            {data.map((article) => (
                <Article key={article.id} data={article} />
            ))}         
            </div>
            <div className={styles.sidebar}>
            {data.map((article) => (
                <Sidebar key={article.id} data={article} />
            ))} 
            </div>
        </div>
        </>
    )
}

export default Main;