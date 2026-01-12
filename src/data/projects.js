import mbpImage from './images/ORB.png'
import mbpText from '../projects/mbp.md'

import zenImage from './images/Vulkan.PNG'
import zenText from '../projects/zen-engine.md'


export const projects = [
  {
    id: "Zen Engine",
    markdown: zenText,
    image: zenImage,
    featured: true,
    video: null,
  },
  {
    id: "Multi Body Problem",
    markdown: mbpText,
    image: mbpImage,
    featured: false,
    video: null,
  },
];
