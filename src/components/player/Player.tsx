import React from "react";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  PlyrLayout,
  plyrLayoutIcons,
} from "@vidstack/react/player/layouts/plyr";

import {
    DefaultAudioLayout,
    defaultLayoutIcons,
    DefaultVideoLayout,
  } from '@vidstack/react/player/layouts/default';
  


export default function Player({
  src,
  cover,
  title
}: {
  src?: string;
  cover?: string;
  title?: string;
}) {
  return (
    <div className="w-full aspect-video">
      <MediaPlayer
        title={title ? title : ""}
        src={src}
        playsInline
        autoPlay
        load="visible"
      >
        <MediaProvider>
          <Poster
            className="vds-poster"
            src={cover}
            alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
          />
        </MediaProvider>
        {/* <PlyrLayout icons={plyrLayoutIcons} /> */}
        <DefaultAudioLayout icons={defaultLayoutIcons} />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
}
