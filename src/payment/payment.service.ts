import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PaymentService {
  private readonly paypalClientId: string;
  private readonly paypalSecret: string;
  private readonly paypalBaseUrl: string;

  constructor() {
    this.paypalClientId = process.env.PAYPAL_CLIENT_ID!;
    this.paypalSecret = process.env.PAYPAL_SECRET!;
    this.paypalBaseUrl = process.env.PAYPAL_BASE_URL!;
  }

  async generateAccessToken() {
    const response = await axios({
      url: `${this.paypalBaseUrl}/v1/oauth2/token`,
      method: 'post',
      data: 'grant_type=client_credentials',
      auth: {
        username: this.paypalClientId,
        password: this.paypalSecret,
      },
    });
    return response.data.access_token;
  }

  async createOrder() {
    const accessToken = await this.generateAccessToken();

    try {
      const response = await axios({
        url: `${this.paypalBaseUrl}/v2/checkout/orders`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        data: JSON.stringify({
          intent: 'CAPTURE',
          purchase_units: [
            {
              items: [
                {
                  name: 'Happiness',
                  description:
                    'Happiness is not a destination, it is a way of life',
                  quantity: 1,
                  unit_amount: {
                    currency_code: 'USD',
                    value: '100',
                  },
                },
              ],
              amount: {
                currency_code: 'USD',
                value: '100.00',
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: '100.00',
                  },
                },
              },
            },
          ],
          application_context: {
            brand_name: 'happiness.io',
            user_action: 'PAY_NOW',
            return_url: `${process.env.BASE_URL}/complete-payment`,
            cancel_url: `${process.env.BASE_URL}/cancel-payment`,
            shipping_preference: 'NO_SHIPPING',
          },
        }),
      });
      return response.data.links.find((link) => link.rel === 'approve').href;
    } catch (error) {
      console.log(error);
    }
  }

  async capturePayment(orderId: string) {
    const accessToken = await this.generateAccessToken();

    const response = await axios({
      url: `${this.paypalBaseUrl}/v2/checkout/orders/${orderId}/capture`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
}
