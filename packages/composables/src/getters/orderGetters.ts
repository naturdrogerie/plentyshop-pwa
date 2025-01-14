import { AgnosticPagination, UserOrderGetters } from '@vue-storefront/core';
import type { GetOrdersResponse, Order, OrderItem } from '@vue-storefront/plentymarkets-api';
import { productGetters } from './productGetters';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDate(order: Order): string {
  if (order && order.order) {
    return new Date(order.order.createdAt).toLocaleString();
  }

  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(order: Order): string {
  return order.order?.id.toString() || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getStatus(order: Order): string {
  return order?.order?.statusName || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(order: Order): number | null {
  return order?.order?.amounts[0]?.grossTotal || 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(order: Order): OrderItem[] {
  return order.order.orderItems || [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku(item: OrderItem): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName(item: OrderItem): string {
  return item.orderItemName || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item: OrderItem): number {
  return item.quantity || 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice(item: OrderItem): number {
  return item.amounts[0].priceOriginalGross || 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return price.toString() || '0';
}

// eslint-disable-next-line
function getOrdersTotal(orders: any): number {
  return orders?.data?.totalsCount || 0;
}

function getPagination(orders: GetOrdersResponse): AgnosticPagination {
  const totalPages = orders?.data?.lastPageNumber || 1;
  const pageOptions = [orders?.data?.itemsPerPage] || [5];
  const totalItems = orders?.data?.totalsCount || 1;
  const currentPage = orders?.data?.page || 1;
  const itemsPerPage = orders?.data?.itemsPerPage || 10;

  return {
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    pageOptions
  };
}

function getOrderItemLink(order: Order, productId: number): string {
  const link = `/p/${productId}/${productGetters.getSlug(order.variations[productId])}`;

  return link;
}

export const orderGetters: UserOrderGetters<Order, OrderItem> = {
  getDate,
  getId,
  getStatus,
  getPrice,
  getItems,
  getItemSku,
  getItemName,
  getItemQty,
  getItemPrice,
  getFormattedPrice,
  getOrdersTotal,
  getPagination,
  getOrderItemLink
};
