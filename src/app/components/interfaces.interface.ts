export interface SearchAlambron {
  msg:       string;
  it_result: Alambron[];
}
export interface Alambron {
  entrega:            string;
  material:           string;
  toneladas:          string;
  chofer:             string;
  coment:             string;
  cliente:            string;
  noTrasporte:        string;
  tipo_transp:        string;
  arriboAlmacenFecha: string;
  arriboAlmacenHora:  string
  placas:             string;
  fechaTara:          string;
  horaTara:           string;
  streg:              string;
  stlbg:              string;
  status?:            string;
}

export interface SearchBarras {
  msg:       string;
  it_result: Barras[];
}
export interface Barras {
  entrega:           string;
  material:          string;
  toneladas:         string;
  chofer:            string;
  coment:            string;
  cliente:           string;
  noTrasporte:       string;
  tipo_transp:       string;
  arriboAlmacen:     string;
  arriboAlmacenHora: string;
  placas:            string;
  fechaTara:         string;
  horaTara:          string;
  streg:             string;
  stlbg:             string;
  status?:           string;
}

export interface SearchYard {
  msg:       string;
  it_result: Yard[];
}
export interface Yard {
  placas:             string;
  tipoTransporte:     string;
  material:           string;
  rollo:              string;
  entrega:            string;
  transportista:      string;
  toneladas:          string;
  cliente:            string;
  conductor:          string;
  telefono:           string;
  fechaTara:          string;
  horaTara:           string;
  arriboAlmacenFecha: string;
  arriboAlmacenHora:  string;
  streg:              string;
  stlbg:              string;
  status?:            string;
}

export interface SearchTracking {
  msg:       string;
  it_result: Tracking[];
}
export interface Tracking {
  transportista:               string;
  chofer:                      string;
  placas:                      string;
  producto:                    string;
  tAsignacion_PesajeVacio?:    string;
  tPesajeVacio_almacen?:       string;
  tCargaAlmacen?:              string;
  tUnidadCargada_Remisionado?: string;
  tResmisionado_Enlonado?:     string;
  tEnlonado_FinTransporte?:    string;
  estadiaTotal?:               string;
  dalbg:                       string;
  ualbg:                       string;
  dtdis:                       string;
  uzdis:                       string;
  dareg:                       string;
  uareg:                       string;
  dalen:                       string;
  ualen:                       string;
  dtabf:                       string;
  uzabf:                       string;
  datbg:                       string;
  uatbg:                       string;
  daten:                       string;
  uaten:                       string;
  erdat:                       string;
  erzet:                       string;
  stdis:                       string;
  streg:                       string;
  stlbg:                       string;
  stlad:                       string;
  stabf:                       string;
  stten:                       string;
  zcoac:                       string;
  status?:                     string;
}

export interface SearchTransUp {
  msg:       string;
  it_result: TransUp[];
}
export interface TransUp {
  chofer:          string;
  placas:          string;
  des_almacen:     string;
  dareg:           string;
  uareg:           string;
  desc_transporte: string;
  status?:         string;
}

export interface SearchTransDown {
  msg:       string;
  it_result: TransDown[];
}

export interface TransDown {
  zona:    string;
  tipo:    string;
  zstatus: string;
  zcant:   string;
  vsart:   string;
  zcoment: string;
}

export interface ComentarioFull {
  menssage: string;
  it_comen: Comentario[];
}
export interface Comentario {
  placa:       string;
  comentario:  string;
  id:          string;
}
