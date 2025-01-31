
export default function Gato({gato}) {

    return (
        <div>
            <h1>Gatos</h1>
            <ul>
                    <li key={gato.id}>
                        <h2>{gato.name}</h2>
                        <p>{gato.description}</p>
                        <img src={gato.image} alt={gato.name} width="200" />
                    </li>
            </ul>
        </div>
    );
}