import React from 'react';
import { Events } from '../utils/timelineEvents';

function LeftColumn(props) {

    let event= Events.filter(elem => elem.key === props.year);

    let data= event.map(elem => {
            return (
                <>
                <p class="tw-font-open-sans tw-text-14px/20px tw-mb-5 tw-px-5 xl:tw-p-0"><strong class="tw-text-20px/29px">Background: </strong>
                    {elem.background}
                </p>
                <p class="tw-font-open-sans tw-text-14px/20px tw-px-5 xl:tw-p-0"><strong class="tw-text-20px/29px">Significance: </strong>
                    {elem.significance}
                </p>
                </>
            )
    });

    return (
        <>
        <div class="tw-relative grid-order-last xl:grid-order-auto tw-grid tw-grid-cols-2 xl:tw-block xl:tw-px-24 xl:tw-pt-14 tw-text-coolGray-200">
                <h2 class="tw-text-45px/56px 2xl:tw-text-80px/94px tw-font-encode-sans tw-mb-16 2xl:tw-mb-24 tw-hidden xl:tw-block">Latin American History Timeline</h2>
                {data}
        <div onClick={() => props.fxn()} class="tw-absolute tw-bottom-0 tw-left-4 grow">
            <p class="tw-pr-5 tw-pb-4">reset</p>
        </div>
        </div>
        </>
    );
}

export default LeftColumn;