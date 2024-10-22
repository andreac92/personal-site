"use client";
import { useParams, useRouter } from "next/navigation";
import { FormControl, InputLabel, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useMemo, useState } from "react";
import { toURLParams, updateChiSearchParams } from "../utils/utils";

const ChiSidebar = () => {
  const searchParams = useParams();
  const router = useRouter();
  const [age, setAge] = useState(searchParams.age || "All");
  const [sex, setSex] = useState(searchParams.sex || "All");
  const [zipcode, setZipcode] = useState(searchParams.zip || "");

  const isValidZipcode = useMemo(() => {
    if (zipcode === "") return true;
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode as string);
  }, [zipcode]);

  useEffect(() => {
    if (isValidZipcode) {
      const filters = updateChiSearchParams(searchParams, {
        zip: zipcode,
        page: "", // reset page num
      });
      router.push(`/adopt-a-chi?${toURLParams(filters)}`);
    }
  }, [isValidZipcode, zipcode]);

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
        error={!isValidZipcode}
        value={zipcode}
        onChange={(e) => {
          setZipcode(e.target.value);
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
            setAge(e.target.value);
          }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Baby">Baby</MenuItem>
          <MenuItem value="Young">Young</MenuItem>
          <MenuItem value="Adult">Adult</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="sex-filter">Sex</InputLabel>
        <Select
          className="min-w-[120px]"
          label="Sex"
          value={sex}
          onChange={(e) => {
            setSex(e.target.value);
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
