package tech.devselect.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import tech.devselect.data.entity.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer>{

	public List<Pessoa> findByCpf(String cpf);
	
}
