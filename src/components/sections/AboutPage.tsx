"use client";

import { Code2, GraduationCap, Award } from "lucide-react";
import {
  Badge,
  Card,
  SectionHeader,
  Divider,
  GradientText,
} from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  LiquidBackground,
  Floating,
  Magnetic,
} from "@/components/motion";
import type { JSX } from "react";
import {
  skills,
  skillCategories,
  levelColors,
  timeline,
  education,
  certifications,
  values,
} from "@/data";

// Simple tech icons as SVG components
const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    Flutter: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
      </svg>
    ),
    Dart: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.79-7.895z" />
      </svg>
    ),
    Android: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.523 15.341a.996.996 0 0 0-.996.996v.686a.996.996 0 1 0 1.993 0v-.686a.997.997 0 0 0-.997-.996zm-11.046 0a.996.996 0 0 0-.996.996v.686a.996.996 0 1 0 1.993 0v-.686a.996.996 0 0 0-.997-.996zm11.405-6.02-.096-.17a6.948 6.948 0 0 0-1.98-2.293l1.1-1.1a.498.498 0 1 0-.704-.705l-1.16 1.16a6.89 6.89 0 0 0-2.567-.73V4.49a.498.498 0 0 0-.996 0v.994a6.89 6.89 0 0 0-2.567.73l-1.16-1.16a.498.498 0 1 0-.705.705l1.1 1.1a6.948 6.948 0 0 0-1.98 2.293l-.095.17H5.503a.498.498 0 0 0 0 .996h.797v6.18h10.4v-6.18h.797a.498.498 0 0 0 0-.996h-1.615z" />
      </svg>
    ),
    iOS: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
    React: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132z" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
    Laravel: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034L5.043.05a.375.375 0 0 1 .378 0L9.93 2.647c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032l4.513-2.598a.38.38 0 0 1 .377 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033a.3.3 0 0 1 .024.06c.006.01.012.021.015.03zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003-.002-.002c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 0 1-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81 1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505 2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087l-1.58-.907v4.283l2.182 1.256 1.58.908zm-8.65 9.654 5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 0 0 .272 0l8.795-5.076a.277.277 0 0 0 .134-.238V6.921a.283.283 0 0 0-.137-.242l-8.791-5.072a.278.278 0 0 0-.271 0L3.075 6.68a.284.284 0 0 0-.139.241v10.15a.27.27 0 0 0 .139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.857 1.857 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082a1.93 1.93 0 0 1 1.846 0l8.794 5.082c.57.329.924.944.924 1.603v10.15a1.86 1.86 0 0 1-.924 1.604l-8.795 5.078a1.87 1.87 0 0 1-.922.247z" />
      </svg>
    ),
    Firebase: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M3.89 15.672L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.56 14.33c-.14-.67-.38-1.17-.65-1.58-.56-.85-1.34-1.45-2.3-1.78a4.55 4.55 0 0 0-.08-1.56c-.3-1.18-1.04-2.14-2.04-2.64.04-1.4-.13-2.53-.5-3.37-.86-1.97-2.66-3.07-5.1-3.14-1.5-.04-2.83.35-3.85.96-.87-.37-2.1-.67-3.43-.46-1.52.24-2.77.97-3.6 2.12A7.06 7.06 0 0 0 .86 6.43c-.71 1.97-.46 4.25.03 6.6.5-.33 1.17-.76 1.98-1.02.65-.21 1.35-.3 2-.24a8.86 8.86 0 0 0 .97.06c-.78-1.45-1.28-3.27-1.18-4.78.12-1.68.8-3.67 3.27-3.95 1.04-.12 1.88.13 2.5.54.72-1.07 2.37-2.86 5.3-2.04 2.13.6 3.08 2.28 3.2 4.15.06.83.03 1.5-.04 2.04.12.02.24.04.36.08.97.28 1.68.97 1.96 1.9.17.53.13 1.6-.49 2.64.87.43 1.47 1.04 1.77 1.83.38 1.02.14 2.26-.67 3.4-.75 1.06-1.87 1.95-3.3 2.67a16.95 16.95 0 0 1-3.14 1.15 4.27 4.27 0 0 1-.44 1.26c-.66 1.17-1.9 1.87-3.34 1.93-1.05.05-2.04-.22-2.74-.72-.77-.55-1.18-1.4-1.02-2.23-.46-.38-.92-.8-1.38-1.26a14.24 14.24 0 0 1-2.83-4.1c-1.22.2-2.45.01-3.57-.55l-.08-.04c-.6 2.07-.57 3.82.25 5.23.66 1.13 1.78 1.92 3.33 2.35 1.68.47 3.53.4 5.26.34.87-.03 1.7-.06 2.45-.02 1.27.07 2.63.23 4 .44 2.07.32 4.47.37 6.44-.61 1.16-.58 2.1-1.45 2.76-2.54.98-1.6 1.3-3.6.76-5.78z" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.546 10.93 13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 1 1-1.103 1.033l-2.479-2.48v6.535a1.839 1.839 0 1 1-1.512-.06V8.756a1.838 1.838 0 0 1-.997-2.41L7.636 3.618.45 10.805a1.55 1.55 0 0 0 0 2.19l10.48 10.477a1.55 1.55 0 0 0 2.186 0l10.43-10.43a1.55 1.55 0 0 0 0-2.112" />
      </svg>
    ),
    Docker: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.186.186 0 0 0-.185.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185m10.773 2.716h2.118a.186.186 0 0 0 .186-.186v-1.887a.186.186 0 0 0-.186-.186h-2.118a.186.186 0 0 0-.186.186v1.887c0 .102.084.186.186.186M2.168 11.078h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.185-.186H2.17a.185.185 0 0 0-.185.186v1.887c0 .102.083.185.185.185m21.553 3.277a5.258 5.258 0 0 0-.915 2.207c-.075.479-.106.96-.093 1.44h2.002C24.78 16.58 24.2 15.47 23.72 14.355M19.17 12.8c.163-.418.296-.852.396-1.296.102-.443.168-.896.197-1.353h-4.092v4.88h.002c.026-.483.03-.969.012-1.454-.018-.485-.058-.966-.12-1.444-.061-.478-.147-.95-.255-1.416h4.06z" />
      </svg>
    ),
    Figma: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
      </svg>
    ),
    "VS Code": (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
      </svg>
    ),
  };
  return icons[name] || <Code2 size={20} />;
};

