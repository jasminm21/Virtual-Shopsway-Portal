package com.xp.vspservice.model;

public class Product {

	private Integer productId;
	private String productName;
	private Double cost;
	private Double rating;
	
	public Product() {
		
	}
	public Product(Integer productId, String productName, Double cost, Double rating) {
		this.productId = productId;
		this.productName = productName;
		this.cost = cost;
		this.rating = rating;
	}
	public Integer getProductId() {
		return productId;
	}
	public void setProductId(Integer productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Double getCost() {
		return cost;
	}
	public void setCost(Double cost) {
		this.cost = cost;
	}
	public Double getRating() {
		return rating;
	}
	public void setRating(Double rating) {
		this.rating = rating;
	}
	
}
