
import AllCandidates  from "./components/AllCandidates";
import  ChooseCandidate   from "./components/ChooseCandidate";


const AppRoutes = [
 
    {
        path: '/Choose-Candidate',
        element: <ChooseCandidate />
    }
    ,
    {
        path: '/All-Candidates',
        element: <AllCandidates />
    }
    
    
];

export default AppRoutes;
