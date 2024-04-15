import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  
  {
    id: 4,
    title: "Our Team",
    path: "/team",
    newTab: false,
  },
  {
    id: 5,
    title: "Events/Workshop",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Events",
        path: "/events",
        newTab: false,
      },

      {
        id: 42,
        title: "Web Development",
        path: "/webd",
        newTab: false,
      },
      {
        id: 43,
        title: "Android Development",
        path: "/android",
        newTab: false,
      },
      {
        id: 44,
        title: "ChatGpt Bootcamp",
        path: "/chatgpt",
        newTab: false,
      },
      {
        id: 45,
        title: "Hackathon",
        path: "/hackathon",
        newTab: false,
      }
      
      
    ],
  },
  {
    id: 5,
    title: "Gallery",
    path: "/gallery",
    newTab: false,
  },
];
export default menuData;
