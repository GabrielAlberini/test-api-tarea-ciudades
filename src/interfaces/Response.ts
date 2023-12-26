import { SurfaceResponse, CapitalResponse } from "./interfaces";

// Interfaz para respuesta  de éxito
interface Response {
  code: number;
  data: SurfaceResponse[] | CapitalResponse[] | string[][];
}

export { Response };
