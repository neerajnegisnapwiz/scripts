function parseData(rows) {
    let domainMap = {};

    rows.forEach(row => {
        let domainId = row[0];
        let domainDesc = row[1];
        let clusterId = row[2];
        let clusterDesc = row[4];
        let standardId = row[5];
        let standardDesc = row[7];

        if (!domainMap[domainId]) {
            domainMap[domainId] = {
                domainId: domainId,
                domainDesc: domainDesc,
                clusters: {}
            };
        }

        if (!domainMap[domainId].clusters[clusterId]) {
            domainMap[domainId].clusters[clusterId] = {
                clusterId: clusterId,
                clusterDesc: clusterDesc,
                standards: {}
            };
        }

        if (!domainMap[domainId].clusters[clusterId].standards[standardId]) {
            domainMap[domainId].clusters[clusterId].standards[standardId] = {
                standardId: standardId,
                standardDesc: standardDesc
            };
        }
    });

    // Convert the map to a nested array of objects
    let domains = Object.values(domainMap).map(domain => {
        let clusters = Object.values(domain.clusters).map(cluster => {
            let standards = Object.values(cluster.standards);
            return {
                clusterId: cluster.clusterId,
                clusterDesc: cluster.clusterDesc,
                standards: standards
            };
        });
        return {
            domainId: domain.domainId,
            domainDesc: domain.domainDesc,
            clusters: clusters
        };
    });

    return domains;
}

let data = [
    [
        'MAGN',
        'Explore and understand the intricate world of magnetism through the lens of mathematics and computational power.',
        '3.A',
        'MAGN|3.A',
        'Explores the behavior of magnetic materials using mathematical tools.',
        '3.MA.6',
        'MAGN|3.A|3.MA.6',
        'Helps describe the forces and fields associated with magnetism, using vectors to represent the direction and magnitude of magnetic fields.'
    ],
    [
        'MAGN',
        'Explore and understand the intricate world of magnetism through the lens of mathematics and computational power.',
        '3.A',
        'MAGN|3.A',
        'Explores the behavior of magnetic materials using mathematical tools.',
        '3.MA.7',
        'MAGN||3.MA.7',
        'Model the dynamics of magnetization in materials, allowing scientists to predict how magnetic fields change over time.'
    ],
    [
        'MAGN',
        'Explore and understand the intricate world of magnetism through the lens of mathematics and computational power.',
        '3.A',
        'MAGN|3.A',
        'Explores the behavior of magnetic materials using mathematical tools.',
        '3.MA.8',
        'MAGN||3.MA.8',
        'Help understand the fundamental properties of magnetic materials based on their internal symmetries.'
    ]
];

console.log(JSON.stringify(parseData(data), null, 2));
