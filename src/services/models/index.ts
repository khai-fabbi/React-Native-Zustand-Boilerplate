export interface IUser {
  name: string;
  email: string;
}
export interface CardInfo {
  id: number;
  image: string;
  categoryName: string;
  title: string;
  description: string;
  raised: string;
  progress: number;
  totalBacker: number;
  author: {
    image: string;
    name: string;
  };
}

export interface DropDownItem {
  label: string;
  value: string;
}
