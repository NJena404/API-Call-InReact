export const Getpostapi = async () =>
{
    const response = await fetch('https://jsonplaceholder.typicode.com/comments',{
        method:'GET'
    });
     return await response.json();
}

export const GetpostImageapi = async () =>
{
    const response = await fetch('https://jsonplaceholder.typicode.com/photos',{
        method:'GET'
    });
     return await response.json();
}


export const randomUser  = async () =>
{
    const response = await fetch('https://randomuser.me/api/',{
        method:'GET',
    });
    return await response.json();
}

