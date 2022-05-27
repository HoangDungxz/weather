import React from 'react'
import TodayContent from '../../components/content/TodayContent'

type Props = {}

const Today = (props: Props) => {
    return (
        <>

            {/*  Start Today*/}

            <div className="row tab-today" >
                <TodayContent />
            </div >

            {/*  End Today*/}
        </>
    )
}

export default Today