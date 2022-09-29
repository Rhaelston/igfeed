import styles from './styles.module.css';

export function Avatar ({border = true, src}) {
    return (
        <img className={border ? styles.avatarBorder : styles.avatar} src={src}/>
    )
}