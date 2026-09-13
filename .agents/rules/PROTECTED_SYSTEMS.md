# PROTECTED SYSTEMS

To guarantee that your highly-tuned core systems are never accidentally modified, overwritten, or hallucinated by any AI agent now or in the future. We will create a permanent, hardcoded "lock" in this workspace that every future agent instance will be forced to read and obey before taking any action.

1. **The Protected Zones (No-Touch Protocol):**
   - Landing page boot sequence
   - Deep link boot sequence
   - Protected content overlay & authentication logic
   - Carousel gallery mapping, Finder window rendering, and the continuous backward history navigation 
   - Desktop folder layout & orientation
   - Desktop carousel display, layout, orientation, and CSS keyframe speed

2. **The Golden Rule for Modifications:**
   - Any requested modification must strictly target the specific line/element asked for.
   - If an agent is uncertain if a requested change will bleed into a protected zone, they are **mandated** to stop and ask for your explicit approval before executing any code.

3. **No Hallucination Mandate:**
   - The agent is forbidden from "cleaning up", "refactoring", or "optimizing" surrounding code outside the scope of the exact user prompt.

> [!IMPORTANT]
> Because this file is placed in the `.agents/rules/` directory, every single time you start a new conversation or ask an agent to perform a task, the agent will silently read this rule file and inherit these boundaries as core system instructions. It serves as a permanent digital lock.
