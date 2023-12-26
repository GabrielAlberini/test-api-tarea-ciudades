interface Provincia {
    nombre: string;
    capital: string;
    habitantes: number;
    superficie_km2: number;
    lugares_turisticos: LugarTuristico[];
  }
  
  interface LugarTuristico {
    nombre: string;
    tipo: string;
    atracciones: string[];
  }
  
  interface SurfaceResponse {
    nombre: string;
    superficie_km2:number;
    habitantes:number
  }
   interface CapitalResponse{
    nombre: string,
    tipo: string,
    atracciones:string []
   }
  export{ Provincia, LugarTuristico, SurfaceResponse, CapitalResponse}