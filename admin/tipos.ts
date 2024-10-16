export interface DatosEjercicio {
  tipo: string;
  scripts?: { [nombre: string]: string };
  paquetes?: boolean;
  compilado?: boolean;
  rutaArchivos?: string;
}

export interface Entrada {
  usuario: string;
  ruta: string;
  info: DatosEjercicio;
  fecha: Date;
  exportada: boolean;
}

export interface Ejercicio {
  nombre: string;
  ruta: string;
  entradas: Entrada[];
}
