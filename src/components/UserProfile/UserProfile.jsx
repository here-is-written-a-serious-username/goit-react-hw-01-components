

import css from './UserProfile.module.css'


export const UserProfile = ({ children }) => {
    return (
        <div className={css.profile}>
            {children}
        </div>
    );
};