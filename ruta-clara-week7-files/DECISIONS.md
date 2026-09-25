# Decisions and session close

- 2026-09-25: The packet and mockup were committed before application code (commit `2bb8eae`). The declared slice is a fictional, driver-facing braking alert with optional correction and no sanctions.
- The demo stores no personal data. Consent and corrections exist only in browser memory; refresh resets them. There are no API keys or database tables.
- Local logistic regression trains and infers on twelve invented acceleration windows. Its number is illustrative and cannot measure real safety or identify blame.
- The map projects invented coordinates into a schematic SVG, with no third-party map requests. No route or stop pair has been field-confirmed.
- Actual GitHub push and deployments remain pending because this execution environment has no authenticated GitHub access. Do not treat local commits as published.

**First move next session:** connect GitHub, push the existing commit history, deploy the first version, run a browser test, record a genuine bug, fix it and redeploy. Then run the fresh-chat persona test and create the three submission PDFs and demo video.

## Publication update · 25 September

The signed-in GitHub page visibly confirmed the first online commit (`96d9614`), containing `PACKET.md` and `MOCKUP.png` at repository root. Those files were uploaded before any application code. The browser stopped responding while opening the next upload, so no later online commits or deployment can be claimed. The local six-commit history remains separate from the remote's first commit. Do not force-push over the remote; reconcile by adding files through the web UI or transplanting the local changes onto the remote commit when an authenticated Git connection becomes available. Move the two files to `docs/` and verify the relative image link.
