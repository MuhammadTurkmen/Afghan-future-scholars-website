import usingComputer from "./Images/using-computer.jpeg";
import book from "./Images/book.jpeg";
import coffee from "./Images/coffee-with-book.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
//
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
    path: "/about",
  },
  {
    name: "Our Programs",
    path: "/programs",
  },
  {
    name: "Get Involved",
    path: "/involved",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
];

export const milestones_cards = [
  {
    title: "TOEFL Class",
    desc: "Our tailored programs help students achieve their best scores, enhancing their chances of securing scholarships and opportunities abroad",
    img: usingComputer,
  },
  {
    title: "Computer Class",
    desc: "Our tailored programs help students achieve their best scores, enhancing their chances of securing scholarships and opportunities abroad",
    img: book,
  },
  {
    title: "TOEFL Class",
    desc: "Our tailored programs help students achieve their best scores, enhancing their chances of securing scholarships and opportunities abroad",
    img: coffee,
  },
];

export const socials = [
  {
    icon: <FaLinkedin />,
    text: "LinkedIn",
  },
  {
    icon: <FaXTwitter />,
    text: "Twitter",
  },
  {
    icon: <FaFacebook />,
    text: "Facebook",
  },
  {
    icon: <FaInstagram />,
    text: "Instagram",
  },
];

export const reachUs = [
  {
    icon: <FaWhatsapp />,
    text: "+93788275519",
  },
  {
    icon: <FaPhoneAlt />,
    text: "+93788275519",
  },
  {
    icon: <MdLocalPostOffice />,
    text: "Afg.future.scholars.org@gmail.com",
  },
];
