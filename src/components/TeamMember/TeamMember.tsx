import './TeamMember.scss';

type TeamMemberProps = {
    name: string,
    headshot: string,
    jobTitle: string,
    url: string,
}

const TeamMember: React.FC<TeamMemberProps>  = ({name, headshot, jobTitle, url}) => {
    
    return (
        <div onClick={() => {window.location.href = url}} className='member-card'>
            <div className='member-headshot'>
                <img src={headshot} />
            </div>
            <div className={'member-description'}>
                <h4 className='member-name'>{name}</h4>
                <span className='member-job-title'>{jobTitle}</span>
            </div>
        </div>
    );
};

export default TeamMember;