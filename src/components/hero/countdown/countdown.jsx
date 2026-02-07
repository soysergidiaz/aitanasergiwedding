import TimeCounter from "./time-counter";
import { useState, useEffect } from 'react';

export default function Countdown () {

    const fechaBoda = new Date("2026-09-25T17:30").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = fechaBoda - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutos: Math.floor((difference / 1000 / 60) % 60),
                segundos: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    })

    console.log(timeLeft);



    return (
        <div className="countdown">
            <h2>Cuenta atrás para el gran día</h2>
            <div className="counter">
                <TimeCounter reloj="Días" tiempo={timeLeft.dias} />
                <TimeCounter reloj="Horas" tiempo={timeLeft.horas} />
                <TimeCounter reloj="Minutos" tiempo={timeLeft.minutos} />
                <TimeCounter reloj="Segundos" tiempo={timeLeft.segundos} />
            </div>
        </div>
    )
}