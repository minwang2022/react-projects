import {React, useState, useEffect} from 'react';
import Table from './tables'
const Articles = ({articles}) =>{
    const [flag, setFlag] = useState(true)

    const onVote = () =>{
   
        let res = articles.sort((a,b) => b.upvotes - a.upvotes)
        console.log("res", res)
        return res
    }

    const onDate = () =>{
        let res = articles.sort((a, b) => new Date(b.date) - new Date(a.date))
        console.log("res", res)
        return res;
    }
    useEffect(()=>{},[flag])
    return (
        <div>
            <div>
                <h1>sort by</h1>
                <button type ="button"
                        onClick={()=> setFlag(true)}
                    >
                    MOST UPVOTED</button>
                <button type ="button"
                        onClick={()=> setFlag(false)}
                    >
                    MOST RECENT
                </button>

            </div>
            <Table data ={flag? onVote(): onDate()}/>

        </div>
    )
};

export default Articles;

