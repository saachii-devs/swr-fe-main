export const NavBarData = [
  {
    id: 1,
    name: "Menu",
    type: "normal",
    image: "",
  },
  { id: 2, name: "Search", type: "normal", image: "" },
  { id: 3, name: "News & Events", type: "normal", image: "" },
  { id: 4, name: "Apply", type: "highlighted", image: "" },
  { id: 5, name: "Visit", type: "highlighted", image: "" },
  { id: 6, name: "See More", type: "highlighted", image: "" },
  {
    id: 7,
    name: "About Us",
    type: "expand",
    submenu: [
      { id: 1, name: "Foundation" },
      { id: 2, name: "Vision & Mission" },
      { id: 3, name: "Message From Management" },
    ],
  },
  {
    id: 8,
    name: "Schools and Divisions",
    type: "expand",
    submenu: [
      { id: 1, name: "Dentistry" },
      { id: 2, name: "Engineering" },
      { id: 3, name: "Management" },
      { id: 4, name: "Pharmacy" },
      { id: 5, name: "Nursing" },
    ],
  },
  {
    id: 13,
    name: "More",
    type: "expand",
    submenu: [
      { id: 1, name: "Privacy Policy" },
      { id: 2, name: "Internal Complaint Committee (ICC)" },
    ],
  },
  { id: 9, name: "Fees and Costs", type: "non-expand" },
  { id: 10, name: "Campus Life ", type: " non-expand" },
  { id: 11, name: "Employment Oppotunities", type: "non-expand" },
  { id: 12, name: "Blogs", type: "non-expand" },
];
