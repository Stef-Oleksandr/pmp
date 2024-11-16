import OrderService from './OrderService';
import ProductService from './ProductService';
import PaymentService from './PaymentService';
import axios from 'axios';

jest.mock('axios');
jest.mock('./PaymentService');

describe('OrderService', () => {
  let orderService;
  const productId = '456';
  const quantity = 2;
  const mockProductData = { id: productId, price: 100 };
  const mockPaymentResult = { status: 'success', transactionId: 'txn-12345' };

  beforeEach(() => {
    orderService = new OrderService();
    orderService.cache = {}; // Очищаємо кеш перед кожним тестом
    axios.get.mockReset();
    PaymentService.mockClear();
    jest.spyOn(console, 'log').mockImplementation(() => {}); // Мокаємо console.log
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Відновлюємо початкову реалізацію console.log після кожного тесту
  });

  it('should create an order and process payment', async () => {
    // Мокаємо API запит для отримання продукту
    axios.get.mockResolvedValueOnce({ data: mockProductData });

    // Мокаємо обробку платежу
    PaymentService.mockImplementation(() => {
      return {
        processPayment: jest.fn().mockResolvedValue(mockPaymentResult),
      };
    });

    const order = await orderService.createOrder(productId, quantity);

    expect(order.productId).toEqual(productId);
    expect(order.quantity).toEqual(quantity);
    expect(order.totalPrice).toEqual(mockProductData.price * quantity);
    expect(order.paymentStatus).toEqual(mockPaymentResult.status);
    expect(order.transactionId).toEqual(mockPaymentResult.transactionId);
    
    // Перевіряємо, що продукт був отриманий з API
    expect(axios.get).toHaveBeenCalledWith(`https://api.example.com/products/${productId}`);
    
    // Перевіряємо, що платіж був оброблений
    const paymentService = new PaymentService();
    expect(paymentService.processPayment).toHaveBeenCalledWith(productId, mockProductData.price * quantity);
  });

  it('should use cached product data if available', async () => {
    orderService.cache[productId] = mockProductData; // Додаємо продукт в кеш

    PaymentService.mockImplementation(() => {
      return {
        processPayment: jest.fn().mockResolvedValue(mockPaymentResult),
      };
    });

    const order = await orderService.createOrder(productId, quantity);

    expect(order.productId).toEqual(productId);
    expect(order.quantity).toEqual(quantity);
    expect(order.totalPrice).toEqual(mockProductData.price * quantity);
    expect(order.paymentStatus).toEqual(mockPaymentResult.status);
    expect(order.transactionId).toEqual(mockPaymentResult.transactionId);
    
    // Перевіряємо, що API не був викликаний
    expect(axios.get).not.toHaveBeenCalled();
  });
});