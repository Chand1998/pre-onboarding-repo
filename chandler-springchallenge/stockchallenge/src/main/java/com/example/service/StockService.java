package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Stock;
import com.example.repository.StockRepository;

@Service
public class StockService {
	
	private final StockRepository myStockRepo;
	
	@Autowired
	public StockService(StockRepository myStockRepo) {
		this.myStockRepo = myStockRepo;
	}
	
	/**
	 * returns a list of all values 
	 * @return List<Stock>
	 */
	public List<Stock> viewAllStocks(){
		return myStockRepo.findAll();
	}
	
    /**
	 * returns a list of all values greater than the parameter input 
	 * @param marketcap
	 * @return List<Stock>
	 */
	public List<Stock> viewAllStocksGreaterThan(double marketCap){
		return myStockRepo.findByMarketCapGreaterThan(marketCap);
	}
	
	/**
	 * returns a list of all values less than or equal to the parameter input 
	 * @param marketcap
	 * @return List<Stock>
	 */
	public List<Stock> viewAllStocksLessThanEqual(double marketcap){
		return myStockRepo.findByMarketCapLessThanEqual(marketcap);
	}
	
	/**
	 * returns a list of all values less than or equal to the parameter input 
	 * @param ticketSymbol
	 * @return List<Stock>
	 */
	public Optional<Stock> viewStockByTicketSymbol(String ticketSymbol){
		return myStockRepo.findByTicketSymbol(ticketSymbol);
	}
	
	/**
	 * updates the stock given by the parameter
	 * @param stock
	 * @return
	 */
	public Stock UpdateStock(Stock stock){
		try {
		return myStockRepo.save(stock);
		}catch(NullPointerException e) {
			System.err.println("cannot update a null value");
			return null;
		}
	}

}
