import './index.css'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg">
      <div className="size">
        <h4>MY JOURNEY OF</h4>
        <h1>CCBP 4.0</h1>
      </div>
      <div className="time-card">
        <Chrono mode="VERTICAL">
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard courseInfo={each} key={each.id} />
            }
            return null
          })}
          {timelineItemsList.map(each => {
            if (each.categoryId === 'PROJECT') {
              return <ProjectTimelineCard projectInfo={each} key={each.id} />
            }
            return null
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
