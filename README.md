# AI Chatbot - Reload Case

Hi! I'm just a test case.
Test URL: https://chatbot-reload-case.vercel.app/

### Installation

**Please use yarn as a package manager.**

### Technologies

- React, Next 13 with App Router, Typescript, OpenAI, AOS, GSAP, Tailwind, Shadcn UI, Radix UI

### Structure

```
app/
├─ (index) # categorized main page ex: (home) | home
| ├─ _components # all index page components like a template.
| ├─ page.tsx # main next page file
components/
├─ common/ # common components ex: container
├─ ui/ # all atom components with shadcn and radix ui
hooks/ # all hooks
lib/
├─ utils/ # all utils
providers/ # all app providers
public/ # all icons, pngs, fonts etc.
```

## Notes

- GSAP was used for parallax animations.
- AOS was used for basic slide animations.
- Radix UI headless components for atom components have been implemented in the UI together with Shadcn UI.
- OpenAI package with free api key was used for ChatGPT Simulation.
