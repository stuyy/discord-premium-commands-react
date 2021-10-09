# Discord Premium Commands React

This is the code repository for my tutorial series on integrating Stripe Payments to build a Discord Bot with premium commands. This project only contains a simple demonstration of authentication with Discord OAuth2, and making payments directly to Stripe.

Find the tutorial playlist [here](https://www.youtube.com/playlist?list=PL_cUvD4qzbkxWAuRwfZLqAh_F0FatQdvI)

# Installation & Setup

1. Clone the repository
2. Install the dependencies using `yarn install` or `npm install`
3. Create a Stripe account if you don't have one by going to https://stripe.com/. Search for your API key by going to "Developers". You will need the publishable key which will be used for your front-end.
   - It's important to note that during development, you should be using your API keys for test mode. For production, you should use the live mode api key.
4. Create two files, `.env.development` for development mode, and `.env.production` for production mode.
   - Inside both files, create a variable called `REACT_APP_STRIPE_API_KEY` and _only_ in the `.env.development` file, paste the publishable key from Stripe.
   - If done correctly, your file should look like this:
   ```
   REACT_APP_STRIPE_API_KEY=MY STRIPE PUBLISHABLE KEY
   ```
   - Paste the live mode api key in the `.env.production` file. When you run the build script for production mode, it will use that value instead of the one in the development.
5. Create an environment variable called `API_URL` and set that to the url where the API is hosted. In development mode and from the tutorial, we use `http://localhost:3001/api`, you can change this if you want.
