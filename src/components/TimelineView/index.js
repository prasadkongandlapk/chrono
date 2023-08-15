import './index.css'
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="bg">
      <div className="size">
        <h1>MY JOURNEY OF CCBP 4.0</h1>
      </div>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
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
  )
}

export default TimelineView
