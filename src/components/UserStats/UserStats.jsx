import PropTypes from 'prop-types';
import css from './UserStats.module.css'


export const UserStats = ({ stats }) => {
    const keys = Object.keys(stats);
    return (
        <ul className={css.stats}>
            {keys.map((key) => (
                <li key={key}>
                    <span className={css.label}>{key}</span>
                    <span className={css.quantity}>{stats[key]}</span>
                </li>
            ))}
        </ul >
    )
}


UserStats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

