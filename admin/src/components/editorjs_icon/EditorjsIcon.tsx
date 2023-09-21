import * as React from "react";

import { Flex } from "@strapi/design-system";
import styled from "styled-components";

const IconBox = styled(Flex)`
  background-color: #f0f0ff;
  border: 1px solid #d9d8ff;
  /* svg > path {
    fill: #4285f4;
  } */
`;

export const EditorjsIcon = () => {
  return (
    <IconBox
      justifyContent="center"
      alignItems="center"
      width={7}
      height={6}
      hasRadius
      aria-hidden
    >
      <svg
        width="86"
        height="86"
        viewBox="0 0 86 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.5 81C63.2107 81 80 64.2107 80 43.5C80 22.7893 63.2107 6 42.5 6C21.7893 6 5 22.7893 5 43.5C5 64.2107 21.7893 81 42.5 81Z"
          fill="url(#paint0_radial_2121_7781)"
        />
        <path
          d="M39.0116 24.3141C39.0116 23.3889 39.3791 22.5016 40.0333 21.8474C40.6875 21.1932 41.5748 20.8257 42.5 20.8257C43.4251 20.8257 44.3124 21.1932 44.9666 21.8474C45.6208 22.5016 45.9883 23.3889 45.9883 24.3141V62.6862C45.9883 63.6113 45.6208 64.4986 44.9666 65.1528C44.3124 65.807 43.4251 66.1745 42.5 66.1745C41.5748 66.1745 40.6875 65.807 40.0333 65.1528C39.3791 64.4986 39.0116 63.6113 39.0116 62.6862V24.3141Z"
          fill="white"
        />
        <path
          d="M19.8256 43.5001C19.8256 42.5749 20.1931 41.6876 20.8473 41.0334C21.5015 40.3792 22.3888 40.0117 23.3139 40.0117H61.686C62.6112 40.0117 63.4985 40.3792 64.1527 41.0334C64.8069 41.6876 65.1744 42.5749 65.1744 43.5001C65.1744 44.4253 64.8069 45.3125 64.1527 45.9667C63.4985 46.6209 62.6112 46.9885 61.686 46.9885H23.3139C22.3888 46.9885 21.5015 46.6209 20.8473 45.9667C20.1931 45.3125 19.8256 44.4253 19.8256 43.5001Z"
          fill="white"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2121_7781"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(33.7791 6) rotate(56.5138) scale(67.9674)"
          >
            <stop stopColor="#1EE4FF" />
            <stop offset="1" stopColor="#1CADFF" />
          </radialGradient>
        </defs>
      </svg>
    </IconBox>
  );
};
