package com.example.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer> {
	
	public Optional<Stock> findByTicketSymbol(String ticketSymbol);
	
	public List<Stock> findByMarketCapGreaterThan(double marketCap);
	
	public List<Stock> findByMarketCapLessThanEqual(double marketCap);
}
