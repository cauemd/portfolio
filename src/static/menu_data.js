import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "GitHub",
    links: [
      {
        label: "Check out my projects on GitHub!",
        icon: <FaGithub />,
        url: "https://github.com/cauemd",
      },
    ],
  },
  {
    page: "LinkedIn",
    links: [
      {
        label: "Reach out on LinkedIn!",
        icon: <FaLinkedin />,
        url: "https://www.linkedin.com/in/cauemd/",
      },
    ],
  },
];

export default sublinks;
