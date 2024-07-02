
import React from 'react';
import './Contact.scss';
import Hero from '../../components/Hero/Hero';
import ContactCard from '../../components/ContactCard/ContactCard';

const Contact: React.FC = () => {
    return (
        <>
            <Hero
                title="Contact Us"
                condensed={true}
            />
            
            <div className="main-body">
                <section className="main-section">
                    <div className="contact-body">
                        <ContactCard title="Our Address" iconClass="fa-solid fa-map-location-dot">
                            <span>
                                123 Fake St.
                                <br />P.O. Box 456
                                <br />Boca Raton, Flordia 12345
                            </span>
                        </ContactCard>
                        <ContactCard title="Call Us" iconClass="fa-solid fa-phone-volume">
                            <span>
                                <strong>Telephone:</strong> <a href="tel:1-555-123-4567" target="_blank">1-555-123-4567</a>
                            </span>
                        </ContactCard>
                        <ContactCard title="Email Us" iconClass="fa-solid fa-envelope">
                            <span>
                                <strong>Contact:</strong> <a href="mailto:contact@globaltribe.co" target="_blank">contact@globaltribe.co</a>
                            </span>
                        </ContactCard>
                    </div>
                </section>
            </div>
        </>
    )
};

export default Contact;