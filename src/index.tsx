import React from "react";
import * as Icons from "./icons";

export interface RemixIconProps {
  name: Icons.IconName;
  size?: number;
  color?: string;
}

function kebabToPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

const RemixIcon: React.FC<RemixIconProps> = ({ name, color, size = 24 }) => {
  const pascalCaseName = kebabToPascalCase(name);
  
  // Check if the icon exists in the Icons object
  const Component = (Icons as { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> })[pascalCaseName];

  if (!Component) {
    console.warn(`Icon "${name}" does not exist in the icon set.`);
    return null;
  }

  return <Component width={size} height={size} fill={color} />;
};

export default RemixIcon;
