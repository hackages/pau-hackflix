import React from "react";

interface IFooterProps {
  children?: JSX.Element | JSX.Element[];
}

export function Footer({ children }: IFooterProps): JSX.Element {
  return <footer className="py-6 bg-gray-900">{children}</footer>;
}
