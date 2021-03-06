import React, { useState } from 'react';
import LeftColumn from '../Components/leftColumn';
import RightColumn from '../Components/rightColumn';
import Timeline from '../Components/timelineSection';

function Application() {
    const startingYears= ['1400s', '1500s', '1600s', '1700s', '1800s', '1900s', '2000s'];
    const period_1400s= ['1494', '1496', '1498'];
    const period_1500s= ['1500', '1521', '1532', '1550'];
    const period_1600s= ['1665', '1680'];
    const period_1700s= ['1776', '1789', '1791'];
    const period_1800s= ['1804', '1819', '1821', '1822', '1825'];
    const period_1900s= ['1904', '1909', '1954', '1959', '1973'];
    const period_2000s= ['2000', '2001', '2005'];
    const [timePeriod, setPeriod]= useState(startingYears);
    const [year, setYear] = useState('0000');

    const handleClick= (input) => {
        switch (input) {
            case '1400s':
                setPeriod(period_1400s);
                break;
            case '1500s':
                setPeriod(period_1500s);
                break;
            case '1600s':
                setPeriod(period_1600s);
                break;
            case '1700s':
                setPeriod(period_1700s);
                break;
            case '1800s':
                setPeriod(period_1800s);
                break;
            case '1900s':
                setPeriod(period_1900s);
                break;
            case '2000s':
                setPeriod(period_2000s);
                break;
            default:
                setYear(input);
                break;
        }
    }
    const reset = () => {
    setPeriod(startingYears);  
    } 

    return (
    <>
        <div className="tw-bg-gradient-to-t tw-from-coolGray-900 tw-to-warmGray-700 tw-h-screen tw-grid tw-grid-rows-80/20 tw-pt-14 tw-px-5">
            <div className="tw-h-full tw-w-full tw-grid  xl:tw-grid-cols-2">
            <h2 className="tw-text-center tw-text-45px/56px tw-font-encode-sans tw-mb-4 2xl:tw-mb-24 xl:tw-hidden tw-block tw-text-coolGray-200">Latin American History Timeline</h2>
                <LeftColumn fxn={reset} year={year} />
                <RightColumn year={year} />           
            </div>
    
            <div className="tw-h-full tw-w-full tw-grid tw-grid-cols-auto-fit tw-grid-flow-col tw-overflow-hidden">
                <Timeline years={timePeriod} fxn={handleClick} />
            </div>
        </div>
    </>
    )
}

export default Application;