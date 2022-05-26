package tech.devselect.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tech.devselect.data.dto.CursoDTO;
import tech.devselect.service.CursoService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/curso")
public class CursoController {
	
	@Autowired
	CursoService cursoService;
	
	@GetMapping
	public List<CursoDTO> getAll() {
		return cursoService.getAll();
	}
	
	@PostMapping
	public ResponseEntity<CursoDTO> save(@RequestBody CursoDTO curso) {
		return new ResponseEntity<CursoDTO>(cursoService.save(curso), HttpStatus.CREATED);
	}

}
