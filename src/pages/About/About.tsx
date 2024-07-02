import React from 'react';
import Hero from '../../components/Hero/Hero';
import { TEAM_MEMBERS } from '../../utils/constants';
import { TeamMemberType } from '../../utils/types';
import TeamMember from '../../components/TeamMember/TeamMember';
import './About.scss';

const About: React.FC = () => {
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
                title="About Us"
            />
            
            <div className="main-body">
                <section className="main-section">
                <div className="section-header">
                    <h3>Who Are We?</h3>
                    <div className="divider"></div>
                </div>
                <div className="section-content">
                    <div className="section-copy">
                    <div className="section-title">
                        A group dedicated to success. 
                    </div>
                    <p className="section-description">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris. Volutpat diam ut venenatis tellus in metus vulputate eu. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Eu lobortis elementum nibh tellus. Aliquam sem et tortor consequat id. Commodo elit at imperdiet dui. Et malesuada fames ac turpis egestas integer eget aliquet. Varius quam quisque id diam vel quam elementum. Vulputate eu scelerisque felis imperdiet proin fermentum. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Mattis vulputate enim nulla aliquet. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Bibendum enim facilisis gravida neque convallis a. Nulla porttitor massa id neque aliquam vestibulum morbi blandit.
                        <br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Tempus iaculis urna id volutpat lacus laoreet non. Enim facilisis gravida neque convallis a cras semper auctor neque. Enim eu turpis egestas pretium aenean pharetra magna ac. Integer eget aliquet nibh praesent tristique magna sit. Lacus sed turpis tincidunt id. Sed euismod nisi porta lorem mollis aliquam. Mauris in aliquam sem fringilla ut morbi. Orci nulla pellentesque dignissim enim sit amet. Vulputate odio ut enim blandit volutpat maecenas volutpat. Ipsum nunc aliquet bibendum enim facilisis gravida. Rhoncus urna neque viverra justo. Diam donec adipiscing tristique risus nec feugiat. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Pharetra pharetra massa massa ultricies mi quis. Sit amet porttitor eget dolor morbi non arcu.
                        <br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Arcu ac tortor dignissim convallis aenean et tortor. Sapien nec sagittis aliquam malesuada. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Proin sagittis nisl rhoncus mattis. Donec et odio pellentesque diam volutpat commodo. Dui sapien eget mi proin sed libero enim sed faucibus. Odio eu feugiat pretium nibh ipsum consequat nisl. In cursus turpis massa tincidunt dui ut. Amet consectetur adipiscing elit ut aliquam purus sit.
                    </p>
                    </div>
                    <div className="section-image">
                    <img src="/about.jpg" />
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
    );
}

export default About;