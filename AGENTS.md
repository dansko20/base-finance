<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep annual mortgage standards in a year-specific config module and calculation logic separate from React presentation, so yearly updates never require redesigning the tool.
- Keep advisor profiles and their presentation in the dedicated AdvisorTeam component so team updates stay independent of the rest of the About page.
- Keep the detailed future-plan explanation on the existing workflow page with a same-page anchor from the homepage teaser, so navigation stays unchanged and the homepage remains brief.
- Keep partner comparison data and weighted scores separate from the partners page so the supplied methodology is independently testable.
- Keep fund selection and numeric costs separate from fund presentation so supplied cost changes can be tested independently.
