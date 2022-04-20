import React from "react";
import { Button, Grid, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { evaluate } from 'mathjs'

export default function Calculator({ setAmount }) {

  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result + event.target.value);
  }

  const handleDelete = () => {
    setResult(result.slice(0, result.length - 1));
  }

  const handleCalculate = () => {
    setResult(evaluate(result).toString());
    setAmount(
      {
        textmask: '(100) 000-0000',
        numberformat: evaluate(result)
      }
    );
  }

  return (
    <div style={{ width: '100%', margin: "0 auto" }}>

      <OutlinedInput
        sx={{
          marginBottom: "17px",
          width: "100%",
        }}
        id="outlined-adornment-result"
        value={result}
        aria-describedby="outlined-result-helper-text"
        inputProps={{
          'aria-label': 'result',
          readOnly: true,
        }}
      />

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button
            sx={{}}
            variant="outlined"
            value="7"
            onClick={handleClick}
          >
            7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="8"
            onClick={handleClick}
          >
            8
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="9"
            onClick={handleClick}
          >
            9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="/"
            onClick={handleClick}
          >
            /
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="4"
            onClick={handleClick}
          >
            4
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="5"
            onClick={handleClick}
          >
            5
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="6"
            onClick={handleClick}
          >
            6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="*"
            onClick={handleClick}
          >
            ✕
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="1"
            onClick={handleClick}
          >
            1
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="2"
            onClick={handleClick}
          >
            2
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="3"
            onClick={handleClick}
          >
            3
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="+"
            onClick={handleClick}
          >
            +
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="000"
            onClick={handleClick}
          >
            000
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="0"
            onClick={handleClick}
          >
            0
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="-"
            onClick={handleClick}
          >
            -
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            value="="
            onClick={handleCalculate}
          >
            =
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="("
            onClick={handleClick}
          >
            (
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value=")"
            onClick={handleClick}
          >
            )
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="del"
            onClick={handleDelete}
          >
            DEL
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="outlined"
            value="clear"
            onClick={() => setResult("")}
          >
            CLR
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
