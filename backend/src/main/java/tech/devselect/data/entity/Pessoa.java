package tech.devselect.data.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import tech.devselect.data.dto.PessoaDTO;

@Entity
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"cpf"})})
public class Pessoa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_pessoa", updatable = false, nullable = false)
	private Long id;

	@Column(nullable = false)
	private String nome;

	@Column(length = 11, nullable = false)
	private String cpf;

	@Column(length = 7, nullable = false)
	private String rg;
	
	@Column(nullable = false)
	private Endereco endereco;

	@Column(length = 100, nullable = false)
	private String email;

	@Column(nullable = false, length = 13)
	private String telefone;

	@Column(name="dataNasc", columnDefinition="DATE")
	private LocalDate dataNasc;

	@Column(nullable = false, length = 13)
	private String genero;

	private int matches;

	@ManyToOne
	private Curso curso;

	@ElementCollection
	private List<String> caracteristicas = new ArrayList<>();

	public Pessoa() { }
	
	public Pessoa(Long id, String nome, String cpf, String rg, Endereco endereco, String email, String telefone,
			LocalDate dataNasc, String genero, int matches, Curso curso, List<String> caracteristicas) {
		super();
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.rg = rg;
		this.endereco = endereco;
		this.email = email;
		this.telefone = telefone;
		this.dataNasc = dataNasc;
		this.genero = genero;
		this.matches = matches;
		this.curso = curso;
		this.caracteristicas = caracteristicas;
	}

	public PessoaDTO getDTO() {
	return new PessoaDTO(
			getId(), getNome(), getCpf(), 
			getRg(), getEndereco().getDTO(), getEmail(), 
			getTelefone(), getDataNasc(), getGenero(),
			getMatches(),  getCurso().getDTO(), getCaracteristicas());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public LocalDate getDataNasc() {
		return dataNasc;
	}

	public void setDataNasc(LocalDate dataNasc) {
		this.dataNasc = dataNasc;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String generoPessoa) {
		this.genero = generoPessoa;
	}

	public int getMatches() {
		return matches;
	}

	public void setMatches(int matches) {
		this.matches = matches;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

	public List<String> getCaracteristicas() {
		return caracteristicas;
	}

	public void setCaracteristicas(List<String> caracteristicas) {
		this.caracteristicas = caracteristicas;
	}	

}