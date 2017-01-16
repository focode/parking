package com.parking.where.entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "parking")
public class Parking {
	
	private String ownerName;
	private String houseNo;
	private String streetName;
	private String areaName;
	private String city;
	private String pinZip;
	private String stateProvince;
	private String country;
	private String shaded;
	private String lat;
	private String lon;
	private String rate;
	private String status;
	private String availibility;
	private String contactNo;

	public String getContactNo() {
		return contactNo;
	}
	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}
	@Id
	private String id;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	public String getHouseNo() {
		return houseNo;
	}
	public void setHouseNo(String houseNo) {
		this.houseNo = houseNo;
	}
	public String getStreetName() {
		return streetName;
	}
	public void setStreetName(String streetName) {
		this.streetName = streetName;
	}
	public String getAreaName() {
		return areaName;
	}
	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPinZip() {
		return pinZip;
	}
	public void setPinZip(String pinZip) {
		this.pinZip = pinZip;
	}
	public String getStateProvince() {
		return stateProvince;
	}
	public void setStateProvince(String stateProvince) {
		this.stateProvince = stateProvince;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getShaded() {
		return shaded;
	}
	public void setShaded(String shaded) {
		this.shaded = shaded;
	}
	public String getLat() {
		return lat;
	}
	public void setLat(String lat) {
		this.lat = lat;
	}
	public String getLon() {
		return lon;
	}
	public void setLon(String lon) {
		this.lon = lon;
	}
	public String getRate() {
		return rate;
	}
	public void setRate(String rate) {
		this.rate = rate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getAvailibility() {
		return availibility;
	}
	public void setAvailibility(String availibility) {
		this.availibility = availibility;
	}
	@Override
	public String toString() {
		return "Parking [ownerName=" + ownerName + ", houseNo=" + houseNo + ", streetName=" + streetName + ", areaName="
				+ areaName + ", city=" + city + ", pinZip=" + pinZip + ", stateProvince=" + stateProvince + ", country="
				+ country + ", shaded=" + shaded + ", lat=" + lat + ", lon=" + lon + ", rate=" + rate + ", status="
				+ status + ", availibility=" + availibility + ", id=" + id + "]";
	}

	
	
}
