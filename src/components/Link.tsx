import React from "react";

interface LinkProps {
  readonly url: string;
  readonly color?: string;
}

const Link: React.FC<LinkProps> = ({ url, color, children }) => (
  <a
    style={{ display: "inline-block", color: color ?? "#1db954" }}
    target={"blank"}
    href={url}
  >
    {children}
  </a>
);

export default Link;
