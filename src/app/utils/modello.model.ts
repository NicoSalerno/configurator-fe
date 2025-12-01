export interface Modello {
  [x: string]: any;
  ModelloID: number;
  Nome: string;
  PrezzoBase: number;
  FileImageSfondo: string
}

export interface OptionalModello {
  ModelloID: number,
  NomeModello: string,
  FileImageSfondo: string,
  FileImagePaint: string,
  FileImageRim: string,
  FileImageCalipers: string,
  FileImage: string,
  CategoriaOptionalID: number,
  NomeCategoria: string,
  OptionalID: number,
  NomeOptional: string,
  Prezzo: number,
  Predefinito: number
}