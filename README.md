# PayPerPrompt

AI agent that pays for each prompt using Circle Nanopayments on Arc testnet.

## What it does
Every prompt sent to the agent triggers a USDC nanopayment settled on Arc testnet via Circle Gateway. Payments are as small as $0.000001 USDC per request.

## Circle Products Used
- Circle Gateway (Nanopayments)
- USDC on Arc testnet

## Track
Track 4 - Best Agentic Economy Experience on Arc

## How to run
1. Clone the repo
2. Run npm install
3. Add your CIRCLE_API_KEY to .env
4. Run node server.js
5. Open http://localhost:3000

## Circle Product Feedback
We chose Gateway Nanopayments because it is the only payment rail that makes sub-cent machine payments economically viable. The x402 flow worked well. Documentation could use more examples for agentic use cases.
