import { TEAM_MEMBERS } from '../utils/constants';
import { TeamMemberType } from '../utils/types';
import TeamMember from '../components/TeamMember/TeamMember';
import Hero from '../components/Hero/Hero';
import './App.scss';

function App() {
  const buildTeamMembers = () => {
    return TEAM_MEMBERS.map((member: TeamMemberType, idx: number) => {
      const { name, url ,jobTitle, headshot } = member;
      return (
        <TeamMember
          key={idx}
          name={name}
          url={url}
          jobTitle={jobTitle}
          headshot={headshot}
        />
      )
    })
  }
  return (
    <>
      <Hero
        title="International Sportsino"
        description="Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ctaUrl="/about"
        ctaText="Learn More"
      />
      <div className="main-body">
        <section className="main-section">
          <div className="section-header">
            <h3>Why Choose Us</h3>
            <div className="divider"></div>
          </div>
          <div className="section-content">
            <div className="section-copy">
              <div className="section-title">
                We'll get the job done. Guaranteed. 
              </div>
              <p className="section-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris
              </p>
            </div>
            <div className="section-image">
              <img src="/hero-background.jpg" />
            </div>
          </div>
        </section>
      </div>
      <div className="main-body">
        <section className="main-section">
          <div className="section-header">
            <h3>Meet Our Team</h3>
            <div className="divider"></div>
          </div>
          <div className="section-content">
            <div className="section-copy section-full">
              <div className="section-title">
                Our Founders
              </div>
              <div className="team-member-section">
                {buildTeamMembers()}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
