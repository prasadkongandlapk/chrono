import './index.css'
import {AiFillCalendar} from 'react-icons/ai'
import {withRouter} from 'react-router-dom'

const ProjectTimelineCard = props => {
  const {projectInfo} = props
  const {
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectInfo

  const onVisit = () => {
    const {history} = props
  }
  return (
    <div>
      <img src={imageUrl} alt={projectTitle} />
      <div className="title-duration">
        <h3>{projectInfo}</h3>
        <div className="icon">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <button onClick={onVisit}>Visit</button>
    </div>
  )
}

export default withRouter(ProjectTimelineCard)
