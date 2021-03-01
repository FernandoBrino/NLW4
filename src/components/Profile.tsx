import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'


export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1242554914821345285/8IKZlzRX_400x400.jpg" alt="Fernando Brino" />
            <div>
                <strong>Fernando Brino</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}