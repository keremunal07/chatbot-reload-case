import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconSend = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="none" {...props}>
    <g clipPath="url(#icon-send_svg__a)">
      <path
        fill="#B6FBFF"
        d="M43.992 21.996C43.992 9.848 34.144 0 21.996 0 9.848 0 0 9.848 0 21.996v.008C0 34.152 9.848 44 21.996 44c12.148 0 21.996-9.848 21.996-21.996v-.008Z"
      />
      <mask
        id="icon-send_svg__b"
        width={22}
        height={22}
        x={11}
        y={11}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill="#fff" d="M33 11H11v22h22V11Z" />
      </mask>
      <g mask="url(#icon-send_svg__b)">
        <path
          fill="#000"
          d="M15.583 22.917h10.872l-3.327 3.996a.916.916 0 0 0 .119 1.293.919.919 0 0 0 1.292-.12l4.584-5.5a1.1 1.1 0 0 0 .082-.137c0-.046.046-.073.064-.12a.914.914 0 0 0 .064-.33.914.914 0 0 0-.064-.33c0-.045-.046-.072-.064-.118a1.093 1.093 0 0 0-.082-.138l-4.584-5.5a.916.916 0 0 0-1.292-.119.915.915 0 0 0-.12 1.293l3.328 3.996H15.583a.917.917 0 1 0 0 1.834Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="icon-send_svg__a">
        <path fill="#fff" d="M0 0h44v44H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconSend;
