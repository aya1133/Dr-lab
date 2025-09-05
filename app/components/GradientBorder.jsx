import React from "react";

const GradientBorder = ({
  children,
  className = "",
  gradientFrom = "#5600D0",
  gradientTo = "#5600D000",
  borderWidth = "1px",
  borderRadius = "rounded-3xl",
  hoverEffect = true,
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div
        className={`absolute inset-0 ${borderRadius} transition-all duration-500 ${
          hoverEffect ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
        style={{
          background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
        }}
      ></div>
      <div
        className="relative"
        style={{
          margin: borderWidth,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;
