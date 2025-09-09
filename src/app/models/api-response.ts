export interface CustomResponse<
  T /** Acá le podemos especificar un objeto genérico de retorno */
> {
  ok: boolean;
  result: T;
  msg: string;
}
