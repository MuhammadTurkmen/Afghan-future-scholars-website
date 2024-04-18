// Images
import usingComputer from "./Images/using-computer.jpeg";
import book from "./Images/book.jpeg";
import girl from "./Images/girl-working.jpeg";
import tablet from "./Images/tablet.jpeg";
import note from "./Images/takingNotes.jpeg";
import coffee from "./Images/coffee-with-book.jpeg";

import toefl from "./Images/Toefl.jpeg";
import collageGirl from "./Images/collageGirl.jpeg";
import cloud from "./Images/Cloud.jpeg";
import volunteer from "./Images/Volunteers.jpeg";
import partnership from "./Images/partnership.jpeg";
import donate from "./Images/Donate.jpeg";

// Icons
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
    title: "Special Grammar ",
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
    text: "Afg.future.scholars. org@gmail.com",
  },
];

export const missionAndGoal = [
  {
    img: note,
    title: "Our Mission",
    desc: "to empower Afghan girls by providing them with access to good education. We are committed to make the educational gap caused by socio-political challenges, ensuring that every girl in Afghanistan has the right and opportunity to pursue their academic goals and higher education to the future development of her country.",
  },
  {
    img: tablet,
    title: "Our Vission",
    desc: "Our vision is bold and unwavering. We envision a future where Afghan girls, despite the barriers they face, can access world class education that enables them to become leaders, innovators, and changemakers, not just in Afghanistan, but on the global stage.",
  },
  {
    img: girl,
    title: "Our Goal",
    desc: "Our goal is also clear: to ensure that every Afghan girl, regardless of her socio-political environment, has continuous access to good education. We strive to create a sustainable educational model that empowers these young women to realize their full potential, become influential leaders, and serve as agents of change within their communities and beyond.",
  },
];

export const allPrograms = [
  {
    title: "IELTS & TOEFL",
    desc: "As we all know, pursuing education outside of Afghanistan often requires TOEFL, IELTS, or Duolingo scores. We are extremely happy to provide comprehensive preparation for these international tests. Our tailored programs help students achieve their best scores, enhancing their chances of securing scholarships and opportunities abroad.",
    img: toefl,
  },
  {
    title: "Mentorship Program",
    desc: "Our Mentorship Program connects Afghan girls with experienced mentors from around the world. Through one-on-one guidance, these mentors provide support in academic, professional, and personal development. Participants gain valuable insights, advice, and encouragement, helping them navigate their educational journeys and future careers with confidence. ",
    img: collageGirl,
  },
  {
    title: "Computer Learning Program",
    desc: "Our Computer Learning Program focuses on equipping Afghan girls with essential digital skills. This program covers basic computer use, Windows, MS Word, MS Excel, MS Powerpoint, Adobe Photoshop, internet navigation, and software proficiency, preparing participants for the modern digital world easily. ",
    img: usingComputer,
  },
  {
    title: "Leadership Program",
    desc: "The Leadership Program is designed to develop critical leadership skills in young Afghan women. Through workshops, training sessions, and mentorship, participants gain the confidence and capabilities needed to lead and inspire others.",
    img: cloud,
  },
  {
    title: "Scholarships",
    desc: "We offer guidance and support for securing scholarships, both locally and internationally. Our scholarship program helps students navigate the application process and access financial aid to pursue higher education.",
    img: coffee,
  },
];

export const involvedData = [
  {
    img: volunteer,
    title: "Be a Volunteer at AFS",
    desc: "Share your time and skills with us to help support our programs and initiatives. As a volunteer, you can contribute to our educational efforts, mentor students, or assist with administrative tasks. Your involvement helps us reach more girls and enhance the quality of our programs.",
  },
  {
    img: partnership,
    title: "Partnership with Us",
    desc: "Partner with AFS to amplify our impact. Whether you are an organization, business, or educational institution, collaborating with us can strengthen our programs and expand our reach. Together, we can create more opportunities for Afghan girls and drive meaningful change.",
  },
  {
    img: donate,
    title: "Donate Now",
    desc: "Support our mission financially by making a donation. Your contributions help us sustain and expand our programs, providing essential resources and support to Afghan girls. Every donation, no matter the size, makes a significant difference in achieving Afghan girls goals.",
  },
];
