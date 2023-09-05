import subItems from './subItems';

export default interface menuItems {
  id: string;
  name: string;
  hasDrop: boolean;
  dropActive: boolean;
  link?: string;
  subItems?: subItems[];
}
