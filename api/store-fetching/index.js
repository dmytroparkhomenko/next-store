import 'server-only'

export default async function getData() {
    const res = await fetch('https://fakestoreapi.com/products', {cache: 'force-cache'})

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getCategories() {
    const res = await fetch('https://fakestoreapi.com/products/categories')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getPopularProducts() {
    const res = await fetch('https://fakestoreapi.com/products?limit=4')
    
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export async function getSingleProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export async function getSingleCategory(category) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}