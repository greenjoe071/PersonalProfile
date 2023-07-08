import React from 'react';
import { BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs';

const SocialMedia = () => (

  <div className="app__social">


    <a href='https://www.linkedin.com/in/thejoemorales/' target="_blank">
      <div>
        <BsLinkedin />
      </div>
    </a>

    <a href='https://github.com/greenjoe071' target="_blank">
      <div>
        <BsGithub />
      </div>
    </a>

    <a href='mailto:greenjoe071@gmail.com' target="_blank">
      <div>
        <BsEnvelope />
      </div>
    </a>


  </div>
);

export default SocialMedia;
