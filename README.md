## Balanced Bites Ebook Site

A simple landing page and checkout site to sell your **Balanced Bites** ebook using **Stripe Checkout**.

### 1. Prerequisites

- Node.js (v18+ recommended)
- A Stripe account (free test mode is fine)

### 2. Install dependencies

From the project folder:

```bash
npm install
```

### 3. Set your Stripe keys

1. Log in to your Stripe Dashboard.
2. Go to **Developers → API keys**.
3. Copy your **Secret key** (use the test key that starts with `sk_test_...` while testing).

Create a file named `.env` in the project root:

```bash
STRIPE_SECRET_KEY=sk_test_your_real_secret_key_here
BASE_URL=http://localhost:4242
```

> **Never commit your real `STRIPE_SECRET_KEY` to Git or share it publicly.**

### 4. Configure price (optional)

In `server.js` you can change the ebook price and currency inside the `line_items` section:

```js
unit_amount: 1900, // price in cents, e.g. 1900 = $19.00
currency: 'usd',
```

### 5. Run the site locally

```bash
npm start
```

Then open:

```text
http://localhost:4242
```

### 6. Test checkout

With your test key configured:

1. Click **Buy the Ebook** on the landing page.
2. Stripe Checkout will open.
3. Use one of Stripe’s test cards, for example:
   - Card number: `4242 4242 4242 4242`
   - Any future expiry date
   - Any CVC
4. Complete the payment and you should be redirected to `success.html`.

### 7. Going live

When you’re ready to accept real payments:

1. In Stripe Dashboard, switch from **Test mode** to **Live mode**.
2. Create a live **Secret key** and update `STRIPE_SECRET_KEY` in your production `.env`.
3. Make sure `BASE_URL` is set to your real domain (for example `https://balancedbitesbook.com`).
4. Deploy this Node app (for example, to Render, Railway, or a VPS) and set the same environment variables there.


