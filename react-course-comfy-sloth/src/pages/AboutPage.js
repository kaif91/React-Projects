import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Out Story</h2>
            <div className="underline"></div>
          </div>
          <p>      
          Since our launch, we have not only redefined the art
          of e-retailing beauty and personal care in India, but
           also have been instrumental in fostering the growth 
           of a previously relatively nascent ecosystem. From 
           bringing you domestic brands, international brands, 
           luxury and prestige brands, premium brands, niche and 
          cult brands and expert advice and videos, coupled with
          our understanding of the needs and preferences of the
             consumers,to more than 72 Luxe and On-Trend and Kiosk
              Stores, an ever growing online community for beauty 
              buffs, and a Beauty Helpline, we go out of our way 
              to give you only the very best. With 2400+, 100% 
              authentic brands ComfySloth offers a well curated comprehensive
               selection of makeup, skincare, haircare, bath and body
               , fragrance, grooming appliances, personal care, and
                health and wellness categories.
           ComfySloth is all about celebrating the star in each woman, and being her confidante and companion as she embarks on her own journey to discover her unique identity and personal style. From the widest selection of genuine beauty products from around the world to beauty advice, ComfySloth is truly passionate about catering to your every beauty and wellness need. Because after all, Your Beauty is Our Passion.

          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
