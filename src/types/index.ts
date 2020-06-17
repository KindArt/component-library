export interface ILinks {
  title: string;
  path: string;
  navigate: (path: string) => void;
  order?: number;
  isActive: boolean;
}
