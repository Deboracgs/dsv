import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commonSelector, updateCounter } from "./../../effects/reducers";
import { CounterContainerStyled, InputStyled,  } from "./Counter.styled";
import { Button, InputNumber } from "./../index"
import { useEffect } from "react";


export interface CounterProps {
}

const modes = ["normal", "odd", "input", "reset"]
const Counter = (): React.ReactElement => {
    const dispatch = useDispatch();
    const [mode, setMode] = useState("normal");
    const [valueToAdd, setValueToAdd] = useState(0);
    const { counter } = useSelector(commonSelector);
   
    useEffect(() => { 
        if(mode === "reset"){
            setMode("normal");
            setValueToAdd(0)
            dispatch(updateCounter(0));
        }
    }, [mode, dispatch]);

    const nextOdd = () => {
        let newValue = counter;
        if(counter % 2 !== 0) {
            newValue = counter + 2;
        }else {
            newValue = counter + 1;
        }

        dispatch(updateCounter(newValue));
    }

    const previousOdd = () => {
        let newValue = counter;
        if(counter % 2 !== 0) {
            newValue = counter - 2;
        }else {
            newValue = counter - 1;
        }

        dispatch(updateCounter(newValue <= 0 ? 1 : newValue));
    }

    const inputMode = (type: string) => {
        let newValue = counter;
        if(type === "increment"){
            newValue = counter + Number(valueToAdd);
        }else{
            newValue = counter - Number(valueToAdd);
        }
        dispatch(updateCounter(newValue <= 0 ? 0 : newValue));
    }

    const decrementCounter = () => {
        switch (mode) {
            case "odd":
                previousOdd()
                break;

            case "input":
                inputMode("decrement")
                break;
        
            default:
                dispatch(updateCounter(counter === 0 ? 0 : counter -1));
                break;
        }
       
    }

    const incrementCounter =  () => {
        switch (mode) {
            case "odd":
                nextOdd()
                break;

            case "input":
                inputMode("increment")
                break;
        
            default:
                dispatch(updateCounter(counter + 1));
                break;
        }
       
    }

    return (
        <Box>
            <Grid>
                <Grid item>
                    <Typography variant="h3">Counter: <span data-testid="counter-value">{counter}</span></Typography>
                </Grid>
                <Grid item>
                    <CounterContainerStyled>
                        <Button
                            id="decrement"
                            label="-"
                            onClick={() => decrementCounter()}
                        />
                        <InputStyled>
                            <InputNumber
                                id="counter"
                                defaultValue={valueToAdd}
                                disabled={!(mode === "input")}
                                onChange={(value: number) => setValueToAdd(value)}
                            />
                        </InputStyled>
                        
                        <Button
                            id="increment"
                            onClick={() => incrementCounter()}
                            label="+"
                        />
                    </CounterContainerStyled>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}>
                        {modes.map((mode) => (
                            <Grid item marginY={2} key={mode}>
                                <Button
                                    id={mode}
                                    variant="outlined"
                                    label={`${mode} Mode`}
                                    onClick={() => setMode(mode)}
                                />
                            </Grid>
                        ))}
                    
                    </Grid>
                </Grid>
            </Grid>
        </Box>
       
    )
};

Counter.defaultProps = {};
export default Counter;
