export const formatterNumber = (value: number) => {
    let price = value.toString()
    price = parseFloat(price.toString()).toFixed(2)
    return price.replace('.', ',')
}