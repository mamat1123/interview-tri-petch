import Section1Desktop from "../assets/images/section1-desktop.png";
import Section1Tablet from "../assets/images/section1-tablet.png";
import Section1Mobile from "../assets/images/section1-mobile.png";

import Section2Desktop from "../assets/images/section2-desktop.png";
// import Section2Tablet from "../assets/images/section2-tablet.png";
import Section2Mobile from "../assets/images/section2-mobile.png";

export const mockArticle = [
  {
    title: "ATHLETES",
    position: "right",
    image: {
      desktop: {
        url: Section1Desktop,
        cssHelper: "h-[950px] object-cover",
      },
      tablet: {
        url: Section1Tablet,
        cssHelper: "h-[719px] object-cover",
      },
      mobile: {
        url: Section1Mobile,
        cssHelper: "h-[281px]",
      },
    },
    section: [
      {
        title: "CONNECTION",
        detail:
          "Connect with coaches directly, you can ping coaches to view profile.",
        textColor: "text-tri-back",
        bgColor: "bg-tri-white",
        lineColor: "bg-tri-purple-line",
      },
      {
        title: "COLLABORATION",
        detail:
          "Work with other student athletes to increase visibility. When you share and like other players videos it will increase your visibility as a player. This is the team work aspect to Surface 1.",
        textColor: "text-tri-back",
        bgColor: "bg-tri-gray-bg",
        lineColor: "bg-tri-purple-line",
      },
      {
        title: "GROWTH",
        detail:
          "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
        textColor: "text-tri-white",
        bgColor: "bg-tri-purple",
        lineColor: "bg-tri-white",
      },
    ],
  },

  {
    title: "PLAYERS",
    position: "left",
    image: {
      desktop: {
        url: Section2Desktop,
        cssHelper: "h-[815px] object-cover",
      },
      tablet: {
        url: Section2Desktop,
        cssHelper: "h-[568px] object-cover",
      },
      mobile: {
        url: Section2Mobile,
        cssHelper: "max-h-[250px]",
      },
    },
    section: [
      {
        title: "CONNECTION",
        detail:
          "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
        textColor: "text-tri-back",
        bgColor: "bg-tri-white",
        lineColor: "bg-tri-purple-line",
      },
      {
        title: "COLLABORATION",
        detail:
          "Work with recruiter to increase your chances of finding talented athlete.",
        textColor: "text-tri-back",
        bgColor: "bg-tri-gray-bg",
        lineColor: "bg-tri-purple-line",
      },
      {
        title: "GROWTH",
        detail: "Save your time, recruit proper athlets for your team.",
        textColor: "text-tri-white",
        bgColor: "bg-tri-purple-dark",
        lineColor: "bg-tri-white",
      },
    ],
  },
];
