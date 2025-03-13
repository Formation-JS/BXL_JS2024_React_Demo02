import { useId, useState } from "react";

export default function PersonForm() {

    const inputId = useId();
    const [email, setEmail] = useState('');
    const [nbPerson, setNbPerson] = useState('1');
    const [duration, setDuration] = useState('3');
    const [isEat, setEat] = useState(true);

    const handleSubmit = (event) => {
        // Déactivation du comportement par default du formulaire
        event.preventDefault();

        // Traitement
        console.log(`Data : `, { email, nbPerson, duration, isEat });

        // Reset
        setEmail('');
    };

    return (
        <>
            <h2>Formulaire d'inscription</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={inputId + '-email'}>E-mail : </label>
                    <input type="email" id={inputId + '-email'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor={inputId + '-nbPerson'}>Nombre de personne : </label>
                    <input type="number" id={inputId + '-nbPerson'}
                        value={nbPerson}
                        onChange={(e) => setNbPerson(e.target.value)} />
                </div>
                <div>
                    <label>Durée : </label>
                    <label htmlFor={inputId + '-duration-morning'}> Matin </label>
                    <input type="radio" id={inputId + '-duration-morning'}
                        checked={duration === '1'}
                        onChange={(e) => setDuration('1')} />
                    <label htmlFor={inputId + '-duration-evening'}> Soir </label>
                    <input type="radio" id={inputId + '-duration-evening'}
                        checked={duration === '2'}
                        onChange={(e) => setDuration('2')} />
                    <label htmlFor={inputId + '-duration-day'}> Jour </label>
                    <input type="radio" id={inputId + '-duration-day'}
                        checked={duration === '3'}
                        onChange={(e) => setDuration('3')} />
                </div>
                <div>
                    <label htmlFor={inputId + '-eat'}>Repas : </label>
                    <input type="checkbox" id={inputId + '-eat'}
                        checked={isEat}
                        onChange={(e) => setEat(e.target.checked)} />
                </div>

                <button type="submit">Envoyer</button>
            </form>
        </>
    );
}