import styles from "./Layout.module.scss";
import Link from "next/link";


const Layout = ({ children }) => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.left}><Link href="/">Adan Food</Link></div>
            <div className={styles.right}>
                <Link href="/menu">Menu</Link>
                <Link href="/categories">Categories</Link>
            </div>
        </header>
        <div className={styles.container}>
            { children }
        </div>
        <footer className={styles.footer}>
            <a href="https://github.com/alirezadaneshfarr?tab=repositories" target="_blank" rel="noreferrer">
                For more projects Click me    
            </a>
            <br />
            Next.Js | Adan Food Project &copy;
        </footer>
        </>
    );
};

export default Layout;