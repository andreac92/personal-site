"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FormControl, InputLabel, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useCallback, useEffect, useMemo, useState } from "react";
import { isValidZipcode } from "../utils/utils";

const ChiSidebar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const ageParam = searchParams.get("age");
  const sexParam = searchParams.get("sex");
  const zipParam = searchParams.get("zip");

  const [age, setAge] = useState(ageParam || "All");
  const [sex, setSex] = useState(sexParam || "All");
  const [zipcode, setZipcode] = useState(zipParam || "");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      params.delete("page");
      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setAge(ageParam || "All");
  }, [ageParam]);

  useEffect(() => {
    setSex(sexParam || "All");
  }, [sexParam]);

  useEffect(() => {
    setZipcode(zipParam || "");
  }, [zipParam]);

  return (
    <div className="p-2 flex flex-col items-center">
      <div className="py-2 text-plum text-2xl font-semibold text-center">
        Adopt a Chi
      </div>

      <div className="mt-4 mb-4">
        Enter your zip code to find chihuahuas near you
      </div>
      <TextField
        label="Zip Code"
        error={!isValidZipcode(zipcode)}
        value={zipcode}
        onChange={(e) => {
          const zip = e.target.value;
          if (isValidZipcode(zip)) {
            const filters = createQueryString("zip", zip);
            router.push(`/adopt-a-chi?${filters}`);
          }
        }}
        helperText={!isValidZipcode ? "Enter a valid zipcode" : ""}
      />
      <div className="mt-4 mb-4">Filter chihuahuas</div>
      <FormControl variant="outlined">
        <InputLabel id="age-filter">Age</InputLabel>
        <Select
          className="min-w-[120px] mb-4"
          label="Age"
          labelId="age-filter"
          value={age}
          onChange={(e) => {
            const age = e.target.value;
            const filters = createQueryString("age", age === "All" ? "" : age);
            router.push(`/adopt-a-chi?${filters}`);
          }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Baby">Baby</MenuItem>
          <MenuItem value="Young">Young</MenuItem>
          <MenuItem value="Adult">Adult</MenuItem>
          <MenuItem value="Senior">Senior</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="sex-filter">Sex</InputLabel>
        <Select
          className="min-w-[120px]"
          label="Sex"
          value={sex}
          onChange={(e) => {
            const sex = e.target.value;
            const filters = createQueryString("sex", sex === "All" ? "" : sex);
            router.push(`/adopt-a-chi?${filters}`);
          }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ChiSidebar;
