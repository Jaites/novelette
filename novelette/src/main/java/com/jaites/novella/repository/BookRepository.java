package com.jaites.novella.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jaites.novella.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{
}
