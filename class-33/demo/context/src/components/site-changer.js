import React, { useContext } from 'react';

import { SiteContext } from '../context/site.js';

function Changer() {

  const siteContext = useContext(SiteContext);

  const handleTitle = (e) => {
    let title = e.target.value;
    siteContext.changeTitleTo(title);
  }

  const handleTwitter = (e) => {
    let twitter = e.target.value;
    siteContext.changeTwitterTo(twitter);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        onChange={handleTitle} />

      <input
        name="twitter"
        placeholder="Twitter Handle"
        onChange={handleTwitter} />

    </form>
  )
}

export default Changer;
