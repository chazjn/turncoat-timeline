

export default function test( { params } : { params: { id: string} }) 
{
    return <div>hello world: {params.id}</div>
}