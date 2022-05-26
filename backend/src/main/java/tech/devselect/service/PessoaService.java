package tech.devselect.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tech.devselect.data.dto.PessoaDTO;
import tech.devselect.data.entity.Curso;
import tech.devselect.data.entity.Pessoa;
import tech.devselect.repository.CursoRepository;
import tech.devselect.repository.PessoaRepository;

@Service
public class PessoaService {

	@Autowired
	PessoaRepository pessoaRepository;
	
	@Autowired
	CursoRepository cursoRepository;

	
	public List<PessoaDTO> getAll(){
		List<Pessoa> pessoas = pessoaRepository.findAll();
		List<PessoaDTO> listaDTOs = new ArrayList<>();
		for (Pessoa pessoa : pessoas) {
			listaDTOs.add(pessoa.getDTO());
		}
		return listaDTOs;		
	}
	
	public List<PessoaDTO> getByCpf(String cpf) throws Exception{
		List<Pessoa> pessoas = pessoaRepository.findByCpf(cpf);
		List<PessoaDTO> listaDTOs = new ArrayList<>();
		for (Pessoa pessoa : pessoas) {
			listaDTOs.add(pessoa.getDTO());
		}
		return listaDTOs;
	}
	
	public PessoaDTO save (PessoaDTO pessoa) {
		Pessoa pess = pessoa.convertToEntity();
		List<String> caractPessoa = pess.getCaracteristicas();
		
		Curso curso = pess.getCurso();
		List<String> caractCurso = curso.getCaracteristicas();
		System.out.println(caractCurso);
		System.out.println(caractPessoa);
		
		int matches = 0;
		for (String stringCurso : caractCurso) {
			
			for (String stringPessoa : caractPessoa) {
				boolean match = stringCurso.equals(stringPessoa);
					if(match)
					matches++;
				}
			}
			
		pess.setMatches(matches);
		pessoaRepository.save(pess);
		
		PessoaDTO dto = pess.getDTO();
		return dto;
	}
	
}
