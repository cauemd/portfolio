import aws from "./aws-educate.png";
import what_the_hack from "./hack.png";
import decoding from "./decoding.png";

const events = [
  {
    id: 1,
    image: what_the_hack,
    name: "What the Hack's",
    link: "https://what-the-hack.co/",
    title:
      "Blockchain and the World Food Supply Chain - Virtual Hackathon (2020)",
    quote:
      "Our pitch was to use blockchain to trace the whole lifecycle of products derived from canola oil. Besides conducting general research I launched a small prototype in the Ethereum blockchain, writting Smart Contracts using Solidity. My team achieved 2nd Place in the Hackaton",
  },
  {
    id: 2,
    image: decoding,
    name: "De/Coding Openet 2020",
    link: "http://graduate.openet.com/de-coding-registration/",
    title: "Openet",
    quote:
      "In this event, teams would compete with each other using Robocode, a Java based programming game where you create a tank and program its behaviour, then use it to battle other tanks. My team was the winner of the event.",
  },
  {
    id: 3,
    image: aws,
    name: "AWS Educate Challenge 2020",
    link: "https://aws.amazon.com/education/awseducate/university-challenge/",
    title: "Amazon Web Services",
    quote:
      "Online competition involving UK and Ireland colleges where participants would take courses on a plethora of subjects (with heavy emphasis in Cloud Technology), earning points from completing an assessment at the end of each one. Not only I helped my college placing 1st (I contributed with more than 10% of the points for the college), I have also obtained the 7th place among all Irish students.",
  },
];

export default events;
