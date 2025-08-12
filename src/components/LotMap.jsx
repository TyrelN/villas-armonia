"use client";

import * as React from "react";
import { forwardRef, useState } from "react";
import SidePanel from "@/components/SidePanel";

const SvgLotMap = ({ 
  title, 
  titleId, 
  desc, 
  descId, 
  lotAvailability = {}, // Object with lot numbers as keys and availability status as values
  ...props 
}, ref) => {
  const [selectedLot, setSelectedLot] = useState(null);

  const handleLotClick = (lotNumber) => {
    setSelectedLot(lotNumber);
    console.log(`Clicked on Lot ${lotNumber}`);
  };

  const handleClosePanel = () => {
    setSelectedLot(null);
  };

  // Function to get lot fill color based on availability
  const getLotFillColor = (lotNumber) => {
    const availability = lotAvailability[lotNumber];
    
    switch (availability) {
      case 'available':
        return 'oklch(96.2% .044 156.743)'; // Default green color
      case 'unavailable':
        return '#B7580A'; // Burgundy color for unavailable lots
      case 'reserved':
        return 'var(--color-orange-100)'; // Orange color for reserved lots
      case 'sold':
        return '#6b7280'; // Gray color for sold lots
      default:
        return '#a9bbb2'; // Default color if no data
    }
  };

  // Function to get lot stroke color based on availability
  const getLotStrokeColor = (lotNumber) => {
    const availability = lotAvailability[lotNumber];
    
    switch (availability) {
      case 'available':
        return '#d9b382'; // Default stroke color
      case 'unavailable':
        return '#dc2626'; // Darker red for stroke
      case 'reserved':
        return '#d97706'; // Darker orange for stroke
      case 'sold':
        return '#374151'; // Darker gray for stroke
      default:
        return '#d9b382'; // Default stroke color
    }
  };

  // Function to get lot text color based on availability
  const getLotTextColor = (lotNumber) => {
    const availability = lotAvailability[lotNumber];
    
    switch (availability) {
      case 'available':
        return 'var(--color-green-600)'; // Dark text for light backgrounds
      case 'unavailable':
        return '#ffffff'; // White text for red background
      case 'reserved':
        return 'var(--color-orange-600)'; // White text for orange background
      case 'sold':
        return '#ffffff'; // White text for gray background
      default:
        return '#212121'; // Dark text for light backgrounds
    }
  };

  // Function to get lot cursor style based on availability
  const getLotCursorStyle = (lotNumber) => {
    const availability = lotAvailability[lotNumber];
    
    switch (availability) {
      case 'available':
        return 'cursor-pointer hover:opacity-80 transition-opacity';
      case 'unavailable':
        return 'cursor-not-allowed opacity-60';
      case 'reserved':
        return 'cursor-pointer hover:opacity-80 transition-opacity';
      case 'sold':
        return 'cursor-not-allowed opacity-60';
      default:
        return 'cursor-pointer hover:opacity-80 transition-opacity';
    }
  };

  // Function to handle lot click based on availability
  const handleLotClickWithAvailability = (lotNumber) => {
    const availability = lotAvailability[lotNumber];
    
    // Only allow clicks for available or reserved lots
    if (availability === 'available' || availability === 'reserved') {
      handleLotClick(lotNumber);
    } else {
      console.log(`Lot ${lotNumber} is ${availability || 'not available'}`);
    }
  };

  return (
    <div 
      className="relative bg-transparent"
      style={{
        backgroundColor: 'transparent',
        background: 'none'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="380"
        height="1433"
        fill="none"
        ref={ref}
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="bg-transparent"
        style={{
          backgroundColor: 'transparent',
          background: 'none'
        }}
        {...props}
      >
      {desc ? <desc id={descId}>{desc}</desc> : null}
      {title ? <title id={titleId}>{title}</title> : null}
      <g id="Villa-Map">
        <g id="lotmap">
          <path
            id="perimeter"
            fill="#4a4a51"
            d="M379.5 59 156 0l-43.5 224.5L73 370 24.5 704.038 20.5 1046 0 1379.04l56.5 53.46L242 1384l47-314 23.5-337 25-342.462z"
          />
          <path
            id="Arrow 2"
            fill="#121212"
            d="m34 1305.46 3.398-4.67-5.742-.61zm1.744-16.46-.497-.05-1.27 11.98.497.06.497.05 1.27-11.99z"
          />
                     <g 
             id="lot-29" 
             className={getLotCursorStyle("29")}
             onClick={() => handleLotClickWithAvailability("29")}
           >
             <path
               id="shape"
               fill={getLotFillColor('29')}
               stroke={getLotStrokeColor('29')}
               d="m184.01 65.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.17l3.532-21.453a4.5 4.5 0 0 1 5.172-3.71Z"
             />
             <text
               xmlSpace="preserve"
               id="text"
               fill={getLotTextColor('29')}
               fontFamily="Inter"
               fontSize={14}
               fontWeight="bold"
               letterSpacing="0em"
               style={{
                 whiteSpace: "pre",
               }}
               transform="rotate(8.874 -386.584 1383.627)"
             >
               <tspan x={0.47} y={13.591}>
                 {"29"}
               </tspan>
             </text>
           </g>
                     <g 
             id="lot-30" 
             className={getLotCursorStyle("30")}
             onClick={() => handleLotClickWithAvailability("30")}
           >
             <path
               id="shape_2"
               fill={getLotFillColor('30')}
               stroke={getLotStrokeColor('30')}
               d="m270.01 79.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.71Z"
             />
             <text
               xmlSpace="preserve"
               id="text_2"
               fill={getLotTextColor('30')}
               fontFamily="Inter"
               fontSize={14}
               fontWeight="bold"
               letterSpacing="0em"
               style={{
                 whiteSpace: "pre",
               }}
               transform="rotate(8.874 -433.797 1944.793)"
             >
               <tspan x={0.066} y={13.591}>
                 {"30"}
               </tspan>
             </text>
           </g>
          <g id="lot-28" className={getLotCursorStyle("28")} onClick={() => handleLotClickWithAvailability("28")}>
            <path
              id="shape_3"
              fill={getLotFillColor('28')}
              stroke={getLotStrokeColor('28')}
              d="m178.01 99.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.71Z"
            />
            <text
              xmlSpace="preserve"
              id="text_3"
              fill={getLotTextColor('28')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -608.675 1361.964)"
            >
              <tspan x={0.463} y={13.591}>
                {"28"}
              </tspan>
            </text>
          </g>
          <g id="lot-31" className={getLotCursorStyle("31")} onClick={() => handleLotClickWithAvailability("31")}>
            <path
              id="shape_4"
              fill={getLotFillColor('31')}
              stroke={getLotStrokeColor('31')}
              d="m264.01 113.308 70.164 11.585a4.504 4.504 0 0 1 3.71 5.174l-3.536 21.534a4.5 4.5 0 0 1-5.17 3.708l-70.164-11.585a4.505 4.505 0 0 1-3.71-5.174l3.536-21.535a4.496 4.496 0 0 1 5.17-3.707Z"
            />
            <text
              xmlSpace="preserve"
              id="text_4"
              fill={getLotTextColor('31')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.896 -654.537 1924.774)skewX(.046)"
            >
              <tspan x={0.461} y={13.591}>
                {"31"}
              </tspan>
            </text>
          </g>
          <g id="lot-27" className={getLotCursorStyle("27")} onClick={() => handleLotClickWithAvailability("27")}>
            <path
              id="shape_5"
              fill={getLotFillColor('27')}
              stroke={getLotStrokeColor('27')}
              d="m171.01 133.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_5"
              fill={getLotTextColor('27')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -831.264 1333.857)"
            >
              <tspan x={0.428} y={13.591}>
                {"27\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-32" className={getLotCursorStyle("32")} onClick={() => handleLotClickWithAvailability("32")}>
            <path
              id="shape_6"
              fill={getLotFillColor('32')}
              stroke={getLotStrokeColor('32')}
              d="m258.01 147.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_6"
              fill={getLotTextColor('32')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -877.978 1901.468)"
            >
              <tspan x={0.477} y={13.591}>
                {"32"}
              </tspan>
            </text>
          </g>
          <g id="lot-26" className={getLotCursorStyle("26")} onClick={() => handleLotClickWithAvailability("26")}>
            <path
              id="shape_7"
              fill={getLotFillColor('26')}
              stroke={getLotStrokeColor('26')}
              d="m165.01 167.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_7"
              fill={getLotTextColor('26')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -1053.353 1312.195)"
            >
              <tspan x={0.47} y={13.591}>
                {"26\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-33" className={getLotCursorStyle("33")} onClick={() => handleLotClickWithAvailability("33")}>
            <path
              id="shape_8"
              fill={getLotFillColor('33')}
              stroke={getLotStrokeColor('33')}
              d="m252.01 181.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_8"
              fill={getLotTextColor('33')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -1100.067 1879.805)"
            >
              <tspan x={0.271} y={13.591}>
                {"33"}
              </tspan>
            </text>
          </g>
          <g id="lot-25" className={getLotCursorStyle("25")} onClick={() => handleLotClickWithAvailability("25")}>
            <path
              id="shape_9"
              fill={getLotFillColor('25')}
              stroke={getLotStrokeColor('25')}
              d="m159.01 201.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_9"
              fill={getLotTextColor('25')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -1275.442 1290.532)"
            >
              <tspan x={0.079} y={13.591}>
                {"25"}
              </tspan>
            </text>
          </g>
          <g id="lot-34" className={getLotCursorStyle("34")} onClick={() => handleLotClickWithAvailability("34")}>
            <path
              id="shape_10"
              fill={getLotFillColor('34')}
              stroke={getLotStrokeColor('34')}
              d="m246.01 215.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_10"
              fill={getLotTextColor('34')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -1322.156 1858.142)"
            >
              <tspan x={0.142} y={13.591}>
                {"34\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-24" className={getLotCursorStyle("24")} onClick={() => handleLotClickWithAvailability("24")}>
            <path
              id="shape_11"
              fill={getLotFillColor('24')}
              stroke={getLotStrokeColor('24')}
              d="m153.01 235.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_11"
              fill={getLotTextColor('24')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -1497.531 1268.87)"
            >
              <tspan x={0.456} y={13.591}>
                {"24\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-35" className={getLotCursorStyle("35")} onClick={() => handleLotClickWithAvailability("35")}>
            <path
              id="shape_12"
              fill={getLotFillColor('35')}
              stroke={getLotStrokeColor('35')}
              d="m240.01 250.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_12"
              fill={getLotTextColor('35')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -1550.688 1836.98)"
            >
              <tspan x={0.374} y={13.591}>
                {"35\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-23" className={getLotCursorStyle("23")} onClick={() => handleLotClickWithAvailability("23")}>
            <path
              id="shape_13"
              fill={getLotFillColor('23')}
              stroke={getLotStrokeColor('23')}
              d="m146.01 269.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_13"
              fill={getLotTextColor('23')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -1720.12 1240.763)"
            >
              <tspan x={0.477} y={13.591}>
                {"23\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-36" className={getLotCursorStyle("36")} onClick={() => handleLotClickWithAvailability("36")}>
            <path
              id="shape_14"
              fill={getLotFillColor('36')}
              stroke={getLotStrokeColor('36')}
              d="m235.01 284.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_14"
              fill={getLotTextColor('36')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -1772.277 1821.76)"
            >
              <tspan x={0.265} y={13.591}>
                {"36\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-22" className={getLotCursorStyle("22")} onClick={() => handleLotClickWithAvailability("22")}>
            <path
              id="shape_15"
              fill={getLotFillColor('22')}
              stroke={getLotStrokeColor('22')}
              d="m140.01 303.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_15"
              fill={getLotTextColor('22')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -1942.21 1219.1)"
            >
              <tspan x={0.182} y={13.591}>
                {"22\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-21" className={getLotCursorStyle("21")} onClick={() => handleLotClickWithAvailability("21")}>
            <path
              id="shape_16"
              fill={getLotFillColor('21')}
              stroke={getLotStrokeColor('21')}
              d="m118.56 409.633 72.219 5.799a4.5 4.5 0 0 1 4.126 4.846l-3.166 39.433a4.5 4.5 0 0 1-4.846 4.126l-72.22-5.799a4.5 4.5 0 0 1-4.125-4.845l3.166-39.434a4.5 4.5 0 0 1 4.846-4.126Z"
            />
            <text
              xmlSpace="preserve"
              id="text_16"
              fill={getLotTextColor('21')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(3.407 -7102.932 2665.733)"
            >
              <tspan x={0.166} y={13.591}>
                {"21\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-38" className={getLotCursorStyle("38")} onClick={() => handleLotClickWithAvailability("38")}>
            <path
              id="shape_17"
              fill={getLotFillColor('38')}
              stroke={getLotStrokeColor('38')}
              d="m204.56 416.633 72.219 5.799a4.5 4.5 0 0 1 4.126 4.846l-3.166 39.433a4.5 4.5 0 0 1-4.846 4.126l-72.22-5.799a4.5 4.5 0 0 1-4.125-4.845l3.166-39.434a4.5 4.5 0 0 1 4.846-4.126Z"
            />
            <text
              xmlSpace="preserve"
              id="text_17"
              fill={getLotTextColor('38')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(3.407 -7177.133 4098.376)"
            >
              <tspan x={0.258} y={13.591}>
                {"38"}
              </tspan>
            </text>
          </g>
          <g id="lot-37" className={getLotCursorStyle("37")} onClick={() => handleLotClickWithAvailability("37")}>
            <path
              id="shape_18"
              fill={getLotFillColor('37')}
              stroke={getLotStrokeColor('37')}
              d="m229.01 318.306 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.532 21.453a4.5 4.5 0 0 1-5.172 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z"
            />
            <text
              xmlSpace="preserve"
              id="text_18"
              fill={getLotTextColor('37')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(8.874 -1994.366 1800.098)"
            >
              <tspan x={0.223} y={13.591}>
                {"37"}
              </tspan>
            </text>
          </g>
          <g id="lot-14" className={getLotCursorStyle("14")} onClick={() => handleLotClickWithAvailability("14")}>
            <path
              id="shape_19"
              fill={getLotFillColor('14')}
              stroke={getLotStrokeColor('14')}
              d="m90.095 711.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_19"
              fill={getLotTextColor('14')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -26641.038 4704.175)"
            >
              <tspan x={0.331} y={13.591}>
                {"14"}
              </tspan>
            </text>
          </g>
          <g id="lot-45" className={getLotCursorStyle("45")} onClick={() => handleLotClickWithAvailability("45")}>
            <path
              id="shape_20"
              fill={getLotFillColor('45')}
              stroke={getLotStrokeColor('45')}
              d="m177.095 714.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_20"
              fill={getLotTextColor('45')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -26708.353 7896.81)"
            >
              <tspan x={0.244} y={13.591}>
                {"45\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-13" className={getLotCursorStyle("13")} onClick={() => handleLotClickWithAvailability("13")}>
            <path
              id="shape_21"
              fill={getLotFillColor('13')}
              stroke={getLotStrokeColor('13')}
              d="m89.095 746.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_21"
              fill={getLotTextColor('13')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -27940.246 4684.57)"
            >
              <tspan x={0.461} y={13.591}>
                {"13\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-46" className={getLotCursorStyle("46")} onClick={() => handleLotClickWithAvailability("46")}>
            <path
              id="shape_22"
              fill={getLotFillColor('46')}
              stroke={getLotStrokeColor('46')}
              d="m176.095 749.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_22"
              fill={getLotTextColor('46')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -28007.561 7877.204)"
            >
              <tspan x={0.135} y={13.591}>
                {"46\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-12" className={getLotCursorStyle("12")} onClick={() => handleLotClickWithAvailability("12")}>
            <path
              id="shape_23"
              fill={getLotFillColor('12')}
              stroke={getLotStrokeColor('12')}
              d="m88.272 780.989 71.064 2.508a4.5 4.5 0 0 1 4.339 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.339-4.656l.767-21.727a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_23"
              fill={getLotTextColor('12')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -29206.08 4671.12)"
            >
              <tspan x={0.166} y={13.591}>
                {"12\n"}
              </tspan>
              <tspan x={8} y={30.591} />
            </text>
          </g>
          <g id="lot-47" className={getLotCursorStyle("47")} onClick={() => handleLotClickWithAvailability("47")}>
            <path
              id="shape_24"
              fill={getLotFillColor('47')}
              stroke={getLotStrokeColor('47')}
              d="m174.363 784.031 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.727a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.508a4.5 4.5 0 0 1-4.338-4.656l.767-21.728a4.5 4.5 0 0 1 4.655-4.338Z"
            />
            <text
              xmlSpace="preserve"
              id="text_24"
              fill={getLotTextColor('47')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -29275.372 7830.046)"
            >
              <tspan x={0.093} y={13.591}>
                {"47\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-11" className={getLotCursorStyle("11")} onClick={() => handleLotClickWithAvailability("11")}>
            <path
              id="shape_25"
              fill={getLotFillColor('11')}
              stroke={getLotStrokeColor('11')}
              d="m86.659 815.477 71.064 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.655 4.338l-71.065-2.508a4.5 4.5 0 0 1-4.338-4.656l.767-21.728a4.5 4.5 0 0 1 4.656-4.338Z"
            />
            <text
              xmlSpace="preserve"
              id="text_25"
              fill={getLotTextColor('11')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -30487.1 4665.594)"
            >
              <tspan x={0.15} y={13.591}>
                {"11\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-48" className={getLotCursorStyle("48")} onClick={() => handleLotClickWithAvailability("48")}>
            <path
              id="shape_26"
              fill={getLotFillColor('48')}
              stroke={getLotStrokeColor('48')}
              d="m172.75 818.518 71.064 2.508a4.5 4.5 0 0 1 4.339 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.338l-71.064-2.508a4.5 4.5 0 0 1-4.339-4.656l.767-21.727a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_26"
              fill={getLotTextColor('48')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -30555.889 7787.4)"
            >
              <tspan x={0.128} y={13.591}>
                {"48\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-10" className={getLotCursorStyle("10")} onClick={() => handleLotClickWithAvailability("10")}>
            <path
              id="shape_27"
              fill={getLotFillColor('10')}
              stroke={getLotStrokeColor('10')}
              d="m86.095 848.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_27"
              fill={getLotTextColor('10')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -31726.552 4624.252)"
            >
              <tspan x={0.256} y={13.591}>
                {"10\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-49" className={getLotCursorStyle("49")} onClick={() => handleLotClickWithAvailability("49")}>
            <path
              id="shape_28"
              fill={getLotFillColor('49')}
              stroke={getLotStrokeColor('49')}
              d="m171.095 851.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_28"
              fill={getLotTextColor('49')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -31794.867 7742.674)"
            >
              <tspan x={0.135} y={13.591}>
                {"49\n"}
              </tspan>
              <tspan x={9.5} y={30.591} />
              <tspan x={9.5} y={47.591} />
            </text>
          </g>
          <g id="lot-9" className={getLotCursorStyle("9")} onClick={() => handleLotClickWithAvailability("9")}>
            <path
              id="shape_29"
              fill={getLotFillColor('9')}
              stroke={getLotStrokeColor('9')}
              d="m84.095 882.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_29"
              fill={getLotTextColor('9')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -32990.66 4678.361)"
            >
              <tspan x={0.379} y={13.591}>
                {"9\n"}
              </tspan>
              <tspan x={5} y={30.591} />
            </text>
          </g>
          <g id="lot-50" className={getLotCursorStyle("50")} onClick={() => handleLotClickWithAvailability("50")}>
            <path
              id="shape_30"
              fill={getLotFillColor('50')}
              stroke={getLotStrokeColor('50')}
              d="m170.095 885.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_30"
              fill={getLotTextColor('50')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -33056.969 7722.568)"
            >
              <tspan x={0.169} y={13.591}>
                {"50\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-8" className={getLotCursorStyle("8")} onClick={() => handleLotClickWithAvailability("8")}>
            <path
              id="shape_31"
              fill={getLotFillColor('8')}
              stroke={getLotStrokeColor('8')}
              d="m83.095 916.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_31"
              fill={getLotTextColor('8')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -34252.762 4658.255)"
            >
              <tspan x={0.372} y={13.591}>
                {"8\n"}
              </tspan>
              <tspan x={5} y={30.591} />
            </text>
          </g>
          <g id="lot-51" className={getLotCursorStyle("51")} onClick={() => handleLotClickWithAvailability("51")}>
            <path
              id="shape_32"
              fill={getLotFillColor('51')}
              stroke={getLotStrokeColor('51')}
              d="m168.095 919.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_32"
              fill={getLotTextColor('51')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -34320.073 7702.439)"
            >
              <tspan x={0.063} y={13.591}>
                {"51\n"}
              </tspan>
              <tspan x={8} y={30.591} />
            </text>
          </g>
          <g id="lot-7" className={getLotCursorStyle("7")} onClick={() => handleLotClickWithAvailability("7")}>
            <path
              id="shape_33"
              fill={getLotFillColor('7')}
              stroke={getLotStrokeColor('7')}
              d="m81.095 949.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_33"
              fill={getLotTextColor('7')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -35478.76 4637.663)"
            >
              <tspan x={0.337} y={13.591}>
                {"7\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-6" className={getLotCursorStyle("6")} onClick={() => handleLotClickWithAvailability("6")}>
            <path
              id="shape_34"
              fill={getLotFillColor('6')}
              stroke={getLotStrokeColor('6')}
              d="m80.095 983.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.73a4.51 4.51 0 0 1-4.656 4.34l-71.064-2.51a4.5 4.5 0 0 1-4.338-4.66l.767-21.725a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_34"
              fill={getLotTextColor('6')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -36740.36 4580.437)"
            >
              <tspan x={0.379} y={13.591}>
                {"6\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-5" className={getLotCursorStyle("5")} onClick={() => handleLotClickWithAvailability("5")}>
            <path
              id="shape_35"
              fill={getLotFillColor('5')}
              stroke={getLotStrokeColor('5')}
              d="m78.714 1017.83 70.307 2.85a4.55 4.55 0 0 1 4.36 4.68l-.679 22.39a4.444 4.444 0 0 1-4.632 4.32l-70.307-2.85a4.55 4.55 0 0 1-4.36-4.68l.678-22.39a4.445 4.445 0 0 1 4.633-4.32Z"
            />
            <text
              xmlSpace="preserve"
              id="text_35"
              fill={getLotTextColor('5')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="matrix(.9995 .03184 -.0222 .99975 104.439 1025.75)"
            >
              <tspan x={4.405} y={13.591}>
                {"5"}
              </tspan>
            </text>
          </g>
          <g id="lot-54" className={getLotCursorStyle("54")} onClick={() => handleLotClickWithAvailability("54")}>
            <path
              id="shape_36"
              fill={getLotFillColor('54')}
              stroke={getLotStrokeColor('54')}
              d="m163.701 1021.59 70.305 4.58c2.48.17 4.471 2.31 4.446 4.8l-.265 26.87c-.025 2.48-2.055 4.37-4.535 4.21l-70.305-4.59c-2.48-.17-4.471-2.31-4.446-4.8l.265-26.87c.024-2.48 2.055-4.37 4.535-4.2Z"
            />
            <text
              xmlSpace="preserve"
              id="text_36"
              fill={getLotTextColor('54')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="matrix(.99847 .05536 -.0028 1 188.114 1032)"
            >
              <tspan x={1.636} y={13.591}>
                {"54\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-53" className={getLotCursorStyle("53")} onClick={() => handleLotClickWithAvailability("53")}>
            <path
              id="shape_37"
              fill={getLotFillColor('53')}
              stroke={getLotStrokeColor('53')}
              d="m165.095 987.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.73a4.51 4.51 0 0 1-4.656 4.34l-71.064-2.51a4.5 4.5 0 0 1-4.338-4.66l.767-21.725a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_37"
              fill={getLotTextColor('53')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -36844.275 7588.039)"
            >
              <tspan x={0.374} y={13.591}>
                {"53\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-52" className={getLotCursorStyle("52")} onClick={() => handleLotClickWithAvailability("52")}>
            <path
              id="shape_38"
              fill={getLotFillColor('52')}
              stroke={getLotStrokeColor('52')}
              d="m167.095 953.886 71.064 2.509a4.5 4.5 0 0 1 4.338 4.655l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.767-21.728a4.5 4.5 0 0 1 4.656-4.339Z"
            />
            <text
              xmlSpace="preserve"
              id="text_38"
              fill={getLotTextColor('52')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(1.544 -35581.673 7645.25)"
            >
              <tspan x={0.079} y={13.591}>
                {"52\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-4" className={getLotCursorStyle("4")} onClick={() => handleLotClickWithAvailability("4")}>
            <path
              id="shape_39"
              fill={getLotFillColor('4')}
              stroke={getLotStrokeColor('4')}
              d="m72.06 1117.86 70.631 8.22a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.6a4.505 4.505 0 0 1-4.99 3.95l-70.631-8.23a4.5 4.5 0 0 1-3.95-4.99l2.516-21.59a4.5 4.5 0 0 1 4.99-3.95Z"
            />
            <text
              xmlSpace="preserve"
              id="text_39"
              fill={getLotTextColor('4')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(6.166 -10420.555 1504.593)"
            >
              <tspan x={0.256} y={13.591}>
                {"4"}
              </tspan>
            </text>
          </g>
          <g id="lot-55" className={getLotCursorStyle("55")} onClick={() => handleLotClickWithAvailability("55")}>
            <path
              id="shape_40"
              fill={getLotFillColor('55')}
              stroke={getLotStrokeColor('55')}
              d="m154.931 1127.7 70.631 8.22a4.5 4.5 0 0 1 3.95 4.99l-2.516 21.6a4.505 4.505 0 0 1-4.99 3.95l-70.631-8.23a4.5 4.5 0 0 1-3.949-4.99l2.515-21.6a4.5 4.5 0 0 1 4.99-3.94Z"
            />
            <text
              xmlSpace="preserve"
              id="text_40"
              fill={getLotTextColor('55')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(6.166 -10468.461 2241.687)"
            >
              <tspan x={0.477} y={13.591}>
                {"55"}
              </tspan>
            </text>
          </g>
          <g id="lot-3" className={getLotCursorStyle("3")} onClick={() => handleLotClickWithAvailability("3")}>
            <path
              id="shape_41"
              fill={getLotFillColor('3')}
              stroke={getLotStrokeColor('3')}
              d="m67.06 1151.86 70.631 8.22a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.6a4.505 4.505 0 0 1-4.99 3.95l-70.631-8.23a4.5 4.5 0 0 1-3.95-4.99l2.516-21.59a4.5 4.5 0 0 1 4.99-3.95Z"
            />
            <text
              xmlSpace="preserve"
              id="text_41"
              fill={getLotTextColor('3')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(6.166 -10738.68 1475.18)"
            >
              <tspan x={0.386} y={13.591}>
                {"3"}
              </tspan>
            </text>
          </g>
          <g id="lot-2" className={getLotCursorStyle("2")} onClick={() => handleLotClickWithAvailability("2")}>
            <path
              id="shape_42"
              fill={getLotFillColor('2')}
              stroke={getLotStrokeColor('2')}
              d="m63.06 1185.86 70.631 8.22a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.6a4.505 4.505 0 0 1-4.99 3.95l-70.631-8.23a4.5 4.5 0 0 1-3.95-4.99l2.516-21.59a4.5 4.5 0 0 1 4.99-3.95Z"
            />
            <text
              xmlSpace="preserve"
              id="text_42"
              fill={getLotTextColor('2')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(6.166 -11041.993 1449.378)"
            >
              <tspan x={0.091} y={13.591}>
                {"2"}
              </tspan>
            </text>
          </g>
          <g id="lot-1" className={getLotCursorStyle("1")} onClick={() => handleLotClickWithAvailability("1")}>
            <path
              id="shape_43"
              fill={getLotFillColor('1')}
              stroke={getLotStrokeColor('1')}
              d="m59.06 1219.86 70.631 8.22a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.6a4.505 4.505 0 0 1-4.99 3.95l-70.631-8.23a4.5 4.5 0 0 1-3.95-4.99l2.516-21.59a4.5 4.5 0 0 1 4.99-3.95Z"
            />
            <text
              xmlSpace="preserve"
              id="text_43"
              fill={getLotTextColor('1')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(6.166 -11374.977 1453.485)"
            >
              <tspan x={0.075} y={13.591}>
                {"1"}
              </tspan>
            </text>
          </g>
          <g id="lot-57" className={getLotCursorStyle("57")} onClick={() => handleLotClickWithAvailability("57")}>
            <path
              id="shape_44"
              fill={getLotFillColor('57')}
              stroke={getLotStrokeColor('57')}
              d="m147.06 1195.86 70.631 8.22a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.6a4.505 4.505 0 0 1-4.99 3.95l-70.631-8.23a4.5 4.5 0 0 1-3.949-4.99l2.515-21.59a4.5 4.5 0 0 1 4.99-3.95Z"
            />
            <text
              xmlSpace="preserve"
              id="text_44"
              fill={getLotTextColor('57')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(6.166 -11105.132 2202.69)"
            >
              <tspan x={0.325} y={13.591}>
                {"57"}
              </tspan>
            </text>
          </g>
          <g id="lot-58" className={getLotCursorStyle("58")} onClick={() => handleLotClickWithAvailability("58")}>
            <path
              id="shape_45"
              fill={getLotFillColor('58')}
              stroke={getLotStrokeColor('58')}
              d="m143.06 1229.86 70.631 8.22a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.6a4.505 4.505 0 0 1-4.99 3.95l-70.631-8.23a4.5 4.5 0 0 1-3.949-4.99l2.515-21.59a4.5 4.5 0 0 1 4.99-3.95Z"
            />
            <text
              xmlSpace="preserve"
              id="text_45"
              fill={getLotTextColor('58')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(6.166 -11422.757 2182.558)"
            >
              <tspan x={0.36} y={13.591}>
                {"58\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-56" className={getLotCursorStyle("56")} onClick={() => handleLotClickWithAvailability("56")}>
            <path
              id="shape_46"
              fill={getLotFillColor('56')}
              stroke={getLotStrokeColor('56')}
              d="m151.06 1161.86 70.631 8.22a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.6a4.505 4.505 0 0 1-4.99 3.95l-70.631-8.23a4.5 4.5 0 0 1-3.949-4.99l2.515-21.59a4.5 4.5 0 0 1 4.99-3.95Z"
            />
            <text
              xmlSpace="preserve"
              id="text_46"
              fill={getLotTextColor('56')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(6.166 -10787.507 2222.823)"
            >
              <tspan x={0.367} y={13.591}>
                {"56"}
              </tspan>
            </text>
          </g>
          <g id="lot-20" className={getLotCursorStyle("20")} onClick={() => handleLotClickWithAvailability("20")}>
            <path
              id="shape_47"
              fill={getLotFillColor('20')}
              stroke={getLotStrokeColor('20')}
              d="m114.083 461.381 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.667a4.5 4.5 0 0 1 4.855-4.116Z"
            />
            <text
              xmlSpace="preserve"
              id="text_47"
              fill={getLotTextColor('20')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -6289.01 2124.014)"
            >
              <tspan x={0.271} y={13.591}>
                {"20"}
              </tspan>
            </text>
          </g>
          <g id="lot-39" className={getLotCursorStyle("39")} onClick={() => handleLotClickWithAvailability("39")}>
            <path
              id="shape_48"
              fill={getLotFillColor('39')}
              stroke={getLotStrokeColor('39')}
              d="m201.083 468.381 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.667a4.5 4.5 0 0 1 4.855-4.116Z"
            />
            <text
              xmlSpace="preserve"
              id="text_48"
              fill={getLotTextColor('39')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -6340.17 3304.003)"
            >
              <tspan x={0.265} y={13.591}>
                {"39\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-19" className={getLotCursorStyle("19")} onClick={() => handleLotClickWithAvailability("19")}>
            <path
              id="shape_49"
              fill={getLotFillColor('19')}
              stroke={getLotStrokeColor('19')}
              d="m111.083 495.381 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.667a4.5 4.5 0 0 1 4.855-4.116Z"
            />
            <text
              xmlSpace="preserve"
              id="text_49"
              fill={getLotTextColor('19')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -6750.79 2113.978)"
            >
              <tspan x={0.454} y={13.591}>
                {"19\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-40" className={getLotCursorStyle("40")} onClick={() => handleLotClickWithAvailability("40")}>
            <path
              id="shape_50"
              fill={getLotFillColor('40')}
              stroke={getLotStrokeColor('40')}
              d="m198.083 502.381 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.667a4.5 4.5 0 0 1 4.855-4.116Z"
            />
            <text
              xmlSpace="preserve"
              id="text_50"
              fill={getLotTextColor('40')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -6800.945 3266.915)"
            >
              <tspan x={0.437} y={13.591}>
                {"40\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-18" className={getLotCursorStyle("18")} onClick={() => handleLotClickWithAvailability("18")}>
            <path
              id="shape_51"
              fill={getLotFillColor('18')}
              stroke={getLotStrokeColor('18')}
              d="m108.083 530.381 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.667a4.5 4.5 0 0 1 4.855-4.116Z"
            />
            <text
              xmlSpace="preserve"
              id="text_51"
              fill={getLotTextColor('18')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -7225.59 2090.91)"
            >
              <tspan x={0.447} y={13.591}>
                {"18\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-41" className={getLotCursorStyle("41")} onClick={() => handleLotClickWithAvailability("41")}>
            <path
              id="shape_52"
              fill={getLotFillColor('41')}
              stroke={getLotStrokeColor('41')}
              d="m195.083 537.381 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.667a4.5 4.5 0 0 1 4.855-4.116Z"
            />
            <text
              xmlSpace="preserve"
              id="text_52"
              fill={getLotTextColor('41')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -7276.75 3270.898)"
            >
              <tspan x={0.399} y={13.591}>
                {"41\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-17" className={getLotCursorStyle("17")} onClick={() => handleLotClickWithAvailability("17")}>
            <path
              id="shape_53"
              fill={getLotFillColor('17')}
              stroke={getLotStrokeColor('17')}
              d="m105.083 564.381 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.667a4.5 4.5 0 0 1 4.855-4.116Z"
            />
            <text
              xmlSpace="preserve"
              id="text_53"
              fill={getLotTextColor('17')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -7686.866 2067.341)"
            >
              <tspan x={0.412} y={13.591}>
                {"17\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-42" className={getLotCursorStyle("42")} onClick={() => handleLotClickWithAvailability("42")}>
            <path
              id="shape_54"
              fill={getLotFillColor('42')}
              stroke={getLotStrokeColor('42')}
              d="m192.083 571.381 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.667a4.5 4.5 0 0 1 4.855-4.116Z"
            />
            <text
              xmlSpace="preserve"
              id="text_54"
              fill={getLotTextColor('42')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -7737.524 3233.797)"
            >
              <tspan x={0.347} y={13.591}>
                {"42\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-16" className={getLotCursorStyle("16")} onClick={() => handleLotClickWithAvailability("16")}>
            <path
              id="shape_55"
              fill={getLotFillColor('16')}
              stroke={getLotStrokeColor('16')}
              d="m102.313 598.042 70.868 5.842a4.5 4.5 0 0 1 4.115 4.854l-1.786 21.668a4.5 4.5 0 0 1-4.854 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.854l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z"
            />
            <text
              xmlSpace="preserve"
              id="text_55"
              fill={getLotTextColor('16')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -8143.43 2046.713)"
            >
              <tspan x={0.454} y={13.591}>
                {"16\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-43" className={getLotCursorStyle("43")} onClick={() => handleLotClickWithAvailability("43")}>
            <path
              id="shape_56"
              fill={getLotFillColor('43')}
              stroke={getLotStrokeColor('43')}
              d="m189.083 605.381 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.667a4.5 4.5 0 0 1 4.855-4.116Z"
            />
            <text
              xmlSpace="preserve"
              id="text_56"
              fill={getLotTextColor('43')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -8198.801 3210.228)"
            >
              <tspan x={0.142} y={13.591}>
                {"43\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-15" className={getLotCursorStyle("15")} onClick={() => handleLotClickWithAvailability("15")}>
            <path
              id="shape_57"
              fill={getLotFillColor('15')}
              stroke={getLotStrokeColor('15')}
              d="m99.083 632.416 70.868 5.842a4.5 4.5 0 0 1 4.115 4.854l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.854l1.786-21.668a4.5 4.5 0 0 1 4.855-4.115Z"
            />
            <text
              xmlSpace="preserve"
              id="text_57"
              fill={getLotTextColor('15')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -8609.88 2020.221)"
            >
              <tspan x={0.063} y={13.591}>
                {"15\n"}
              </tspan>
            </text>
          </g>
          <g id="lot-44" className={getLotCursorStyle("44")} onClick={() => handleLotClickWithAvailability("44")}>
            <path
              id="shape_58"
              fill={getLotFillColor('44')}
              stroke={getLotStrokeColor('44')}
              d="m186.083 639.381 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.668a4.5 4.5 0 0 1-4.855 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.667a4.5 4.5 0 0 1 4.855-4.116Z"
            />
            <text
              xmlSpace="preserve"
              id="text_58"
              fill={getLotTextColor('44')}
              fontFamily="Inter"
              fontSize={14}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
              transform="rotate(4.235 -8660.078 3186.66)"
            >
              <tspan x={0.012} y={13.591}>
                {"44\n"}
              </tspan>
            </text>
          </g>
          <path
            id="Arrow 1"
            fill="#121212"
            d="m66 1278 3.86 4.29 1.788-5.49zm15.74 5.12.155-.47-11.461-3.73-.155.47-.155.48 11.461 3.73z"
          />
        </g>
        <g id="environment">
          <path
            id="Rectangle 3"
            fill="#d9d9d9"
            d="m18 1336.5 13 8-5 14.5-14-6.87zm48.5 26 13 8-5 14.5-14-6.87z"
          />
          <path
            id="Rectangle 4"
            fill="#5a5f6a"
            d="M32.013 1346h37v2.256h-37z"
            transform="rotate(26.67 32.013 1346)"
          />
          <path
            id="Rectangle 6"
            fill="#5a5f6a"
            d="M28.013 1358h37v2.256h-37z"
            transform="rotate(26.67 28.013 1358)"
          />
          <path
            id="Rectangle 5"
            fill="#5a5f6a"
            d="M31.013 1349h37v2.256h-37z"
            transform="rotate(26.67 31.013 1349)"
          />
          <path
            id="Rectangle 7"
            fill="#5a5f6a"
            d="M30.013 1352h37v2.256h-37z"
            transform="rotate(26.67 30.013 1352)"
          />
          <path
            id="Rectangle 8"
            fill="#5a5f6a"
            d="M29.013 1355h37v2.256h-37z"
            transform="rotate(26.67 29.013 1355)"
          />
          <path
            id="Arrow 1_2"
            fill="#121212"
            d="m49 1383-4.73 3.31 5.231 2.44zm-7 15 .453.21 5.097-10.92-.453-.21-.453-.21-5.097 10.92z"
          />
          <path
            id="Arrow 3"
            fill="#121212"
            d="m75.214 1320-5.479-1.82 1.163 5.65zM59 1323.33l.1.49 11.807-2.42-.1-.49-.102-.49-11.806 2.42z"
          />
          <path
            id="Arrow 2_2"
            fill="#121212"
            d="m24 1389 4.73-3.31-5.232-2.44zm7-15-.453-.21-5.097 10.92.453.21.453.21 5.097-10.92z"
          />
          <text
            xmlSpace="preserve"
            id="Lote Commercial"
            fill="#212121"
            fontFamily="Inter"
            fontSize={9}
            fontWeight="bold"
            letterSpacing="0em"
            style={{
              whiteSpace: "pre",
            }}
            transform="rotate(-13.373 5868.776 160.57)"
          >
            <tspan x={24.367} y={8.773}>
              {"Lote "}
            </tspan>
            <tspan x={7.62} y={19.773}>
              {"Commercial"}
            </tspan>
          </text>
        </g>
        <g id="Green areas">
          <circle id="Ellipse 1" cx={92} cy={1069} r={8} fill="#4e986f" />
          <circle id="Ellipse 2" cx={122} cy={1074} r={8} fill="#4e986f" />
          <circle id="Ellipse 3" cx={132} cy={1106} r={8} fill="#4e986f" />
          <circle id="Ellipse 4" cx={185} cy={1111} r={8} fill="#4e986f" />
          <circle id="Ellipse 5" cx={178.5} cy={1075.5} r={6.5} fill="#4e986f" />
          <circle id="Ellipse 9" cx={208.5} cy={1089.5} r={6.5} fill="#4e986f" />
          <ellipse
            id="Ellipse 6"
            cx={214.965}
            cy={1114.49}
            fill="#4e986f"
            rx={8}
            ry={10}
            transform="rotate(-12.43 214.965 1114.49)"
          />
          <ellipse
            id="Ellipse 7"
            cx={79.152}
            cy={1104.99}
            fill="#4e986f"
            rx={6.668}
            ry={7.733}
            transform="rotate(-12.43 79.152 1104.99)"
          />
          <ellipse
            id="Ellipse 8"
            cx={109.152}
            cy={1097.99}
            fill="#4e986f"
            rx={6.338}
            ry={10.878}
            transform="rotate(-12.43 109.152 1097.99)"
          />
          <circle id="Ellipse 10" cx={149} cy={373} r={7} fill="#4e986f" />
          <ellipse
            id="Ellipse 18"
            cx={152}
            cy={347}
            fill="#4e986f"
            rx={5}
            ry={7}
          />
          <circle id="Ellipse 11" cx={244} cy={393} r={7} fill="#4e986f" />
          <ellipse
            id="Ellipse 12"
            cx={201.479}
            cy={393.206}
            fill="#4e986f"
            rx={6.5}
            ry={11.5}
            transform="rotate(-30.866 201.479 393.206)"
          />
          <ellipse
            id="Ellipse 13"
            cx={177.477}
            cy={355.706}
            fill="#4e986f"
            rx={5.578}
            ry={9.138}
            transform="rotate(-30.866 177.477 355.706)"
          />
          <ellipse
            id="Ellipse 14"
            cx={167.877}
            cy={397.63}
            fill="#4e986f"
            rx={5.578}
            ry={10.322}
            transform="rotate(20.772 167.877 397.63)"
          />
          <ellipse
            id="Ellipse 20"
            cx={171.21}
            cy={378.33}
            fill="#4e986f"
            rx={5.578}
            ry={5.715}
            transform="rotate(-6.734 171.21 378.33)"
          />
          <ellipse
            id="Ellipse 21"
            cx={133.21}
            cy={398.33}
            fill="#4e986f"
            rx={5.578}
            ry={5.715}
            transform="rotate(-6.734 133.21 398.33)"
          />
          <ellipse
            id="Ellipse 15"
            cx={214}
            cy={364.151}
            fill="#4e986f"
            rx={6.588}
            ry={8.008}
            transform="rotate(20.772 214 364.151)"
          />
          <ellipse
            id="Ellipse 16"
            cx={266}
            cy={365.824}
            fill="#4e986f"
            rx={6.588}
            ry={8.008}
            transform="rotate(20.772 266 365.824)"
          />
          <ellipse
            id="Ellipse 17"
            cx={269}
            cy={410.824}
            fill="#4e986f"
            rx={6.588}
            ry={8.008}
            transform="rotate(-13.968 269 410.824)"
          />
          <circle id="Ellipse 19" cx={59.5} cy={1298.5} r={13.5} fill="#6899c3" />
                 </g>
       </g>
     </svg>
     {selectedLot && (
       <SidePanel
         lotNumber={selectedLot}
         onClose={handleClosePanel}
       />
     )}
   </div>
 );
};

const ForwardRef = forwardRef(SvgLotMap);
export default ForwardRef;
