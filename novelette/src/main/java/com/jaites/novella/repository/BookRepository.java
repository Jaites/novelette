package com.jaites.novella.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jaites.novella.entity.Book;

@CrossOrigin(value="http://localhost:4200")
public interface BookRepository extends JpaRepository<Book, Long>{
}
