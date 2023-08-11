import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimeLineCard = props => {
  const {courseInfo} = props
  const {courseTitle, description, duration, tagsList} = courseInfo

  return (
    <div className="course-card">
      <div className="title-duration">
        <h3>{courseTitle}</h3>
        <div className="icon">
          <AiFillClockCircle />
          <p>{duration} days</p>
        </div>
      </div>
      <p>{description}</p>
      <div>
        <div className="tags">
          {tagsList.map(each => (
            <p className="tag-item">{each.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CourseTimeLineCard
