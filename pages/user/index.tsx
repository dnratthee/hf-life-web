import * as React from "react";

import Router from "next/router";
import Image from "next/image";

import { useEffect, useState } from "react";

import AppBar from "@/components/AppBar";

import {
  Grid,
  Typography,
  RadioGroup,
  Radio,
  Checkbox,
  FormControl,
  FormControlLabel,
  OutlinedInput,
  FilledInput,
  InputAdornment,
  FormHelperText,
  Button,
} from "@mui/material";

interface State {
  gender: string | undefined;
  age: number | string;
  weight: number | string;
  height: number | string;
}

export default function User() {
  const [page, setPage] = useState(0);
  const [values, setValues] = React.useState<State>({
    gender: undefined,
    age: "",
    weight: "",
    height: "",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  useEffect(() => {
    // storing input name
    localStorage.setItem("user", JSON.stringify(values));
  }, [values]);

  switch (page) {
    case 1:
      return (
        <main className="user">
          <AppBar>เลือกเพศของท่าน</AppBar>
          <FormControl
            fullWidth
            style={{ margin: "12px", alignItems: "center" }}
          >
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                className={`gender ${values.gender == "male" ? "active" : ""}`}
                sx={{
                  backgroundColor: "secondary.main",
                  padding: "8px",
                  borderRadius: "16px",
                }}
                control={
                  <Radio
                    className="image-radio"
                    value={"male"}
                    key={"gender"}
                    onChange={handleChange("gender")}
                  />
                }
                label={
                  <>
                    <Image
                      src={"/images/icon/aung.png"}
                      width="100"
                      height="100"
                      unoptimized
                      priority
                      style={{
                        marginRight: "5px",
                        transform: "rotate(-35deg)",
                      }}
                      alt="male"
                    />
                  </>
                }
              />
              <FormControlLabel
                className={`gender ${
                  values.gender == "female" ? "active" : ""
                }`}
                sx={{
                  backgroundColor: "secondary.main",
                  padding: "8px",
                  borderRadius: "16px",
                }}
                control={
                  <Radio
                    className="image-radio"
                    value={"female"}
                    key={"gender"}
                    onChange={handleChange("gender")}
                  />
                }
                label={
                  <>
                    <Image
                      src={"/images/icon/ann.png"}
                      width="100"
                      height="100"
                      unoptimized
                      priority
                      style={{
                        marginRight: "5px",
                        transform: "rotate(35deg)",
                      }}
                      alt="female"
                    />
                  </>
                }
              />
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            size="large"
            fullWidth
            style={{ fontSize: "large" }}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            ถัดไป
          </Button>
        </main>
      );
      break;

    case 2:
      return (
        <main className="user">
          <AppBar>กรอกอายุของท่าน</AppBar>
          <FormControl
            fullWidth
            style={{
              margin: "12px",
              alignItems: "center",
            }}
          >
            <OutlinedInput
              style={{ backgroundColor: "#fff" }}
              id="outlined-adornment-age"
              type="number"
              value={values.age}
              onChange={handleChange("age")}
              endAdornment={<InputAdornment position="end">ปี</InputAdornment>}
            />
          </FormControl>
          <Button
            variant="contained"
            size="large"
            fullWidth
            style={{ fontSize: "large" }}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            ถัดไป
          </Button>
        </main>
      );
      break;

    case 3:
      return (
        <main className="user">
          <AppBar>กรอกน้ำหนักของท่าน</AppBar>
          <FormControl
            fullWidth
            style={{ margin: "12px", alignItems: "center" }}
          >
            <OutlinedInput
              style={{ backgroundColor: "#fff" }}
              id="outlined-adornment-weight"
              type="number"
              value={values.weight}
              onChange={handleChange("weight")}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            />
          </FormControl>
          <Button
            variant="contained"
            size="large"
            fullWidth
            style={{ fontSize: "large" }}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            ถัดไป
          </Button>
        </main>
      );
      break;

    case 4:
      return (
        <main className="user">
          <AppBar>กรอกส่วนสูงของท่าน</AppBar>
          <FormControl
            fullWidth
            style={{ margin: "12px", alignItems: "center" }}
          >
            <OutlinedInput
              style={{ backgroundColor: "#fff" }}
              id="outlined-adornment-height"
              type="number"
              value={values.height}
              onChange={handleChange("height")}
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
            />
          </FormControl>
          <Button
            variant="contained"
            size="large"
            fullWidth
            style={{ fontSize: "large" }}
            onClick={() => {
              Router.push("/");
            }}
          >
            เข้าสู่หน้าหลัก
          </Button>
        </main>
      );
      break;
    default:
      return (
        <main>
          <div
            style={{
              position: "absolute",
              maxWidth: "45%",
              maxHeight: "45%",
              top: "40%",
              left: "50%",
              overflow: "visible",
            }}
          >
            <Image
              src={"/logo.svg"}
              unoptimized
              priority
              width="250"
              height="250"
              alt="logo"
              style={{
                position: "relative",
                maxWidth: "100%",
                maxHeight: "100%",
                marginTop: "-50%",
                marginLeft: "-50%",
                objectFit: "contain",
              }}
            />
            <div
              style={{
                position: "fixed",
                transform: "translate(-50%)",
                marginTop: "20px",
                width: "60%",
              }}
            >
              <Button
                variant="contained"
                size="large"
                fullWidth
                style={{ fontSize: "large" }}
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                เริ่มต้นการใช้งาน
              </Button>
            </div>
          </div>
        </main>
      );
      break;
  }
}
