export class Pelicula {
    constructor(
        public id: number,
        public titulo: string,
        public genero: string,
        public director: string,
        public anio: number,
        public platafomra: string,
        public pago: boolean
    ) {
        
    }
}