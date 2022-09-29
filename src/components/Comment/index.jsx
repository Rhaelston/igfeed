import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../Avatar'
import styles from './styles.module.css'

export function Comment ({content, onDeleteComment}) {
    const [likeCount, useLikeCount] = useState(0)

    function handleDeleteComment  () {
        onDeleteComment(content)
    }

    function handleLikeComment () {
        useLikeCount(useLikeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar border={false} src="https://github.com/rhaelston.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rhaelston Honório</strong>

                            <time title='11 de maio às 8:00h' dateTime='2022-05-11 08:00:21'>cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}