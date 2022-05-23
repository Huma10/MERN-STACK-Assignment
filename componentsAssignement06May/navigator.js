import styles from './../../styles/Home.module.css';
import Link  from 'next/link';
const Navigator=()=>{

    return(
        <div className={styles.container}>
            <table className='table table-bordered table-stripped'>
                <tbody>
                    <tr>
                        <td>
                            <Link href="/">
                                <a>Index</a>
                            </Link>
                        </td>
                        <td>
                            <Link href="/components/home">
                                <a>Home</a>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Navigator;