import { MdPayment } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";

const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", icon: "<FcMoneyTransfer />", url: "/products" },
      { label: "terminal", icon: "<MdPayment />", url: "/products" },
      { label: "connect", icon: "<MdPayment />", url: "/products" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: "<MdPayment />", url: "/products" },
      { label: "libraries", icon: "<MdPayment />", url: "/products" },
      { label: "help", icon: "<MdPayment />", url: "/products" },
      { label: "billing", icon: "<MdPayment />", url: "/products" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: "<MdPayment />", url: "/products" },
      { label: "customers", icon: "<MdPayment />", url: "/products" },
    ],
  },
];

export default sublinks;
