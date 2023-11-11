import { stripe } from '@/lib/stripe'
import PrintObject from '@/components/cart/print-object'

export default async function PaymentResult({searchParams}) {
  if (!searchParams.session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const checkoutSession =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ['line_items', 'payment_intent'],
    })

  return (
    <>
      <h2 className='text-center text-2xl font-bold mb-2'>Payment was successful. Thank you for order 🤗</h2>
      <p className='text-xl mt-4'>Checkout Session response:</p>
      <PrintObject content={checkoutSession} />
    </>
  )
}