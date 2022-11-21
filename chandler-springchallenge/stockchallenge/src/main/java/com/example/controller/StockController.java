package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.StockPriceRequest;
import com.example.dto.SymbolRequest;
import com.example.dto.UpdateRequest;
import com.example.model.Stock;
import com.example.service.StockService;

@RestController
@RequestMapping(value="/stock")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class StockController {
	
	private final StockService myStockServ;
	
	@Autowired
	public StockController(StockService myStockServ) {
		this.myStockServ = myStockServ;
	}
	
	/**
	 * returns a list of all stocks
	 * @param req
	 * @return List<Stock>
	 */
	@GetMapping(value="/list")
	public ResponseEntity<List<Stock>> viewAllStocks() {
		List<Stock> toReturn = myStockServ.viewAllStocks();
		return ResponseEntity.ok(toReturn);
	}
	
	/**
	 * returns a list of all values greater than the parameter input 
	 * @param req
	 * @return List<Stock>
	 */
	@PostMapping(value="/listgreater")
	public ResponseEntity<List<Stock>> viewGreaterThan(@RequestBody StockPriceRequest stockPriceRequest) {
		//grab value from dto
		System.out.println("were hitting endpoints");
		List<Stock> toReturn = myStockServ.viewAllStocksGreaterThan(stockPriceRequest.getStockPriceMeasureValue());
		return ResponseEntity.ok(toReturn);
	}
	
	/**
	 * returns a list of all values less than or equal to the parameter input 
	 * @param req
	 * @return List<Stock>
	 */
	@PostMapping(value="/listlessthanequal")
	public ResponseEntity<List<Stock>> viewLessThanEqual(@RequestBody StockPriceRequest stockPriceRequest) {
		//grab value from dto
		System.out.println("were hitting endpoints");
		List <Stock> toReturn = myStockServ.viewAllStocksLessThanEqual(stockPriceRequest.getStockPriceMeasureValue());
		return ResponseEntity.ok(toReturn);
	}
	
	/**
	 * finds by the ticket symbol
	 * @param req
	 * @return stock
	 */
	@PostMapping(value="/ticketsymbol")
	public ResponseEntity<Stock> ViewByTickSymbol(@RequestBody SymbolRequest symbolRequest) {
		//grab value from dto 
		Optional<Stock> optional = myStockServ.viewStockByTicketSymbol(symbolRequest.getTicketSymbol());
		if(!optional.isPresent()) {
			return ResponseEntity.badRequest().build();
		}
		return ResponseEntity.ok(optional.get());	
	}
	
	
	/**
	 * calculates then updates the market cap for a stock
	 * @param req
	 * @return stock
	 */
	@PostMapping(value="/update")
	public ResponseEntity<Stock> UpdateMerketCap(@RequestBody UpdateRequest updateRequest) {
		
		//grab all values from dto
		int updatedValueForStockquantity = updateRequest.getStockQuantity();
		double updatedValueForStockPrice = updateRequest.getStockPrice();
		String checkedValueForTicketSymbol = updateRequest.getTicketSymbol();
		
		//check if stock is present
		Optional<Stock> optional = myStockServ.viewStockByTicketSymbol(checkedValueForTicketSymbol);
		if(!optional.isPresent()) {
			return ResponseEntity.badRequest().build();
		}
		Stock myFoundStock =  optional.get();
		
		
		//check for invalid inputs
		if(updatedValueForStockquantity >  myFoundStock.getStockQuantity()) {
			return ResponseEntity.badRequest().build();
		}
		if(updatedValueForStockPrice <= 0 ) {
			return ResponseEntity.badRequest().build();
		}
		
		
		// calculate price per stock
		double initialPricePerStock = myFoundStock.getMarketCap() / myFoundStock.getStockQuantity();
		double newPricePerStock = updatedValueForStockPrice - initialPricePerStock;
		double newMarketCapValue = (newPricePerStock * updatedValueForStockquantity) + myFoundStock.getMarketCap();
		
		myFoundStock.setMarketCap(newMarketCapValue);
		Stock toReturn = myStockServ.UpdateStock(myFoundStock);
		return ResponseEntity.ok(toReturn);
	}
	
}
