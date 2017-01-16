package com.parking.where;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.parking.where.entity.Parking;
import com.parking.where.repositories.ParkingRepository;

@SpringBootApplication
public class ParkingApplication implements CommandLineRunner{
	
	@Autowired
	private ParkingRepository repo;

	public static void main(String[] args) {
		SpringApplication.run(ParkingApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		Parking parking = new Parking();
		parking.setAreaName("thergaon");
		parking.setAvailibility("open");
		parking.setCity("pune");
		parking.setCountry("india");
		parking.setHouseNo("s17/261");
		parking.setOwnerName("dubey");
		parking.setPinZip("221003");
		parking.setRate("29");
		parking.setShaded("yes");
		parking.setStateProvince("maharastra");
		parking.setStatus("open");
		parking.setStreetName("chinchwad");
		
		repo.insert(parking);
	}
}
