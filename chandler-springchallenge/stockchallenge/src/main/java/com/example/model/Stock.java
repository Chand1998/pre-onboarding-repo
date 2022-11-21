package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="stocks")
public class Stock {
	
	@Id
	@Column(name="stock_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int stockId;
	
	@Column(name="ticket_symbol")
	private String ticketSymbol;
	
	@Column(name="market_cap")
	private double marketCap;
	
	@Column(name="stock_quantity")
	private int stockQuantity;
}
