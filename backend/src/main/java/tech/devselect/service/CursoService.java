package tech.devselect.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tech.devselect.data.dto.CursoDTO;
import tech.devselect.data.entity.Curso;
import tech.devselect.repository.CursoRepository;

@Service
public class CursoService {
	
	@Autowired
	CursoRepository cursoRepository;
	
	public List<CursoDTO> getAll(){
		List<Curso> cursos = cursoRepository.findAll();
		List<CursoDTO> listaDTOs = new ArrayList<>();
		for (Curso curso : cursos) {
			listaDTOs.add(curso.getDTO());
		}
		return listaDTOs;		
	}
	
	
	public CursoDTO save (CursoDTO curso) {
		Curso cursoEntidade = cursoRepository.save(curso.convertToEntity());
		return cursoEntidade.getDTO();
	}

}
