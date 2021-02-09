import React from "react";
import { IoIosSchool, IoIosRibbon } from "react-icons/io";
import { FaAws } from "react-icons/fa";

const education = [
  {
    title: "Bsc (Honours) in Information Technology",
    subtitle: "CCT College Dublin",
    text: "Expected gratuation in June/2021. NFQ Level 8 diploma.",
    date: "2020 - Current",
    link:
      "https://www.cct.ie/course/bachelor-of-science-honours-in-computing-and-it/",
    icon: <IoIosSchool />,
  },
  {
    title: "Amazon Academy - Cloud Architecting",
    subtitle: "Amazon Web Services",
    date: "2021",
    text:
      "Course covering fundamentals of building IT infrastructure on AWS, including best practices, building infrastructure and solution architecting in the Cloud.",
    link:
      "https://www.youracclaim.com/badges/4771563f-61e8-4f67-b237-9062d2892b88/linked_in",
    icon: <FaAws />,
  },
  {
    title: "Diploma in DevOps",
    subtitle: "CCT College Dublin",
    date: "2020",
    text:
      "Course covering cloud-native skills including DevOps. The course also covered containers (docker) and system orchestration (Kubernetes) ",
    link: "https://www.cct.ie/course/diploma-dev-ops/",
    icon: <IoIosRibbon />,
  },
  {
    title: "Bsc in Information Technology",
    subtitle: "CCT College Dublin",
    date: "2017 - 2020",
    text:
      "NFQ Level 7 diploma obtained with a First Honours Degree (1:1) distinction grade.",
    link:
      "https://www.cct.ie/course/bachelor-of-science-honours-in-computing-and-it/",
    icon: <IoIosSchool />,
  },
  {
    title: "Bsc in Environmental Engineering",
    subtitle: "Faculdades Oswaldo Cruz (Brazil)",
    date: "2009 - 2013",
    text: "Environmental Engineering degree. (Website in Brazilian-Portuguese)",
    link: "https://www.oswaldocruz.br/www/view/cursos/engenharia-ambiental/",
    icon: <IoIosSchool />,
  },
];

export default education;
