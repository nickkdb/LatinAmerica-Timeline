import React from 'react';
import { Events } from '../utils/timelineEvents';

function RightColumn(props) {

    let event= Events.filter(elem => elem.key === props.year);

    let data= event.map(elem => {
            return (
                <div class="xl:tw-w-438px 2xl:tw-w-480px tw-mx-auto tw-grid tw-grid-cols-2 xl:tw-block">
                    <img src={elem.image} alt="image" class="tw-h-full tw-w-full tw-shadow-lg tw-mb-7" />

                    <div class="tw-pl-10 xl:tw-p-0 tw-text-20px/29px">
                        <h4 class="tw-text-26px/33px 2xl:tw-text-28px/34px tw-mb-7">{elem.heading}</h4>
                        <p class="tw-font-open-sans tw-mb-4 tw-text-18px/24px"><strong class="tw-text-20px/29px">Date: </strong>{elem.date}</p>
                        <p class="tw-font-open-sans tw-text-18px/24px"><strong class="tw-text-20px/29px">Location: </strong>{elem.location}</p>
                    </div>
                </div>
            )
    });
    

    return (
        <>
        <div class="tw-h-full tw-w-full tw-pt-5 xl:tw-pt-14 tw-text-coolGray-200 tw-relative tw-overflow-hidden">
                {data}

            {/* <div onClick={() => props.fxn()} class="tw-absolute tw-bottom-0 tw-right-0 grow">
                <p class="tw-pr-5 tw-pb-4">reset</p>
            </div> */}
            </div>
        </>
    );
}

export default RightColumn;