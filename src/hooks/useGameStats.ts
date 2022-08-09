import React, { useEffect, useState } from "react";
import { ROWPOINTS } from "../setup";


export const useGameStats = (rowCleared : number) => {
    const [score, setScore] = useState<number>(0);
    const [rows, setRows] = useState(0);
    const [level, setLevel] = useState(1);

    useEffect(() => {
        if (rowCleared > 0) {
            setRows(prev => prev + ROWPOINTS[rowCleared - 1] * level);
            setScore(prev => prev + rowCleared);
        }
    }, [rowCleared]);
    
    return { score, rows, level, setLevel, setScore, setRows };
}