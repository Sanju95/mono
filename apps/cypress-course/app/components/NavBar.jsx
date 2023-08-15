import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
        path: '/',
    dataTest: 'navWhyCypress',
    },
    {
    label: 'Overview',
        path: '/overview',
    dataTest: 'navOverview',
    },
    {
    label: 'Fundamentals',
        path: '/fundamentals',
    dataTest: 'navFundamentals',
    },
    {
        label: 'Forms',
        path: '/forms',
        dataTest: 'navForms',
    },
    {
        label: 'Examples',
        path: '/examples',
        dataTest: 'navExamples',
    },
    {
        label: 'Component',
        path: '/component',
        dataTest: 'navComponent',
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        dataTest: 'navBestPractices',
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem key={item.label} label={item.label} path={item.path} dataTest={item.dataTest} />
                ))
            }
        </ul>
    )
}