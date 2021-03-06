package com.xp.productservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.xp.productservice.exception.ProductNotFoundException;
import com.xp.productservice.model.Product;
import com.xp.productservice.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RefreshScope
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@Value("${app.name}")
	private String name;
	
	@Value("${server.port}")
	private Integer port;
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		System.out.println("Name is : "+name+" and port is : "+port);
		System.out.println(name);
		return productService.getAllProducts();
	}
	
	@GetMapping("/products/{productId}")
	public Product getProductById(@PathVariable("productId") Integer productId){
	
		Product product= productService.getProductById(productId);
		if(product.getProductName()==null) {
			throw new ProductNotFoundException("No any product found");
		}
		return product;
	}
	
	@PostMapping("/products")
	public Product saveProduct(@Valid @RequestBody Product product) {
		return productService.saveProduct(product);
	}
	
	@DeleteMapping("/products/{productId}")
	public void deleteProduct(@PathVariable("productId") Integer productId) {
		productService.deleteProduct(productId);
	}
	
	@PutMapping("/products/{productId}")
	public Product updateProduct(@PathVariable("productId") Integer productId,@RequestBody Product product) {
		return productService.updateProduct(product, productId);
	}
	
}
