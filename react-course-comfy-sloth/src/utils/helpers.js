export const formatPrice = (number) => {
    const newNo = Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    }).format(number/100)
    return newNo
}

export const getUniqueValues = (data,type) => {
    let unique = data.map((i)=>i[type])
    if(type === 'colors'){
        unique= unique.flat()
    }
    return ['all',...new Set(unique)]
}
