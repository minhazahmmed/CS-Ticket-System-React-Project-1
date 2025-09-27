import React, { use } from 'react';
import Issue from './Issue';
import Container from './Container';
import Status from './Status';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Issues = ({fetchIssues, issues, setIssues, inProgress, setInProgress, resolved, setResolved}) => {
    const data = use(fetchIssues);

    if (issues.length === 0 && data.length > 0) {
        setIssues(data);
    }

    
    const handleStartTask = (issue) => {
        setIssues(issues.filter(i => i.id !== issue.id));
        setInProgress([...inProgress, {...issue, status: "In-Progress"}]);

        
        toast.info(`In-Progress`, {
            position: "top-right",
            autoClose: 4000,
            theme: "colored",
        });
    };

   
    const handleCompleteTask = (id) => {
        const task = inProgress.find(i => i.id === id);
        setInProgress(inProgress.filter(i => i.id !== id));
        setResolved([...resolved, {...task, status: "Resolved"}]);

       
        toast.success(`Resolved`, {
            position: "top-right",
            autoClose: 4000,
            theme: "colored",
        });
    };

    return (
        <Container>
        
            <ToastContainer />

            <section className='flex justify-between flex-col-reverse md:flex-row gap-4'>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-2/3">
                    {issues.map((issue) => (
                        <Issue 
                          key={issue.id} 
                          issue={issue} 
                          onClick={() => handleStartTask(issue)} 
                        />
                    ))}
                </section>

                <section className='gap-4 md:w-1/3'>
                    <Status 
                        inProgress={inProgress} 
                        resolved={resolved} 
                        onComplete={handleCompleteTask} 
                    />
                </section>
            </section>
        </Container>
    );
};

export default Issues;
