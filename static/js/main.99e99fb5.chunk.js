(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,i){},25:function(e,t,i){"use strict";i.r(t);var n=i(1),c=i(2),s=i.n(c),a=i(11),l=i.n(a),r=(i(18),i(3)),o=i(4),h=s.a.createContext(),d=function(e){var t=e.children,i=Object(c.useState)(!1),s=Object(o.a)(i,2),a=s[0],l=s[1];return Object(n.jsx)(h.Provider,{value:{isSidebarOpen:a,openSidebar:function(){l(!0)},closeSidebar:function(){l(!1)}},children:t})},j=function(){return Object(c.useContext)(h)},b=function(){var e=j().openSidebar;return Object(n.jsx)("nav",{className:"nav",children:Object(n.jsxs)("div",{className:"nav-center",children:[Object(n.jsx)("div",{className:"nav-header",children:Object(n.jsx)("button",{className:"btn toggle-btn",onClick:e,children:Object(n.jsx)(r.b,{})})}),Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#home",className:"link-btn",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#education",className:"link-btn",children:"Education"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#events",className:"link-btn",children:"Events"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#contact",className:"link-btn last-link",children:"Contact"})})]})]})})},u=i.p+"static/media/picture.997158b6.png",m=function(){return Object(n.jsx)("section",{id:"home",className:"hero",children:Object(n.jsxs)("div",{className:"hero-center",children:[Object(n.jsxs)("article",{className:"hero-info",children:[Object(n.jsx)("h3",{children:"Hello there! I'm"}),Object(n.jsx)("h1",{children:"Caue Meireles Duarte"}),Object(n.jsx)("p",{children:"Cloud Entusiast / Coding Aficionado / Bachelor (Honours) in Information Technology Student"})]}),Object(n.jsx)("article",{className:"hero-images",children:Object(n.jsx)("img",{src:u,alt:"developer",className:"phone-img"})})]})})},f=[{page:"GitHub",links:[{label:"Check out my projects on GitHub!",icon:Object(n.jsx)(r.c,{}),url:"https://github.com/cauemd"}]},{page:"LinkedIn",links:[{label:"Reach out on LinkedIn!",icon:Object(n.jsx)(r.d,{}),url:"https://www.linkedin.com/in/cauemd/"}]}],g=function(){var e=j(),t=e.isSidebarOpen,i=e.closeSidebar;return Object(n.jsx)("aside",{className:"".concat(t?"sidebar-wrapper show":"sidebar-wrapper"),children:Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsx)("button",{className:"close-btn",onClick:i,children:Object(n.jsx)(r.e,{})}),Object(n.jsx)("div",{className:"sidebar-links",children:f.map((function(e,t){var i=e.links,c=e.page;return Object(n.jsxs)("article",{children:[Object(n.jsx)("h4",{children:c}),Object(n.jsx)("div",{className:"sidebar-sublinks",children:i.map((function(e,t){var i=e.url,c=e.icon,s=e.label;return Object(n.jsxs)("a",{href:i,children:[c,s]},t)}))})]},t)}))})]})})},E=i(7),x=i.p+"static/media/aws-educate.40fbb897.png",v=[{id:1,image:"data:image/png;base64,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",name:"What the Hack's",link:"https://what-the-hack.co/",title:"Blockchain and the World Food Supply Chain - Virtual Hackathon (2020)",quote:"Our pitch was to use blockchain to trace the whole lifecycle of products derived from canola oil. Besides conducting general research I launched a small prototype in the Ethereum blockchain, writting Smart Contracts using Solidity. My team achieved 2nd Place in the Hackaton"},{id:2,image:i.p+"static/media/decoding.2274beeb.png",name:"De/Coding Openet 2020",link:"http://graduate.openet.com/de-coding-registration/",title:"Openet",quote:"In this event, teams would compete with each other using Robocode, a Java based programming game where you create a tank and program its behaviour, then use it to battle other tanks. My team was the winner of the event."},{id:3,image:x,name:"AWS Educate Challenge 2020",link:"https://aws.amazon.com/education/awseducate/university-challenge/",title:"Amazon Web Services",quote:"Online competition involving UK and Ireland colleges where participants would take courses on a plethora of subjects (with heavy emphasis in Cloud Technology), earning points from completing an assessment at the end of each one. Not only I helped my college placing 1st (I contributed with more than 10% of the points for the college), I have also obtained the 7th place among all Irish students."}],C=function(){var e=Object(c.useState)(v),t=Object(o.a)(e,1)[0],i=s.a.useState(0),a=Object(o.a)(i,2),l=a[0],r=a[1];return Object(c.useEffect)((function(){var e=t.length-1;l<0&&r(e),l>e&&r(0)}),[l,t]),Object(c.useEffect)((function(){var e=setInterval((function(){r(l+1)}),8e3);return function(){clearInterval(e)}}),[l]),Object(n.jsxs)("section",{id:"events",className:"events-section",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h2",{children:"Tech Events"})}),Object(n.jsxs)("div",{className:"events-center",children:[t.map((function(e,t){var i=e.id,c=e.image,s=e.name,a=e.title,r=e.quote,o=e.link,h="nextSlide";return t===l&&(h="activeSlide"),(t===l-1||0===l&&t===e.length-1)&&(h="lastSlide"),Object(n.jsxs)("article",{className:"slider ".concat(h),children:[Object(n.jsx)("img",{src:c,alt:s,className:"events-img"}),Object(n.jsx)("a",{href:o,children:s}),Object(n.jsx)("p",{className:"title",children:a}),Object(n.jsx)("p",{className:"event-text",children:r})]},i)})),Object(n.jsx)("button",{className:"prev-event",onClick:function(){return r(l-1)},children:Object(n.jsx)(E.a,{})}),Object(n.jsx)("button",{className:"next-event",onClick:function(){return r(l+1)},children:Object(n.jsx)(E.b,{})})]})]})},p=i(8),O=(i(24),i(5)),F=[{title:"Bsc (Honours) in Information Technology",subtitle:"CCT College Dublin",text:"Expected gratuation in June/2021. NFQ Level 8 diploma.",date:"2020 - Current",link:"https://www.cct.ie/course/bachelor-of-science-honours-in-computing-and-it/",icon:Object(n.jsx)(O.b,{})},{title:"Amazon Academy - Cloud Architecting",subtitle:"Amazon Web Services",date:"2021",text:"Course covering fundamentals of building IT infrastructure on AWS, including best practices, building infrastructure and solution architecting in the Cloud.",link:"https://www.cct.ie/course/diploma-dev-ops/",icon:Object(n.jsx)(r.a,{})},{title:"Diploma in DevOps",subtitle:"CCT College Dublin",date:"2020",text:"Course covering cloud-native skills including DevOps. The course also covered containers (docker) and system orchestration (Kubernetes) ",link:"https://www.cct.ie/course/diploma-dev-ops/",icon:Object(n.jsx)(O.a,{})},{title:"Bsc in Information Technology",subtitle:"CCT College Dublin",date:"2017 - 2020",text:"NFQ Level 7 diploma obtained with a First Honours Degree (1:1) distinction grade.",link:"https://www.cct.ie/course/bachelor-of-science-honours-in-computing-and-it/",icon:Object(n.jsx)(O.b,{})},{title:"Bsc in Environmental Engineering",subtitle:"Faculdades Oswaldo Cruz (Brazil)",date:"2009 - 2013",text:"Environmental Engineering degree. (Website in Brazilian-Portuguese)",link:"https://www.oswaldocruz.br/www/view/cursos/engenharia-ambiental/",icon:Object(n.jsx)(O.b,{})}],k=function(){return Object(n.jsxs)("article",{className:"timeline-section",id:"education",children:[Object(n.jsx)("h2",{className:"education-info",children:"Education"}),Object(n.jsx)(p.VerticalTimeline,{children:F.map((function(e,t){var i=e.title,c=e.subtitle,s=e.date,a=e.text,l=e.link,r=e.icon;return Object(n.jsxs)(p.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:s,iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:r,children:[Object(n.jsx)("h3",{className:"vertical-timeline-element-title",children:i}),Object(n.jsx)("h4",{style:{paddingTop:"8px"},className:"vertical-timeline-element-subtitle",children:c}),Object(n.jsx)("p",{children:a}),Object(n.jsx)("a",{href:l,children:"Click here for more info"})]},t)}))})]})},A=i(12);var N=function(){return Object(n.jsxs)("div",{id:"contact",className:"contact-section",children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h2",{children:"contact"})}),Object(n.jsx)("h3",{children:"Want to get in touch? Use one of the links below!"}),Object(n.jsxs)("div",{className:"contact-panels",children:[Object(n.jsxs)("div",{className:"panel",children:[Object(n.jsx)("div",{className:"panel-icon",style:{color:"purple"},children:Object(n.jsx)(r.c,{})}),Object(n.jsx)("h4",{children:"Check out some of my work in GitHub"}),Object(n.jsx)("a",{href:"https://github.com/cauemd",children:"https://github.com/cauemd"})]}),Object(n.jsxs)("div",{className:"panel",children:[Object(n.jsx)("div",{className:"panel-icon",style:{color:"#0a66c2"},children:Object(n.jsx)(r.d,{})}),Object(n.jsx)("h4",{children:"Reach out on LinkedIn"}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/cauemd/",children:"https://www.linkedin.com/in/cauemd/"})]}),Object(n.jsxs)("div",{className:"panel",children:[Object(n.jsx)("div",{className:"panel-icon",style:{color:"red"},children:Object(n.jsx)(A.a,{})}),Object(n.jsx)("h4",{children:"Contact me by email"}),Object(n.jsx)("a",{href:"mailto:cauemd91@gmail.com",children:"cauemd91@gmail.com"})]})]})]})};var y=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b,{}),Object(n.jsx)(g,{}),Object(n.jsx)(m,{}),Object(n.jsx)(k,{}),Object(n.jsx)(C,{}),Object(n.jsx)(N,{})]})};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(d,{children:Object(n.jsx)(y,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.99e99fb5.chunk.js.map