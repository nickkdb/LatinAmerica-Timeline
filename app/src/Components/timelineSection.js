import React from 'react';

function Timeline(props) {

    let years= props.years.map((elem, idx) => {
        return (
            <div onClick={() => props.fxn(elem)} class="grow tw-relative tw-text-warmGray-400 hover:tw-text-warmGray-200">
                <h2 class="full-center tw-text-28px/34px">
                    {elem}
                </h2>
            </div>
        )
    });

    return (
        <>
        {years}
        </>
    )
}

export default Timeline;