import OrderModel from "../models/orders.model.js";

export default class Order {
  getOrders = async () => {
    try {
      const Order = await OrderModel.find();
      return Order;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  getOrderById = async (oid) => {
    try {
      const Order = await OrderModel.findOne({ _id: oid });
      return Order;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  createOrder = async (Order) => {
    try {
      const result = await OrderModel.create(Order);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  resolveOrder = async (oid, Order) => {
    try {
      const result = await OrderModel.updateOne({ _id: oid }, { $set: Order });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
