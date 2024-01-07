export class OrderDto {
  name: string;
  orderNumber: string;
  deadline: Date;
  delivery: string;
  address: Array<any>;
  mailbox: string;
  length: number;
  welds: number;
  cost: number;
  comments: string;
  imagesInfo: Array<any>;
  // customerId: string;
}
