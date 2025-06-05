// Modelo Address según el diagrama de clases y principios SOLID
// Se asume que Address pertenece a un User (relación 1-n)

export class Address {
    id?: number;
    street!: string;
    number!: string;
    latitude?: number;
    longitude?: number;
    // Relación con User (opcional, para referencia inversa)
    userId?: number;
}

// NOTA: Si el modelo User se actualiza para tener addresses: Address[], este modelo será utilizado en esa relación.
// El campo userId permite asociar la dirección a un usuario específico según el backend.
