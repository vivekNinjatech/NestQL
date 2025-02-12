import { Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Request, Response } from 'express';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get('/shop')
  @Render('index')
  showPaymentPage() {}

  @Post('/payment')
  async initiatePayment(@Req() req: Request, @Res() res: Response) {
    try {
      const paymentUrl = await this.paymentService.createOrder();
      res.redirect(paymentUrl);
    } catch (error) {
      res.send(`Error: ${error}`);
    }
  }

  @Get('/complete-payment')
  async completePayment(@Req() req: Request, @Res() res: Response) {
    try {
      await this.paymentService.capturePayment(req.query.token as string);
      res.redirect('/success');
    } catch (error) {
      res.send(`Error: ${error}`);
    }
  }

  @Get('/cancel-payment')
  @Render('retry')
  async handleCancelledPayment(@Req() req: Request, @Res() res: Response) {}

  @Get('/success')
  @Render('success')
  async handleSuccessfulPayment(@Req() req: Request, @Res() res: Response) {}
}
