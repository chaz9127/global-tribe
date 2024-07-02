
import React from 'react';
import './ContactCard.scss';

type ContactCardPropTypes = {
    iconClass: string,
    title: string,
    children: string | JSX.Element,
}

const ContactCard: React.FC<ContactCardPropTypes> = ({iconClass, title, children}) => {
    return (
        <div className='contact-card'>
            <i className={`${iconClass} contact-icon`}></i>
            <span className="contact-title">{title}</span>
            <div className="contact-content">
                {children}
            </div>
        </div>
    )
};

export default ContactCard;