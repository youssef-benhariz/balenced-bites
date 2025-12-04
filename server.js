require('dotenv').config();

const express = require('express');
const path = require('path');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '');

const app = express();
const PORT = process.env.PORT || 4242;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Simple health check
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Create Stripe Checkout Session
app.post('/create-checkout-session', async (req, res) => {
  try {
    // You can customize quantity or metadata from req.body if needed
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: 1900, // $19.00
            product_data: {
              name: 'Balanced Bites Ebook',
              description: 'The Smart Way to Nourish Your Life (Digital Download)'
            }
          },
          quantity: 1
        }
      ],
      success_url: `${process.env.BASE_URL || 'http://localhost:' + PORT}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL || 'http://localhost:' + PORT}/cancel.html`
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating Stripe Checkout Session:', error.message);
    res.status(500).json({ error: 'Unable to create checkout session' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


