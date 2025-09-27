import React, { use } from 'react';
import Issue from './Issue';
import Container from './Container';

const Issues = ({fetchIssues}) => {
    const issues = use(fetchIssues)
    console.log(issues)
    return (
         <Container>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {issues.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </section>
    </Container>
    );
};

export default Issues;