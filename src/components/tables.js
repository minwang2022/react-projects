import React from 'react';
       
    const Table = ({data}) =>(

        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
            </thead>
         
            {data.map((art, i)=> (
                <tbody key = {i}>
                    <tr>
                        <td>{art.title}</td>
                        <td>{art.upvotes}</td>
                        <td>{art.date}</td>
                    </tr>
                </tbody>
            
             ))}
        </table>
    );

export default Table;