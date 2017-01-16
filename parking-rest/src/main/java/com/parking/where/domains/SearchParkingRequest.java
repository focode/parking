package com.parking.where.domains;

import org.springframework.data.domain.Pageable;

import com.parking.where.entity.Parking;

public class SearchParkingRequest {
	
	private Parking parking;
	private int pageNo;
	private int size;
	
	public Parking getParking() {
		return parking;
	}
	public void setParking(Parking parking) {
		this.parking = parking;
	}
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}

}
