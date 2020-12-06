import React from "react";

interface LinkProps {
  readonly url: string;
}

const Link: React.FC<LinkProps> = ({ url, children }) => (
  <a
    style={{ display: "inline-block", color: "#1db954" }}
    target={"blank"}
    href={url}
  >
    {children}
  </a>
);

export default Link;
