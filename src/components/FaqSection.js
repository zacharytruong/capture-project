import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReavel } from '../pages/animation';

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={scrollReavel} animate={controls} initial="hidden" ref={element}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe
              eos quidem perspiciatis, vitae voluptates quia sit qui eveniet
              impedit dolorum hic fugiat minus quam ratione magni omnis. Eos,
              dolor?
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe
              eos quidem perspiciatis, vitae voluptates quia sit qui eveniet
              impedit dolorum hic fugiat minus quam ratione magni omnis. Eos,
              dolor?
            </p>
          </div>
        </Toggle>
        <Toggle title="Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe
              eos quidem perspiciatis, vitae voluptates quia sit qui eveniet
              impedit dolorum hic fugiat minus quam ratione magni omnis. Eos,
              dolor?
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut saepe
              eos quidem perspiciatis, vitae voluptates quia sit qui eveniet
              impedit dolorum hic fugiat minus quam ratione magni omnis. Eos,
              dolor?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.02rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
