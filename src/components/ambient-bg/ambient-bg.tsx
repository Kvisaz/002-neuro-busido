import React from 'react';

import {useDataState} from "../../hooks";
import {FloatingCubes, GradientBg} from "./bgs";

export const AmbientBg: React.FC = () => {

    const {lastSentenceIndex} = useDataState();


    const bgs = [
        (<FloatingCubes direction='bottom'/>),
        (<GradientBg/>),
        (<FloatingCubes direction='up'/>),
    ]

    const nextIndex = lastSentenceIndex % bgs.length;

    return (<>{bgs[nextIndex]}</>)
}