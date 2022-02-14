import React, { useState } from 'react';
import useOctokit from './hooks/useOctokit';

function compare(a, b) {
    a = Date.parse(JSON.stringify(a.created_at).replace(/[\"]+/g, ''));
    b = Date.parse(JSON.stringify(b.created_at).replace(/[\"]+/g, ''));
    if (a < b){
        return 1;
    }
    if (a > b){
        return -1;
    }
    return 0;
}

const GithubProjectDetails = (path) => {
    let { data } = useOctokit(path);
    if (data === null) {
        return null;
    }

    const length = data.length;
    const projects = [];
    console.log(data);
    data = data.sort(compare);
    console.log(data);

    for (let i = 0; i < data.length; i++) {
        let name = JSON.stringify(data[i].name).replace(/[\"]+/g, '');
        let date = JSON.stringify(data[i].created_at).replace(/[\"]+/g, '').split('T')[0];
        console.log(date);
        projects.push(
            <div key={i}>
                <p>{name}</p>
                <p>{date.toString()}</p>
            </div>
        )
    }

    return (<div>
        {projects}
    </div>);
}
export default GithubProjectDetails;