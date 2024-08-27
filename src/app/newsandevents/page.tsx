import Events from '@/components/events/Events'
import Newslist from '@/components/news/newslist'
import News from '@/components/news/newslist'
import React from 'react'

const page = () => {
  return (
    <div>
        {/* <News/> */}
        <Events/>
        <Newslist/>
    </div>
  )
}

export default page