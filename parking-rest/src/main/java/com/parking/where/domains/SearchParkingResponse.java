package com.parking.where.domains;

import java.util.List;

import com.parking.where.entity.Parking;

public class SearchParkingResponse {
	
	private List<Parking> data;

	public List<Parking> getData() {
		return data;
	}

	public void setData(List<Parking> data) {
		this.data = data;
	}

}
