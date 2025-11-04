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
  getOrderById = async (id) => {
    try {
      const Order = await OrderModel.findOne({ _id: id });
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
  resolveOrder = async (id, Order) => {
    try {
      const result = await OrderModel.updateOne({ _id: id }, { $set: Order });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
}
