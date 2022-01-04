import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const min = 0;
const max = 10;

export default function BasicTextFields() {
  const [value, setValue] = useState(Number);

  return (
    <div>
      <TextField fullWidth
        id="outlined-required"
        label="Max(value)"
        type="number"
        inputProps={{ min, max }}
        value={value}
        onChange={(e) => {
          var value = parseInt(e.target.value, 10);

          if (value > max) value = max;
          if (value < min) value = min;

          setValue(value);
        }}
        variant="outlined"
      />
    </div>
  );
}
