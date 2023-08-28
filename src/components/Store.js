import React from 'react'

function Store({store}) {
    return (
    <tr>
        <td className="row-name">
            <span>{store.name}</span>
        </td>
        <td>
            <a href={store.image} target="_blank"><b>&#8599;</b></a>
        </td>
        <td>
            <span>{store.season}</span>
        </td>
        <td>
        <a href={store.episodeUrl} target="_blank">{store.episode}</a>
        </td>
    </tr>
    );
}

export default Store