import React from 'react'
import styles from '../scss/profile.module.scss'
import CreateNoteTabBeforeClick from './CreateNoteTabBeforeClick'

export default function Notes() {
    return (
        <div className={styles.Label}>
            <CreateNoteTabBeforeClick/>
            From Notes
        </div>
    )
}
