package com.xp.productservice.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class Product {
	
	@Id
	@GeneratedValue
	private Integer productId;
	
	@Size(min = 2, message = "Name should have atleast 2 characters")
	private String productName;
	
	private Double cost;
	private Double rating;
	
	public Product() {
		super();
	}
	public Product(Integer productId,
			@Size(min = 2, message = "Name should have atleast 2 characters") String productName, Double cost,
			Double rating) {
		super();
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
