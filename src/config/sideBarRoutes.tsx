import {
  auditlog,
  badgepercent,
  briefcase,
  chart,
  coinssolid,
  handholding,
  handshakeregular,
  home,
  icon,
  loanprod,
  npbank,
  piggybank,
  prefence,
  sackpro,
  serviceacc,
  settlement,
  usercheck,
  userfriends,
  usersPro,
  usertimes,
  vectorNew,
} from "../images";

import { menuItemProps } from "../types";

const sideBarRoutes: {
  others: menuItemProps[];
  customers: menuItemProps[];
  businesses: menuItemProps[];
  settings: menuItemProps[];
} = {
  others: [
    {
      icon: briefcase,
      title: "Switch Organization",
      iconAlt: "Switch Organization",
    },
    {
      icon: home,
      title: "Dashboard",
      iconAlt: "dashboard",
      path: "/dashboard",
    },
  ],
  customers: [
    { icon: userfriends, title: "Users", iconAlt: "user", path: "/users" },
    { icon: usersPro, title: "Guarantors", iconAlt: "Guarantors" },
    { icon: sackpro, title: "Loans", iconAlt: "Loans" },
    { icon: handshakeregular, title: "Decision M", iconAlt: "Decision M" },
    { icon: piggybank, title: "Savings", iconAlt: "Savings" },
    { icon: handholding, title: "Loan Requests", iconAlt: "Loan Requests" },
    { icon: usercheck, title: "Whitelist", iconAlt: "Whitelist" },
    { icon: usertimes, title: "Karma", iconAlt: "Karma" },
  ],
  businesses: [
    { icon: briefcase, title: "Organization", iconAlt: "Organization" },
    { icon: loanprod, title: "Loan Products", iconAlt: "Loan Products" },
    { icon: npbank, title: "Savings Pro", iconAlt: "Savings Pro" },
    { icon: coinssolid, title: "Fees and Ch", iconAlt: "Fees and Ch" },
    { icon: icon, title: "Transactions", iconAlt: "Transactions" },
    { icon: vectorNew, title: "Services", iconAlt: "Services" },
    { icon: serviceacc, title: "Service Ac", iconAlt: "Service Ac" },
    { icon: settlement, title: "Settlements", iconAlt: "Settlements" },
    { icon: chart, title: "Reports", iconAlt: "Reports" },
  ],
  settings: [
    { icon: prefence, title: "Preferences", iconAlt: "Preferences" },
    { icon: badgepercent, title: "Fees and Pr", iconAlt: "Fees and Pr" },
    { icon: auditlog, title: "Audit Logs", iconAlt: "Audit Logs" },
  ],
};

export default sideBarRoutes;
