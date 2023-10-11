import { CandyPay } from "@candypay/checkout-sdk";

const sdk = new CandyPay({
  api_keys: {
    private_api_key: process.env.CANDYPAY_PRIVATE_API_KEY!,
    public_api_key: process.env.CANDYPAY_PUBLIC_API_KEY!,
  },
  network: "mainnet",
  config: {
    collect_shipping_address: false,
  },
});

export default sdk;
