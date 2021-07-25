import React from "react";
import { TextField } from "@material-ui/core/";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  palette: {
    primary: { 500: "#c7ffd8" },
  },
  typography: {
    fontFamily: "Source Sans Pro, sans-serif",
  },
});

const Field = ({ label, value, onChange, rows }) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        label={label}
        autoComplete="disabled"
        style={{ marginTop: "1rem" }}
        InputLabelProps={{
          required: false,
        }}
        value={value}
        required
        fullWidth={true}
        multiline={rows !== 1}
        rows={rows}
        onChange={onChange}
        variant="filled"
      />
    </ThemeProvider>
  );
};

export default Field;
