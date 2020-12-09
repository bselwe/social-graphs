import React from "react";

interface LinkProps {
  readonly url: string;
  readonly color?: string;
  readonly internal?: boolean;
}

const Link: React.FC<LinkProps> = ({ url, color, internal, children }) => (
  <a
    style={{ display: "inline-block", color: color ?? "#1db954" }}
    target={!internal ? "blank" : undefined}
    href={url}
  >
    {children}
  </a>
);

export default Link;
