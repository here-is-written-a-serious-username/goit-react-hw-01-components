import PropTypes from 'prop-types';
import { Title, StatList, StatItem, StatItemlabel, StatItemPercent } from './Statistics.styled';

export const Statistics = ({ title, data }) => {
    return (
        <>
            {data.length > 0 && (<Title>{data.length > 0 ? title : null}</Title>)}
            <StatList>
                {data.map(({ id, label, percentage }) => (
                    <StatItem key={id} randomBackgrColor={getRandomHexColor()}>
                        <StatItemlabel>{label}</StatItemlabel>
                        <StatItemPercent>{percentage}</StatItemPercent>
                    </StatItem>
                ))
                }
            </StatList >
        </>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired).isRequired,
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
