import PropTypes from 'prop-types';
import { StatList, StatItem, StatItemlabel, StatItemPercent } from './StatisticsList.styled';


export const StatisticsList = ({ data }) => {
    return (
        <StatList>
            {data.map(({ id, label, percentage }) => (
                <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
                    <StatItemlabel>{label}</StatItemlabel>
                    <StatItemPercent>{percentage}</StatItemPercent>
                </StatItem>
            ))
            }
        </StatList >
    )
};


StatisticsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}