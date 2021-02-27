import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/joziasmartini.png" alt="Jozias Martini"/>
            <div>
                <strong>Jozias Martini</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 91
                </p>
            </div>
        </div>
    );
}