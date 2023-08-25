import React, { useState } from 'react';

const ComprarForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');

    const isFormValid = nombre.trim() !== '' && email.trim() !== '' && celular.trim() !== '';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            const userData = {
                nombre: nombre.trim(),
                email: email.trim(),
                celular: celular.trim(),
            };
            onConfirm(userData);
        } else {
            alert('Por favor completa todos los campos antes de enviar.');
        }
    };

    return (
        <div>
            <h3 className='text-center mt-5 title-form'>Completa estos datos para concretar la compra</h3>
            <section className='section_form'>
                <form className='feed-form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre y apellido"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Celular"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                    />
                    <button className='button_submit' type="submit" disabled={!isFormValid}>
                        Enviar información
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ComprarForm;
