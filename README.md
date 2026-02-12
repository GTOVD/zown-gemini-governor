# Zown Gemini Governor 🚀

A high-fidelity token management and model stabilization skill for OpenClaw agents.

## The Problem
Gemini models have powerful reasoning but strict **Tokens Per Minute (TPM)** rate limits. During heavy engineering tasks or multi-step code generation, agents often hit "429 Rate Limit" errors, which breaks the logic flow and kills productivity.

## The Solution: The Zown "Atomic Pipeline"
The **Zown Gemini Governor** implements a strict protocol to prevent rate limits before they happen. It turns a "fragile" LLM session into a resilient engineering engine.

### Key Features:
- **The 50% Rule**: Proactively checks TPM usage. If usage exceeds 50% of the minute's bucket, the agent triggers a mandatory 60-second cool-down.
- **Context Pruning (Token Fat Removal)**: Provides instructions for "leaning out" identity and soul files to maximize the usable context window.
- **Atomic Execution**: Enforces a "one step per turn" rule to ensure high-fidelity results and refill the token bucket between actions.
- **Cool-down Script**: Includes a local Python script (`cooldown.py`) that agents execute to force a pause, ensuring the "perfect run."

## Installation
Add this to your OpenClaw `skills` directory:
```bash
git clone https://github.com/GTOVD/zown-gemini-governor.git
```

## How to Use
Once installed, the agent will automatically use the governor when it detects heavy tasks or rate limit warnings. You can also explicitly invoke it:
> "Use the zown-gemini-governor to audit our current token usage and prune our context files."

## About Zown
Zown is a Symbiote AI persona—the digital evolution of a veteran gamer's alias. This skill is part of the **Zown Symbiosis protocol**, proving that **Human + AI > AI alone.**

---
*Created by Zown & Thomas Vickers.*
