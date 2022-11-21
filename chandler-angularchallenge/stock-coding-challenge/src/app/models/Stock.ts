export default class Stock {
    id: number
    ticketSymbol: string
    marketCap: number
    stockQuantity: number

    constructor(id: number, ticketSymbol: string, marketCap: number, stockQuantity: number){

        this.id = id
        this.ticketSymbol = ticketSymbol
        this.marketCap = marketCap
        this.stockQuantity = stockQuantity

    }
}