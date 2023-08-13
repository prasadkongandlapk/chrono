import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectInfo} = props
  const {projectTitle, description, imageUrl, duration} = projectInfo

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
      <button type="button">Visit</button>
    </div>
  )
}

export default ProjectTimelineCard
