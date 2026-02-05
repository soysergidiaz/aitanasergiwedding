import TimeCounter from "./time-counter"
import React, { useState, useEffect } from 'react';

export default function Countdown () {

    const fechaBoda = new Date("2026-09-25T17:30").getTime();
    const ahora = Date.now();



    return (
        <div className="countdown">
            <h2>Cuenta atrás para el gran día</h2>
            <div className="counter">
                <TimeCounter reloj="Días" tiempo="00" />
                <TimeCounter reloj="Horas" tiempo="00" />
                <TimeCounter reloj="Minutos" tiempo="00" />
                <TimeCounter reloj="Segundos" tiempo="00" />
            </div>
        </div>
    )
}