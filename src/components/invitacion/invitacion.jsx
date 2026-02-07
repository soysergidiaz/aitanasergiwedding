import './invitacion.css'

export default function invitacion() {
    return (
        <section id="invitacion">
            <h2 className='title-invitation'>Es un honor invitarte al día de nuestra boda</h2>
            <p>Queremos que formes parte del día más importante de nuestras vidas. Si estás aquí es porque eres alguien especial para nosotros. Nos haría muy feliz verte entre los invitados de nuestra boda y que nos acompañes en uno de los capítulos más especiales de nuestra historia de amor.</p>
            <h2 className='title-save-the-date'>SAVE THE DATE</h2>
            <div className='save-the-date'>
                <h2>25 · 09 · 2026</h2>
                <div className='options'>
                    <button className='add-calendar'>Añadir a Calendar</button>
                    <button className='RSVP'>Confirmar Asistencia</button>
                </div>
            </div>
        </section>
    )
}