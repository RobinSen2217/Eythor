import React, { useState } from "react";
import { Link } from "react-router-dom";


const Anchor = ({content,color,href}) => {
  return (
    <div className="">
      <FlyoutLink href={href} color={color}>
        {content}
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href,color}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <a href={href} className={`relative ${color}`}>
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-blue-600 transition-transform duration-300 ease-out"
        />
      </a>

    </div>
  );
};


export default Anchor;