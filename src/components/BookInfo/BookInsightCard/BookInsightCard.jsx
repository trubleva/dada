import React from 'react';
import styles from './BookInsightCard.module.scss';
import { Link } from '@reach/router';

const BookInsightCard = (props) => {
    return (
        <Link to={`book-insight/${props.doc.insightID}`} docs={props.doc}>
            <div className={styles.cardContainer}>
                <div className={styles.insightNumber}>
                    <p>{props.doc.insightNumber}</p>
                </div>
                <div className={styles.insightTitle}>
                    <p>{props.doc.insightTitle}</p>
                </div>        
            </div>
        </Link>
    )
}

export default BookInsightCard;