export default function AboutPage() {
  return (
    <div className="relative">
      <LiquidBackground />

      {/* Hero About Section */}
      <section className="relative pt-32 pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Avatar */}
            <FadeIn>
              <Magnetic strength={0.15}>
                <Floating>
                  <div className="relative mx-auto lg:mx-0 w-64 md:w-80">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/30 via-accent-purple/20 to-accent-cyan/30 rounded-2xl blur-3xl scale-110" />

                    {/* Image container */}
                    <div className="relative aspect-square rounded-2xl overflow-hidden glass border border-accent-blue/20">
                      {/* Background gradient fallback */}
                      <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900" />

                      {/* Professional photo - replace with actual photo */}
                      <img
                        src="/images/avatar.png"
                        alt="Ridwan Febnur Asri"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Subtle overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-lg bg-accent-blue/20 backdrop-blur-sm flex items-center justify-center">
                      <Code2 size={20} className="text-accent-blue" />
                    </div>
                  </div>
                </Floating>
              </Magnetic>
            </FadeIn>

            {/* Content */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <Badge variant="tech">
                  Mobile Engineer • Flutter Specialist • UI Thinking
                </Badge>

                <h1 className="text-4`xl md:text-5xl lg:text-6xl font-bold">
                  Hi, I&apos;m <GradientText>Ridwan</GradientText>
                </h1>

                <p className="text-xl text-text-secondary">Febnur Asri</p>

                <div className="space-y-4 text-text-secondary">
                  <p>
                    I&apos;m a mobile-first engineer with 5+ years of experience
                    crafting digital experiences that users love. My journey
                    started with native Android development and evolved into
                    becoming a Flutter specialist, where I now focus on building
                    cross-platform applications that are both beautiful and
                    performant.
                  </p>
                  <p>
                    What drives me is the challenge of translating complex
                    business requirements into intuitive user interfaces. I
                    believe the best code is invisible to users — they should
                    only see seamless experiences that just work.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    technologies, contributing to open-source projects, and
                    sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Divider />

      {/* Skills Section */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <SectionHeader
              title="Skills & Expertise"
              subtitle="Technologies and practices I work with daily."
            />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <StaggerItem key={category.key}>
                <Card className="h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-dark-700">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                      <category.icon size={20} className="text-accent-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {skills[category.key].map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between py-2">
                        <div className="flex items-center gap-3">
                          <span className="text-text-secondary">
                            <TechIcon name={skill.name} />
                          </span>
                          <span className="text-text-primary font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className={levelColors[skill.level]}>
                            {skill.level}
                          </span>
                          <span className="text-text-muted">
                            {skill.years}y
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Divider />

      {/* Education Section */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <SectionHeader
              title="Education & Certifications"
              subtitle="Academic background and professional credentials."
            />
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formal Education */}
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <GraduationCap size={20} className="text-accent-blue" />
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <Card key={edu.degree}>
                      <h4 className="font-semibold text-text-primary">
                        {edu.degree}
                      </h4>
                      <p className="text-accent-blue text-sm">
                        {edu.institution}
                      </p>
                      <p className="text-text-muted text-sm">{edu.year}</p>
                      <p className="text-text-secondary text-sm mt-2">
                        {edu.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Certifications */}
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                  <Award size={20} className="text-accent-purple" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <Card key={cert.name} className="py-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-text-primary">
                            {cert.name}
                          </h4>
                          <p className="text-text-muted text-sm">
                            {cert.issuer}
                          </p>
                        </div>
                        <Badge variant="default">{cert.year}</Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Divider />

      {/* Timeline Section */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <SectionHeader
              title="Career Journey"
              subtitle="Key milestones in my professional development."
            />
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dark-600" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <FadeIn key={item.year} delay={index * 0.1}>
                  <div
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}>
                    {/* Content */}
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                      } pl-12 md:pl-0`}>
                      <Card
                        className={
                          item.highlight ? "border-accent-blue/30" : ""
                        }>
                        <div
                          className={`flex items-center gap-3 mb-3 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}>
                          <Badge variant={item.highlight ? "tech" : "default"}>
                            {item.year}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-text-secondary text-sm">
                          {item.description}
                        </p>
                      </Card>
                    </div>

                    {/* Node */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-dark-800 border-2 border-accent-blue flex items-center justify-center">
                      <item.icon size={14} className="text-accent-blue" />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Values Section */}
      <section className="py-20">
        <div className="section-container">
          <FadeIn>
            <SectionHeader
              title="Values & Work Style"
              subtitle="Principles that guide my approach to building software."
              align="center"
            />
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="text-center h-full">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {value.description}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
