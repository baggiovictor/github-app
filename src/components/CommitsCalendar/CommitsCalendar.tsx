import React from 'react'
import HeatMap from 'react-calendar-heatmap'
import { subYears, isBefore, isSameDay, addDays } from 'date-fns'

import { Container } from './styles';

type HeatMapValue = { date: Date; count: number }

const CommitsCalendar: React.FC = () => {
    const startDate = subYears(new Date(), 1)
    const endDate = new Date();



    return (
        <Container>
            <div className='wrapper'>
                <HeatMap
                    startDate={startDate}
                    endDate={endDate}
                    values={generateHeatMapValues(startDate, endDate)}
                    gutterSize={4}
                    classForValue={(item: HeatMapValue) => {
                        let clampedCount = 0;

                        if (item !== null) {
                            clampedCount = Math.max(item.count, 0);
                            clampedCount = Math.min(item.count, 4);

                        }

                        return `scale-${clampedCount}`
                    }}

                    showWeekdayLabels
                />
                <span>Esses dados só vem a v4 da api que é consumida com GRAHPQL</span>
            </div>
        </Container>
    );
}

const generateHeatMapValues = (startDate: Date, endDate: Date) => {
    const values: HeatMapValue[] = [];

    let currentDate = startDate;

    while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
        const count = Math.random() * 4;
        values.push({ date: currentDate, count: Math.round(count) });

        currentDate = addDays(currentDate, 1)
    }

    return values;
}

export default CommitsCalendar;