import PropTypes from 'prop-types';

import css from './UserProfile.module.css'


export const UserProfile = ({ src, alt, username, tag, location, stats }) => {
    const keys = Object.keys(stats);
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img className={css.avatar} src={src} alt={alt} />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                {keys.map((key) => (
                    <li key={key}>
                        <span className={css.label}>{key}</span>
                        <span className={css.quantity}>{stats[key]}</span>
                    </li>
                ))}
            </ul >
        </div>
    );
};

UserProfile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }),
    }),
};