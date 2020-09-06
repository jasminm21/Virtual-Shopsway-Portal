package com.xp.productservice.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xp.productservice.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

}
