import './index.css'
import {AiFillCalendar} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const ProjectTimelineCard = props => {
  const {projectInfo} = props
  const {
    projectTitle,
    projectUrl,
    description,
    imageUrl,
    duration,
  } = projectInfo

  return (
    <div>
      <img className="imageUrl" src={imageUrl} alt="project" />
      <div className="title-duration">
        <h3>{projectTitle}</h3>
        <div className="icon">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <Link to={projectUrl}>Visit</Link>
    </div>
  )
}

export default ProjectTimelineCard
