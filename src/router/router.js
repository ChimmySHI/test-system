import Login from "../container/login/IndexPage";
import Home from "../container/home/home";
import indone from "../container/user/adduser/Adminis.js";
import indtwo from "../components/AdQue";
import indthree from "../components/ChTheque";
import Exam from "../container/exam/exam.js";
// import indfive from "../components/UserAdditions";
import indthere from "../components/ChTheque";
import Showuser from "../container/user/showuser/showuser";
const routs = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        name: "添加试题",
        path: "/home/exam",
        component: Exam
      },
      {
        name: "试题分类",
        path: "/home/indtwo",
        component: indtwo
      },
      {
        name: "查看试题",
        path: "/home/indthree",
        component: indthree
      },
      {
        name: "添加用户",
        path: "/home/indone",
        component: indone
      },
      {
        name: "用户展示",
        path: "/home/showuser",
        component: Showuser
      },
      {
        name: "查看用户",
        path: "/home/indthere",
        component: indthere
      }
    ]
  }
];
export default routs;
