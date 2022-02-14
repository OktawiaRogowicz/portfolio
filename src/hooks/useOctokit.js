import { useState, useEffect } from 'react';
import { octokit } from '../utils/octokit';

export default function useOctokit(path) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function onLoad() {
            await octokit.request(
                'GET /users/{username}/repos', {
                    username: 'OktawiaRogowicz'
                }).then(res => {
                    // console.log(`${res.data.length} repos found.`);
                    // for(let i =0; i < res.data.length; i++) {
                    //     console.log(`${res.data[i].name} ${res.data[i].created_at}`);
                    // }
                    //const encoded = JSON.stringify(res.data);
                    setData(res.data);
                }).catch(err => console.log(err));
            }

            onLoad();

        },[])
    return {data}
};