export default function ApplicationLogo(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            // Agregamos la clase 'animate-bounce' de Tailwind para que flote de arriba a abajo
            className={`h-16 w-auto animate-bounce [animation-duration:3s] ${props.className || ''}`}
        >
            {/* Esfera naranja */}
            <circle cx="50" cy="50" r="45" fill="#f97316" stroke="#ea580c" strokeWidth="3" />
            
            {/* Grupo de estrellas rojas */}
            <g>
                <path d="M50 25 l2 5 h5 l-4 3 l2 5 l-5-3 l-5 3 l2-5 l-4-3 h5 z" fill="#dc2626" />
                <path d="M35 45 l2 5 h5 l-4 3 l2 5 l-5-3 l-5 3 l2-5 l-4-3 h5 z" fill="#dc2626" />
                <path d="M65 45 l2 5 h5 l-4 3 l2 5 l-5-3 l-5 3 l2-5 l-4-3 h5 z" fill="#dc2626" />
                <path d="M50 65 l2 5 h5 l-4 3 l2 5 l-5-3 l-5 3 l2-5 l-4-3 h5 z" fill="#dc2626" />
            </g>
        </svg>
    );
}