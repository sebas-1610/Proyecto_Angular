// Modelo User adaptado al diagrama de clases y preparado para recibir datos de Firebase OAuth
type Address = any; // Sustituir por modelo Address cuando esté disponible
type Profile = any; // Sustituir por modelo Profile cuando esté disponible
type DigitalSignature = any; // Sustituir por modelo DigitalSignature cuando esté disponible
type Device = any; // Sustituir por modelo Device cuando esté disponible
type Password = any; // Sustituir por modelo Password cuando esté disponible
type Session = any; // Sustituir por modelo Session cuando esté disponible
type UserRole = any; // Sustituir por modelo UserRole cuando esté disponible

type Answer = any; // Sustituir por modelo Answer cuando esté disponible

export class User {
    id?: number;
    name?: string;
    email!: string;
    password?: string;
    // Relaciones según diagrama de clases
    addresses?: Address[];
    profile?: Profile;
    digitalSignatures?: DigitalSignature[];
    devices?: Device[];
    passwords?: Password[];
    sessions?: Session[];
    userRoles?: UserRole[];
    answers?: Answer[];
    // Token de autenticación (Firebase OAuth)
    token?: string;
    // Método para inicializar User desde datos de Firebase OAuth
    static fromFirebase(firebaseUser: any, token: string): User {
        // Aquí se mapea el usuario de Firebase al modelo User
        // firebaseUser: objeto retornado por Firebase Auth
        // token: JWT de autenticación
        return {
            id: undefined, // El id real se obtiene del backend
            name: firebaseUser.displayName || firebaseUser.name || '',
            email: firebaseUser.email,
            token: token,
            // El resto de relaciones se llenan tras sincronizar con backend
        };
    }
}
// NOTA: El método fromFirebase debe ser llamado tras el login con Firebase OAuth, por ejemplo en el servicio de autenticación, para poblar el modelo User con los datos del usuario autenticado y el token recibido.
// Ejemplo de uso:
// const user = User.fromFirebase(firebaseUser, token);
// securityService.setUser(user);
