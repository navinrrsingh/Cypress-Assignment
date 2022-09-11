export const linkedInJobs = {
  searchSummary: () =>
    cy.get(
      "h1.results-context-header__context>span.results-context-header__query-search"
    ),
  searchJob: (jobname, country) =>
    cy.visit({
      url: "/jobs/search",
      qs: {
        keywords: jobname,
        location: country,
        refresh: true,
      },
    }),
};
