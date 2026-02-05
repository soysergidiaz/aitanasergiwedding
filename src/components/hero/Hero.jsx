import '/src/components/hero/Hero.css';
import Countdown from '/src/components/hero/countdown/countdown.jsx';

export default function Hero () {
    return (
        <>
            <div id='hero'>
                <div className="title">
                    <h1>Aitana & Sergi</h1>
                    <h2>La boda del año</h2>
                    <Countdown />
                </div>
                
            </div>
        </>
    )
}