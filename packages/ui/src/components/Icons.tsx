import { type LucideIcon, type LucideProps, Moon, SunMedium, Twitter } from "lucide-react";

// Simply copy the contents of your SVG into the Icons object and name it.
// First, make sure you convert the HTML to JSX markup. You can use this https://transform.tools/

export type Icon = LucideIcon;

interface DDIcons {
  [key: string]: (props: LucideProps) => JSX.Element;
  sun: (props: LucideProps) => JSX.Element;
  moon: (props: LucideProps) => JSX.Element;
  twitter: (props: LucideProps) => JSX.Element;
  scroll: (props: LucideProps) => JSX.Element;
  vector: (props: LucideProps) => JSX.Element;
  clarity_blocks: (props: LucideProps) => JSX.Element;
  dd_logo: (props: LucideProps) => JSX.Element;
  hamburger_menu: (props: LucideProps) => JSX.Element;
  checkmark: (props: LucideProps) => JSX.Element;
  in_progress: (props: LucideProps) => JSX.Element;
  nft_mint: (props: LucideProps) => JSX.Element;
  github_circle: (props: LucideProps) => JSX.Element;
  twitter_circle: (props: LucideProps) => JSX.Element;
  mirror_circle: (props: LucideProps) => JSX.Element;
}

export const Icons: DDIcons = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  sun: (props: LucideProps) => <SunMedium {...props} />,
  moon: (props: LucideProps) => <Moon {...props} />,
  twitter: (props: LucideProps) => <Twitter {...props} />,
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  dd_logo: (props: LucideProps) => (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="15" cy="16" rx="15" ry="15.5" fill="black" />
      <path
        d="M8.8 19.5H5.41V12.8H8.8C11.01 12.8 12.41 14.03 12.41 16.15C12.41 18.27 11.01 19.5 8.8 19.5ZM8.8 14.49H7.29V17.81H8.8C9.99 17.81 10.4 17.66 10.4 16.15C10.4 14.64 9.99 14.49 8.8 14.49ZM16.3574 20.83H12.7574V19.5H16.3574V20.83ZM20.3063 19.5H16.9163V12.8H20.3063C22.5163 12.8 23.9163 14.03 23.9163 16.15C23.9163 18.27 22.5163 19.5 20.3063 19.5ZM20.3063 14.49H18.7963V17.81H20.3063C21.4963 17.81 21.9063 17.66 21.9063 16.15C21.9063 14.64 21.4963 14.49 20.3063 14.49Z"
        fill="white"
      />
    </svg>
  ),
  clarity_blocks: (props: LucideProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="clarity:blocks-group-line" clipPath="url(#clip0_323_22)">
        <path
          id="Vector"
          d="M22.3534 12.5067L17.7334 10.3801V4.28672C17.7312 4.15889 17.6924 4.03436 17.6215 3.92797C17.5506 3.82159 17.4505 3.73785 17.3334 3.68672L12.3334 1.38672C12.2456 1.34611 12.1501 1.32507 12.0534 1.32507C11.9567 1.32507 11.8611 1.34611 11.7734 1.38672L6.77336 3.68672C6.65764 3.74028 6.55971 3.8259 6.49117 3.93342C6.42264 4.04095 6.38638 4.16588 6.38669 4.29339V10.3867L1.78669 12.5067C1.67097 12.5603 1.57304 12.6459 1.5045 12.7534C1.43597 12.861 1.39971 12.9859 1.40003 13.1134V19.6334C1.39971 19.7609 1.43597 19.8858 1.5045 19.9934C1.57304 20.1009 1.67097 20.1865 1.78669 20.2401L6.78669 22.5401C6.87445 22.5807 6.96999 22.6017 7.06669 22.6017C7.16339 22.6017 7.25894 22.5807 7.34669 22.5401L12.0667 20.3667L16.7867 22.5401C16.8745 22.5807 16.97 22.6017 17.0667 22.6017C17.1634 22.6017 17.2589 22.5807 17.3467 22.5401L22.3467 20.2401C22.4624 20.1865 22.5603 20.1009 22.6289 19.9934C22.6974 19.8858 22.7337 19.7609 22.7334 19.6334V13.1134C22.7343 12.9866 22.699 12.8622 22.6317 12.7547C22.5644 12.6473 22.4678 12.5612 22.3534 12.5067ZM20.48 13.1134L17.0734 14.6667L13.6667 13.1134L17.0734 11.5467L20.48 13.1134ZM12.0667 2.72006L15.4734 4.28672L12.0667 5.85339L8.66669 4.28672L12.0667 2.72006ZM7.06669 11.5401L10.4734 13.1067L7.06669 14.6667L3.66003 13.1134L7.06669 11.5401ZM11.4 19.2001L7.06669 21.2001L2.73336 19.2001V14.1534L6.78669 16.0001C6.87264 16.0387 6.9658 16.0587 7.06003 16.0587C7.15426 16.0587 7.24742 16.0387 7.33336 16.0001L11.3867 14.1334L11.4 19.2001ZM7.73336 10.3801V5.33339L11.7867 7.20006C11.8745 7.24067 11.97 7.26171 12.0667 7.26171C12.1634 7.26171 12.2589 7.24067 12.3467 7.20006L16.4 5.33339V10.3867L12.0667 12.3867L7.73336 10.3801ZM21.4067 19.2067L17.0734 21.2067L12.7334 19.2067V14.1467L16.7934 16.0001C16.8784 16.0377 16.9704 16.0572 17.0634 16.0572C17.1564 16.0572 17.2483 16.0377 17.3334 16.0001L21.3867 14.1334L21.4067 19.2067Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_323_22">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  vector: (props: LucideProps) => (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="currentColor"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M1 17.5L17.5 1M25 8.5L8.5 25M2.5 13L13 23.5M7.75 7.75L18.25 18.25M13 2.5L23.5 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  scroll: (props: LucideProps) => (
    <svg
      width="30"
      height="81"
      viewBox="0 0 30 81"
      fill="currentColor"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9768 45.5323C21.5134 44.8398 23.7853 43.4959 25.596 41.7027C28.314 39.0112 30 35.2976 30 31.2097V14.8543C30 10.7663 28.314 7.05278 25.596 4.36119C22.878 1.66961 19.128 0 15 0C10.8758 0 7.12198 1.66961 4.40398 4.36119C1.68599 7.05278 0 10.7701 0 14.8543V31.2059C0 35.2938 1.68599 39.0074 4.40398 41.699C6.51714 43.7916 9.25025 45.2666 12.3009 45.8206C14.1457 46.1575 17.2757 45.9965 18.9768 45.5323ZM14.8299 34.4628C16.3987 34.4628 17.684 33.19 17.684 31.6364V28.724C17.684 27.1704 16.3987 25.8976 14.8299 25.8976C13.2611 25.8976 11.9758 27.1704 11.9758 28.724V31.6364C11.9758 33.19 13.2573 34.4628 14.8299 34.4628ZM23.0897 39.2208C21.0144 41.276 18.1489 42.5563 15 42.5563C11.8511 42.5563 8.98942 41.2797 6.91028 39.2208C4.83493 37.1656 3.54209 34.328 3.54209 31.2097V14.8543C3.54209 11.7359 4.83115 8.90207 6.91028 6.84314C8.98563 4.78795 11.8511 3.50767 15 3.50767C18.1489 3.50767 21.0106 4.78421 23.0897 6.84314C25.1651 8.89833 26.4579 11.7359 26.4579 14.8543V31.2059C26.4579 34.328 25.1689 37.1619 23.0897 39.2208Z"
        fill="currentColor"
        fillOpacity="0.74"
      />
      <path
        d="M29.2501 63.2248L28.43 62.4052L15.5001 75.3346L2.57012 62.4052L1.75 63.2248L15.5001 76.9748L29.2501 63.2248Z"
        fill="currentColor"
        fillOpacity="0.74"
      />
      <path
        d="M29.2501 56.8447L28.43 56.0252L15.5001 68.9546L2.57012 56.0252L1.75 56.8447L15.5001 70.5948L29.2501 56.8447Z"
        fill="currentColor"
        fillOpacity="0.74"
      />
    </svg>
  ),
  hamburger_menu: (props: LucideProps) => (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
      />
    </svg>
  ),
  checkmark: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 33 33"
      {...props}
      fill="none"
    >
      <path
        d="M30.8462 16.625C30.8462 8.6888 24.3858 2.25 16.4231 2.25C8.46034 2.25 2 8.6888 2 16.625C2 24.5612 8.46034 31 16.4231 31C24.3858 31 30.8462 24.5612 30.8462 16.625Z"
        stroke="#44AF96"
        strokeWidth="3"
        stroke-miterlimit="10"
      />
      <path
        d="M22.7692 12.25L14.6923 22.25L11.2307 18.25"
        stroke="#44AF96"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  in_progress: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 34 34"
      {...props}
      fill="none"
    >
      <path
        d="M17 8V10.25M23.3638 10.6363L21.773 12.227M26 17H23.75M23.3638 23.3638L21.773 21.773M17 26V23.75M10.6363 23.3638L12.227 21.773M8 17H10.25M10.6363 10.6363L12.227 12.227M17 32C25.2845 32 32 25.2845 32 17C32 8.7155 25.2845 2 17 2C8.7155 2 2 8.7155 2 17C2 25.2845 8.7155 32 17 32Z"
        stroke="#44AF96"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  nft_mint: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 30 33"
      {...props}
      fill="none"
    >
      <path
        d="M10.2632 16.5C11.1007 16.5 11.9039 16.1839 12.4961 15.6213C13.0883 15.0587 13.4211 14.2956 13.4211 13.5C13.4211 12.7044 13.0883 11.9413 12.4961 11.3787C11.9039 10.8161 11.1007 10.5 10.2632 10.5C9.42563 10.5 8.62241 10.8161 8.03019 11.3787C7.43797 11.9413 7.10526 12.7044 7.10526 13.5C7.10526 14.2956 7.43797 15.0587 8.03019 15.6213C8.62241 16.1839 9.42563 16.5 10.2632 16.5ZM15 0L30 8.25V24.75L15 33L0 24.75V8.25L15 0ZM3.15789 9.9795V23.0205L6.90316 25.08L19.65 16.2L26.8421 20.301V9.981L15 3.465L3.15789 9.9795Z"
        fill="#44AF96"
      />
    </svg>
  ),
  github_circle: (props: LucideProps) => (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 32">
        <circle
          id="Ellipse 6"
          cx="40"
          cy="40"
          r="39"
          fill="black"
          fillOpacity="0.25"
          stroke="#B7B7B7"
          strokeWidth="2"
        />
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.4633 19.7694C34.6045 19.7701 29.9044 21.509 26.2038 24.6751C22.5032 27.8412 20.0435 32.228 19.2647 37.0507C18.4859 41.8735 19.4387 46.8175 21.9529 50.9985C24.467 55.1794 28.3783 58.3246 32.9873 59.8713C34.0105 60.0624 34.4491 59.4303 34.4491 58.8864V55.3877C28.7625 56.6225 27.5638 52.6241 27.5638 52.6241C27.1639 51.3641 26.3222 50.2931 25.1956 49.6106C23.339 48.3464 25.3417 48.3611 25.3417 48.3611C25.9902 48.4532 26.6092 48.6931 27.1514 49.0626C27.6936 49.432 28.1446 49.9211 28.4701 50.4926C29.0364 51.5139 29.9828 52.2672 31.1012 52.587C32.2197 52.9067 33.4186 52.7668 34.4345 52.1978C34.517 51.1548 34.9743 50.1777 35.7209 49.4489C31.1892 48.9197 26.4089 47.1557 26.4089 39.2764C26.3758 37.23 27.1299 35.2498 28.514 33.7492C27.8875 31.9767 27.9608 30.03 28.7186 28.3102C28.7186 28.3102 30.429 27.7516 34.3468 30.4123C37.6966 29.4934 41.23 29.4934 44.5798 30.4123C48.4829 27.7516 50.1933 28.3102 50.1933 28.3102C50.9512 30.03 51.0244 31.9767 50.398 33.7492C51.782 35.2498 52.5362 37.23 52.503 39.2764C52.503 47.1851 47.7228 48.9197 43.1618 49.4342C43.6503 49.9322 44.0271 50.5297 44.2667 51.1864C44.5062 51.8432 44.603 52.544 44.5505 53.2415V58.8864C44.5505 59.5626 44.916 60.0771 46.0124 59.8713C50.6273 58.3226 54.5428 55.1715 57.0565 50.9828C59.5702 46.7941 60.5178 41.842 59.7294 37.0144C58.941 32.1867 56.4682 27.7995 52.7543 24.6392C49.0404 21.479 44.3284 19.7525 39.4633 19.7694Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  twitter_circle: (props: LucideProps) => (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 33">
        <circle
          id="Ellipse 4"
          cx="40"
          cy="40"
          r="39"
          fill="black"
          fillOpacity="0.25"
          stroke="#B7B7B7"
          strokeWidth="2"
        />
        <path
          id="Vector"
          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          transform="translate(25 25) scale(0.025)"
          fill="white"
        />
      </g>
    </svg>
  ),

  mirror_circle: (props: LucideProps) => (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 34">
        <circle
          id="Ellipse 5"
          cx="40"
          cy="40"
          r="39"
          fill="black"
          fillOpacity="0.25"
          stroke="#B7B7B7"
          strokeWidth="2"
        />
        <path
          id="Vector 17"
          d="M52 56H27.0463L27 30.4298C28 20.5883 35.6574 17.376 39.3611 17C50.5648 17.376 52 30.4298 52 30.4298V56Z"
          stroke="#B7B7B7"
          strokeWidth="4"
        />
      </g>
    </svg>
  ),
};
