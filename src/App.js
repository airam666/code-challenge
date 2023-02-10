import React, { useState, useEffect } from "react";
import "./App.css";
import { CardStack } from "./views/cardStack";
import TextField from "@mui/material/TextField";
import { handleFetchUser } from "./api/api";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Search } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const res = async () => {
  const rr = await handleFetchUser();
  return rr;
};

function App() {
  const [userDataList, setUserDataList] = useState();
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setUserDataList(await res());
    };
    fetchUserData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="search">
          <Stack direction="row" spacing={2} style={{ marginTop: 40 }}>
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search"
              style={{ marginInline: 30 }}
            />
            <Button variant="contained" endIcon={<Search />} color="success">
              Search
            </Button>
          </Stack>
        </div>
      </header>
      <div className="regular">
        <Typography
          sx={{ fontSize: 14, marginTop: 10 }}
          color="text.secondary"
          gutterBottom
        >
          Search Results
        </Typography>
        <CardStack items={userDataList} input={inputText} />
      </div>
    </div>
  );
}

export default App;
