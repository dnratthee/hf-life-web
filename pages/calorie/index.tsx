import Router from "next/router";
import { useEffect, useState } from "react";
import { User } from "@/lib/user";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import AppBar from "@/components/AppBar";

export default function Calorie() {
  const [user, setUser] = useState<User | undefined>(undefined);
  let bmi = "";

  useEffect(() => {
    let nuser: User | undefined;
    if (localStorage.getItem("user")) {
      let json = localStorage.getItem("user") || "{}";
      nuser = JSON.parse(json);
    }
    if (
      !nuser ||
      nuser.gender === undefined ||
      nuser.age === undefined ||
      nuser.weight === undefined ||
      nuser.height === undefined
    ) {
      Router.push("/user");
    } else {
      // คำนวณ BMI
      nuser.bmi = nuser.weight / ((nuser.height / 100) * (nuser.height / 100));

      // คำนวณ BMR
      if (nuser.gender === "male")
        nuser.bmr =
          88.362 +
          13.397 * nuser.weight +
          4.799 * nuser.height -
          5.677 * nuser.age;
      else
        nuser.bmr =
          447.593 +
          9.247 * nuser.weight +
          3.098 * nuser.height -
          4.33 * nuser.age;

      setUser(nuser);
    }
  }, []);

  // จัดเกณฑ์ BMI
  if (user && user.bmi) {
    if (user.bmi < 18.5) bmi = "น้ำหนักอยู่ในเกณฑ์น้อยหรือผอม";
    else if (user.bmi >= 18.5 && user.bmi < 23) bmi = "น้ำหนักอยู่ในเกณฑ์ปกติ";
    else if (user.bmi >= 23 && user.bmi < 25)
      bmi = "น้ำหนักอยู่ในเกณฑ์เกินมาตราฐาน";
    else if (user.bmi >= 25 && user.bmi < 30)
      bmi = "น้ำหนักอยู่ในเกณฑ์โรคอ้วนระดับที่ 1";
    else if (user.bmi >= 30) bmi = "น้ำหนักอยู่ในเกณฑ์โรคอ้วนระดับที่ 2";
  }

  return (
    <div>
      <main>
        <AppBar>คำนวณแคลอรี่</AppBar>
        <Box sx={{ color: "secondary.contrastText" }}>
          <Typography variant="h1" component="div" align="center">
            {user?.bmr?.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </Typography>
          <hr />
          <Typography variant="h4" component="div" align="center">
            แคลอรี่ที่แนะนำต่อวัน
          </Typography>
          <hr />
          <Typography variant="h6" component="div">
            BMI ของคุณคือ {user?.bmi?.toFixed(2)}
          </Typography>
          <Typography
            sx={{ color: "secondary.main" }}
            variant="h6"
            component="div"
          >
            {bmi}
          </Typography>
          <Typography
            className={`${user?.bmi && user?.bmi >= 25 ? "" : "hide"}`}
            sx={{ color: "warning.main" }}
            variant="h6"
            component="div"
          >
            ควรลดน้ำหนัก
          </Typography>
        </Box>
      </main>
    </div>
  );
}
