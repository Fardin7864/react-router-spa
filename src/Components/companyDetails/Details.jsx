const Details = () => {
    const companies = [
        {
            id: 1,
            name: 'Company 1',
            phone: '(123) 456-7890',
            fax: '(123) 456-7891',
            email: 'company1@example.com',
            address: '123 Main St, City, State, ZIP',
            website: 'www.company1.com',
            description: 'Company 1 is a leading provider of innovative solutions...',
            // Add more details as needed
        },
        {
            id: 2,
            name: 'Company 2',
            phone: '(234) 567-8901',
            fax: '(234) 567-8902',
            email: 'company2@example.com',
            address: '456 Elm St, City, State, ZIP',
            website: 'www.company2.com',
            description: 'Company 2 is a global technology company specializing in...',
            // Add more details as needed
        },
        {
            id: 3,
            name: 'Company 3',
            phone: '(345) 678-9012',
            fax: '(345) 678-9013',
            email: 'company3@example.com',
            address: '789 Oak St, City, State, ZIP',
            website: 'www.company3.com',
            description: 'Company 3 is a leading manufacturer of industrial equipment...',
            // Add more details as needed
        },
        // Add details for other companies
    ];
    console.log(companies)
    return (
        <div>
            <h1>this is details</h1>
            {
                companies.map(company => {  
                <div key={company.id}>
                <h3 className="text-xl font-extrabold">{company.name}</h3>
                <p>{company.description}</p>
                </div>
                })
                
            }
            
        </div>
    );
};

export default Details;