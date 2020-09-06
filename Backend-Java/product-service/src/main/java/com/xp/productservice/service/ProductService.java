package com.xp.productservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xp.productservice.dao.ProductRepository;
import com.xp.productservice.model.Product;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	public Product saveProduct(Product product) {
		return  productRepository.save(product);
	}

	public void deleteProduct(Integer productId) {
		 productRepository.deleteById(productId);
	}

	public Product getProductById(Integer productId) {
		return productRepository.findById(productId).orElse(new Product());
	}

	public Product updateProduct(Product product, Integer productId) {
		Product prod=getProductById(productId);
		prod.setProductName(product.getProductName());
		prod.setCost(product.getCost());
		prod.setRating(product.getRating());
		
		return productRepository.save(prod);
	}
	
}
