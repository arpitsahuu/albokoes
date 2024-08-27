import Aboutinfo from '@/components/about/Aboutinfo'
import Mission from '@/components/about/Mission'
import OurTeam from '@/components/about/OurTeam'
import Values from '@/components/about/Values'
import Vision from '@/components/about/Vision'
import React from 'react'

const page = () => {
    return (
        <div>
            <Aboutinfo/>
            <Mission/>
            <Vision/>
            <Values/>
            <OurTeam/>
        </div>
    )
}

export default page