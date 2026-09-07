# NovaHelp Support Operations Lab

[![Live demo](https://img.shields.io/badge/Live_Demo-Open-0d5b78?style=for-the-badge)](https://novahelp-support-ops-lab.clementkosi.chatgpt.site)

![NovaHelp Support Operations Lab](public/og.png)

NovaHelp is a fictional SaaS support environment built as a portfolio demonstration of structured customer support. It shows how a support professional combines ticket triage, practical troubleshooting, identity and access controls, AI-assisted guidance, security judgment, escalation, and resolution documentation.

All customers, companies, email addresses, IDs, and incidents are fictional.

**Designed and built by Kosisochukwu Clement Uchebo**  
Technical Support · SaaS Operations · Identity & Access · AI-Assisted Support

## What the simulation includes

- 18 realistic tickets covering account lockout, MFA recovery, suspicious login, permissions, SSO, billing, subscriptions, Slack and Salesforce integrations, API rate limits, webhooks, product bugs, data recovery, privacy, and how-to questions.
- A customer-facing ticket form that automatically assigns a category, priority, security flag, queue, and AI troubleshooting plan.
- Queue search and filtering by status, category, and security sensitivity.
- A visual lifecycle: Created → Triaged → Diagnosed → Resolved or Escalated → Documented.
- Safe handling rules for identity, access, privacy, and suspected security incidents.
- Agent actions to accept a troubleshooting plan, escalate with context, or save a resolution note.
- CSV export of the simulated ticket dataset.

## Support workflow

1. **Create:** Capture the customer’s issue, impact, context, and contact channel.
2. **Triage:** Assign category, urgency, security sensitivity, and the correct queue.
3. **Diagnose:** Review AI guidance, validate assumptions, reproduce safely, and collect useful evidence.
4. **Resolve or escalate:** Resolve normal cases within scope. Escalate product defects, complex integrations, billing decisions, privacy requests, and security-sensitive cases with complete context.
5. **Document:** Record the outcome, evidence, customer communication, owner, and next step without exposing credentials or sensitive data.

## Security-sensitive example

For an MFA request involving an old phone, the simulation does not disable MFA or request a code. It requires the approved identity-verification workflow, checks safe recovery methods such as backup codes or another enrolled factor, and escalates to Identity Operations when self-service recovery is unavailable.

The same guardrail applies to suspicious logins, unexpected permissions, workspace recovery, SSO verification, and privacy exports: verify authority, preserve evidence, minimize disclosure, and escalate to the responsible specialist.

## Jira Service Management / Zendesk field mapping

| Simulation field | Jira Service Management | Zendesk |
| --- | --- | --- |
| Ticket ID | Issue key | Ticket ID |
| Subject | Summary | Subject |
| Customer issue | Description | Description |
| Category | Request type / component | Ticket form / type |
| Priority | Priority | Priority |
| Security-sensitive | Security label / custom field | Security tag / custom field |
| Assigned team | Queue / assignee | Group / assignee |
| Status | Workflow status | Ticket status |
| Troubleshooting history | Internal comments | Internal notes |
| Resolution documentation | Resolution / closure note | Solved-ticket note |

## Suggested automation rules

- Keywords such as MFA, suspicious login, admin permission, privacy, or data export add a security-sensitive flag and route to protected triage.
- API and integration errors route to Tier 2 or Developer Support when standard troubleshooting fails.
- Billing disputes route to Billing Operations; support does not promise refunds.
- Product defects require reproduction details, impact, environment, timestamps, and sanitized diagnostics before engineering escalation.
- A ticket cannot be considered complete until a clear resolution or escalation note is recorded.

## Portfolio talking points

- Explain why AI is a copilot rather than the final decision-maker.
- Walk through the MFA case and show how security controls are protected.
- Demonstrate the difference between a routine how-to resolution and a structured escalation.
- Show that useful escalations include customer impact, reproduction steps, evidence, previous troubleshooting, and a clear request for the receiving team.
- Export the dataset to discuss reporting, queue analysis, and knowledge-base opportunities.

## Run locally

```bash
npm install
npm run dev
```

Build the static GitHub Pages version with:

```bash
npm run build:pages
```

The generated site is stored in `docs/` for GitHub Pages deployment.
