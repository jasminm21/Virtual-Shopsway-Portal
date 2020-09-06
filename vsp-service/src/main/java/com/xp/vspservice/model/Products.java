package com.xp.vspservice.model;

import java.util.List;

public class Products {
	
	List<Product> productList;

	public Products() {
	}

	public Products(List<Product> productList) {
		this.productList = productList;
	}

	public List<Product> getProductList() {
		return productList;
	}

	public void setProductList(List<Product> productList) {
		this.productList = productList;
	}
}
