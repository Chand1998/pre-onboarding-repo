package com.example.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.model.Stock;
import com.example.repository.StockRepository;

@ExtendWith(MockitoExtension.class)
@SpringBootTest
public class StockServiceTest {
	
	@Mock
	private StockRepository myTestRepo;
	
	private StockService myTestServ;
	
	@BeforeEach
	void setup() throws Exception{
		myTestServ = new StockService(myTestRepo);
	}
	
	@Test
	void insertUpdateTest()throws Exception{
		
		//arrange
		Stock initialStock = new Stock (1,"test",1234,1);
		Stock expectedStock = new Stock (1,"test", 1234,1);
		when(myTestRepo.save(initialStock)).thenReturn(initialStock);
		
		//act
		Stock actualStock = myTestServ.UpdateStock(initialStock);
		
		//assert
		verify(myTestRepo, times(1)).save(initialStock);
		assertEquals(expectedStock, actualStock);
		
	}
	
	@Test
	void selectAllTest()throws Exception{
		
		//arrange
		List<Stock> initialList = new ArrayList<>();
		initialList.add(new Stock (1,"test",1234,1));
		initialList.add(new Stock (2,"test2",5678,12));
		initialList.add(new Stock (3,"test3",9101112,123));
		
		List<Stock> expectedList = new ArrayList<>();
		expectedList.addAll(initialList);
		
		when(myTestRepo.findAll()).thenReturn(initialList);
		
		//act
		List<Stock> actualList = myTestServ.viewAllStocks();
		
		
		//assert
		verify(myTestRepo, times(1)).findAll();
		assertEquals(expectedList, actualList);
	}
	
	
	
}
