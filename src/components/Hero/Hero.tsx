import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

type HeroPropsType = {
    title: string,
    description?: string,
    ctaUrl?: string,
    ctaText?: string,
}

const Hero: React.FC<HeroPropsType> = ({title, description='', ctaText='', ctaUrl=''}) => {

    return (
        <div className="hero">
        <div className="hero-content-background">
          <div className="hero-content">
            <h2 className="hero-header">{title}</h2>
            <p className="hero-description">
              {description}
            </p>
            {(ctaText && ctaUrl) && (
                <Link to={ctaUrl} className="hero-cta">
                    <span>{ctaText}</span>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
            )}
          </div>
        </div>
      </div>
    )
}

export default Hero;