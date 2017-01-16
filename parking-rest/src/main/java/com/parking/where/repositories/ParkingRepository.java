package com.parking.where.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.parking.where.entity.Parking;


public interface ParkingRepository extends MongoRepository<Parking, String> {

}
