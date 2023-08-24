import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

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
      <button type="button">
        <a href={projectUrl} target="_blank" />
        Visit
      </button>
    </div>
  )
}

export default ProjectTimelineCard
