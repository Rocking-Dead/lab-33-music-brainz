import React from 'react';

const gif = '<div class="tenor-gif-embed" data-postid="14690610" data-share-method="host" data-width="100%" data-aspect-ratio="0.6646586345381527"><a href="https://tenor.com/view/plants-vs-zombies-zombie-bailarin-jasson-zombie-walking-slow-walker-gif-14690610">Plants Vs Zombies Zombie Bailarin GIF</a> from <a href="https://tenor.com/search/plantsvszombies-gifs">Plantsvszombies GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>';

export default function Loading() {
  return <img src={gif} alt="loading"/>;
}

