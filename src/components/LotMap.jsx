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
      {/* Backdrop blur overlay positioned behind the SVG */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          clipPath: 'polygon(100% 4.13%, 41.3% 0%, 29.8% 15.68%, 19.5% 25.83%, 6.7% 49.13%, 5.6% 73%, 0.3% 96.25%, 15.1% 100%, 63.8% 96.6%, 76.1% 74.68%, 82.3% 51.18%, 88.9% 27.25%, 100% 4.13%)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          zIndex: 1
        }}
      />
      
      {/* SVG container with higher z-index */}
      <div className="relative z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
                     width="381"
        height="1433"
        fill="none"
                     viewBox="0 0 381 1433"
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
        {desc ? <desc id={descId}>{desc}</desc> : null}
        {title ? <title id={titleId}>{title}</title> : null}
        <g id="Villa-Map">
          <g id="lotmap">
            <path
              id="perimeter"
          fill="url(#paint0_linear_62_2)"
          fillOpacity={0.79}
          d="m380.488 59.168-223.5-59-43.5 224.5-39.5 145.5-48.5 334.038-4 341.964-20.5 333.04 56.5 53.46 185.5-48.5 47-314 23.5-337.002 25-342.462z"
            />
            <path
              id="Arrow 2"
          fill="#DEEEEC"
          d="m34.988 1305.63 3.397-4.67-5.741-.61zm1.744-16.46-.497-.06-1.27 11.99.497.05.497.06 1.27-11.99z"
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
               d="m184.998 65.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.71Z" />
              <text
               xmlSpace="preserve" id="text" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -387.172 1390.077)"
               fill={getLotTextColor('29')}>
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
               d="m270.998 79.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.164-11.555a4.5 4.5 0 0 1-3.709-5.171l3.533-21.452a4.5 4.5 0 0 1 5.172-3.71Z" />
              <text
               xmlSpace="preserve" id="text_2" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -434.385 1951.243)"
               fill={getLotTextColor('30')}>
                <tspan x={0.066} y={13.591}>
                  {"30"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-28" 
             className={getLotCursorStyle("28")}
             onClick={() => handleLotClickWithAvailability("28")}
            >
              <path
                id="shape_3"
               fill={getLotFillColor('28')}
               stroke={getLotStrokeColor('28')}
               d="m178.998 99.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.71Z" />
              <text
               xmlSpace="preserve" id="text_3" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -609.264 1368.414)"
               fill={getLotTextColor('28')}>
                <tspan x={0.463} y={13.591}>
                  {"28"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-31" 
             className={getLotCursorStyle("31")}
             onClick={() => handleLotClickWithAvailability("31")}
            >
              <path
                id="shape_4"
               fill={getLotFillColor('31')}
               stroke={getLotStrokeColor('31')}
               d="m264.997 113.476 70.165 11.585a4.504 4.504 0 0 1 3.71 5.173l-3.537 21.535a4.496 4.496 0 0 1-5.169 3.708l-70.164-11.585a4.506 4.506 0 0 1-3.711-5.174l3.537-21.535a4.495 4.495 0 0 1 5.169-3.707Z" />
              <text
               xmlSpace="preserve" id="text_4" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.897 -655.087 1931.126)skewX(.046)"
               fill={getLotTextColor('31')}>
                <tspan x={0.461} y={13.591}>
                  {"31"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-27" 
             className={getLotCursorStyle("27")}
             onClick={() => handleLotClickWithAvailability("27")}
            >
              <path
                id="shape_5"
               fill={getLotFillColor('27')}
               stroke={getLotStrokeColor('27')}
               d="m171.998 133.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z" />
              <text
               xmlSpace="preserve" id="text_5" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -831.853 1340.308)"
               fill={getLotTextColor('27')}>
                <tspan x={0.428} y={13.591}>
                  {"27\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-32" 
             className={getLotCursorStyle("32")}
             onClick={() => handleLotClickWithAvailability("32")}
            >
              <path
                id="shape_6"
               fill={getLotFillColor('32')}
               stroke={getLotStrokeColor('32')}
               d="m258.998 147.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.164-11.555a4.5 4.5 0 0 1-3.709-5.171l3.533-21.452a4.5 4.5 0 0 1 5.172-3.709Z" />
              <text
               xmlSpace="preserve" id="text_6" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -878.566 1907.918)"
               fill={getLotTextColor('32')}>
                <tspan x={0.477} y={13.591}>
                  {"32"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-26" 
             className={getLotCursorStyle("26")}
             onClick={() => handleLotClickWithAvailability("26")}
            >
              <path
                id="shape_7"
               fill={getLotFillColor('26')}
               stroke={getLotStrokeColor('26')}
               d="m165.998 167.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z" />
              <text
               xmlSpace="preserve" id="text_7" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -1053.942 1318.645)"
               fill={getLotTextColor('26')}>
                <tspan x={0.47} y={13.591}>
                  {"26\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-33" 
             className={getLotCursorStyle("33")}
             onClick={() => handleLotClickWithAvailability("33")}
            >
              <path
                id="shape_8"
               fill={getLotFillColor('33')}
               stroke={getLotStrokeColor('33')}
               d="m252.998 181.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.164-11.555a4.5 4.5 0 0 1-3.709-5.171l3.533-21.452a4.5 4.5 0 0 1 5.172-3.709Z" />
              <text
               xmlSpace="preserve" id="text_8" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -1100.655 1886.255)"
               fill={getLotTextColor('33')}>
                <tspan x={0.271} y={13.591}>
                  {"33"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-25" 
             className={getLotCursorStyle("25")}
             onClick={() => handleLotClickWithAvailability("25")}
            >
              <path
                id="shape_9"
               fill={getLotFillColor('25')}
               stroke={getLotStrokeColor('25')}
               d="m159.998 201.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z" />
              <text
               xmlSpace="preserve" id="text_9" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -1276.031 1296.982)"
               fill={getLotTextColor('25')}>
                <tspan x={0.079} y={13.591}>
                  {"25"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-34" 
             className={getLotCursorStyle("34")}
             onClick={() => handleLotClickWithAvailability("34")}
            >
              <path
                id="shape_10"
               fill={getLotFillColor('34')}
               stroke={getLotStrokeColor('34')}
               d="m246.997 215.474 70.164 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.164-11.555a4.5 4.5 0 0 1-3.709-5.171l3.533-21.452a4.5 4.5 0 0 1 5.171-3.709Z" />
              <text
               xmlSpace="preserve" id="text_10" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -1322.744 1864.593)"
               fill={getLotTextColor('34')}>
                <tspan x={0.142} y={13.591}>
                  {"34\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-24" 
             className={getLotCursorStyle("24")}
             onClick={() => handleLotClickWithAvailability("24")}
            >
              <path
                id="shape_11"
               fill={getLotFillColor('24')}
               stroke={getLotStrokeColor('24')}
               d="m153.998 235.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z" />
              <text
               xmlSpace="preserve" id="text_11" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -1498.12 1275.32)"
               fill={getLotTextColor('24')}>
                <tspan x={0.456} y={13.591}>
                  {"24\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-35" 
             className={getLotCursorStyle("35")}
             onClick={() => handleLotClickWithAvailability("35")}
            >
              <path
                id="shape_12"
               fill={getLotFillColor('35')}
               stroke={getLotStrokeColor('35')}
               d="m240.997 250.474 70.164 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.164-11.555a4.5 4.5 0 0 1-3.709-5.171l3.533-21.452a4.5 4.5 0 0 1 5.171-3.709Z" />
              <text
               xmlSpace="preserve" id="text_12" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -1551.277 1843.43)"
               fill={getLotTextColor('35')}>
                <tspan x={0.374} y={13.591}>
                  {"35\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-23" 
             className={getLotCursorStyle("23")}
             onClick={() => handleLotClickWithAvailability("23")}
            >
              <path
                id="shape_13"
               fill={getLotFillColor('23')}
               stroke={getLotStrokeColor('23')}
               d="m146.998 269.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z" />
              <text
               xmlSpace="preserve" id="text_13" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -1720.71 1247.213)"
               fill={getLotTextColor('23')}>
                <tspan x={0.477} y={13.591}>
                  {"23\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-36" 
             className={getLotCursorStyle("36")}
             onClick={() => handleLotClickWithAvailability("36")}
            >
              <path
                id="shape_14"
               fill={getLotFillColor('36')}
               stroke={getLotStrokeColor('36')}
               d="m235.997 284.474 70.164 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.164-11.555a4.5 4.5 0 0 1-3.709-5.171l3.533-21.452a4.5 4.5 0 0 1 5.171-3.709Z" />
              <text
               xmlSpace="preserve" id="text_14" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -1772.866 1828.21)"
               fill={getLotTextColor('36')}>
                <tspan x={0.265} y={13.591}>
                  {"36\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-22" 
             className={getLotCursorStyle("22")}
             onClick={() => handleLotClickWithAvailability("22")}
            >
              <path
                id="shape_15"
               fill={getLotFillColor('22')}
               stroke={getLotStrokeColor('22')}
               d="m140.998 303.474 70.163 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.163-11.555a4.5 4.5 0 0 1-3.709-5.171l3.532-21.452a4.5 4.5 0 0 1 5.172-3.709Z" />
              <text
               xmlSpace="preserve" id="text_15" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -1942.798 1225.55)"
               fill={getLotTextColor('22')}>
                <tspan x={0.182} y={13.591}>
                  {"22\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-21" 
             className={getLotCursorStyle("21")}
             onClick={() => handleLotClickWithAvailability("21")}
            >
              <path
                id="shape_16"
               fill={getLotFillColor('21')}
               stroke={getLotStrokeColor('21')}
               d="m119.547 409.801 72.22 5.799a4.5 4.5 0 0 1 4.126 4.846l-3.167 39.433a4.5 4.5 0 0 1-4.845 4.126l-72.22-5.799a4.5 4.5 0 0 1-4.125-4.846l3.166-39.433a4.5 4.5 0 0 1 4.845-4.126Z" />
              <text
               xmlSpace="preserve" id="text_16" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(3.407 -7105.263 2682.429)"
               fill={getLotTextColor('21')}>
                <tspan x={0.166} y={13.591}>
                  {"21\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-38" 
             className={getLotCursorStyle("38")}
             onClick={() => handleLotClickWithAvailability("38")}
            >
              <path
                id="shape_17"
               fill={getLotFillColor('38')}
               stroke={getLotStrokeColor('38')}
               d="m205.547 416.801 72.22 5.799a4.5 4.5 0 0 1 4.126 4.846l-3.166 39.433a4.5 4.5 0 0 1-4.846 4.126l-72.22-5.799a4.5 4.5 0 0 1-4.125-4.846l3.166-39.433a4.5 4.5 0 0 1 4.845-4.126Z" />
              <text
               xmlSpace="preserve" id="text_17" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(3.407 -7179.464 4115.055)"
               fill={getLotTextColor('38')}>
                <tspan x={0.258} y={13.591}>
                  {"38"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-37" 
             className={getLotCursorStyle("37")}
             onClick={() => handleLotClickWithAvailability("37")}
            >
              <path
                id="shape_18"
               fill={getLotFillColor('37')}
               stroke={getLotStrokeColor('37')}
               d="m229.997 318.474 70.164 11.554a4.5 4.5 0 0 1 3.709 5.171l-3.533 21.453a4.5 4.5 0 0 1-5.171 3.709l-70.164-11.555a4.5 4.5 0 0 1-3.709-5.171l3.533-21.452a4.5 4.5 0 0 1 5.171-3.709Z" />
              <text
               xmlSpace="preserve" id="text_18" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(8.874 -1994.955 1806.548)"
               fill={getLotTextColor('37')}>
                <tspan x={0.223} y={13.591}>
                  {"37"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-14" 
             className={getLotCursorStyle("14")}
             onClick={() => handleLotClickWithAvailability("14")}
            >
              <path
                id="shape_19"
               fill={getLotFillColor('14')}
               stroke={getLotStrokeColor('14')}
               d="m91.082 712.054 71.064 2.508a4.5 4.5 0 0 1 4.339 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.339-4.656l.767-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_19" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -26646.778 4740.92)"
               fill={getLotTextColor('14')}>
                <tspan x={0.331} y={13.591}>
                  {"14"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-45" 
             className={getLotCursorStyle("45")}
             onClick={() => handleLotClickWithAvailability("45")}
            >
              <path
                id="shape_20"
               fill={getLotFillColor('45')}
               stroke={getLotStrokeColor('45')}
               d="m178.082 715.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.656l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_20" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -26714.094 7933.517)"
               fill={getLotTextColor('45')}>
                <tspan x={0.244} y={13.591}>
                  {"45\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-13" 
             className={getLotCursorStyle("13")}
             onClick={() => handleLotClickWithAvailability("13")}
            >
              <path
                id="shape_21"
               fill={getLotFillColor('13')}
               stroke={getLotStrokeColor('13')}
               d="m90.082 747.054 71.064 2.508a4.5 4.5 0 0 1 4.339 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.339-4.656l.767-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_21" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -27945.986 4721.314)"
               fill={getLotTextColor('13')}>
                <tspan x={0.461} y={13.591}>
                  {"13\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-46" 
             className={getLotCursorStyle("46")}
             onClick={() => handleLotClickWithAvailability("46")}
            >
              <path
                id="shape_22"
               fill={getLotFillColor('46')}
               stroke={getLotStrokeColor('46')}
               d="m177.082 750.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.656l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_22" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -28013.302 7913.911)"
               fill={getLotTextColor('46')}>
                <tspan x={0.135} y={13.591}>
                  {"46\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-12" 
             className={getLotCursorStyle("12")}
             onClick={() => handleLotClickWithAvailability("12")}
            >
              <path
                id="shape_23"
               fill={getLotFillColor('12')}
               stroke={getLotStrokeColor('12')}
               d="m89.26 781.157 71.064 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.655 4.338l-71.065-2.508a4.5 4.5 0 0 1-4.338-4.656l.767-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_23" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -29211.821 4707.827)"
               fill={getLotTextColor('12')}>
                <tspan x={0.166} y={13.591}>
                  {"12\n"}
                </tspan>
                <tspan x={8} y={30.591} />
              </text>
            </g>
            <g 
              id="lot-47" 
             className={getLotCursorStyle("47")}
             onClick={() => handleLotClickWithAvailability("47")}
            >
              <path
                id="shape_24"
               fill={getLotFillColor('47')}
               stroke={getLotStrokeColor('47')}
               d="m175.351 784.198 71.064 2.509a4.5 4.5 0 0 1 4.339 4.656l-.767 21.727a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.655l.766-21.728a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_24" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -29281.112 7866.753)"
               fill={getLotTextColor('47')}>
                <tspan x={0.093} y={13.591}>
                  {"47\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-11" 
             className={getLotCursorStyle("11")}
             onClick={() => handleLotClickWithAvailability("11")}
            >
              <path
                id="shape_25"
               fill={getLotFillColor('11')}
               stroke={getLotStrokeColor('11')}
               d="m87.647 815.645 71.064 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.338l-71.064-2.508a4.5 4.5 0 0 1-4.338-4.656l.767-21.728a4.5 4.5 0 0 1 4.656-4.338Z" />
              <text
               xmlSpace="preserve" id="text_25" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -30492.802 4702.339)"
               fill={getLotTextColor('11')}>
                <tspan x={0.15} y={13.591}>
                  {"11\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-48" 
             className={getLotCursorStyle("48")}
             onClick={() => handleLotClickWithAvailability("48")}
            >
              <path
                id="shape_26"
               fill={getLotFillColor('48')}
               stroke={getLotStrokeColor('48')}
               d="m173.738 818.686 71.064 2.508a4.5 4.5 0 0 1 4.339 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.338l-71.064-2.508a4.5 4.5 0 0 1-4.339-4.656l.767-21.728a4.5 4.5 0 0 1 4.656-4.338Z" />
              <text
               xmlSpace="preserve" id="text_26" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -30561.628 7824.145)"
               fill={getLotTextColor('48')}>
                <tspan x={0.128} y={13.591}>
                  {"48\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-10" 
             className={getLotCursorStyle("10")}
             onClick={() => handleLotClickWithAvailability("10")}
            >
              <path
                id="shape_27"
               fill={getLotFillColor('10')}
               stroke={getLotStrokeColor('10')}
               d="m87.082 849.054 71.064 2.508a4.5 4.5 0 0 1 4.339 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.339-4.656l.767-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_27" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -31732.291 4660.996)"
               fill={getLotTextColor('10')}>
                <tspan x={0.256} y={13.591}>
                  {"10\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-49" 
             className={getLotCursorStyle("49")}
             onClick={() => handleLotClickWithAvailability("49")}
            >
              <path
                id="shape_28"
               fill={getLotFillColor('49')}
               stroke={getLotStrokeColor('49')}
               d="m172.082 852.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.656l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_28" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -31800.607 7779.382)"
               fill={getLotTextColor('49')}>
                <tspan x={0.135} y={13.591}>
                  {"49\n"}
                </tspan>
                <tspan x={9.5} y={30.591} />
                <tspan x={9.5} y={47.591} />
              </text>
            </g>
            <g 
              id="lot-9" 
             className={getLotCursorStyle("9")}
             onClick={() => handleLotClickWithAvailability("9")}
            >
              <path
                id="shape_29"
               fill={getLotFillColor('9')}
               stroke={getLotStrokeColor('9')}
               d="m85.082 883.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.656l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_29" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -32996.4 4715.106)"
               fill={getLotTextColor('9')}>
                <tspan x={0.379} y={13.591}>
                  {"9\n"}
                </tspan>
                <tspan x={5} y={30.591} />
              </text>
            </g>
            <g 
              id="lot-50" 
             className={getLotCursorStyle("50")}
             onClick={() => handleLotClickWithAvailability("50")}
            >
              <path
                id="shape_30"
               fill={getLotFillColor('50')}
               stroke={getLotStrokeColor('50')}
               d="m171.082 886.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.656l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_30" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -33062.71 7759.276)"
               fill={getLotTextColor('50')}>
                <tspan x={0.169} y={13.591}>
                  {"50\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-8" 
             className={getLotCursorStyle("8")}
             onClick={() => handleLotClickWithAvailability("8")}
            >
              <path
                id="shape_31"
               fill={getLotFillColor('8')}
               stroke={getLotStrokeColor('8')}
               d="m84.082 917.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.656l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_31" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -34258.501 4695)"
               fill={getLotTextColor('8')}>
                <tspan x={0.372} y={13.591}>
                  {"8\n"}
                </tspan>
                <tspan x={5} y={30.591} />
              </text>
            </g>
            <g 
              id="lot-51" 
             className={getLotCursorStyle("51")}
             onClick={() => handleLotClickWithAvailability("51")}
            >
              <path
                id="shape_32"
               fill={getLotFillColor('51')}
               stroke={getLotStrokeColor('51')}
               d="m169.082 920.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.656l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_32" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -34325.813 7739.183)"
               fill={getLotTextColor('51')}>
                <tspan x={0.063} y={13.591}>
                  {"51\n"}
                </tspan>
                <tspan x={8} y={30.591} />
              </text>
            </g>
            <g 
              id="lot-7" 
             className={getLotCursorStyle("7")}
             onClick={() => handleLotClickWithAvailability("7")}
            >
              <path
                id="shape_33"
               fill={getLotFillColor('7')}
               stroke={getLotStrokeColor('7')}
               d="m82.082 950.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.656l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_33" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -35484.5 4674.407)"
               fill={getLotTextColor('7')}>
                <tspan x={0.337} y={13.591}>
                  {"7\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-6" 
             className={getLotCursorStyle("6")}
             onClick={() => handleLotClickWithAvailability("6")}
            >
              <path
                id="shape_34"
               fill={getLotFillColor('6')}
               stroke={getLotStrokeColor('6')}
               d="m81.082 984.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.732a4.494 4.494 0 0 1-4.656 4.33l-71.064-2.5a4.507 4.507 0 0 1-4.338-4.66l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_34" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -36746.1 4617.182)"
               fill={getLotTextColor('6')}>
                <tspan x={0.379} y={13.591}>
                  {"6\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-5" 
             className={getLotCursorStyle("5")}
             onClick={() => handleLotClickWithAvailability("5")}
            >
              <path
                id="shape_35"
               fill={getLotFillColor('5')}
               stroke={getLotStrokeColor('5')}
               d="m79.702 1018 70.306 2.84c2.484.1 4.436 2.2 4.36 4.68l-.678 22.4a4.45 4.45 0 0 1-4.633 4.32l-70.306-2.85a4.55 4.55 0 0 1-4.36-4.68l.678-22.39a4.445 4.445 0 0 1 4.633-4.32Z" />
              <text
               xmlSpace="preserve" id="text_35" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="matrix(.9995 .03184 -.0222 .99975 105.426 1025.91)"
               fill={getLotTextColor('5')}>
                <tspan x={4.405} y={13.591}>
                  {"5"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-54" 
             className={getLotCursorStyle("54")}
             onClick={() => handleLotClickWithAvailability("54")}
            >
              <path
                id="shape_36"
               fill={getLotFillColor('54')}
               stroke={getLotStrokeColor('54')}
               d="m164.689 1021.75 70.305 4.59c2.48.16 4.471 2.31 4.446 4.79l-.265 26.88c-.025 2.48-2.055 4.36-4.535 4.2l-70.305-4.59c-2.48-.16-4.471-2.3-4.446-4.79l.265-26.87c.024-2.49 2.055-4.37 4.535-4.21Z" />
              <text
               xmlSpace="preserve" id="text_36" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="matrix(.99847 .05536 -.0028 1 189.102 1032.17)"
               fill={getLotTextColor('54')}>
                <tspan x={1.636} y={13.591}>
                  {"54\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-53" 
             className={getLotCursorStyle("53")}
             onClick={() => handleLotClickWithAvailability("53")}
            >
              <path
                id="shape_37"
               fill={getLotFillColor('53')}
               stroke={getLotStrokeColor('53')}
               d="m166.082 988.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.732a4.494 4.494 0 0 1-4.656 4.33l-71.064-2.5a4.507 4.507 0 0 1-4.338-4.66l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_37" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -36850.015 7624.746)"
               fill={getLotTextColor('53')}>
                <tspan x={0.374} y={13.591}>
                  {"53\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-52" 
             className={getLotCursorStyle("52")}
             onClick={() => handleLotClickWithAvailability("52")}
            >
              <path
                id="shape_38"
               fill={getLotFillColor('52')}
               stroke={getLotStrokeColor('52')}
               d="m168.082 954.054 71.065 2.508a4.5 4.5 0 0 1 4.338 4.656l-.767 21.728a4.5 4.5 0 0 1-4.656 4.339l-71.064-2.509a4.5 4.5 0 0 1-4.338-4.656l.766-21.727a4.5 4.5 0 0 1 4.656-4.339Z" />
              <text
               xmlSpace="preserve" id="text_38" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(1.544 -35587.413 7681.958)"
               fill={getLotTextColor('52')}>
                <tspan x={0.079} y={13.591}>
                  {"52\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-4" 
             className={getLotCursorStyle("4")}
             onClick={() => handleLotClickWithAvailability("4")}
            >
              <path
                id="shape_39"
               fill={getLotFillColor('4')}
               stroke={getLotStrokeColor('4')}
               d="m73.048 1118.02 70.631 8.23a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.59a4.5 4.5 0 0 1-4.99 3.95l-70.631-8.22a4.5 4.5 0 0 1-3.95-4.99l2.516-21.6a4.505 4.505 0 0 1 4.99-3.95Z" />
              <text
               xmlSpace="preserve" id="text_39" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(6.166 -10421.64 1513.85)"
               fill={getLotTextColor('4')}>
                <tspan x={0.256} y={13.591}>
                  {"4"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-55" 
             className={getLotCursorStyle("55")}
             onClick={() => handleLotClickWithAvailability("55")}
            >
              <path
                id="shape_40"
               fill={getLotFillColor('55')}
               stroke={getLotStrokeColor('55')}
               d="m155.919 1127.86 70.631 8.23a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.59a4.5 4.5 0 0 1-4.99 3.95l-70.631-8.22a4.5 4.5 0 0 1-3.949-4.99l2.515-21.6a4.5 4.5 0 0 1 4.99-3.95Z" />
              <text
               xmlSpace="preserve" id="text_40" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(6.166 -10469.546 2250.934)"
               fill={getLotTextColor('55')}>
                <tspan x={0.477} y={13.591}>
                  {"55"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-3" 
             className={getLotCursorStyle("3")}
             onClick={() => handleLotClickWithAvailability("3")}
            >
              <path
                id="shape_41"
               fill={getLotFillColor('3')}
               stroke={getLotStrokeColor('3')}
               d="m68.048 1152.02 70.631 8.23a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.59a4.5 4.5 0 0 1-4.99 3.95l-70.631-8.22a4.5 4.5 0 0 1-3.95-4.99l2.516-21.6a4.505 4.505 0 0 1 4.99-3.95Z" />
              <text
               xmlSpace="preserve" id="text_41" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(6.166 -10739.764 1484.436)"
               fill={getLotTextColor('3')}>
                <tspan x={0.386} y={13.591}>
                  {"3"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-2" 
             className={getLotCursorStyle("2")}
             onClick={() => handleLotClickWithAvailability("2")}
            >
              <path
                id="shape_42"
               fill={getLotFillColor('2')}
               stroke={getLotStrokeColor('2')}
               d="m64.048 1186.02 70.631 8.23a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.59a4.5 4.5 0 0 1-4.99 3.95l-70.631-8.22a4.5 4.5 0 0 1-3.95-4.99l2.516-21.6a4.505 4.505 0 0 1 4.99-3.95Z" />
              <text
               xmlSpace="preserve" id="text_42" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(6.166 -11043.077 1458.634)"
               fill={getLotTextColor('2')}>
                <tspan x={0.091} y={13.591}>
                  {"2"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-1" 
             className={getLotCursorStyle("1")}
             onClick={() => handleLotClickWithAvailability("1")}
            >
              <path
                id="shape_43"
               fill={getLotFillColor('1')}
               stroke={getLotStrokeColor('1')}
               d="m60.048 1220.02 70.631 8.23a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.59a4.5 4.5 0 0 1-4.99 3.95l-70.631-8.22a4.5 4.5 0 0 1-3.95-4.99l2.516-21.6a4.505 4.505 0 0 1 4.99-3.95Z" />
              <text
               xmlSpace="preserve" id="text_43" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(6.166 -11375.968 1462.735)"
               fill={getLotTextColor('1')}>
                <tspan x={0.075} y={13.591}>
                  {"1"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-57" 
             className={getLotCursorStyle("57")}
             onClick={() => handleLotClickWithAvailability("57")}
            >
              <path
                id="shape_44"
               fill={getLotFillColor('57')}
               stroke={getLotStrokeColor('57')}
               d="m148.048 1196.02 70.631 8.23a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.59a4.5 4.5 0 0 1-4.99 3.95l-70.631-8.22a4.5 4.5 0 0 1-3.95-4.99l2.516-21.6a4.505 4.505 0 0 1 4.99-3.95Z" />
              <text
               xmlSpace="preserve" id="text_44" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(6.166 -11106.216 2211.947)"
               fill={getLotTextColor('57')}>
                <tspan x={0.325} y={13.591}>
                  {"57"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-58" 
             className={getLotCursorStyle("58")}
             onClick={() => handleLotClickWithAvailability("58")}
            >
              <path
                id="shape_45"
               fill={getLotFillColor('58')}
               stroke={getLotStrokeColor('58')}
               d="m144.048 1230.02 70.631 8.23a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.59a4.5 4.5 0 0 1-4.99 3.95l-70.631-8.22a4.5 4.5 0 0 1-3.95-4.99l2.516-21.6a4.505 4.505 0 0 1 4.99-3.95Z" />
              <text
               xmlSpace="preserve" id="text_45" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(6.166 -11423.84 2191.815)"
               fill={getLotTextColor('58')}>
                <tspan x={0.36} y={13.591}>
                  {"58\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-56" 
             className={getLotCursorStyle("56")}
             onClick={() => handleLotClickWithAvailability("56")}
            >
              <path
                id="shape_46"
               fill={getLotFillColor('56')}
               stroke={getLotStrokeColor('56')}
               d="m152.048 1162.02 70.631 8.23a4.5 4.5 0 0 1 3.949 4.99l-2.515 21.59a4.5 4.5 0 0 1-4.99 3.95l-70.631-8.22a4.5 4.5 0 0 1-3.95-4.99l2.516-21.6a4.505 4.505 0 0 1 4.99-3.95Z" />
              <text
               xmlSpace="preserve" id="text_46" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(6.166 -10788.592 2232.08)"
               fill={getLotTextColor('56')}>
                <tspan x={0.367} y={13.591}>
                  {"56"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-20" 
             className={getLotCursorStyle("20")}
             onClick={() => handleLotClickWithAvailability("20")}
            >
              <path
                id="shape_47"
               fill={getLotFillColor('20')}
               stroke={getLotStrokeColor('20')}
               d="m115.07 461.549 70.868 5.842a4.5 4.5 0 0 1 4.116 4.855l-1.787 21.667a4.5 4.5 0 0 1-4.854 4.116l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_47" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -6290.788 2137.459)"
               fill={getLotTextColor('20')}>
                <tspan x={0.271} y={13.591}>
                  {"20"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-39" 
             className={getLotCursorStyle("39")}
             onClick={() => handleLotClickWithAvailability("39")}
            >
              <path
                id="shape_48"
               fill={getLotFillColor('39')}
               stroke={getLotStrokeColor('39')}
               d="m202.07 468.549 70.868 5.842a4.5 4.5 0 0 1 4.116 4.855l-1.787 21.667a4.5 4.5 0 0 1-4.854 4.116l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_48" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -6341.948 3317.447)"
               fill={getLotTextColor('39')}>
                <tspan x={0.265} y={13.591}>
                  {"39\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-19" 
             className={getLotCursorStyle("19")}
             onClick={() => handleLotClickWithAvailability("19")}
            >
              <path
                id="shape_49"
               fill={getLotFillColor('19')}
               stroke={getLotStrokeColor('19')}
               d="m112.07 495.549 70.868 5.842a4.5 4.5 0 0 1 4.116 4.855l-1.787 21.667a4.5 4.5 0 0 1-4.854 4.116l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_49" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -6752.567 2127.423)"
               fill={getLotTextColor('19')}>
                <tspan x={0.454} y={13.591}>
                  {"19\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-40" 
             className={getLotCursorStyle("40")}
             onClick={() => handleLotClickWithAvailability("40")}
            >
              <path
                id="shape_50"
               fill={getLotFillColor('40')}
               stroke={getLotStrokeColor('40')}
               d="m199.07 502.549 70.868 5.842a4.5 4.5 0 0 1 4.116 4.855l-1.787 21.667a4.5 4.5 0 0 1-4.854 4.116l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_50" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -6802.723 3280.36)"
               fill={getLotTextColor('40')}>
                <tspan x={0.437} y={13.591}>
                  {"40\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-18" 
             className={getLotCursorStyle("18")}
             onClick={() => handleLotClickWithAvailability("18")}
            >
              <path
                id="shape_51"
               fill={getLotFillColor('18')}
               stroke={getLotStrokeColor('18')}
               d="m109.07 530.549 70.868 5.842a4.5 4.5 0 0 1 4.116 4.855l-1.787 21.667a4.5 4.5 0 0 1-4.854 4.116l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_51" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -7227.367 2104.355)"
               fill={getLotTextColor('18')}>
                <tspan x={0.447} y={13.591}>
                  {"18\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-41" 
             className={getLotCursorStyle("41")}
             onClick={() => handleLotClickWithAvailability("41")}
            >
              <path
                id="shape_52"
               fill={getLotFillColor('41')}
               stroke={getLotStrokeColor('41')}
               d="m196.07 537.549 70.868 5.842a4.5 4.5 0 0 1 4.116 4.855l-1.787 21.667a4.5 4.5 0 0 1-4.854 4.116l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_52" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -7278.527 3284.343)"
               fill={getLotTextColor('41')}>
                <tspan x={0.399} y={13.591}>
                  {"41\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-17" 
             className={getLotCursorStyle("17")}
             onClick={() => handleLotClickWithAvailability("17")}
            >
              <path
                id="shape_53"
               fill={getLotFillColor('17')}
               stroke={getLotStrokeColor('17')}
               d="m106.07 564.549 70.868 5.842a4.5 4.5 0 0 1 4.115 4.855l-1.786 21.667a4.5 4.5 0 0 1-4.854 4.116l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_53" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -7688.644 2080.786)"
               fill={getLotTextColor('17')}>
                <tspan x={0.412} y={13.591}>
                  {"17\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-42" 
             className={getLotCursorStyle("42")}
             onClick={() => handleLotClickWithAvailability("42")}
            >
              <path
                id="shape_54"
               fill={getLotFillColor('42')}
               stroke={getLotStrokeColor('42')}
               d="m193.07 571.549 70.868 5.842a4.5 4.5 0 0 1 4.116 4.855l-1.787 21.667a4.5 4.5 0 0 1-4.854 4.116l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_54" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -7739.302 3247.241)"
               fill={getLotTextColor('42')}>
                <tspan x={0.347} y={13.591}>
                  {"42\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-16" 
             className={getLotCursorStyle("16")}
             onClick={() => handleLotClickWithAvailability("16")}
            >
              <path
                id="shape_55"
               fill={getLotFillColor('16')}
               stroke={getLotStrokeColor('16')}
               d="m103.301 598.21 70.868 5.842a4.5 4.5 0 0 1 4.115 4.854l-1.786 21.668a4.5 4.5 0 0 1-4.854 4.115l-70.869-5.842a4.5 4.5 0 0 1-4.115-4.854l1.787-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_55" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -8145.208 2060.158)"
               fill={getLotTextColor('16')}>
                <tspan x={0.454} y={13.591}>
                  {"16\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-43" 
             className={getLotCursorStyle("43")}
             onClick={() => handleLotClickWithAvailability("43")}
            >
              <path
                id="shape_56"
               fill={getLotFillColor('43')}
               stroke={getLotStrokeColor('43')}
               d="m190.07 605.549 70.868 5.842a4.5 4.5 0 0 1 4.116 4.855l-1.787 21.667a4.5 4.5 0 0 1-4.854 4.116l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_56" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -8200.58 3223.673)"
               fill={getLotTextColor('43')}>
                <tspan x={0.142} y={13.591}>
                  {"43\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-15" 
             className={getLotCursorStyle("15")}
             onClick={() => handleLotClickWithAvailability("15")}
            >
              <path
                id="shape_57"
               fill={getLotFillColor('15')}
               stroke={getLotStrokeColor('15')}
               d="m100.07 632.584 70.868 5.842a4.5 4.5 0 0 1 4.115 4.854l-1.786 21.668a4.5 4.5 0 0 1-4.854 4.115l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.854l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_57" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -8611.658 2033.666)"
               fill={getLotTextColor('15')}>
                <tspan x={0.063} y={13.591}>
                  {"15\n"}
                </tspan>
              </text>
            </g>
            <g 
              id="lot-44" 
             className={getLotCursorStyle("44")}
             onClick={() => handleLotClickWithAvailability("44")}
            >
              <path
                id="shape_58"
               fill={getLotFillColor('44')}
               stroke={getLotStrokeColor('44')}
               d="m187.07 639.549 70.868 5.842a4.5 4.5 0 0 1 4.116 4.855l-1.787 21.667a4.5 4.5 0 0 1-4.854 4.116l-70.868-5.842a4.5 4.5 0 0 1-4.115-4.855l1.786-21.668a4.5 4.5 0 0 1 4.854-4.115Z" />
              <text
               xmlSpace="preserve" id="text_58" fontFamily="Inter" fontSize={14} fontWeight="bold" letterSpacing="0em" style={{ whiteSpace: "pre", }} transform="rotate(4.235 -8661.856 3200.104)"
               fill={getLotTextColor('44')}>
                <tspan x={0.012} y={13.591}>
                  {"44\n"}
                </tspan>
              </text>
            </g>
            <path
              id="Arrow 1"
          fill="#DEEEEC"
          d="m66.988 1278.17 3.86 4.29 1.788-5.49zm15.74 5.12.154-.47-11.46-3.74-.155.48-.155.48 11.46 3.73z"
            />
          </g>
          <g id="environment">
        <g id="Rectangle 3" fill="#D9D9D9">
          <path d="m18.988 1336.67 13 8-5 14.5-14-6.88zM67.488 1362.67l13 8-5 14.5-14-6.88z" />
        </g>
            <path
              id="Rectangle 4"
          fill="#5A5F6A"
          d="M33.001 1346.17h37v2.256h-37z"
          transform="rotate(26.67 33 1346.17)"
            />
            <path
              id="Rectangle 6"
          fill="#5A5F6A"
          d="M29.001 1358.17h37v2.256h-37z"
          transform="rotate(26.67 29 1358.17)"
            />
            <path
              id="Rectangle 5"
          fill="#5A5F6A"
          d="M32.001 1349.17h37v2.256h-37z"
          transform="rotate(26.67 32 1349.17)"
            />
            <path
              id="Rectangle 7"
          fill="#5A5F6A"
          d="M31.001 1352.17h37v2.256h-37z"
          transform="rotate(26.67 31 1352.17)"
            />
            <path
              id="Rectangle 8"
          fill="#5A5F6A"
          d="M30.001 1355.17h37v2.256h-37z"
          transform="rotate(26.67 30 1355.17)"
            />
            <path
              id="Arrow 1_2"
          fill="#DEEEEC"
          d="m49.988 1383.17-4.73 3.31 5.231 2.44zm-7 15 .453.21 5.097-10.92-.453-.22-.453-.21-5.097 10.93z"
            />
            <path
              id="Arrow 3"
          fill="#DEEEEC"
          d="m76.202 1320.17-5.479-1.82 1.162 5.65zm-16.214 3.33.1.49 11.807-2.43-.101-.49-.1-.49-11.807 2.43z"
            />
            <path
              id="Arrow 2_2"
          fill="#DEEEEC"
          d="m24.988 1389.17 4.73-3.31-5.232-2.45zm7-15-.453-.21-5.097 10.92.453.21.453.21 5.097-10.92z"
            />
            <text
              xmlSpace="preserve"
              id="Lote Commercial"
          fill="#DEEEEC"
              fontFamily="Inter"
              fontSize={9}
              fontWeight="bold"
              letterSpacing="0em"
              style={{
                whiteSpace: "pre",
              }}
          transform="rotate(-13.373 5869.995 156.442)"
            >
              <tspan x={24.367} y={8.773}>
                {"Lote "}
              </tspan>
              <tspan x={7.62} y={19.773}>
                {"Commercial"}
              </tspan>
            </text>
        <path
          id="Line 1"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
          d="m73.998 1431 28.898-93"
        />
        <path
          id="Line 2"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
          d="m102.767 1337.81 151.045-32.58"
        />
          </g>
          <g id="Green areas">
        <circle id="Ellipse 1" cx={92.988} cy={1069.17} r={8} fill="#4E986F" />
        <circle id="Ellipse 2" cx={122.988} cy={1074.17} r={8} fill="#4E986F" />
        <circle id="Ellipse 3" cx={132.988} cy={1106.17} r={8} fill="#4E986F" />
        <circle id="Ellipse 4" cx={185.988} cy={1111.17} r={8} fill="#4E986F" />
        <circle
          id="Ellipse 5"
          cx={179.488}
          cy={1075.67}
          r={6.5}
          fill="#4E986F"
        />
        <circle
          id="Ellipse 9"
          cx={209.488}
          cy={1089.67}
          r={6.5}
          fill="#4E986F"
        />
            <ellipse
              id="Ellipse 6"
          cx={215.953}
          cy={1114.66}
          fill="#4E986F"
              rx={8}
              ry={10}
          transform="rotate(-12.43 215.953 1114.66)"
            />
            <ellipse
              id="Ellipse 7"
          cx={80.14}
          cy={1105.16}
          fill="#4E986F"
              rx={6.668}
              ry={7.733}
          transform="rotate(-12.43 80.14 1105.16)"
            />
            <ellipse
              id="Ellipse 8"
          cx={110.14}
          cy={1098.16}
          fill="#4E986F"
              rx={6.338}
              ry={10.878}
          transform="rotate(-12.43 110.14 1098.16)"
        />
        <circle
          id="Ellipse 10"
          cx={149.988}
          cy={373.168}
          r={7}
          fill="#4E986F"
        />
        <ellipse
          id="Ellipse 22"
          cx={153.988}
          cy={369.668}
          fill="#339583"
          rx={8}
          ry={8.5}
        />
        <ellipse
          id="Ellipse 23"
          cx={145.988}
          cy={363.168}
          fill="#407975"
          rx={8}
          ry={11}
        />
            <ellipse
              id="Ellipse 18"
          cx={152.988}
          cy={347.168}
          fill="#64C48F"
              rx={5}
              ry={7}
            />
        <ellipse
          id="Ellipse 39"
          cx={156.988}
          cy={349.168}
          fill="#6CCE6C"
          rx={5}
          ry={7}
        />
        <ellipse
          id="Ellipse 40"
          cx={151.988}
          cy={352.168}
          fill="#79CC69"
          rx={5}
          ry={7}
        />
        <ellipse
          id="Ellipse 41"
          cx={148.988}
          cy={349.168}
          fill="#7FD3A5"
          rx={5}
          ry={7}
        />
        <ellipse
          id="Ellipse 11"
          cx={245.988}
          cy={395.668}
          fill="#52BE83"
          rx={8}
          ry={9.5}
        />
        <path
          id="Ellipse 30"
          fill="#4E9892"
          d="M247.988 389.168a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
        />
        <circle
          id="Ellipse 31"
          cx={238.488}
          cy={394.668}
          r={7.5}
          fill="#63CD93"
        />
        <ellipse
          id="Ellipse 44"
          cx={245.988}
          cy={387.668}
          fill="#52BE83"
          rx={8}
          ry={9.5}
        />
        <path
          id="Ellipse 45"
          fill="#4E9892"
          d="M250.988 380.168c0 4.418-3.805 8-8.5 8-4.694 0-8.5-3.582-8.5-8s3.806-8 8.5-8c4.695 0 8.5 3.581 8.5 8"
        />
        <ellipse
          id="Ellipse 46"
          cx={239.488}
          cy={387.168}
          fill="#63CD93"
          rx={8.5}
          ry={8}
        />
        <ellipse
          id="Ellipse 47"
          cx={254.988}
          cy={392.668}
          fill="#52BE83"
          rx={8}
          ry={9.5}
        />
        <path
          id="Ellipse 48"
          fill="#4E9892"
          d="M256.988 386.168a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
        />
        <ellipse
          id="Ellipse 49"
          cx={248.988}
          cy={390.168}
          fill="#63CD93"
          rx={5}
          ry={6}
        />
        <ellipse
          id="Ellipse 50"
          cx={225.988}
          cy={366.668}
          fill="#52BE83"
          rx={8}
          ry={9.5}
        />
        <path
          id="Ellipse 51"
          fill="#4E9892"
          d="M227.988 360.168a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
        />
        <circle
          id="Ellipse 52"
          cx={217.988}
          cy={365.168}
          r={7}
          fill="#63CD93"
        />
        <ellipse
          id="Ellipse 53"
          cx={174.988}
          cy={398.668}
          fill="#52BE83"
          rx={8}
          ry={9.5}
        />
        <path
          id="Ellipse 54"
          fill="#4E9892"
          d="M176.988 392.168a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
        />
        <circle
          id="Ellipse 55"
          cx={166.988}
          cy={397.168}
          r={7}
          fill="#63CD93"
        />
        <ellipse
          id="Ellipse 56"
          cx={179.988}
          cy={375.668}
          fill="#52BE83"
          rx={8}
          ry={9.5}
        />
        <path
          id="Ellipse 57"
          fill="#4E9892"
          d="M181.988 369.168a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
        />
        <circle
          id="Ellipse 58"
          cx={171.988}
          cy={374.168}
          r={7}
          fill="#63CD93"
        />
            <ellipse
              id="Ellipse 12"
          cx={203.171}
          cy={394.551}
          fill="#E8D0A0"
              rx={6.5}
          ry={10.128}
          transform="rotate(-30.866 203.171 394.551)"
        />
        <ellipse
          id="Ellipse 29"
          cx={202.444}
          cy={399.989}
          fill="#D47D7C"
          rx={6.5}
          ry={7.557}
          transform="rotate(-30.866 202.444 399.989)"
        />
        <ellipse
          id="Ellipse 28"
          cx={206.823}
          cy={392.664}
          fill="#D59E8E"
          rx={6.5}
          ry={8.53}
          transform="rotate(-9.627 206.823 392.664)"
            />
            <ellipse
              id="Ellipse 13"
          cx={179.844}
          cy={358.181}
          fill="#4E9798"
              rx={5.578}
          ry={6.45}
          transform="rotate(-30.866 179.844 358.181)"
            />
            <ellipse
          id="Ellipse 43"
          cx={183.085}
          cy={352.566}
          fill="#52BD98"
          rx={5.578}
          ry={6.45}
          transform="rotate(-30.866 183.085 352.566)"
        />
        <ellipse
          id="Ellipse 42"
          cx={186.22}
          cy={358.81}
          fill="#4E987C"
          rx={5.578}
          ry={5.717}
          transform="rotate(-30.866 186.22 358.81)"
        />
        <path
              id="Ellipse 14"
          fill="#3B885E"
          d="M173.254 401.956c-1.565 4.126-5.169 6.585-8.05 5.493-2.881-1.093-3.947-5.324-2.382-9.45s5.169-6.585 8.05-5.493c2.88 1.093 3.947 5.324 2.382 9.45"
        />
        <path
          id="Ellipse 33"
          fill="#70D89F"
          d="M169.254 396.596c-1.565 4.126-5.169 6.585-8.05 5.493-2.881-1.093-3.947-5.324-2.382-9.45s5.169-6.586 8.05-5.493c2.88 1.093 3.947 5.323 2.382 9.45"
        />
        <ellipse
          id="Ellipse 32"
          cx={163.587}
          cy={400.165}
          fill="#5BCC8E"
              rx={5.578}
          ry={6.72}
          transform="rotate(20.772 163.587 400.165)"
            />
            <ellipse
              id="Ellipse 20"
          cx={172.198}
          cy={378.497}
          fill="#4E986F"
              rx={5.578}
              ry={5.715}
          transform="rotate(-6.734 172.198 378.497)"
        />
        <ellipse
          id="Ellipse 24"
          cx={176.158}
          cy={375.997}
          fill="#348071"
          rx={6.59}
          ry={6.099}
          transform="rotate(-6.734 176.158 375.997)"
        />
        <ellipse
          id="Ellipse 25"
          cx={172.248}
          cy={370.997}
          fill="#369B87"
          rx={6.59}
          ry={6.099}
          transform="rotate(-6.734 172.248 370.997)"
            />
            <ellipse
              id="Ellipse 21"
          cx={134.198}
          cy={398.497}
          fill="#55CAA9"
              rx={5.578}
              ry={5.715}
          transform="rotate(-6.734 134.198 398.497)"
        />
        <ellipse
          id="Ellipse 34"
          cx={137.08}
          cy={394.493}
          fill="#48A88D"
          rx={5.578}
          ry={4.704}
          transform="rotate(-6.734 137.08 394.493)"
        />
        <ellipse
          id="Ellipse 35"
          cx={141.04}
          cy={397.993}
          fill="#48A88D"
          rx={6.708}
          ry={6.081}
          transform="rotate(33.33 141.04 397.993)"
        />
        <ellipse
          id="Ellipse 36"
          cx={143.08}
          cy={394.493}
          fill="#38967B"
          rx={5.578}
          ry={4.704}
          transform="rotate(-6.734 143.08 394.493)"
        />
        <ellipse
          id="Ellipse 37"
          cx={130.558}
          cy={393.829}
          fill="#33A988"
          rx={6.752}
          ry={5.528}
          transform="rotate(-33.567 130.558 393.829)"
        />
        <ellipse
          id="Ellipse 38"
          cx={138.813}
          cy={388.18}
          fill="#39987D"
          rx={6.095}
          ry={5.941}
          transform="rotate(11.204 138.813 388.18)"
        />
        <ellipse
          id="Ellipse 79"
          cx={94.311}
          cy={1077.5}
          fill="#55CAA9"
          rx={5.578}
          ry={5.715}
          transform="rotate(-6.734 94.31 1077.5)"
        />
        <ellipse
          id="Ellipse 80"
          cx={101.152}
          cy={1076.99}
          fill="#48A88D"
          rx={6.708}
          ry={6.081}
          transform="rotate(33.33 101.152 1076.99)"
        />
        <ellipse
          id="Ellipse 81"
          cx={103.192}
          cy={1073.49}
          fill="#38967B"
          rx={5.578}
          ry={4.704}
          transform="rotate(-6.734 103.192 1073.49)"
        />
        <ellipse
          id="Ellipse 82"
          cx={90.67}
          cy={1072.83}
          fill="#33A988"
          rx={6.752}
          ry={5.528}
          transform="rotate(-33.567 90.67 1072.83)"
        />
        <ellipse
          id="Ellipse 83"
          cx={98.925}
          cy={1067.18}
          fill="#39987D"
          rx={6.095}
          ry={5.941}
          transform="rotate(11.204 98.925 1067.18)"
        />
        <ellipse
          id="Ellipse 84"
          cx={7.535}
          cy={7.284}
          fill="#55CAA9"
          rx={7.535}
          ry={7.284}
          transform="matrix(.99387 -.11056 .12437 .99224 120.252 1068.84)"
        />
        <ellipse
          id="Ellipse 85"
          cx={8.912}
          cy={7.891}
          fill="#48A88D"
          rx={8.912}
          ry={7.891}
          transform="matrix(.85008 .52665 -.5724 .81998 134.836 1063.43)"
        />
        <ellipse
          id="Ellipse 86"
          cx={7.535}
          cy={5.996}
          fill="#38967B"
          rx={7.535}
          ry={5.996}
          transform="matrix(.99387 -.11056 .12437 .99224 132.418 1065.02)"
        />
        <ellipse
          id="Ellipse 129"
          cx={7.535}
          cy={5.996}
          fill="#38967B"
          rx={7.535}
          ry={5.996}
          transform="matrix(.99387 -.11056 .12437 .99224 167.988 1065.83)"
        />
        <ellipse
          id="Ellipse 130"
          cx={4.507}
          cy={5.829}
          fill="#38967B"
          rx={4.507}
          ry={5.829}
          transform="matrix(.99387 -.11056 .12437 .99224 178.029 1069.16)"
        />
        <ellipse
          id="Ellipse 87"
          cx={8.969}
          cy={7.175}
          fill="#33A988"
          rx={8.969}
          ry={7.175}
          transform="matrix(.84794 -.53009 .57586 .81755 111.988 1068.18)"
        />
        <ellipse
          id="Ellipse 88"
          cx={8.222}
          cy={7.584}
          fill="#39987D"
          rx={8.222}
          ry={7.584}
          transform="matrix(.98303 .18344 -.20576 .9786 128.362 1053.17)"
        />
        <ellipse
          id="Ellipse 89"
          cx={7.177}
          cy={7.667}
          fill="#55CAA9"
          rx={7.177}
          ry={7.667}
          transform="matrix(.7088 .7054 -.55093 .83455 131.436 1090)"
        />
        <ellipse
          id="Ellipse 90"
          cx={9.609}
          cy={7.203}
          fill="#48A88D"
          rx={9.609}
          ry={7.203}
          transform="matrix(.15508 .9879 -.97312 .2303 143.845 1096.87)"
        />
        <ellipse
          id="Ellipse 91"
          cx={7.177}
          cy={6.311}
          fill="#38967B"
          rx={7.177}
          ry={6.311}
          transform="matrix(.7088 .7054 -.55093 .83455 141.329 1096.28)"
        />
        <ellipse
          id="Ellipse 92"
          cx={8.015}
          cy={7.907}
          fill="#33A988"
          rx={8.015}
          ry={7.907}
          transform="matrix(.96656 .25644 -.17333 .98486 126.868 1083.17)"
        />
        <ellipse
          id="Ellipse 93"
          cx={8.334}
          cy={7.481}
          fill="#39987D"
          rx={8.334}
          ry={7.481}
          transform="matrix(.46803 .88371 -.78147 .62395 146.701 1083.82)"
        />
        <ellipse
          id="Ellipse 94"
          cx={9.157}
          cy={9.704}
          fill="#55CAA9"
          rx={9.157}
          ry={9.704}
          transform="matrix(.72278 .69108 -.56632 .82419 172.979 1087.71)"
        />
        <ellipse
          id="Ellipse 95"
          cx={12.023}
          cy={9.352}
          fill="#48A88D"
          rx={12.023}
          ry={9.352}
          transform="matrix(.16125 .98691 -.97511 .2217 189.123 1096.3)"
        />
        <ellipse
          id="Ellipse 96"
          cx={9.157}
          cy={7.988}
          fill="#38967B"
          rx={9.157}
          ry={7.988}
          transform="matrix(.72278 .69108 -.56632 .82419 185.851 1095.56)"
        />
        <ellipse
          id="Ellipse 97"
          cx={10.401}
          cy={9.896}
          fill="#33A988"
          rx={10.401}
          ry={9.896}
          transform="matrix(.96902 .247 -.18018 .98363 167.036 1079.17)"
        />
        <ellipse
          id="Ellipse 98"
          cx={10.512}
          cy={9.586}
          fill="#39987D"
          rx={10.512}
          ry={9.586}
          transform="matrix(.48277 .87575 -.79344 .60864 192.839 1079.99)"
        />
        <ellipse
          id="Ellipse 99"
          cx={9.157}
          cy={9.704}
          fill="#55CAA9"
          rx={9.157}
          ry={9.704}
          transform="matrix(-.36423 .93131 -.97764 -.21027 232.032 1101.91)"
        />
        <ellipse
          id="Ellipse 100"
          cx={12.023}
          cy={9.352}
          fill="#48A88D"
          rx={12.023}
          ry={9.352}
          transform="matrix(-.8514 .52451 -.57593 -.8175 230.233 1120.11)"
        />
        <ellipse
          id="Ellipse 101"
          cx={9.157}
          cy={7.988}
          fill="#38967B"
          rx={9.157}
          ry={7.988}
          transform="matrix(-.36423 .93131 -.97764 -.21027 229.672 1116.8)"
        />
        <ellipse
          id="Ellipse 102"
          cx={10.401}
          cy={9.896}
          fill="#33A988"
          rx={10.401}
          ry={9.896}
          transform="matrix(.14014 .99013 -.97824 .2075 237.672 1093.17)"
        />
        <ellipse
          id="Ellipse 103"
          cx={10.512}
          cy={9.586}
          fill="#39987D"
          rx={10.512}
          ry={9.586}
          transform="matrix(-.6263 .77958 -.86469 -.5023 246.73 1117.34)"
        />
        <ellipse
          id="Ellipse 104"
          cx={9.157}
          cy={9.704}
          fill="#55CAA9"
          rx={9.157}
          ry={9.704}
          transform="matrix(.2001 .97977 -.93504 .35454 229.26 1082.79)"
        />
        <ellipse
          id="Ellipse 105"
          cx={12.023}
          cy={9.352}
          fill="#48A88D"
          rx={12.023}
          ry={9.352}
          transform="matrix(-.4299 .90287 -.92763 -.3735 237.634 1099.05)"
        />
        <ellipse
          id="Ellipse 106"
          cx={9.157}
          cy={7.988}
          fill="#38967B"
          rx={9.157}
          ry={7.988}
          transform="matrix(.2001 .97977 -.93504 .35454 235.366 1096.57)"
        />
        <ellipse
          id="Ellipse 107"
          cx={10.401}
          cy={9.896}
          fill="#33A988"
          rx={10.401}
          ry={9.896}
          transform="matrix(.65552 .75518 -.7086 .7056 229.244 1072.38)"
        />
        <ellipse
          id="Ellipse 108"
          cx={10.512}
          cy={9.586}
          fill="#39987D"
          rx={10.512}
          ry={9.586}
          transform="matrix(-.10236 .99475 -.99885 .04799 249.981 1087.76)"
        />
        <ellipse
          id="Ellipse 109"
          cx={9.157}
          cy={9.704}
          fill="#55CAA9"
          rx={9.157}
          ry={9.704}
          transform="matrix(.75196 .6592 -.53018 .84789 217.111 1068.81)"
        />
        <ellipse
          id="Ellipse 110"
          cx={12.023}
          cy={9.352}
          fill="#48A88D"
          rx={12.023}
          ry={9.352}
          transform="matrix(.20374 .97902 -.96462 .26363 233.611 1076.69)"
        />
        <ellipse
          id="Ellipse 111"
          cx={9.157}
          cy={7.988}
          fill="#38967B"
          rx={9.157}
          ry={7.988}
          transform="matrix(.75196 .6592 -.53018 .84789 230.31 1076.09)"
        />
        <ellipse
          id="Ellipse 112"
          cx={10.401}
          cy={9.896}
          fill="#33A988"
          rx={10.401}
          ry={9.896}
          transform="matrix(.97878 .2049 -.13751 .9905 210.804 1060.53)"
        />
        <ellipse
          id="Ellipse 113"
          cx={10.512}
          cy={9.586}
          fill="#39987D"
          rx={10.512}
          ry={9.586}
          transform="matrix(.52015 .85407 -.7664 .64236 236.619 1060.23)"
        />
        <ellipse
          id="Ellipse 114"
          cx={9.157}
          cy={9.704}
          fill="#55CAA9"
          rx={9.157}
          ry={9.704}
          transform="matrix(-.42767 -.90394 .82371 -.567 76.074 1084.38)"
        />
        <ellipse
          id="Ellipse 115"
          cx={12.023}
          cy={9.352}
          fill="#48A88D"
          rx={12.023}
          ry={9.352}
          transform="matrix(.20253 -.97928 .98989 .14186 64.07 1070.59)"
        />
        <ellipse
          id="Ellipse 116"
          cx={9.157}
          cy={7.988}
          fill="#38967B"
          rx={9.157}
          ry={7.988}
          transform="matrix(-.42767 -.90394 .82371 -.567 66.862 1072.45)"
        />
        <ellipse
          id="Ellipse 117"
          cx={10.401}
          cy={9.896}
          fill="#33A988"
          rx={10.401}
          ry={9.896}
          transform="matrix(-.8165 -.57735 .52019 -.85405 78.568 1094.49)"
        />
        <ellipse
          id="Ellipse 118"
          cx={10.512}
          cy={9.586}
          fill="#39987D"
          rx={10.512}
          ry={9.586}
          transform="matrix(-.13747 -.9905 .95869 -.28447 54.765 1084.49)"
        />
        <ellipse
          id="Ellipse 119"
          cx={9.157}
          cy={9.704}
          fill="#55CAA9"
          rx={9.157}
          ry={9.704}
          transform="matrix(-.70244 -.71174 .58997 -.80743 78.674 1111.67)"
        />
        <ellipse
          id="Ellipse 120"
          cx={12.023}
          cy={9.352}
          fill="#48A88D"
          rx={12.023}
          ry={9.352}
          transform="matrix(-.13258 -.99117 .98113 -.19335 62.786 1102.62)"
        />
        <ellipse
          id="Ellipse 121"
          cx={9.157}
          cy={7.988}
          fill="#38967B"
          rx={9.157}
          ry={7.988}
          transform="matrix(-.70244 -.71174 .58997 -.80743 66.036 1103.45)"
        />
        <ellipse
          id="Ellipse 122"
          cx={10.401}
          cy={9.896}
          fill="#33A988"
          rx={10.401}
          ry={9.896}
          transform="matrix(-.96145 -.27498 .20861 -.978 84.368 1120.38)"
        />
        <ellipse
          id="Ellipse 123"
          cx={10.512}
          cy={9.586}
          fill="#39987D"
          rx={10.512}
          ry={9.586}
          transform="matrix(-.45718 -.88937 .81075 -.5854 58.6 1118.81)"
        />
        <ellipse
          id="Ellipse 124"
          cx={6.68}
          cy={7.21}
          fill="#55CAA9"
          rx={6.68}
          ry={7.21}
          transform="matrix(.60018 -.79986 .93636 .35103 96.276 1111.81)"
        />
        <ellipse
          id="Ellipse 125"
          cx={9.289}
          cy={6.4}
          fill="#48A88D"
          rx={9.289}
          ry={6.4}
          transform="matrix(.94623 -.3235 .41946 .90777 100.844 1099.76)"
        />
        <ellipse
          id="Ellipse 126"
          cx={6.68}
          cy={5.935}
          fill="#38967B"
          rx={6.68}
          ry={5.935}
          transform="matrix(.60018 -.79986 .93636 .35103 100.68 1102.06)"
        />
        <ellipse
          id="Ellipse 127"
          cx={7.158}
          cy={7.623}
          fill="#33A988"
          rx={7.158}
          ry={7.623}
          transform="matrix(.10196 -.99479 .99964 -.02697 90.5 1117.01)"
        />
        <ellipse
          id="Ellipse 128"
          cx={7.942}
          cy={6.845}
          fill="#39987D"
          rx={7.942}
          ry={6.845}
          transform="matrix(.80397 -.59466 .78327 .62168 87.988 1099.61)"
            />
            <ellipse
              id="Ellipse 15"
          cx={214.988}
          cy={364.319}
          fill="#4E986F"
              rx={6.588}
              ry={8.008}
          transform="rotate(20.772 214.988 364.319)"
        />
        <ellipse
          id="Ellipse 27"
          cx={210.988}
          cy={369.992}
          fill="#5ABA85"
          rx={6.588}
          ry={8.008}
          transform="rotate(-23.504 210.988 369.992)"
        />
        <ellipse
          id="Ellipse 26"
          cx={217.988}
          cy={367.992}
          fill="#64BE75"
          rx={6.588}
          ry={8.008}
          transform="rotate(20.772 217.988 367.992)"
        />
        <ellipse
          id="Ellipse 59"
          cx={233.223}
          cy={404.668}
          fill="#52BE83"
          rx={8}
          ry={9.5}
        />
        <path
          id="Ellipse 60"
          fill="#4E9892"
          d="M235.223 398.168a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
        />
        <ellipse
          id="Ellipse 61"
          cx={222.223}
          cy={402.319}
          fill="#4E986F"
          rx={6.588}
          ry={8.008}
          transform="rotate(20.772 222.223 402.319)"
        />
        <ellipse
          id="Ellipse 62"
          cx={218.223}
          cy={407.992}
          fill="#5ABA85"
          rx={6.588}
          ry={8.008}
          transform="rotate(-23.504 218.223 407.992)"
        />
        <ellipse
          id="Ellipse 63"
          cx={225.223}
          cy={405.992}
          fill="#64BE75"
          rx={6.588}
          ry={8.008}
          transform="rotate(20.772 225.223 405.992)"
        />
        <ellipse
          id="Ellipse 64"
          cx={198.984}
          cy={378.463}
          fill="#52BE83"
          rx={8}
          ry={9.5}
          transform="rotate(75.9 198.984 378.463)"
        />
        <path
          id="Ellipse 65"
          fill="#4E9892"
          d="M205.776 378.82a7 7 0 1 1-3.41-13.58 7 7 0 0 1 3.41 13.58"
        />
        <ellipse
          id="Ellipse 66"
          cx={198.582}
          cy={367.223}
          fill="#4E986F"
          rx={6.588}
          ry={8.008}
          transform="rotate(96.673 198.582 367.223)"
        />
        <ellipse
          id="Ellipse 67"
          cx={192.106}
          cy={364.725}
          fill="#5ABA85"
          rx={6.588}
          ry={8.008}
          transform="rotate(52.397 192.106 364.725)"
        />
        <ellipse
          id="Ellipse 68"
          cx={195.751}
          cy={371.027}
          fill="#64BE75"
          rx={6.588}
          ry={8.008}
          transform="rotate(96.673 195.751 371.027)"
        />
        <ellipse
          id="Ellipse 69"
          cx={271.295}
          cy={414.004}
          fill="#52BE83"
          rx={8}
          ry={9.5}
          transform="rotate(137.826 271.295 414.004)"
        />
        <path
          id="Ellipse 70"
          fill="#4E9892"
          d="M274.177 420.164a7 7 0 1 1 10.376-9.4 7 7 0 0 1-10.376 9.4"
        />
        <ellipse
          id="Ellipse 71"
          cx={281.024}
          cy={408.359}
          fill="#4E986F"
          rx={6.588}
          ry={8.008}
          transform="rotate(158.598 281.024 408.359)"
        />
        <ellipse
          id="Ellipse 72"
          cx={280.18}
          cy={401.469}
          fill="#5ABA85"
          rx={6.588}
          ry={8.008}
          transform="rotate(114.322 280.18 401.469)"
        />
        <ellipse
          id="Ellipse 73"
          cx={276.335}
          cy={407.651}
          fill="#64BE75"
          rx={6.588}
          ry={8.008}
          transform="rotate(158.598 276.335 407.651)"
        />
        <ellipse
          id="Ellipse 74"
          cx={277.343}
          cy={379.37}
          fill="#52BE83"
          rx={8}
          ry={9.5}
          transform="rotate(53.038 277.343 379.37)"
        />
        <path
          id="Ellipse 75"
          fill="#4E9892"
          d="M283.74 377.059a7 7 0 1 1-8.419-11.187 7 7 0 0 1 8.419 11.187"
        />
        <ellipse
          id="Ellipse 76"
          cx={272.606}
          cy={369.168}
          fill="#4E986F"
          rx={6.588}
          ry={8.008}
          transform="rotate(73.81 272.606 369.168)"
        />
        <ellipse
          id="Ellipse 77"
          cx={265.668}
          cy={369.383}
          fill="#5ABA85"
          rx={6.588}
          ry={8.008}
          transform="rotate(29.534 265.668 369.383)"
        />
        <ellipse
          id="Ellipse 78"
          cx={271.475}
          cy={373.774}
          fill="#64BE75"
          rx={6.588}
          ry={8.008}
          transform="rotate(73.81 271.475 373.774)"
            />
            <ellipse
              id="Ellipse 16"
          cx={266.988}
          cy={365.992}
          fill="#4E986F"
              rx={6.588}
              ry={8.008}
          transform="rotate(20.772 266.988 365.992)"
            />
            <ellipse
              id="Ellipse 17"
          cx={269.988}
          cy={410.992}
          fill="#4E986F"
              rx={6.588}
              ry={8.008}
          transform="rotate(-13.968 269.988 410.992)"
        />
        <ellipse
          id="Ellipse 131"
          cx={10.373}
          cy={12.212}
          fill="#52BE83"
          rx={10.373}
          ry={12.212}
          transform="matrix(-.36208 .93215 -.96 -.28 303.311 383.708)"
        />
        <path
          id="Ellipse 132"
          fill="#4E9892"
          d="M294.914 394.714c-4.771-1.392-7.167-6.308-5.352-10.98s7.154-7.332 11.924-5.941c4.771 1.392 7.168 6.308 5.353 10.98s-7.154 7.332-11.925 5.941"
        />
        <ellipse
          id="Ellipse 133"
          cx={8.773}
          cy={10.004}
          fill="#4E986F"
          rx={8.773}
          ry={10.004}
          transform="matrix(-.65831 .75274 -.79043 -.61256 309.576 377.032)"
        />
        <ellipse
          id="Ellipse 134"
          cx={8.257}
          cy={10.632}
          fill="#5ABA85"
          rx={8.257}
          ry={10.632}
          transform="matrix(.04918 .99879 -.99343 .11442 300.927 361.168)"
        />
        <ellipse
          id="Ellipse 135"
          cx={8.773}
          cy={10.004}
          fill="#64BE75"
          rx={8.773}
          ry={10.004}
          transform="matrix(-.65831 .75274 -.79043 -.61256 303.635 379.336)"
        />
        <ellipse
          id="Ellipse 136"
          cx={8.826}
          cy={9.934}
          fill="#4E986F"
          rx={8.826}
          ry={9.934}
          transform="matrix(.74416 -.668 .69786 .71623 270.988 386.345)"
        />
        <ellipse
          id="Ellipse 137"
          cx={13.09}
          cy={12.907}
          fill="#52BE83"
          rx={13.09}
          ry={12.907}
          transform="matrix(.329 -.94433 .91617 .40078 119.12 354.891)"
        />
        <path
          id="Ellipse 138"
          fill="#4E9892"
          d="M128.238 341.072c4.812 2.105 7.025 8.654 4.944 14.628s-7.669 9.11-12.481 7.005-7.026-8.654-4.945-14.628 7.67-9.11 12.482-7.005"
        />
        <ellipse
          id="Ellipse 139"
          cx={10.331}
          cy={11.505}
          fill="#4E986F"
          rx={10.331}
          ry={11.505}
          transform="matrix(.60247 -.79814 .67718 .73581 112.391 363.2)"
        />
        <ellipse
          id="Ellipse 140"
          cx={10.766}
          cy={10.901}
          fill="#5ABA85"
          rx={10.766}
          ry={10.901}
          transform="matrix(-.00167 -1 .9963 -.08589 120.472 384.391)"
        />
        <ellipse
          id="Ellipse 141"
          cx={10.331}
          cy={11.505}
          fill="#64BE75"
          rx={10.331}
          ry={11.505}
          transform="matrix(.60247 -.79814 .67718 .73581 118.578 360.564)"
        />
        <ellipse
          id="Ellipse 142"
          cx={10.097}
          cy={11.809}
          fill="#4E986F"
          rx={10.097}
          ry={11.809}
          transform="matrix(-.6934 .72056 -.57135 -.8207 152.303 353.439)"
        />
        <circle
          id="Ellipse 19"
          cx={60.488}
          cy={1298.67}
          r={13.5}
          fill="#6899C3"
        />
        <ellipse
          id="Ellipse 12_2"
          cx={157.776}
          cy={1102.03}
          fill="#E8D0A0"
          rx={6.5}
          ry={10.128}
          transform="rotate(-30.866 157.776 1102.03)"
        />
        <ellipse
          id="Ellipse 29_2"
          cx={157.049}
          cy={1107.47}
          fill="#D47D7C"
          rx={6.5}
          ry={7.557}
          transform="rotate(-30.866 157.049 1107.47)"
        />
        <ellipse
          id="Ellipse 28_2"
          cx={161.427}
          cy={1100.14}
          fill="#D59E8E"
          rx={6.5}
          ry={8.53}
          transform="rotate(-9.627 161.427 1100.14)"
        />
        <path
          id="Ellipse 32_2"
          fill="#D59E8E"
          d="M156.452 1115.86c-1.889-3.11-1.868-7.08.048-8.86s5.001-.7 6.89 2.41c1.89 3.11 1.869 7.08-.047 8.86s-5.001.7-6.891-2.41"
        />
        <ellipse
          id="Ellipse 30_2"
          cx={5.105}
          cy={7.245}
          fill="#E8D0A0"
          rx={5.105}
          ry={7.245}
          transform="matrix(-.44833 .89387 -.7929 -.60935 173.513 1108.98)"
        />
        <ellipse
          id="Ellipse 31_2"
          cx={5.105}
          cy={5.406}
          fill="#D47D7C"
          rx={5.105}
          ry={5.406}
          transform="matrix(-.44833 .89387 -.7929 -.60935 170.82 1103.59)"
        />
          </g>
        </g>
    <defs>
      <linearGradient
        id="paint0_linear_62_2"
        x1={151.488}
        x2={239.488}
        y1={-17.832}
        y2={1413.17}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4A4A51" />
        <stop offset={1} stopColor="#5A5A6E" stopOpacity={0.24} />
      </linearGradient>
    </defs>
  
      </svg>
      </div>
      
      {/* Side Panel */}
        {selectedLot && (
                     <SidePanel
          lotNumber={selectedLot} 
             onClose={handleClosePanel}
           />
        )}
    </div>
  );
};

export default forwardRef(SvgLotMap);
