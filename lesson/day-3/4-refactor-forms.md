# Refactor Forms
As you notice, our component logic is starting to get quite bloated.
It is a good time to separate the code out.
We can separate the form logic into a service.

By convention services should be named `*.service.ts`
If we name the `person.service.ts` we may be confused with the `people.service.ts`
As a personal convention, I like to name reactive forms as `person.form.service.ts`.

## Create a `person.form.service.ts` Service
`yarn ng g s directory/add-person/person.form`

Let's move our logic into the `person.form.service.ts`.
We can also move our validators as those are closely related to the form.