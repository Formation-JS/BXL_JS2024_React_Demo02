import { useId, useState } from "react";

export default function PersonForm() {

    const inputId = useId();
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        // Déactivation du comportement par default du formulaire
        event.preventDefault();

        // Traitement
        console.log(`Data : ${email}`);

        // Reset
        setEmail('');
    }

    return (
        <>
            <h2>Formulaire d'inscription</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={inputId}>E-mail : </label>
                    <input type="email" id={inputId}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  />
                </div>

                <button type="submit">Envoyer</button>
            </form>
        </>
    );
}