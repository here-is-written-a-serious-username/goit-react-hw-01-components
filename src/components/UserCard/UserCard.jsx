import PropTypes from 'prop-types';
import css from './UserCard.module.css'

export const UserCard = ({ src, alt, username, tag, location }) => {
    return (
        <div className={css.description}>
            <img className={css.avatar} src={src} alt={alt} />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>{tag}</p>
            <p className={css.location}>{location}</p>
        </div>)
}

UserCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}
