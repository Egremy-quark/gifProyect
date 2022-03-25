

export const getGifs = async (category) => {
    const apikey = 'KtkawvQmRBuhPxtjjnv2HDOxGKoTo9CU'

    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=${apikey}`
    const res = await fetch(url)
    const { data } = await res.json()

    const gifs = data.map(({ id, title, images, username }) => {
        return {
            id: id,
            title: title,
            image: images?.downsized_medium.url,
            username: username
        }
    })
    return gifs
}