import * as React from "react";

import Image from "next/image";

import { useEffect } from "react";

import AppBar from "@/components/AppBar";

import {
  Grid,
  Typography,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

interface State {
  gender: string;
  age: number;
  weight: number;
  height: number;
}

export default function User() {
  const [values, setValues] = React.useState<State>({
    gender: "",
    age: 0,
    weight: 0,
    height: 0,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  useEffect(() => {
    // storing input name
    localStorage.setItem("user", JSON.stringify(values));
  }, [values]);

  return (
    <div>
      <main>
        <AppBar>กรอกข้อมูลของท่าน</AppBar>
        <Grid sx={{ color: "secondary.contrastText" }} container spacing={2}>
          <Grid item xs={5}>
            <Typography variant="h4" component="div">
              เพศ
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
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
                        width="40"
                        height="40"
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
                        width="40"
                        height="40"
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
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h4" component="div">
              อายุ
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <FormControl variant="outlined">
              <OutlinedInput
                id="outlined-adornment-age"
                type="number"
                value={values.age}
                onChange={handleChange("age")}
                endAdornment={
                  <InputAdornment position="end">ปี</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h4" component="div">
              น้ำหนัก
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <FormControl variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                type="number"
                value={values.weight}
                onChange={handleChange("weight")}
                endAdornment={
                  <InputAdornment position="end">kg</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h4" component="div">
              ส่วนสูง
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <FormControl variant="outlined">
              <OutlinedInput
                id="outlined-adornment-height"
                type="number"
                value={values.height}
                onChange={handleChange("height")}
                endAdornment={
                  <InputAdornment position="end">cm</InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
