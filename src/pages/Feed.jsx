import React from 'react'
import useFetch from '../utils/useFetch';
import DataList from './DataList';

const Feed = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/laksa');
    return (
        <main className='relative'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading . . .</div>}
            {blogs && <DataList blogs={blogs} title='Daftar Balita' />}
        </main>
    )
}

export default Feed