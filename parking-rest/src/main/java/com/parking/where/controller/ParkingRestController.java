package com.parking.where.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.parking.where.domains.SearchParkingRequest;
import com.parking.where.domains.SearchParkingResponse;
import com.parking.where.entity.Parking;
import com.parking.where.repositories.ParkingRepository;


@RestController
public class ParkingRestController {
	
	
	@Autowired
	private ParkingRepository repo;
	
	
	@RequestMapping(value = "all/parking", method = RequestMethod.GET)
	public SearchParkingResponse getAll() {
		SearchParkingResponse searchParkingResponse = new SearchParkingResponse();
		searchParkingResponse.setData(repo.findAll());
		return searchParkingResponse;
	}

	
	@RequestMapping(value="/searchParking",method=RequestMethod.POST)
	Page<Parking> searchParking(@RequestBody SearchParkingRequest searchParkingRequest){
		System.out.println("pageNo:"+searchParkingRequest.getPageNo()+" size:"+searchParkingRequest.getSize());
		Example<Parking> example = Example.of(searchParkingRequest.getParking());
		Pageable pageable = new PageRequest(searchParkingRequest.getPageNo(), searchParkingRequest.getSize(), Direction.ASC, "city");
		Page<Parking> parkings = repo.findAll(example,pageable);
		return parkings;
	} 
	
	@RequestMapping(value="/addParking",method=RequestMethod.POST)
	Parking addParking(@RequestBody Parking parking){
		System.out.println("parking:"+parking.toString());
		Parking savedParking = repo.insert(parking);
		System.out.println("savedParking.toString():"+savedParking.toString());
		return savedParking;
	} 
	
	@RequestMapping(value="/get/symentics",method=RequestMethod.GET)
	SearchParkingRequest getJson(){
		SearchParkingRequest searchParkingRequest = new SearchParkingRequest();
		Parking parking = new Parking();
		searchParkingRequest.setPageNo(2);
		searchParkingRequest.setSize(1);
		searchParkingRequest.setParking(parking);
		return searchParkingRequest;
		
	}

}
