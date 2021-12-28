import React from "react";
import styles from './EventList.module.css'

export default function EventList({events, handleClickBad, handleClickGood}) {
    return (
        <div>
            {events.map((event, index) => (
            <div key={event.id} className={styles.card}>
                <h2>{index} - {event.title}</h2>
                <button onClick={()=>handleClickBad(event.id)}>
                delete events method #1</button>
                <button onClick={()=>handleClickGood(event.id)}>
                delete events method #2</button>
            </div>
            ))}
        </div>
    )
}