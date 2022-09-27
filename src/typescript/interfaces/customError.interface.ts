export interface CustomErrorInterface extends Error {
  status: number;
  message: string;
}
