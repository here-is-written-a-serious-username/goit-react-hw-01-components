import PropTypes from 'prop-types';
import { Title } from './StatisticsTitle.styled';

export const StatisticsTitle = ({ text, data }) => {
    return (
        <Title>{data.length > 0 ? text : null}</Title>
    )
};

StatisticsTitle.propTypes = {
    text: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};
