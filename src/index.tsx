import React from "react";
import * as Icons from "./icons";

export interface RemixIconProps {
  name: Icons.IconName;
  size?: number;
  color?: string;
}

function kebabToPascalCase(str: string): string {
  const pascalCaseStr = str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  // If string starts with a number, prepend 'Svg' and capitalize the letter after the number
  if (/^[0-9]/.test(pascalCaseStr)) {
    return `Svg${pascalCaseStr.replace(/([0-9])([a-z])/i, (_, num, letter) => num + letter.toUpperCase())}`;
  }
  
  return pascalCaseStr;
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
