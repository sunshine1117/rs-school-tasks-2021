import React from 'react';

type CarIconTypes = {
  color: string;
  className: string;
};

const CarIcon = ({ color, className }: CarIconTypes): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 324.018 324.017"
      fill={`${color}`}
    >
      <path d="M317.833 197.111c3.346-11.148 2.455-20.541-2.65-27.945-9.715-14.064-31.308-15.864-35.43-16.076l-8.077-4.352-.528-.217c-8.969-2.561-42.745-3.591-47.805-3.733-7.979-3.936-14.607-7.62-20.475-10.879-20.536-11.413-34.107-18.958-72.959-18.958-47.049 0-85.447 20.395-90.597 23.25-2.812.212-5.297.404-7.646.59l-6.455-8.733 7.34.774c2.91.306 4.267-1.243 3.031-3.459-1.24-2.216-4.603-4.262-7.519-4.57l-23.951-2.524c-2.91-.305-4.267 1.243-3.026 3.459 1.24 2.216 4.603 4.262 7.519 4.57l3.679.386 8.166 11.05c-13.823 1.315-13.823 2.139-13.823 4.371 0 18.331-2.343 22.556-2.832 23.369L0 164.443v19.019l2.248 2.89c-.088 2.775.823 5.323 2.674 7.431 5.981 6.804 19.713 7.001 21.256 7.001 4.634 0 14.211-2.366 20.78-4.153-.456-.781-.927-1.553-1.3-2.392-.36-.809-.603-1.668-.885-2.517-.811-2.485-1.362-5.096-1.362-7.845 0-14.074 11.449-25.516 25.515-25.516s25.52 11.446 25.52 25.521c0 6.068-2.221 11.578-5.773 15.964-.753.927-1.527 1.828-2.397 2.641-1.022.958-2.089 1.859-3.254 2.641 29.332.109 112.164.514 168.708 1.771-.828-.823-1.533-1.771-2.237-2.703a24.516 24.516 0 01-1.761-2.688c-2.164-3.744-3.5-8.025-3.5-12.655 0-14.069 11.454-25.513 25.518-25.513s25.518 11.449 25.518 25.513c0 5.126-1.553 9.875-4.152 13.878-.605.922-1.326 1.755-2.04 2.594a24.853 24.853 0 01-2.527 2.584c5.209.155 9.699.232 13.546.232 19.563 0 23.385-1.688 23.861-5.018.158-1.015.516-3.521-6.123-6.012z" />
      <path d="M52.17 195.175c3.638 5.379 9.794 8.922 16.756 8.922.228 0 .44-.062.663-.073 2.576-.083 5.043-.61 7.291-1.574 1.574-.678 2.996-1.6 4.332-2.636 4.782-3.702 7.927-9.429 7.927-15.933 0-11.144-9.066-20.216-20.212-20.216s-20.213 9.072-20.213 20.216c0 2.263.461 4.411 1.149 6.446.288.85.616 1.673 1.015 2.471.401.808.789 1.636 1.292 2.377zM269.755 209.068c2.656 0 5.173-.549 7.503-1.481a20.212 20.212 0 004.422-2.495 20.71 20.71 0 002.863-2.559c3.34-3.604 5.432-8.389 5.432-13.681 0-11.144-9.071-20.21-20.215-20.21s-20.216 9.066-20.216 20.21c0 4.878 1.812 9.3 4.702 12.801.818.989 1.719 1.89 2.708 2.713 1.311 1.088 2.729 2.024 4.293 2.755 2.589 1.212 5.457 1.947 8.508 1.947z" />
    </svg>
  );
};

export default CarIcon;
