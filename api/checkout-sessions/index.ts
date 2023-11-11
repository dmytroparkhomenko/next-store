"use server"

import Stripe from 'stripe'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

import { stripe } from '@/lib/stripe'
import { formatAmountForStripe } from './stripe-helper'
import { CURRENCY, SHIPPING_COST, FREE_SHIPPING_UP } from 'config'

export async function createCheckoutSession(productsData: any[]): Promise<void> {

  const line_items = productsData.map(item => ({
    quantity: item.quantity,
    price_data: {
      currency: CURRENCY,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
      unit_amount: formatAmountForStripe(item.price, CURRENCY),
    }
  }));

  const totalPrice: number = line_items.reduce((accumulator: number, currentValue: any) => {
    return accumulator + currentValue.price_data.unit_amount * currentValue.quantity as number
  }, 0)

  const freeShipping: boolean = totalPrice < (FREE_SHIPPING_UP * 100) ? false : true;

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: 'payment',
      submit_type: 'pay',
      billing_address_collection: 'required',
      line_items,  
      success_url: `${headers().get(
        'origin'
      )}/payment-result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${headers().get('origin')}/cart`,
      invoice_creation: {
        enabled: true
      }, 
      phone_number_collection: {
        enabled: true
      }, 
      shipping_address_collection: {
        allowed_countries: ["UA", 'DE']
      }, 
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: freeShipping ? "Your shipping is free" : `When subtotal less than ${FREE_SHIPPING_UP + CURRENCY}`, 
            type: 'fixed_amount', 
            fixed_amount: {
              amount: freeShipping ? 0 : (SHIPPING_COST * 100),
              currency: CURRENCY
            },
          }
        } 
      ],
      custom_text: {
        shipping_address: {
          message: 'Type your shipping adress'
        }
      }
    })

  redirect(checkoutSession.url as string)
}