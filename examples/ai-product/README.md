# AI Product Example

This directory shows how Agent Blueprint applies to an AI-powered product.

## Archetype

A product where AI/LLM integration is a core feature:
- AI-generated content (text, images, code, websites)
- Chat or conversational interface
- AI-assisted workflows
- AI classification, analysis, or summarization

## Critical Distinction

AI products still have business logic, security, data integrity, and architecture. The AI feature is one part of the system. Do not let the AI feature eclipse the rest.

## Skills Activated

### Always
- 00-orchestrator
- 01-discovery
- 05-documentation

### Conditional
- 03-business-architecture (what does the product do, with or without AI?)
- 04-architecture (where does AI fit? what are the boundaries?)
- 06-codebase-audit
- 07-security (AI products often handle user data — prompts, outputs, personal info)
- 08-testing (how do you test AI outputs? what is deterministic vs non-deterministic?)
- 09-performance (AI calls have latency and cost — both are performance concerns)

### Stack (detected)
- stacks/[language]
- frameworks/[framework]
- stacks/[ai-service] (if an AI provider is integrated)

## AI-Specific Considerations

- **What is the AI actually doing?** If it is generating content, who reviews it? If it is making decisions, who overrides them? If it is summarizing, what is the source data?
- **What happens when the AI is wrong?** Every AI feature has failure modes. Plan for them.
- **What is the cost?** AI calls cost money. Understand the cost model.
- **What is the latency?** AI calls are slow. How does that affect the user experience?
- **What data goes to the AI provider?** Understand privacy and compliance implications.
- **Is AI necessary?** The AI skill should ask this. If a deterministic approach works, prefer it. AI adds value where reasoning, generation, or synthesis genuinely help.

## Minimum Documentation

Tier 3, plus AI policy documentation:
- AI-POLICY.md — what AI is used for, what data goes to AI providers, what the failure modes are, what the cost model is

