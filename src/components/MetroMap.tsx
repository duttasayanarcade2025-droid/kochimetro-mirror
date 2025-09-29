import React, { useEffect, useRef, useState, useCallback } from "react";

// Helper component for images with error handling
const MetroImage = ({
  src,
  alt,
  width,
  height,
  className = "max-w-none"
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="flex items-center justify-center text-xs text-gray-400 bg-gray-100 border border-gray-300"
        style={{
          width: `${width}px`,
          height: `${height}px`
        }}
      >
        {alt || 'IMG'}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

const MetroMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Memoize the mouse move handler to prevent unnecessary re-renders
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = (e.clientX - centerX) / rect.width;
      const mouseY = (e.clientY - centerY) / rect.height;
      setMousePosition({
        x: mouseX * 50,
        y: mouseY * 30
      });
    }
  }, []);

  useEffect(() => {
    // Add fade-in animation to all elements matching the original timing
    const elements = containerRef.current?.querySelectorAll('.tp-caption');
    elements?.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.opacity = '0';

      // Different delays based on original HTML structure
      let delay = 10;
      if (index === 11) delay = 20; // bg_element has delay 20

      setTimeout(() => {
        htmlElement.style.transition = 'opacity 0.3s ease-in-out';
        htmlElement.style.opacity = '1';
      }, delay);
    });

    // Mouse movement tracking for parallax effect
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        ref={containerRef}
        className="relative"
        style={{
          width: '2011px',
          height: '1081px',
          transform: 'scale(0.6)',
          transformOrigin: 'center center'
        }}
      >
        {/* LAYER NR. 1 - Roads (rs-parallaxlevel-2) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-2 absolute"
          style={{
            left: '102px',
            top: '389px',
            zIndex: 5,
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/roads.png"
            alt="Roads"
            width={827}
            height={622}
          />
        </div>

        {/* LAYER NR. 2 - Broken image placeholder (rs-parallaxlevel-2) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-2 absolute"
          style={{
            left: '718px',
            top: '267px',
            zIndex: 6,
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div
            className="flex items-center justify-center text-xs text-gray-400 bg-gray-100 border border-gray-300"
            style={{
              width: '76px',
              height: '82px'
            }}
          >
            IMG
          </div>
        </div>

        {/* LAYER NR. 3 - Building back right (rs-parallaxlevel-2) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-2 absolute"
          style={{
            left: '814px',
            top: '298px',
            zIndex: 7,
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/building-back-right.png"
            alt="Building Back Right"
            width={112}
            height={126}
          />
        </div>

        {/* LAYER NR. 4 - Building front (rs-parallaxlevel-3) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-3 absolute"
          style={{
            left: '731px',
            top: '243px',
            zIndex: 8,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/building-front.png"
            alt="Building Front"
            width={140}
            height={220}
          />
        </div>

        {/* LAYER NR. 5 - Sun rise (rs-parallaxlevel-2) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-2 absolute"
          style={{
            left: '-83px',
            top: '236px',
            zIndex: 9,
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/sun-rise.png"
            alt="Sunrise"
            width={516}
            height={218}
          />
        </div>

        {/* LAYER NR. 6 - Girl three (rs-parallaxlevel-3) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-3 absolute"
          style={{
            left: '566px',
            top: '413px',
            zIndex: 10,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/girl-three.png"
            alt="Girl"
            width={390}
            height={390}
          />
        </div>

        {/* LAYER NR. 7 - Train (rs-parallaxlevel-4) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-4 absolute"
          style={{
            left: '201px',
            top: '157px',
            zIndex: 11,
            transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/train.png"
            alt="Metro Train"
            width={813}
            height={519}
          />
        </div>

        {/* LAYER NR. 8 - Boat icon (rs-parallaxlevel-3) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-3 absolute"
          style={{
            left: '179px',
            top: '428px',
            zIndex: 12,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/boat-icon.png"
            alt="Boat"
            width={310}
            height={310}
          />
        </div>

        {/* LAYER NR. 9 - Clock icon (rs-parallaxlevel-4) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-4 absolute"
          style={{
            left: '347px',
            top: '473px',
            zIndex: 13,
            transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/clock-icon.png"
            alt="Clock"
            width={340}
            height={340}
          />
        </div>

        {/* LAYER NR. 10 - Label (rs-parallaxlevel-3) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-3 absolute"
          style={{
            left: '766px',
            top: '361px',
            zIndex: 14,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/label.png"
            alt="Label"
            width={147}
            height={351}
          />
        </div>

        {/* LAYER NR. 11 - Label 2 (rs-parallaxlevel-3) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-3 absolute"
          style={{
            left: '844px',
            top: '330px',
            zIndex: 15,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/label-2.png"
            alt="Label 2"
            width={147}
            height={351}
          />
        </div>

        {/* LAYER NR. 12 - Background element (rs-parallaxlevel-5) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-5 absolute"
          style={{
            left: '-191px',
            top: '344px',
            zIndex: 16,
            transform: `translate(${mousePosition.x * 1.0}px, ${mousePosition.y * 1.0}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/bg_element.png"
            alt="Background Element"
            width={1484}
            height={420}
          />
        </div>

        {/* LAYER NR. 13 - Man with bag (rs-parallaxlevel-7) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-7 absolute"
          style={{
            left: '931px',
            top: '567px',
            zIndex: 17,
            transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <MetroImage
            src="https://kochimetro.org/wp-content/uploads/2018/01/man-with-bag.png"
            alt="Man with Bag"
            width={166}
            height={355}
          />
        </div>

        {/* LAYER NR. 14 - Empty text (rs-parallaxlevel-1) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-1 absolute"
          style={{
            left: '8px',
            top: '123px',
            zIndex: 18,
            whiteSpace: 'nowrap',
            fontSize: '20px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#ffffff',
            letterSpacing: '0px',
            fontFamily: 'Open Sans'
          }}
        >
          {/* Empty as in original */}
        </div>

        {/* LAYER NR. 15 - Aluva text (rs-parallaxlevel-4) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-4 absolute"
          style={{
            left: '-66px',
            top: '288px',
            zIndex: 21,
            whiteSpace: 'nowrap',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#000000',
            letterSpacing: '0px',
            fontFamily: 'Titillium Web',
            transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Aluva
        </div>

        {/* LAYER NR. 16 - Kalamassery text (rs-parallaxlevel-5) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-5 absolute"
          style={{
            left: '-134px',
            top: '418px',
            zIndex: 22,
            minWidth: '87px',
            maxWidth: '87px',
            whiteSpace: 'nowrap',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#000000',
            letterSpacing: '0px',
            fontFamily: 'Titillium Web',
            transform: `translate(${mousePosition.x * 1.0}px, ${mousePosition.y * 1.0}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Kalamassery
        </div>

        {/* LAYER NR. 17 - Edapally text (rs-parallaxlevel-6) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-6 absolute"
          style={{
            left: '-80px',
            top: '783px',
            zIndex: 23,
            whiteSpace: 'nowrap',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#000000',
            letterSpacing: '0px',
            fontFamily: 'Titillium Web',
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Edapally
        </div>

        {/* LAYER NR. 18 - Palarivattom text (rs-parallaxlevel-5) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-5 absolute"
          style={{
            left: '109px',
            top: '820px',
            zIndex: 24,
            whiteSpace: 'nowrap',
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#000000',
            letterSpacing: '0px',
            fontFamily: 'Titillium Web',
            transform: `translate(${mousePosition.x * 1.0}px, ${mousePosition.y * 1.0}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Palarivattom
        </div>

        {/* LAYER NR. 19 - M.G Road text (rs-parallaxlevel-5) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-5 absolute"
          style={{
            left: '601px',
            top: '821px',
            zIndex: 25,
            whiteSpace: 'nowrap',
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#000000',
            letterSpacing: '0px',
            fontFamily: 'Titillium Web',
            transform: `translate(${mousePosition.x * 1.0}px, ${mousePosition.y * 1.0}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          M.G Road
        </div>

        {/* LAYER NR. 20 - Vyttila text (rs-parallaxlevel-7) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-7 absolute"
          style={{
            left: '1033px',
            top: '646px',
            zIndex: 26,
            whiteSpace: 'nowrap',
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#000000',
            letterSpacing: '0px',
            fontFamily: 'Titillium Web',
            transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Vyttila
        </div>

        {/* LAYER NR. 21 - Ernakulam South text (rs-parallaxlevel-4) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-4 absolute"
          style={{
            left: '813px',
            top: '753px',
            zIndex: 27,
            whiteSpace: 'nowrap',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#000000',
            letterSpacing: '0px',
            fontFamily: 'Titillium Web',
            transform: `translate(${mousePosition.x * 0.7}px, ${mousePosition.y * 0.7}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Ernakulam South
        </div>

        {/* LAYER NR. 22 - Cochin University text (rs-parallaxlevel-5) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-5 absolute"
          style={{
            left: '-178px',
            top: '591px',
            zIndex: 28,
            whiteSpace: 'nowrap',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#000000',
            letterSpacing: '0px',
            fontFamily: 'Titillium Web',
            transform: `translate(${mousePosition.x * 1.0}px, ${mousePosition.y * 1.0}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Cochin University
        </div>

        {/* LAYER NR. 23 - JLN Stadium text (rs-parallaxlevel-5) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-5 absolute"
          style={{
            left: '366px',
            top: '822px',
            zIndex: 29,
            whiteSpace: 'nowrap',
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#000000',
            letterSpacing: '0px',
            fontFamily: 'Titillium Web',
            transform: `translate(${mousePosition.x * 1.0}px, ${mousePosition.y * 1.0}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          JLN Stadium
        </div>

        {/* LAYER NR. 24 - SN Junction text (rs-parallaxlevel-7) */}
        <div
          className="tp-caption tp-resizeme rs-parallaxlevel-7 absolute"
          style={{
            left: '1003px',
            top: '489px',
            zIndex: 30,
            whiteSpace: 'nowrap',
            fontSize: '17px',
            lineHeight: '22px',
            fontWeight: 400,
            color: '#000000',
            letterSpacing: '0px',
            fontFamily: 'Titillium Web',
            transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          SN Junction
        </div>

        {/* Banner timer equivalent */}
        <div
          className="tp-bannertimer absolute bottom-0 left-0 w-full"
          style={{
            height: '5px',
            background: 'rgba(0,131,255,1)'
          }}
        />
      </div>
    </div>
  );
};

export default MetroMap;